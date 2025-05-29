
export interface JournalEntry {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface EntryFormProps {
  entries: JournalEntry[];
  onDelete: (id: string) => Promise<void>;
  onSubmit: (title: string, content: string) => Promise<boolean>;
}

export interface EntryListProps {
  entries: JournalEntry[];
  onDelete: (id: string) => Promise<void>;
}

export interface InsightsPanelProps {
  entries: JournalEntry[];
}