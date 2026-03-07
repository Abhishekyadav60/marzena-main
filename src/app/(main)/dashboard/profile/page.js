"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking authentication...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAEEE3]">

      <h1 className="text-3xl font-serif mb-4">
        Profile Page
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 text-center">

        <p className="mb-6 text-green-600">
          You are successfully logged in 
        </p>

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}