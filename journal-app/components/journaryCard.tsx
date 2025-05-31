export default function JournalEntryCard({ entry, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="font-bold">{entry.title}</h2>
      <p>{entry.body}</p>
      <p className="text-sm text-gray-500">{new Date(entry.createdAt).toLocaleString()}</p>
      <button onClick={() => onDelete(entry.id)} className="text-red-500 text-sm mt-2">Delete</button>
    </div>
  );
}
