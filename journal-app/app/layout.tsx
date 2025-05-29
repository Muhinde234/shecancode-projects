// app/layout.tsx
import type { Metadata } from 'next';
import { AuthProvider } from '../lib/auth';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dositha Journal',
  description: ' personal journal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}