"use client";

export default function DashboardStats() {
  const stats = [
    { label: "Total Services", value: "10", icon: "fas fa-concierge-bell", color: "from-amber-500 to-amber-700" },
    { label: "Portfolio Items", value: "248", icon: "fas fa-images", color: "from-blue-500 to-blue-700" },
    { label: "New Messages", value: "12", icon: "fas fa-envelope", color: "from-emerald-500 to-emerald-700" },
    { label: "Site Visitors", value: "1.2k", icon: "fas fa-chart-line", color: "from-rose-500 to-rose-700" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Dashboard <span className="text-neutral-700 font-light italic">Overview</span>
        </h1>
        <p className="text-neutral-500 text-sm font-light uppercase tracking-widest tracking-widest">Performance Metrics for GK Star Multi Services</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111111] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity`}></div>
            <div className="flex items-center justify-between mb-8">
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                  <i className={stat.icon}></i>
               </div>
               <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.2em]">+12.5%</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-neutral-600 mb-2">{stat.label}</p>
            <h3 className="text-4xl font-black">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Quick Actions / Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#111111] rounded-[2rem] border border-white/5 p-10">
           <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-black uppercase tracking-widest">Recent Portfolio Updates</h2>
              <button className="text-primary-color text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
           </div>
           
           <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-6 p-4 hover:bg-white/5 rounded-[1.5rem] transition-all border border-transparent hover:border-white/5">
                   <div className="w-16 h-16 bg-neutral-800 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=200`} alt="Recent" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-grow">
                      <h4 className="font-black text-sm mb-1">Bridal Aari Design - New Model</h4>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest">Added to Aari Work Services • 2h ago</p>
                   </div>
                   <div className="text-right">
                      <span className="px-3 py-1 bg-primary-color/10 text-primary-color text-[10px] rounded-full font-black uppercase tracking-widest">Live</span>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-[#111111] rounded-[2rem] border border-white/5 p-10">
           <h2 className="text-xl font-black uppercase tracking-widest mb-10">System Health</h2>
           <div className="space-y-8">
              <div className="space-y-3">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-neutral-500">Database Load</span>
                    <span className="text-primary-color">Good (12%)</span>
                 </div>
                 <div className="h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-primary-color w-[12%] rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
                 </div>
              </div>
              <div className="space-y-3">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-neutral-500">Storage Capacity</span>
                    <span className="text-neutral-400">4.2GB / 10GB</span>
                 </div>
                 <div className="h-2 bg-black rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[42%] rounded-full"></div>
                 </div>
              </div>
              <div className="pt-8">
                 <div className="bg-primary-color/5 border border-primary-color/20 p-6 rounded-[2rem] text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-color mb-2">Cloud Synced</p>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light">All data is securely backed up and encrypted.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
