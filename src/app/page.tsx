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
    <div className="bg-[#000000] text-white overflow-hidden">
      {/* Cinematic Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Services"
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container relative z-10 px-6 text-center">
          <span className="text-primary-color text-xs md:text-sm font-black uppercase tracking-[0.5em] mb-6 block animate-fade-in">
            GK Star Multi Services
          </span>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
            ELEGANCE IN <br />
            <span className="text-primary-color">EVERY DETAIL</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Your premier destination for bespoke tailoring, creative branding, and professional lifestyle services.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/services" className="bg-primary-color text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 w-full md:w-auto">
              Explore Services
            </Link>
            <a href="https://wa.me/919876543210" className="border border-white/20 hover:border-primary-color px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest backdrop-blur-md transition-all w-full md:w-auto flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-lg text-[#25D366]"></i> Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6 bg-[#000000]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Specialties</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Experience <br /> <span className="text-neutral-700 font-light italic">The Extraordinary</span>
              </h2>
            </div>
            <Link href="/services" className="text-primary-color font-black uppercase tracking-widest text-xs hover:underline flex items-center gap-2">
              View All Services <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredServices.map((service, i) => (
              <div key={i} className="group relative bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary-color/40 transition-all duration-700 hover:shadow-[0_0_80px_rgba(212,175,55,0.1)] flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow relative -mt-20 z-10">
                  <div className="w-14 h-14 bg-primary-color text-black rounded-2xl flex items-center justify-center text-xl mb-6 shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link href={service.link} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:text-primary-color transition-colors">
                    Learn More <span className="transform group-hover:translateX-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-32 bg-[#050505] border-y border-white/5 px-6 italic">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
          <div className="flex flex-col gap-2">
             <span className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-800">10+</span>
             <span className="text-xs font-black uppercase tracking-widest text-primary-color">Years of Mastery</span>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-800">5k+</span>
             <span className="text-xs font-black uppercase tracking-widest text-primary-color">Legacy Projects</span>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-800">100%</span>
             <span className="text-xs font-black uppercase tracking-widest text-primary-color">Quality Promise</span>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-5xl md:text-7xl font-black tracking-tighter text-neutral-800">24/7</span>
             <span className="text-xs font-black uppercase tracking-widest text-primary-color">Premium Support</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AF37] opacity-5 pointer-events-none"></div>
        <div className="container bg-gradient-to-br from-[#111111] to-[#000000] p-12 md:p-24 rounded-[4rem] border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-color/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to create something <span className="text-primary-color">Extraordinary?</span>
            </h2>
            <p className="text-neutral-500 text-lg md:text-xl font-light mb-12 leading-relaxed">
              Join thousands of satisfied clients who trust GK Star for their most important moments and professional needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
               <Link href="/about" className="text-white hover:text-primary-color font-black uppercase tracking-widest text-sm transition-colors border-b-2 border-primary-color pb-1">Our Story</Link>
               <Link href="/contact" className="bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary-color transition-all shadow-2xl">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
