"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { Trash2, Edit } from "lucide-react";
import  Button  from "../components/ui/button";
import { deleteEntry, getEntries, JournalEntry } from "@/lib/firebase/firestore";
import { getCurrentUser } from "../lib/firebase/auth";

export default function EntryList() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  
  const fetchEntries = async () => {
    setLoading(true);
    try {
      const user = getCurrentUser();
      if (!user) return;
      
      const entriesData = await getEntries(user.uid);
      // Sort entries by date (newest first)
      entriesData.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setEntries(entriesData);
    } catch (error) {
      toast.error("Failed to load entries");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchEntries();
  }, []);
  
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    
    try {
      await deleteEntry(id);
      toast.success("Entry deleted");
      fetchEntries();
    } catch (error) {
      toast.error("Failed to delete entry");
      console.error(error);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (entries.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-500 text-lg">No journal entries yet.</p>
        <p className="text-gray-400 mt-2">Start by adding your first entry!</p>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Journal Entries</h2>
      <div className="space-y-6">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{entry.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {format(new Date(entry.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleDelete(entry.id!)}
                  className="text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700">
                {entry.content.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}