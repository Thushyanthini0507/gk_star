"use client";

import Link from "next/link";
import Image from "next/image";

export default function JoinWithUsPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-56 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="container relative z-10 px-6 text-center">
            <span className="inline-block px-6 py-2 rounded-full border border-primary-color/20 text-primary-color text-[10px] font-black uppercase tracking-[0.4em] mb-10">
               Elite Partnerships
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none" style={{ fontFamily: "var(--font-heading)" }}>
               GROW WITH <br />
               <span className="text-primary-color italic font-light font-serif">GK STAR</span>
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-12">
               Join a curated ecosystem of world-class artisans and corporate experts. Unlock an era of uncompromised growth and prestige.
            </p>
            <Link href="#apply" className="bg-primary-color text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary-color/20">
               Begin Your Application
            </Link>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 border-y border-white/5 bg-[#030303]">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white mx-auto">
           {[
             { num: "500+", label: "Active Artisans" },
             { num: "12K+", label: "Satisfied Clients" },
             { num: "98%", label: "Partner Retention" },
             { num: "24h", label: "Onboarding Speed" }
           ].map((stat, i) => (
             <div key={i} className="space-y-2">
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-800">{stat.num}</span>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-color/60">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-40 px-6 bg-[#000000]">
        <div className="container mx-auto">
          <div className="text-center mb-24">
             <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">The Advantage</span>
             <h2 className="text-4xl md:text-7xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>Elite Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
                { icon: "fa-users", title: "Verified Exposure", desc: "Access a high-net-worth client base actively seeking premium craftsmanship." },
                { icon: "fa-wallet", title: "Instant Settlements", desc: "Seamless, secure payments with zero delays — because your time is valuable." },
                { icon: "fa-calendar-check", title: "Full Sovereignty", desc: "Define your own schedule and curated catalog. You remain the master of your craft." },
                { icon: "fa-headset", title: "Artisan Advocacy", desc: "Dedicated partner success team providing 24/7 concierge support for your business." },
                { icon: "fa-chart-line", title: "Strategic Growth", desc: "Access high-end analytics and reputation-building tools to scale your brand." },
                { icon: "fa-shield-alt", title: "Gold-Standard Safety", desc: "Comprehensive liability coverage ensuring every masterpiece is protected." }
             ].map((benefit, i) => (
                <div key={i} className="p-12 bg-[#0a0a0a] rounded-[3rem] border border-white/5 hover:border-primary-color/30 transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary-color text-2xl mb-8 group-hover:bg-primary-color group-hover:text-black transition-all">
                      <i className={`fas ${benefit.icon}`}></i>
                   </div>
                   <h3 className="text-2xl font-black mb-6 tracking-tighter">{benefit.title}</h3>
                   <p className="text-neutral-600 font-light leading-relaxed text-sm">{benefit.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* How it Works (Timeline) */}
      <section className="py-40 px-6 bg-[#050505] border-y border-white/5">
         <div className="container mx-auto overflow-hidden">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>The Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
               <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-color/30 to-transparent z-0"></div>
               {[
                 { num: "01", title: "Application", desc: "Submit your portfolio and credentials for review." },
                 { num: "02", title: "Vetting", desc: "A world-class quality audit of your previous work." },
                 { num: "03", title: "Curation", desc: "Your exclusive talent profile is design for the catalog." },
                 { num: "04", title: "Dominance", desc: "Start accepting high-value bookings immediately." }
               ].map((step, i) => (
                 <div key={i} className="relative z-10 text-center space-y-6">
                    <div className="w-20 h-20 bg-black border border-primary-color/50 rounded-full flex items-center justify-center mx-auto text-primary-color font-black text-xl shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                       {step.num}
                    </div>
                    <h4 className="text-lg font-black uppercase tracking-widest">{step.title}</h4>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-40 px-6 bg-black">
         <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl shadow-primary-color/5">
            {/* Form Intro */}
            <div className="lg:w-2/5 bg-[#0a0a0a] p-16 md:p-24 flex flex-col justify-between">
               <div>
                  <h3 className="text-4xl font-black tracking-tighter mb-8 leading-none" style={{ fontFamily: "var(--font-heading)" }}>Request <br /> <span className="text-primary-color">Onboarding</span></h3>
                  <p className="text-neutral-500 font-light leading-relaxed mb-12">
                     Submit your details below. Our elite partner relations team will contact you within 24 hours to begin the vetting process.
                  </p>
                  <ul className="space-y-6">
                     {[
                       "Premium Brand Exposure",
                       "Guaranteed Payment Protection",
                       "Artisan Resource Network",
                       "Strategic Business Support"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-neutral-400">
                          <i className="fas fa-check-circle text-primary-color text-sm"></i>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="mt-20 pt-10 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 mb-2 italic">Fast-Track Status?</p>
                  <a href="https://wa.me/94772861967" className="text-primary-color font-black tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                     WHATSAPP CONCIERGE <i className="fas fa-arrow-right"></i>
                  </a>
               </div>
            </div>

            {/* Form Fields */}
            <div className="lg:w-3/5 bg-[#111111] p-16 md:p-24">
               <form className="space-y-10" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Full Identity</label>
                     <input type="text" className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="Enter full name or corporate identity" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Secure Email</label>
                       <input type="email" className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="name@luxury.com" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Phone Line</label>
                       <input type="tel" className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="+94 77 ..." />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Artisan Division</label>
                       <select className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all appearance-none cursor-pointer">
                          <option>Aari Work Services</option>
                          <option>Tailoring Services</option>
                          <option>Beauty & Makeup</option>
                          <option>Artisan Cakes</option>
                          <option>Other Excellence</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Legacy Experience</label>
                       <select className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all appearance-none cursor-pointer">
                          <option>1 – 3 Masterful Years</option>
                          <option>3 – 5 Elite Years</option>
                          <option>5+ Legendary Years</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 ml-4">Statement of Intent</label>
                     <textarea rows={4} className="w-full bg-black border border-white/5 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="Briefly describe your craft and why you belong in the GK Star elite catalog..."></textarea>
                  </div>
                  <div className="pt-6">
                     <button type="submit" className="w-full bg-primary-color text-black py-8 rounded-3xl font-black text-xs uppercase tracking-[0.5em] hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-primary-color/5">
                        Submit Credential for Review
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
