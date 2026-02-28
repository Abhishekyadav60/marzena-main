"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const { status } = useSession();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  //  If already logged in 
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });

    if (!res?.error) {
      toast.success("User Login Successful", {
        style: {
          background: "#E8B4B8",
          color: "#fff",
        },
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    } else {
      toast.error("Invalid email or password");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Checking session...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAEEE3] px-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-serif text-center text-[#2F2F2F] mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to your Marzena account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            disabled={loading}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8B4B8] cursor-pointer text-white py-3 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => !loading && router.push("/register")}
            className="text-[#E8B4B8] cursor-pointer font-medium"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}