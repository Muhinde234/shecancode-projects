import { db } from "./config";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  where,
  Timestamp
} from "firebase/firestore";

export interface JournalEntry {
  id?: string;
  title: string;
  content: string;
  createdAt: Date | Timestamp;
  userId: string;
}

export const addEntry = async (entry: Omit<JournalEntry, "id">): Promise<string> => {
  const docRef = await addDoc(collection(db, "entries"), entry);
  return docRef.id;
};

export const getEntries = async (userId: string): Promise<JournalEntry[]> => {
  const q = query(collection(db, "entries"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as JournalEntry[];
};

export const deleteEntry = async (entryId: string): Promise<void> => {
  await deleteDoc(doc(db, "entries", entryId));
};