import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredServices = [
    {
      title: "Tailoring Services",
      desc: "Bespoke stitching and bridal blouse work by master craftsmen.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
      link: "/services/tailoring",
      icon: "fas fa-cut"
    },
    {
      title: "Aari Work",
      desc: "Exquisite bridal designs and embroidery that tells a story.",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
      link: "/services/aari-work",
      icon: "fas fa-magic"
    },
    {
      title: "Designing Services",
      desc: "Professional branding and visuals for the modern business.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      link: "/services/designing",
      icon: "fas fa-palette"
    }
  ];

  return (
    <div className="bg-white selection:bg-primary-gold/20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-off-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Services"
            fill
            className="object-cover opacity-[0.03] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-premium border border-border-subtle mb-10 mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-gold"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">GK Star Multi Services</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.9] tracking-tighter text-foreground drop-shadow-sm font-heading animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            ELEGANCE IN <br />
            <span className="text-primary-gold italic font-heading">EVERY DETAIL</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto mb-14 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            Your premier destination for bespoke tailoring, creative branding, and professional lifestyle services. Crafted for those who value perfection.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Link href="/services" className="bg-foreground text-background px-14 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-gold hover:text-foreground transition-all transform hover:scale-105 shadow-premium w-full md:w-auto">
              Explore Services
            </Link>
            <a href="https://wa.me/919876543210" className="bg-white border border-border-subtle hover:border-primary-gold px-14 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-premium group">
              <i className="fab fa-whatsapp text-lg text-[#25D366] group-hover:scale-110 transition-transform"></i> Enquire Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
           <div className="w-px h-16 bg-foreground animate-bounce"></div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Specialties</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none text-foreground font-heading">
                Experience <br /> <span className="text-muted-foreground/30 font-light">The Exceptional</span>
              </h2>
            </div>
            <Link href="/services" className="group text-foreground font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 border-b border-primary-gold/30 pb-3 hover:border-primary-gold transition-colors">
              View All Services <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {featuredServices.map((service, i) => (
              <div key={i} className="group premium-card flex flex-col h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
                  <div className="absolute top-8 left-8 w-14 h-14 bg-white/90 backdrop-blur-md shadow-premium text-primary-gold rounded-2xl flex items-center justify-center text-xl transform group-hover:-rotate-6 transition-transform duration-500 border border-border-subtle">
                    <i className={service.icon}></i>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-primary-gold transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-10 flex-grow text-sm opacity-80">
                    {service.desc}
                  </p>
                  <Link href={service.link} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-foreground hover:text-primary-gold transition-colors">
                    Learn More <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="section-padding bg-off-white border-y border-border-subtle">
        <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-20 text-center">
          {[
            { label: "Years of Mastery", value: "10+" },
            { label: "Legacy Projects", value: "5k+" },
            { label: "Quality Promise", value: "100%" },
            { label: "Premium Support", value: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 group">
               <span className="text-7xl md:text-8xl font-bold tracking-tighter text-muted-foreground/10 group-hover:text-primary-gold/20 transition-colors duration-700">
                 {stat.value}
               </span>
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                 {stat.label}
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-foreground py-20 md:py-32 px-10 md:px-20 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-hover">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-gold/5 rounded-full blur-[100px] -mr-80 -mt-80"></div>
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-tight tracking-tighter text-background font-heading">
                Ready to create something <br/>
                <span className="text-primary-gold italic font-heading">Extraordinary?</span>
              </h2>
              <p className="text-background/60 text-lg md:text-xl font-medium mb-16 leading-relaxed">
                Join thousands of satisfied clients who trust GK Star for their <br className="hidden md:block"/> 
                most important moments and professional needs.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                 <Link href="/about" className="text-background hover:text-primary-gold font-bold uppercase tracking-widest text-xs transition-colors border-b-2 border-primary-gold/30 pb-2">Our Story</Link>
                 <Link href="/contact" className="bg-background text-foreground px-14 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary-gold transition-all shadow-premium">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
