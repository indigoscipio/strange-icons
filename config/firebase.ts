// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgF6IwWQ_GwnLCA6ppQblEbA7fyHUT3Yo",
  authDomain: "strange-icons.firebaseapp.com",
  projectId: "strange-icons",
  storageBucket: "strange-icons.appspot.com",
  messagingSenderId: "732857856237",
  appId: "1:732857856237:web:85e3023e62321c53bedce4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const cache = {};

export async function getIcons(category, style) {
  // const cacheKey = `${category}_${style}`;

  // // Check if data is in the cache
  // if (cache[cacheKey]) {
  //   return cache[cacheKey];
  // }

  const icons = [];

  const fileList = await listAll(ref(storage, `icons/${category}/${style}`));
  // console.log(fileList);

  await Promise.all(
    fileList.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const metadata = await getMetadata(item);

      const timeCreated = new Date(metadata.timeCreated).getTime();
      const now = Date.now();
      const isNew = now - timeCreated < 7 * 24 * 60 * 60 * 1000; // Assume icons added in the last 7 days as "new"

      icons.push({
        name: item.name,
        url: url,
        style: style,
        category: category,
        isNew: isNew,
      });
    })
  );

  icons.sort((a, b) => a.name.localeCompare(b.name));
  // cache[cacheKey] = icons;

  return icons;
}

export { app };
export default db;
