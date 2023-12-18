import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

const cache = {};

export const getIconsFromDB = async (category, style) => {
  // Generate a unique cache key based on category and style
  const cacheKey = `${category}_${style}`;

  // Check if data is already in the cache
  if (cache[cacheKey]) {
    console.log("Fetching icons from cache:", cacheKey);
    return cache[cacheKey];
  }

  const icons = [];

  try {
    // Get a list of files from Supabase Storage
    const { data: fileList, error } = await supabase.storage
      .from(`icons`)
      .list(`${category}/${style}`, {
        limit: 500,
        sortBy: {
          column: "name",
          order: "asc",
        },
      });

    if (error) {
      console.error("Error fetching file list from Supabase Storage:", error);
      return [];
    }

    // Process each file in the fileList
    for (const item of fileList) {
      const { data: publicUrlData, error: publicUrlError } =
        await supabase.storage
          .from(`icons`)
          .getPublicUrl(`${category}/${style}/${item.name}`);

      if (publicUrlError) {
        console.error("Error fetching public URL:", publicUrlError);
      } else {
        const timeCreated = new Date(item.created_at).getTime();
        const now = Date.now();
        const isNew = now - timeCreated < 7 * 24 * 60 * 60 * 1000;

        icons.push({
          name: item.name,
          url: publicUrlData.publicUrl,
          style: style,
          category: category,
          isNew: isNew,
        });
      }
    }

    cache[cacheKey] = icons;
  } catch (error) {
    console.error("Error fetching icons:", error);
  }

  // console.log("ICONS: ", icons);
  return icons;
};

export default supabase;
