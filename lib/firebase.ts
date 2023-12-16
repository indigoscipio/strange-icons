// lib/firebase.js
import db from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchIconData = async () => {
  const iconsCollection = collection(db, "icons");
  const iconsSnapshot = await getDocs(iconsCollection);
  const iconData = iconsSnapshot.docs.map((doc) => doc.data());
  return iconData;
};
