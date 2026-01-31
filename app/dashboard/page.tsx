"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login"); // 🔐 redirect if not logged in
      } else {
        setUserEmail(user.email);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        Checking session...
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="max-w-xl w-full text-center">

        <h1 className="text-3xl font-semibold text-white mb-3">
          Welcome back 👋
        </h1>

        <p className="text-slate-400 mb-10">
          Logged in as{" "}
          <span className="text-emerald-400 font-medium">
            {userEmail}
          </span>
        </p>

        <Link
          href="/subjects"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-xl
            bg-emerald-600 text-white
            text-lg font-semibold
            transition-all duration-300
            hover:bg-emerald-700
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          🚀 Start Learning
        </Link>

        <p className="mt-6 text-sm text-slate-500">
          Choose subject → chapter → topic → revise fast
        </p>
      </div>
    </main>
  );
}