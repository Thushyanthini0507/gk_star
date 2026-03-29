"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { title: "Dashboard", icon: "fas fa-th-large", path: "/admin/dashboard" },
    { title: "Services", icon: "fas fa-cut", path: "/admin/services" },
    { title: "Portfolio Items", icon: "fas fa-images", path: "/admin/items" },
    { title: "Messages", icon: "fas fa-envelope", path: "/admin/messages" },
    { title: "Settings", icon: "fas fa-cog", path: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-off-white text-foreground overflow-hidden selection:bg-primary-gold/20">
      {/* Sidebar */}
      <aside className={`bg-white border-r border-border-subtle transition-all duration-500 ease-in-out z-30 shadow-premium ${isSidebarOpen ? 'w-80' : 'w-24'}`}>
        <div className="p-8 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-5 mb-16 overflow-hidden">
            <div className="w-12 h-12 bg-foreground rounded-2xl flex-shrink-0 flex items-center justify-center text-background font-bold text-xl shadow-premium">
              GK
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-bold tracking-tighter text-lg whitespace-nowrap font-heading">GK STAR</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary-gold -mt-1">Control Panel</span>
              </div>
            )}
          </div>

          {/* Menu */}
          <nav className="flex-grow space-y-3">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={i} 
                  href={item.path}
                  className={`flex items-center gap-6 p-4 rounded-2xl transition-all group overflow-hidden ${
                    isActive 
                      ? "bg-off-white text-primary-gold shadow-sm border border-border-subtle" 
                      : "text-muted-foreground hover:bg-off-white hover:text-foreground"
                  }`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center text-lg shrink-0 rounded-xl transition-colors ${isActive ? 'bg-primary-gold text-foreground shadow-sm' : 'bg-transparent'}`}>
                    <i className={item.icon}></i>
                  </div>
                  {isSidebarOpen && (
                    <span className="font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">{item.title}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile / Logout */}
          <div className="pt-8 border-t border-border-subtle overflow-hidden">
            <button 
              onClick={() => router.push("/admin")}
              className="flex items-center gap-6 p-4 w-full rounded-2xl hover:bg-off-white transition-all text-muted-foreground hover:text-foreground group"
            >
              <div className="w-10 h-10 flex items-center justify-center text-lg bg-off-white rounded-xl group-hover:bg-primary-gold group-hover:text-foreground transition-all">
                 <i className="fas fa-sign-out-alt"></i>
              </div>
              {isSidebarOpen && (
                <span className="font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative overflow-y-auto">
        {/* Header */}
        <header className="h-24 bg-white/80 backdrop-blur-xl border-b border-border-subtle sticky top-0 z-20 px-10 flex items-center justify-between shadow-sm">
           <button 
             onClick={() => setSidebarOpen(!isSidebarOpen)}
             className="w-10 h-10 border border-border-subtle bg-off-white rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary-gold hover:border-primary-gold transition-all"
           >
             <i className={`fas ${isSidebarOpen ? 'fa-indent' : 'fa-outdent'}`}></i>
           </button>

           <div className="flex items-center gap-8">
             <div className="text-right hidden md:block">
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-gold">Universal Admin</p>
               <p className="text-sm font-bold text-foreground font-heading">GK Star Master</p>
             </div>
             <div className="w-12 h-12 bg-off-white rounded-full border border-border-subtle p-1 overflow-hidden shadow-sm">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" 
                  alt="Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
             </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="p-8 md:p-12 animate-in fade-in duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
