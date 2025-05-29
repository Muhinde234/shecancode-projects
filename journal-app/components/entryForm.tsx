// components/EntryForm.tsx
import { useState, FormEvent } from 'react';
import { EntryFormProps } from '@/types';

export default function EntryForm({ onSubmit }: EntryFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    const success = await onSubmit(title, content);
    
    if (success) {
      setTitle('');
      setContent('');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="entry-form">
      <h2>New Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entry title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind today?"
            rows={5}
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Saving...' : 'Save Entry'}
        </button>
      </form>
    </div>
  );
}