import { adminFirestore, adminAuth } from './firebase-admin';
import { JournalEntry } from '../types';

export async function getEntriesByUserToken(token: string): Promise<JournalEntry[]> {
  const decodedToken = await adminAuth.verifyIdToken(token);
  const uid = decodedToken.uid;

  const entriesRef = adminFirestore
    .collection('users')
    .doc(uid)
    .collection('entries')
    .orderBy('createdAt', 'desc');

  const snapshot = await entriesRef.get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
    content: doc.data().content,
    createdAt: doc.data().createdAt.toDate().toISOString(),
  }));
}

export async function addEntryByUserToken(token: string, title: string, content: string): Promise<JournalEntry> {
  const decodedToken = await adminAuth.verifyIdToken(token);
  const uid = decodedToken.uid;

  const newEntry = {
    title,
    content,
    createdAt: new Date(),
  };

  const docRef = await adminFirestore
    .collection('users')
    .doc(uid)
    .collection('entries')
    .add(newEntry);

  return {
    id: docRef.id,
    ...newEntry,
    createdAt: newEntry.createdAt.toISOString(),
  };
}
