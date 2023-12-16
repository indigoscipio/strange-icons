// iconService.js
import { getIcons } from "../config/firebase";

const fetchIcons = async (
  selectedCategory,
  selectedStyle,
  setIconData,
  setLoading
) => {
  try {
    const firebaseStorageIcons = await getIcons(
      selectedCategory,
      selectedStyle
    );
    setIconData(firebaseStorageIcons);
  } catch (error) {
    console.error("Error fetching icons:", error);
  } finally {
    setLoading(false); // Set loading to false after fetch
  }
};

export { fetchIcons };
