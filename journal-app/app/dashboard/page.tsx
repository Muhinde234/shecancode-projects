// app/(protected)/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../lib/auth';
import EntryForm from '../../components/entryForm';
import EntryList from '../../components/entryList';
import InsightsPanel from '../../components/insightsPanel';
import { JournalEntry } from '../../types';
import styles from '@/styles/Dashboard.module.css';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'journal' | 'insights'>('journal');

  useEffect(() => {
    if (user) fetchEntries();
  }, [user]);

  const fetchEntries = async (): Promise<void> => {
    try {
      const token = await user?.getIdToken();
      if (!token) return;
      
      const res = await fetch('/api/entries', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (!res.ok) throw new Error('Failed to fetch entries');
      
      const data: JournalEntry[] = await res.json();
      setEntries(data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const addEntry = async (title: string, content: string): Promise<boolean> => {
    try {
      const token = await user?.getIdToken();
      if (!token) return false;
      
      const res = await fetch('/api/entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });
      
      if (res.ok) {
        fetchEntries();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding entry:', error);
      return false;
    }
  };

  const deleteEntry = async (id: string): Promise<void> => {
    try {
      const token = await user?.getIdToken();
      if (!token) return;
      
      const res = await fetch(`/api/entries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.ok) {
        setEntries(entries.filter(entry => entry.id !== id));
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading your journal...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Dashboard UI implementation */}
      <EntryForm onSubmit={addEntry} />
      <EntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
}