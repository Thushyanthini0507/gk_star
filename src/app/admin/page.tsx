"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Placeholder login logic
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
    <div className="min-h-screen flex items-center justify-center p-6 bg-off-white selection:bg-primary-gold/20">
      <div className="w-full max-w-lg bg-white rounded-[3rem] border border-border-subtle p-12 md:p-16 shadow-premium relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-gold/[0.03] rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-1000"></div>
        
        <div className="text-center mb-12 relative z-10">
          <div className="inline-block px-5 py-2 rounded-full border border-primary-gold/20 bg-primary-gold/[0.02] text-primary-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Secure Entry
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-foreground mb-3 font-heading">
            GK STAR <span className="text-primary-gold italic font-heading lowercase tracking-normal">admin</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium opacity-70 italic">Universal Control Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8 relative z-10">
          <div className="space-y-3">
            <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-2 ml-2">Authorized Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-off-white border border-border-subtle rounded-2xl px-8 py-5 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-muted-foreground/30 shadow-sm"
              placeholder="admin@gkstar.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-2 ml-2">Access Key</label>
            <input 
              type="password" 
              required
              className="w-full bg-off-white border border-border-subtle rounded-2xl px-8 py-5 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-muted-foreground/30 shadow-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-foreground text-background font-bold uppercase tracking-[0.4em] py-6 rounded-[2rem] hover:bg-primary-gold hover:text-foreground transition-all transform active:scale-[0.98] disabled:opacity-50 shadow-premium text-xs"
            >
              {loading ? "Verifying..." : "Enter Command Center"}
            </button>
          </div>
        </form>

        <div className="mt-14 text-center border-t border-border-subtle pt-8">
           <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary-gold transition-colors flex items-center justify-center gap-3 group">
             <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> 
             Return to Public Terminal
           </Link>
        </div>
      </div>
    </div>
  );
}
