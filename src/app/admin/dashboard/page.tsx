"use client";

export default function DashboardStats() {
  const stats = [
    { label: "Total Services", value: "10", icon: "fas fa-concierge-bell", trend: "+2.5%" },
    { label: "Portfolio Items", value: "248", icon: "fas fa-images", trend: "+12.1%" },
    { label: "New Messages", value: "12", icon: "fas fa-envelope", trend: "Priority" },
    { label: "Site Visitors", value: "1.2k", icon: "fas fa-chart-line", trend: "+8.4%" },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-3 text-foreground font-heading">
            Dashboard <span className="text-primary-gold italic font-heading">Overview</span>
          </h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Performance Metrics • Real-time Data</p>
        </div>
        <div className="flex gap-4">
           <button className="px-6 py-3 bg-white border border-border-subtle rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm hover:border-primary-gold transition-all">Export Report</button>
           <button className="px-6 py-3 bg-foreground text-background rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-premium hover:bg-primary-gold hover:text-foreground transition-all">Refresh</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-10 group relative overflow-hidden h-full flex flex-col justify-between">
            <div className="flex items-center justify-between mb-10 relative z-10">
               <div className="w-14 h-14 bg-off-white rounded-2xl flex items-center justify-center text-muted-foreground group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500 shadow-sm border border-border-subtle">
                  <i className={stat.icon}></i>
               </div>
               <span className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em] bg-primary-gold/5 px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div className="relative z-10">
               <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2 opacity-60">{stat.label}</p>
               <h3 className="text-4xl font-bold tracking-tighter text-foreground font-heading">{stat.value}</h3>
            </div>
            {/* Subtle Gradient background */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-gold/[0.02] rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        ))}
      </div>

      {/* Quick Actions / Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-border-subtle p-10 shadow-premium relative overflow-hidden group">
           <div className="flex items-center justify-between mb-10 relative z-10">
              <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-foreground font-heading border-l-4 border-primary-gold pl-5">Recent Catalog Updates</h2>
              <button className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:underline transition-all">View All</button>
           </div>
           
           <div className="space-y-6 relative z-10">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-6 p-5 hover:bg-off-white rounded-[2rem] transition-all border border-transparent hover:border-border-subtle shadow-sm group/item bg-white">
                   <div className="w-16 h-16 bg-off-white rounded-2xl overflow-hidden flex-shrink-0 border border-border-subtle shadow-sm group-hover/item:scale-105 transition-transform duration-500">
                      <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=200`} alt="Recent" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-grow">
                      <h4 className="font-bold text-sm mb-1 text-foreground">Bridal Aari Design - New Model</h4>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">Added to Aari Work Division • 2h ago</p>
                   </div>
                   <div className="text-right">
                      <span className="px-4 py-2 bg-foreground text-background text-[9px] rounded-full font-bold uppercase tracking-[0.2em] shadow-sm group-hover/item:bg-primary-gold group-hover/item:text-foreground transition-all">Live</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-border-subtle p-10 shadow-premium flex flex-col">
           <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-foreground font-heading mb-10 border-l-4 border-primary-gold pl-5">System Health</h2>
           <div className="space-y-10 flex-grow">
              <div className="space-y-4">
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="text-muted-foreground">Database Pulse</span>
                    <span className="text-primary-gold">Optimized (12%)</span>
                 </div>
                 <div className="h-2 bg-off-white rounded-full overflow-hidden border border-border-subtle">
                    <div className="h-full bg-foreground w-[12%] rounded-full shadow-sm group shadow-primary-gold/20 animate-pulse"></div>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="text-muted-foreground">Vault Storage</span>
                    <span className="text-foreground/80">4.2GB / 10GB</span>
                 </div>
                 <div className="h-2 bg-off-white rounded-full overflow-hidden border border-border-subtle">
                    <div className="h-full bg-primary-gold w-[42%] rounded-full shadow-sm"></div>
                 </div>
              </div>
              <div className="pt-10 mt-auto">
                 <div className="bg-off-white border border-border-subtle p-8 rounded-[2rem] text-center shadow-inner relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary-gold"></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-gold mb-3">Securely Synced</p>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium opacity-70 italic">Cloud Infrastructure: Operational</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

