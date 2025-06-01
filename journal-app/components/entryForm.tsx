"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

import { addEntry } from "@/lib/firebase/firestore";
import { getCurrentUser } from "../lib/firebase/auth";
import Button from "./ui/button";

export default function EntryForm({ onEntryAdded }: { onEntryAdded: () => void }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const user = getCurrentUser();
      if (!user) {
        toast.error("You must be logged in to add an entry");
        return;
      }
      
      await addEntry({
        title,
        content,
        createdAt: new Date(),
        userId: user.uid
      });
      
      toast.success("Entry added successfully");
      setTitle("");
      setContent("");
      onEntryAdded();
    } catch (error) {
      toast.error("Failed to add entry");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Give your entry a title"
          />
        </div>
        
        
        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
            placeholder="Write your thoughts here..."
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Clear
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save Entry"}
          </Button>
        </div>
      </form>
    </div>
  );
}