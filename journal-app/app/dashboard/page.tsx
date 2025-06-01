"use client";

import { useState } from "react";
import EntryForm from "../../components/entryForm";
import EntryList from "../../components/entryList";
import JournalLayout from "../../components/journalLayout";

export default function DashboardPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const handleEntryAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };
  
  return (
    <JournalLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Journal</h1>
          <p className="text-gray-600">
            Write down your thoughts, ideas, and reflections. Your journal is private and secure.
          </p>
        </div>
        
        <EntryForm onEntryAdded={handleEntryAdded} />
        <EntryList key={refreshTrigger} />
      </div>
    </JournalLayout>
  );
}