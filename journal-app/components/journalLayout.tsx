"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "../lib/firebase/auth";
import { LayoutDashboard, LogOut } from "lucide-react";
import Button from "./ui/button";

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  const handleLogout = async () => {
    await logoutUser();
    router.push("/login");
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="text-blue-600" size={24} />
            <h1 className="text-xl font-bold text-gray-800">Personal Journal</h1>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center space-x-1"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
          
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}