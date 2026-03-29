import Link from "next/link";
import Image from "next/image";
import { Scissors, Sparkles, Palette, Mail, Phone, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredServices = [
    {
      title: "Tailoring Services",
      desc: "Bespoke stitching and bridal blouse work by master craftsmen.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
      link: "/services/tailoring",
      icon: Scissors
    },
    {
      title: "Aari Work",
      desc: "Exquisite bridal designs and embroidery that tells a story.",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
      link: "/services/aari-work",
      icon: Sparkles
    },
    {
      title: "Designing Services",
      desc: "Professional branding and visuals for the modern business.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      link: "/services/designing",
      icon: Palette
    }
  ];

  return (
    <div className="bg-dark-blue selection:bg-primary-gold/20 overflow-hidden font-sans text-text-primary">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-dark-blue pt-20">
        {/* Background Images Collage */}
        <div className="absolute inset-0 z-0 flex opacity-30 mix-blend-luminosity">
          <div className="relative flex-1 h-full hidden lg:block">
            <Image src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" alt="Designing" fill className="object-cover" priority />
          </div>
          <div className="relative flex-1 h-full hidden md:block">
            <Image src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800" alt="Aari Work" fill className="object-cover" priority />
          </div>
          <div className="relative flex-1 h-full w-full">
            <Image src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" alt="Tailoring" fill className="object-cover" priority />
          </div>
        </div>
        
        {/* Gradients to blend images into the dark background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-blue/80 via-dark-blue/70 to-dark-blue"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent"></div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-deep-dark/80 backdrop-blur-md shadow-neon border border-border-dark mb-10 mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-gold animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-secondary">GK Star Multi Services</span>
          </div>

          <h1 className="font-bold mb-8 leading-[0.9] tracking-tighter text-text-primary drop-shadow-lg font-heading animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-6xl md:text-8xl lg:text-9xl">
            ELEGANCE IN <br />
            <span className="text-primary-gold italic font-heading drop-shadow-[0_0_25px_rgba(250,204,21,0.3)]">EVERY DETAIL</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            Your premier destination for bespoke tailoring, creative branding, and professional lifestyle services. Crafted for those who value perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-14 text-sm font-medium animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
            <a href="mailto:gkprivatelimited67@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-primary-gold transition-colors bg-deep-dark/50 px-5 py-3 rounded-full border border-border-dark backdrop-blur-sm">
              <Mail className="w-4 h-4 text-primary-gold" /> gkprivatelimited67@gmail.com
            </a>
            <a href="https://wa.me/94743698753" className="flex items-center gap-3 text-text-secondary hover:text-primary-gold transition-colors bg-deep-dark/50 px-5 py-3 rounded-full border border-border-dark backdrop-blur-sm">
              <Phone className="w-4 h-4 text-primary-gold" /> +94 74 369 8753
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Link href="/services" className="bg-primary-gold text-white px-14 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-neon border border-yellow-400/50 w-full md:w-auto">
              Explore Services
            </Link>
            <a href="https://wa.me/94743698753" className="bg-transparent border border-primary-gold hover:bg-primary-gold hover:text-white text-primary-gold px-14 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all w-full md:w-auto flex items-center justify-center gap-3 hover:shadow-neon group">
              <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i> Whatsapp Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
           <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Scroll</span>
           <div className="w-px h-12 bg-gradient-to-b from-primary-gold to-transparent animate-bounce"></div>
        </div>
      </section>

      {/* Featured Services (Alternate Deep Dark Bg) */}
      <section className="section-padding bg-deep-dark border-y border-border-dark relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-primary-gold/5 rounded-full blur-[100px] -ml-60 -mt-60"></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Specialties</span>
              <h2 className="font-bold tracking-tighter leading-none text-text-primary font-heading text-4xl md:text-5xl lg:text-6xl">
                Experience <br /> <span className="text-text-secondary/50 font-light">The Exceptional</span>
              </h2>
            </div>
            <Link href="/services" className="group text-text-primary font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 border-b border-primary-gold/30 pb-3 hover:border-primary-gold hover:text-primary-gold transition-colors">
              View All Services <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {featuredServices.map((service, i) => (
              <div key={i} className="group premium-card flex flex-col h-full overflow-hidden relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 bg-dark-blue"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/50 to-transparent"></div>
                  <div className="absolute top-8 left-8 w-14 h-14 bg-dark-blue backdrop-blur-md shadow-neon text-primary-gold rounded-xl flex items-center justify-center transform group-hover:-rotate-6 transition-all duration-500 border border-primary-gold/30 group-hover:border-primary-gold group-hover:bg-primary-gold/10">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow relative z-10 bg-card-bg mt-[-3rem] rounded-t-[2.5rem] border-t border-border-dark group-hover:border-primary-gold/50 transition-colors duration-500">
                  <h3 className="text-3xl font-bold mb-4 tracking-tighter text-text-primary group-hover:text-primary-gold transition-colors font-heading drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-medium leading-relaxed mb-10 flex-grow text-sm">
                    {service.desc}
                  </p>
                  <Link href={service.link} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover:text-primary-gold transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats (Back to Dark Blue) */}
      <section className="section-padding bg-dark-blue">
        <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-20 text-center">
          {[
            { label: "Years of Mastery", value: "10+" },
            { label: "Legacy Projects", value: "5k+" },
            { label: "Quality Promise", value: "100%" },
            { label: "Premium Support", value: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 group">
               <span className="font-bold tracking-tighter text-border-dark group-hover:text-primary-gold/30 transition-colors duration-700 drop-shadow-sm text-4xl md:text-5xl lg:text-6xl">
                 {stat.value}
               </span>
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary group-hover:text-primary-gold transition-colors">
                 {stat.label}
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (Deep Dark Background for depth) */}
      <section className="section-padding bg-deep-dark border-t border-border-dark overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="bg-card-bg py-12 md:py-24 px-8 md:px-12 rounded-3xl md:rounded-[3rem] text-center relative overflow-hidden border border-border-dark shadow-premium hover:shadow-neon hover:border-primary-gold/50 transition-all duration-700 group">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-gold/5 group-hover:bg-primary-gold/10 transition-colors duration-700 rounded-full blur-[100px] -mr-60 -mt-60"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary-gold/5 group-hover:bg-primary-gold/10 transition-colors duration-700 rounded-full blur-[80px] -ml-40 -mb-40"></div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="font-bold mb-6 leading-tight tracking-tighter text-text-primary font-heading text-4xl md:text-5xl lg:text-6xl">
                Ready to create something <br/>
                <span className="text-primary-gold italic font-heading drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">Extraordinary?</span>
              </h2>
              <p className="text-text-secondary text-base md:text-lg font-medium mb-12 leading-relaxed">
                Join thousands of satisfied clients who trust GK Star for their <br className="hidden md:block"/> 
                most important moments and professional needs.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
                 <Link href="/about" className="text-text-secondary hover:text-primary-gold font-bold uppercase tracking-widest text-xs transition-colors border-b-2 border-border-dark hover:border-primary-gold pb-2 flex-shrink-0">
                   Our Story
                 </Link>
                 <Link href="/contact" className="bg-primary-gold text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-neon flex-shrink-0 flex items-center gap-3 border border-yellow-400/50">
                   Get in Touch <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
