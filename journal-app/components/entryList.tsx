// components/EntryList.tsx
import { JournalEntry } from '../types/index';
import { useState } from 'react';


interface EntryListProps {
  entries: JournalEntry[];
  onDelete: (id: string) => Promise<void>;
}

export default function EntryList({ entries, onDelete }: EntryListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await onDelete(id);
    } finally {
      setDeletingId(null);
    }
  };

  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center rounded-lg bg-gray-50 border border-gray-100">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">No entries yet</h3>
        <p className="text-gray-600 max-w-md">
          Your journal is waiting for your thoughts. Write your first entry!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Journal Entries</h2>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div 
            key={entry.id} 
            className={`bg-white rounded-lg shadow transition-all overflow-hidden ${
              expandedId === entry.id 
                ? 'ring-2 ring-blue-500 shadow-md' 
                : 'hover:shadow-md hover:ring-1 hover:ring-blue-200'
            }`}
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
            >
              <h3 className="font-semibold text-gray-800 truncate mr-2">
                {entry.title}
              </h3>
             
            </div>
            
            {expandedId === entry.id && (
              <div className="border-t border-gray-100 p-4 animate-fadeIn">
                <div className="prose prose-slate max-w-none mb-4">
                  {entry.content.split('\n').map((para, i) => (
                    <p key={i} className="mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="px-4 py-2 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
                  >
                    {deletingId === entry.id ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Deleting...
                      </>
                    ) : 'Delete Entry'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}