"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCurrentUser } from "../lib/firebase/auth";
import { auth } from "../lib/firebase/config";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        router.push("/login");
      }
    });
    
    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
}