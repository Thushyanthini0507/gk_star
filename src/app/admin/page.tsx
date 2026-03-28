"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Placeholder login logic until Supabase is configured
    setTimeout(() => {
      setLoading(false);
      if (email === "admin@gkstar.com" && password === "admin123") {
        router.push("/admin/dashboard");
      } else {
        alert("Invalid credentials. (Hint: admin@gkstar.com / admin123)");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#000000]">
      <div className="w-full max-w-md bg-[#111111] rounded-[2.5rem] border border-white/5 p-10 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-color/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 rounded-full border border-primary-color/20 text-primary-color text-[10px] font-black uppercase tracking-widest mb-6">
            Secure Access
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            GK STAR <span className="text-primary-color">ADMIN</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light">Enter your credentials to manage the platform.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 ml-4">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-colors"
              placeholder="admin@gkstar.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 ml-4">Password</label>
            <input 
              type="password" 
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-colors"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary-color text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50 mt-4"
          >
            {loading ? "Authenticating..." : "Login to Portal"}
          </button>
        </form>

        <div className="mt-10 text-center">
           <Link href="/" className="text-xs text-neutral-600 hover:text-white transition-colors">← Back to Website</Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
