"use client";

import { useState } from "react";
import { login, signup, googleLogin } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Navbar from "@/components/home/Navbar";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }

      router.push("/"); // ✅ correct redirect
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await googleLogin();
      router.push("/"); // ✅ same redirect
    } catch (err: any) {
      setError(err.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar stays OUTSIDE centered content */}
      

      <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-sm bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
          
          <h1 className="text-xl font-semibold mb-4 text-white text-center">
            {isSignup ? "Create Account" : "Login"}
          </h1>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-slate-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 rounded bg-slate-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />

          {error && (
            <p className="text-red-400 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          {/* Email Login Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition py-2 rounded-lg mt-2 text-white font-medium"
          >
            {loading
              ? "Please wait..."
              : isSignup
              ? "Sign Up"
              : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px bg-slate-700 flex-1" />
            <span className="text-slate-400 text-sm">OR</span>
            <div className="h-px bg-slate-700 flex-1" />
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full bg-white text-slate-900 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-100 disabled:opacity-60 transition font-medium"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Toggle */}
          <p
            className="text-sm text-center mt-4 cursor-pointer text-slate-400 hover:text-white transition"
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
          >
            {isSignup
              ? "Already have an account? Login"
              : "New here? Create an account"}
          </p>
        </div>
      </main>
    </>
  );
}