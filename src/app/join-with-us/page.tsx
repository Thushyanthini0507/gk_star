"use client";

import Link from "next/link";
import Image from "next/image";

export default function JoinWithUsPage() {
  return (
    <div className="bg-dark-blue text-text-primary min-h-screen selection:bg-primary-gold/20 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-deep-dark">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white"></div>
        <div className="container-custom relative z-10 text-center">
            <span className="inline-flex px-6 py-2 rounded-full border border-primary-gold/20 text-primary-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-10 bg-dark-blue shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
               Elite Partnerships
            </span>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-none text-text-primary font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
               GROW WITH <br />
               <span className="text-primary-gold italic font-heading">GK STAR</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
               Join a curated ecosystem of world-class artisans and corporate experts. Unlock an era of uncompromised growth and prestige.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
               <Link href="#apply" className="bg-primary-gold text-dark-blue px-14 py-5 rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:bg-primary-gold hover:text-text-primary transition-all shadow-premium">
                  Begin Your Application
               </Link>
            </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 border-y border-border-dark bg-dark-blue">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
           {[
             { num: "500+", label: "Active Artisans" },
             { num: "12K+", label: "Satisfied Clients" },
             { num: "98%", label: "Partner Retention" },
             { num: "24h", label: "Onboarding Speed" }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col gap-2 group">
                <span className="text-4xl md:text-7xl font-bold tracking-tighter text-text-secondary/10 group-hover:text-primary-gold/20 transition-colors duration-700">{stat.num}</span>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-dark-blue">
        <div className="container-custom">
          <div className="text-center mb-24">
             <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">The Advantage</span>
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-text-primary font-heading">Elite Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
             {[
                { icon: "fa-users", title: "Verified Exposure", desc: "Access a high-net-worth client base actively seeking premium craftsmanship." },
                { icon: "fa-wallet", title: "Instant Settlements", desc: "Seamless, secure payments with zero delays — because your time is valuable." },
                { icon: "fa-calendar-check", title: "Full Sovereignty", desc: "Define your own schedule and curated catalog. You remain the master of your craft." },
                { icon: "fa-headset", title: "Artisan Advocacy", desc: "Dedicated partner success team providing 24/7 concierge support for your business." },
                { icon: "fa-chart-line", title: "Strategic Growth", desc: "Access high-end analytics and reputation-building tools to scale your brand." },
                { icon: "fa-shield-alt", title: "Gold-Standard Safety", desc: "Comprehensive liability coverage ensuring every masterpiece is protected." }
             ].map((benefit, i) => (
                <div key={i} className="p-10 premium-card group h-full">
                   <div className="w-16 h-16 rounded-2xl bg-deep-dark flex items-center justify-center text-primary-gold text-2xl mb-8 group-hover:bg-primary-gold group-hover:text-text-primary transition-all duration-500 shadow-sm border border-border-dark">
                      <i className={`fas ${benefit.icon}`}></i>
                   </div>
                   <h3 className="text-2xl font-bold mb-6 tracking-tighter text-text-primary font-heading">{benefit.title}</h3>
                   <p className="text-text-secondary font-medium leading-relaxed text-sm opacity-80">{benefit.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* How it Works (Timeline) */}
      <section className="section-padding bg-deep-dark border-y border-border-dark">
         <div className="container-custom">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-text-primary font-heading">The Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
               <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-gold/30 to-transparent z-0"></div>
               {[
                 { num: "01", title: "Application", desc: "Submit your portfolio and credentials for review." },
                 { num: "02", title: "Vetting", desc: "A world-class quality audit of your previous work." },
                 { num: "03", title: "Curation", desc: "Your exclusive talent profile is design for the catalog." },
                 { num: "04", title: "Dominance", desc: "Start accepting high-value bookings immediately." }
               ].map((step, i) => (
                 <div key={i} className="relative z-10 text-center space-y-6 group">
                    <div className="w-20 h-20 bg-dark-blue border border-primary-gold/30 rounded-full flex items-center justify-center mx-auto text-primary-gold font-bold text-xl shadow-premium group-hover:scale-110 group-hover:bg-primary-gold group-hover:text-text-primary transition-all duration-500">
                       {step.num}
                    </div>
                    <h4 className="text-lg font-bold uppercase tracking-widest text-text-primary font-heading">{step.title}</h4>
                    <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-[200px] mx-auto opacity-70">{step.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-dark-blue">
         <div className="container-custom flex flex-col lg:flex-row rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-border-dark shadow-premium">
            {/* Form Intro */}
            <div className="lg:w-2/5 bg-deep-dark p-12 md:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-dark">
               <div>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10 leading-none text-text-primary font-heading">Request <br /> <span className="text-primary-gold italic font-heading">Onboarding</span></h3>
                  <p className="text-text-secondary font-medium leading-relaxed mb-12 opacity-80">
                     Submit your details below. Our elite partner relations team will contact you within 24 hours to begin the vetting process.
                  </p>
                  <ul className="space-y-6">
                     {[
                       "Premium Brand Exposure",
                       "Guaranteed Payment Protection",
                       "Artisan Resource Network",
                       "Strategic Business Support"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                          <i className="fas fa-check-circle text-primary-gold text-base"></i>
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="mt-20 pt-10 border-t border-border-dark">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary mb-3 italic">Fast-Track Status?</p>
                  <a href="https://wa.me/94772861967" className="text-primary-gold font-bold tracking-[0.2em] text-[10px] flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                     WHATSAPP CONCIERGE <i className="fas fa-arrow-right"></i>
                  </a>
               </div>
            </div>

            {/* Form Fields */}
            <div className="lg:w-3/5 bg-dark-blue p-12 md:p-20">
               <form className="space-y-10" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-3">
                     <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Full Identity</label>
                     <input type="text" className="w-full bg-deep-dark border border-border-dark rounded-2xl px-8 py-5 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-text-secondary/30 shadow-sm" placeholder="Full name or corporate identity" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Secure Email</label>
                       <input type="email" className="w-full bg-deep-dark border border-border-dark rounded-2xl px-8 py-5 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-text-secondary/30 shadow-sm" placeholder="name@luxury.com" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Phone Line</label>
                       <input type="tel" className="w-full bg-deep-dark border border-border-dark rounded-2xl px-8 py-5 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-text-secondary/30 shadow-sm" placeholder="+94 77 ..." />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Artisan Division</label>
                       <div className="relative">
                          <select className="w-full bg-deep-dark border border-border-dark rounded-2xl px-8 py-5 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium shadow-sm appearance-none cursor-pointer">
                             <option>Aari Work Services</option>
                             <option>Tailoring Services</option>
                             <option>Beauty & Makeup</option>
                             <option>Artisan Cakes</option>
                             <option>Other Excellence</option>
                          </select>
                          <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary/50">
                             <i className="fas fa-chevron-down text-xs"></i>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Legacy Experience</label>
                       <div className="relative">
                          <select className="w-full bg-deep-dark border border-border-dark rounded-2xl px-8 py-5 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium shadow-sm appearance-none cursor-pointer">
                             <option>1 – 3 Masterful Years</option>
                             <option>3 – 5 Elite Years</option>
                             <option>5+ Legendary Years</option>
                          </select>
                          <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary/50">
                             <i className="fas fa-chevron-down text-xs"></i>
                          </div>
                       </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                     <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary ml-2">Statement of Intent</label>
                     <textarea rows={4} className="w-full bg-deep-dark border border-border-dark rounded-3xl px-8 py-6 text-text-primary focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-text-secondary/30 shadow-sm" placeholder="Briefly describe your craft..."></textarea>
                  </div>
                  <div className="pt-6">
                     <button type="submit" className="w-full bg-primary-gold text-dark-blue py-6 md:py-8 rounded-[2rem] font-bold text-sm uppercase tracking-[0.5em] hover:bg-primary-gold hover:text-text-primary transition-all transform active:scale-[0.98] shadow-premium">
                        Submit Credential
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
