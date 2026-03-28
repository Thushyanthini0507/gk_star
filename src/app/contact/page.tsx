"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-color/5 to-transparent"></div>
        <div className="container relative z-10 px-6 text-center">
          <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Concierge Access</span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none" style={{ fontFamily: "var(--font-heading)" }}>
             CONNECT WITH <br /> <span className="text-primary-color italic font-light font-serif text-5xl md:text-7xl">EXCELLENCE</span>
          </h1>
          <p className="text-neutral-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
             Our curators are standing by to assist with your next masterpiece. Reach out through your preferred channel for immediate priority.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-40 px-6">
         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-4 space-y-12">
               <div className="space-y-10">
                  <h3 className="text-2xl font-black tracking-tighter border-l-4 border-primary-color pl-6">The Headquarters</h3>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-primary-color group-hover:bg-primary-color group-hover:text-black transition-all duration-500 shrink-0">
                           <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-2">Location</h4>
                           <p className="text-neutral-300 font-light leading-relaxed">80 Sivan Road, Uruthirapuram,<br />Kilinochchi, Sri Lanka</p>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-primary-color group-hover:bg-primary-color group-hover:text-black transition-all duration-500 shrink-0">
                           <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-2">Priority Lines</h4>
                           <div className="space-y-1">
                              <p className="text-neutral-300 font-light">+94 77 286 1967</p>
                              <p className="text-neutral-300 font-light">+94 76 542 7913</p>
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-primary-color group-hover:bg-primary-color group-hover:text-black transition-all duration-500 shrink-0">
                           <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-2">Correspondence</h4>
                           <p className="text-neutral-300 font-light lowercase">hello@gkstar.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="p-10 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 space-y-6">
                  <h4 className="text-xl font-black tracking-tighter">Elite Response</h4>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">
                     For immediate consultation regarding bespoke orders or corporate partnerships, connect via WhatsApp.
                  </p>
                  <a href="https://wa.me/94772861967" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full py-5 bg-[#25D366]/10 text-[#25D366] rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#25D366] hover:text-white transition-all duration-500">
                     <i className="fab fa-whatsapp text-lg"></i> Access WhatsApp Concierge
                  </a>
               </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-8 bg-[#0a0a0a] p-12 md:p-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-color/5 blur-[120px] rounded-full"></div>
               <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 relative z-10" style={{ fontFamily: "var(--font-heading)" }}>
                  SEND A <span className="text-primary-color uppercase italic font-light font-serif">STATEMENT</span>
               </h3>
               
               <form className="space-y-10 relative z-10" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 ml-4">Full Name</label>
                       <input type="text" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="Enter your identity" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 ml-4">Email Address</label>
                       <input type="email" className="w-full bg-black border border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="name@domain.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 ml-4">Subject of Interest</label>
                     <select className="w-full bg-black border border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all appearance-none cursor-pointer">
                        <option>Bespoke Tailoring Inquiry</option>
                        <option>Aari Work Commission</option>
                        <option>Bridal Makeup Consultation</option>
                        <option>Cinematic Photography</option>
                        <option>Corporate Partnership</option>
                        <option>Other Excellence</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 ml-4">Message Body</label>
                     <textarea rows={6} className="w-full bg-black border border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="How can our artisans serve you today?"></textarea>
                  </div>

                  <div className="pt-6">
                     <button type="submit" className="w-full bg-primary-color text-black py-8 rounded-3xl font-black text-xs uppercase tracking-[0.5em] hover:bg-white transition-all transform active:scale-95 shadow-2xl shadow-primary-color/10">
                        Dispatch Message
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* Dark Map Section */}
         <div className="container mx-auto mt-40 rounded-[3rem] overflow-hidden border border-white/5 h-[600px] relative grayscale hover:grayscale-0 transition-all duration-1000 group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000 z-10 pointer-events-none"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7!2d80.3964!3d9.3988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjMnNTYuNyJOIDgwwrAyMyczMS43IkU!5e0!3m2!1sen!2slk!4v1633000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="relative z-0"
            ></iframe>
         </div>
      </section>
    </div>
  );
}
