"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../lib/entryService";
import { useRouter } from "next/navigation";
import JournalEntryCard from "@/components/JournalEntryCard";
import EntryForm from "@/components/EntryForm";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.push("/login");
      } else {
        setUser(firebaseUser);
        const res = await fetch("/api/entries");
        const data = await res.json();
        setEntries(data.entries);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleDelete = async (id: string) => {
    await fetch(`/api/entries/${id}`, { method: "DELETE" });
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">My Journal</h1>
        <button onClick={() => signOut(auth)} className="text-sm underline">Sign Out</button>
      </div>

      <EntryForm onNewEntry={(newEntry) => setEntries([newEntry, ...entries])} />

      <div className="grid gap-4 mt-4">
        {entries.map((entry) => (
          <JournalEntryCard key={entry.id} entry={entry} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
