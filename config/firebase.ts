// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage, getDownloadURL, listAll, ref } from "firebase/storage";

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

export async function getIcons(category, style) {
  const icons = [];

  const fileList = await listAll(ref(storage, `icons/${category}/${style}`));
  console.log(fileList);

  await Promise.all(
    fileList.items.map(async (item) => {
      const url = await getDownloadURL(item);
      console.log(item);
      icons.push({
        name: item.name,
        url: url,
        style: style,
        category: category,
      });
    })
  );

  icons.sort((a, b) => a.name.localeCompare(b.name));

  return icons;
}

async function getIconsByName(fileName) {
  const storageRef = ref(storage, `icons/${fileName}`);

  const file = await getDownloadURL(storageRef);

  return { url: file, name: fileName };
}

export { app };
export default db;
