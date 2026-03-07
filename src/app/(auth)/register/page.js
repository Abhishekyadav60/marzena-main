"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAEEE3] px-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

        <h2 className="text-3xl font-serif text-center text-[#2F2F2F] mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Join Marzena Beauty
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8B4B8] cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-[#d89aa0] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => !loading && router.push("/login")}
            className="text-[#E8B4B8] cursor-pointer font-medium"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}