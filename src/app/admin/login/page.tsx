"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-10 border border-[#c5c1b9] shadow-sm">
      <h2 className="font-georgia text-3xl mb-2 text-[#171714]">Admin Login</h2>
      <p className="text-[#6B6861] text-sm mb-8 font-sans">
        Enter your password to access the dashboard.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B6861] mb-2 font-sans">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#c5c1b9] p-3 text-sm font-sans focus:outline-none focus:border-black transition-colors bg-transparent"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm font-sans">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white p-3 font-semibold text-sm hover:bg-gray-800 transition-colors disabled:bg-gray-400 font-sans"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
