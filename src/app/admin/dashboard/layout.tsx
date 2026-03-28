"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { title: "Dashboard", icon: "fas fa-th-large", path: "/admin/dashboard" },
    { title: "Services", icon: "fas fa-cut", path: "/admin/services" },
    { title: "Portfolio Items", icon: "fas fa-images", path: "/admin/items" },
    { title: "Messages", icon: "fas fa-envelope", path: "/admin/messages" },
    { title: "Settings", icon: "fas fa-cog", path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-[#0a0a0a] border-r border-white/5 transition-all duration-500 ease-in-out z-30 ${isSidebarOpen ? 'w-80' : 'w-24'}`}>
        <div className="p-10 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-16 overflow-hidden">
            <div className="w-12 h-12 bg-primary-color rounded-2xl flex-shrink-0 flex items-center justify-center text-black font-black text-xl">
              GK
            </div>
            {isSidebarOpen && (
              <span className="font-black tracking-tighter text-xl whitespace-nowrap">ADMIN PORTAL</span>
            )}
          </div>

          {/* Menu */}
          <nav className="flex-grow space-y-4">
            {menuItems.map((item, i) => (
              <Link 
                key={i} 
                href={item.path}
                className="flex items-center gap-6 p-4 rounded-2xl hover:bg-primary-color/10 hover:text-primary-color transition-all group overflow-hidden"
              >
                <div className="w-10 h-10 flex items-center justify-center text-lg">
                  <i className={item.icon}></i>
                </div>
                {isSidebarOpen && (
                  <span className="font-black text-[10px] uppercase tracking-widest whitespace-nowrap">{item.title}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* User Profile / Logout */}
          <div className="pt-10 border-t border-white/5 overflow-hidden">
            <button 
              onClick={() => router.push("/admin")}
              className="flex items-center gap-6 p-4 w-full rounded-2xl hover:bg-neutral-900 transition-all text-neutral-500 hover:text-white"
            >
              <div className="w-10 h-10 flex items-center justify-center text-lg">
                 <i className="fas fa-sign-out-alt"></i>
              </div>
              {isSidebarOpen && (
                <span className="font-black text-[10px] uppercase tracking-widest whitespace-nowrap">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative overflow-y-auto">
        {/* Header */}
        <header className="h-24 bg-black/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-20 px-10 flex items-center justify-between">
           <button 
             onClick={() => setSidebarOpen(!isSidebarOpen)}
             className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-color"
           >
             <i className={`fas ${isSidebarOpen ? 'fa-indent' : 'fa-outdent'}`}></i>
           </button>

           <div className="flex items-center gap-6">
             <div className="text-right hidden md:block">
               <p className="text-[10px] font-black uppercase tracking-widest text-primary-color">Welcome Back</p>
               <p className="text-sm font-light">GK Star Master</p>
             </div>
             <div className="w-12 h-12 bg-neutral-800 rounded-full border border-white/10 p-1 overflow-hidden">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" 
                  alt="Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
             </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
