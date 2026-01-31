// lib/firestore.ts
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";


export async function getSubjects() {
  const q = query(collection(db, "subjects"), orderBy("order"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
/* ---------------- CHAPTERS ---------------- */
export async function getChapters(subjectId: string) {
  if (!subjectId) return [];

  const q = query(
    collection(db, "chapters"),
    where("subjectId", "==", subjectId),
    orderBy("order", "asc")
  );

  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    id: doc.data().id,   // ✅ USE CUSTOM ID ("percentage")
    name: doc.data().name,
  }));
}


/* TOPICS */
/* TOPICS */
export async function getTopics(chapterId: string) {
  // console.log("🔥 getTopics called with:", chapterId);

  if (!chapterId) return [];

  const q = query(
    collection(db, "topics"),
    where("chapterId", "==", chapterId),
    orderBy("order", "asc")
  );

  const snap = await getDocs(q);

  // console.log("🔥 topics docs size:", snap.size);

  snap.docs.forEach(d => {
    // console.log("🔥 topic doc:", d.data());
  });

  return snap.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
    duration: doc.data().duration,
    isPaid: doc.data().isPaid,
    type: doc.data().type,
    order: doc.data().order,
  }));
}
