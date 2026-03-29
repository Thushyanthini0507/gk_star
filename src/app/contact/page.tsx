"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-white text-foreground min-h-screen selection:bg-primary-gold/20 pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-off-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/[0.03] to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-1000">Concierge Access</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter text-foreground font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
             CONNECT WITH <br /> <span className="text-primary-gold italic font-heading">EXCELLENCE</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             Our curators are standing by to assist with your next masterpiece. Reach out through your preferred channel for immediate priority.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            {/* Contact Info (Left) */}
            <div className="lg:col-span-4 space-y-12">
               <div className="space-y-10">
                  <h3 className="text-2xl font-bold tracking-tighter border-l-4 border-primary-gold pl-6 text-foreground font-heading uppercase">The HQ</h3>
                  <div className="space-y-10">
                     <div className="flex gap-6 items-start group">
                        <div className="w-14 h-14 rounded-2xl bg-off-white border border-border-subtle flex items-center justify-center text-primary-gold group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500 shrink-0 shadow-premium">
                           <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</h4>
                           <p className="text-foreground font-medium leading-relaxed">80 Sivan Road, Uruthirapuram,<br />Kilinochchi, Sri Lanka</p>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <div className="w-14 h-14 rounded-2xl bg-off-white border border-border-subtle flex items-center justify-center text-primary-gold group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500 shrink-0 shadow-premium">
                           <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Priority Lines</h4>
                           <div className="space-y-1">
                              <p className="text-foreground font-medium">+94 77 286 1967</p>
                              <p className="text-foreground font-medium">+94 76 542 7913</p>
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <div className="w-14 h-14 rounded-2xl bg-off-white border border-border-subtle flex items-center justify-center text-primary-gold group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500 shrink-0 shadow-premium">
                           <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                           <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Correspondence</h4>
                           <p className="text-foreground font-medium">hello@gkstar.com</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="p-10 bg-off-white rounded-[2.5rem] border border-border-subtle space-y-6 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/5 blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                  <h4 className="text-xl font-bold tracking-tighter text-foreground font-heading">Elite Response</h4>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed opacity-80">
                     For immediate consultation regarding bespoke orders or corporate partnerships, connect via WhatsApp.
                  </p>
                  <a href="https://wa.me/94772861967" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full py-5 bg-[#25D366]/5 text-[#25D366] rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all duration-500 shadow-sm">
                     <i className="fab fa-whatsapp text-lg"></i> Access WhatsApp Concierge
                  </a>
               </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-8 bg-white p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-border-subtle relative overflow-hidden shadow-premium group">
               <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary-gold/[0.02] blur-[100px] rounded-full -mr-40 -mt-40 group-hover:scale-110 transition-transform duration-1000"></div>
               <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 relative z-10 text-foreground font-heading">
                  SEND A <span className="text-primary-gold uppercase italic font-heading">STATEMENT</span>
               </h3>
               
               <form className="space-y-10 relative z-10" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground ml-2">Full Name</label>
                       <input type="text" className="w-full bg-off-white border border-border-subtle rounded-2xl px-8 py-5 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-muted-foreground/30 shadow-sm" placeholder="Your identity" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground ml-2">Email Address</label>
                       <input type="email" className="w-full bg-off-white border border-border-subtle rounded-2xl px-8 py-5 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-muted-foreground/30 shadow-sm" placeholder="name@domain.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                     <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground ml-2">Subject of Interest</label>
                     <div className="relative">
                        <select className="w-full bg-off-white border border-border-subtle rounded-2xl px-8 py-5 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium appearance-none cursor-pointer shadow-sm">
                           <option>Bespoke Tailoring Inquiry</option>
                           <option>Aari Work Commission</option>
                           <option>Bridal Makeup Consultation</option>
                           <option>Cinematic Photography</option>
                           <option>Corporate Partnership</option>
                           <option>Other Excellence</option>
                        </select>
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50">
                           <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground ml-2">Message Body</label>
                     <textarea rows={6} className="w-full bg-off-white border border-border-subtle rounded-3xl px-8 py-6 text-foreground focus:outline-none focus:border-primary-gold transition-all font-medium placeholder:text-muted-foreground/30 shadow-sm" placeholder="How can our artisans serve you?"></textarea>
                  </div>

                  <div className="pt-6">
                     <button type="submit" className="w-full bg-foreground text-background py-6 md:py-8 rounded-[2rem] font-bold text-sm uppercase tracking-[0.4em] hover:bg-primary-gold hover:text-foreground transition-all transform active:scale-[0.98] shadow-premium">
                        Dispatch Message
                     </button>
                  </div>
               </form>
            </div>
         </div>

         {/* Map Section */}
         <div className="container-custom mt-32 md:mt-48 rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-border-subtle h-[500px] md:h-[650px] relative shadow-premium group grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-1000 z-10 pointer-events-none"></div>
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
