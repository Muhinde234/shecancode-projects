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
 signInWithEmailPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Keep only ONE EntryFormProps interface like this if EntryForm only uses onSubmit:
export interface EntryFormProps {
  onSubmit: (title: string, content: string) => Promise<boolean>;
}

// EntryListProps is fine
export interface EntryListProps {
  entries: JournalEntry[];
  onDelete: (id: string) => Promise<void>;
}

export interface InsightsPanelProps {
  entries: JournalEntry[];
}
