// app/api/entries/route.ts
import { adminFirestore, adminAuth } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';
import { JournalEntry } from '../../../types/index';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decodedToken = await adminAuth.verifyIdToken(token);
    const uid = decodedToken.uid;
    
    const entriesRef = adminFirestore
      .collection('users')
      .doc(uid)
      .collection('entries')
      .orderBy('createdAt', 'desc');
    
    const snapshot = await entriesRef.get();
    const entries: JournalEntry[] = snapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
      createdAt: doc.data().createdAt.toDate().toISOString()
    }));
    
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const decodedToken = await adminAuth.verifyIdToken(token);
    const uid = decodedToken.uid;
    const { title, content } = await request.json();
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }
    
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
    
    const responseEntry: JournalEntry = {
      id: docRef.id,
      ...newEntry,
      createdAt: newEntry.createdAt.toISOString()
    };
    
    return NextResponse.json(responseEntry, { status: 201 });
  } catch (error) {
    console.error('Error creating entry:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}