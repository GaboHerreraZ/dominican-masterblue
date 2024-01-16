"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigation = useRouter();

  const [isUserValid, setUserValid] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUserValid(true);
      } else {
        navigation.push("/login");
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return <>{isUserValid && children}</>;
};
