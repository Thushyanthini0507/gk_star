import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-dark-blue min-h-screen selection:bg-primary-gold/20 pt-20 overflow-hidden font-sans text-text-primary">
      {/* Cinematic Header */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-dark-blue">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Workspace"
          fill
          className="object-cover opacity-[0.05]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/50 to-dark-blue"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-1000">Est. 2014</span>
            <h1 className="text-6xl md:text-9xl font-bold mb-10 leading-[0.85] tracking-tighter text-text-primary font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 drop-shadow-sm">
              THE LEGACY OF <br />
              <span className="text-primary-gold italic font-heading drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">BEYOND SERVICE</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              GK Star is not just a platform; it's a commitment to uncompromising quality and the pursuit of perfection in every craft we represent.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className="section-padding bg-deep-dark border-t border-border-dark">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary-gold/20 rounded-tl-[3rem] group-hover:scale-110 transition-transform duration-700"></div>
             <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-premium">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Craftsmanship" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-primary-gold/20 rounded-br-[3rem] group-hover:scale-110 transition-transform duration-700"></div>
          </div>
          <div className="space-y-8">
            <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.3em]">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tighter text-text-primary font-heading">
              Crafting <br /> <span className="text-text-secondary/50 font-light italic font-heading">A New Standard</span>
            </h2>
            <p className="text-text-secondary text-lg font-medium leading-relaxed opacity-80">
              Founded on the principles of integrity and excellence, GK Star Multi Services was created to bridge the gap between skilled professionals and individuals seeking reliable help.
            </p>
            <p className="text-text-secondary text-lg font-medium leading-relaxed opacity-80">
              We believe that finding quality home and corporate services shouldn't be a gamble. Every professional on our platform is vetted, and every project is backed by our satisfaction guarantee.
            </p>
            <div className="pt-8">
               <Link href="/services" className="bg-primary-gold text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-neon">Explore Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2 (Stats) */}
      <section className="py-24 bg-dark-blue border-y border-border-dark">
        <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
           {[
             { label: "Masterpieces", value: "5k+" },
             { label: "Elegance Rating", value: "98%" },
             { label: "Vetted Artisans", value: "150+" },
             { label: "Years of Trust", value: "10+" }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col gap-2 group">
                <span className="text-4xl md:text-7xl font-bold tracking-tighter text-text-secondary/10 group-hover:text-primary-gold/30 transition-colors duration-700 line-clamp-1">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">{stat.label}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-deep-dark border-b border-border-dark relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary-gold/5 rounded-full blur-[100px] opacity-50"></div>
        <div className="container-custom text-center mb-24 relative z-10">
          <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">The GK Promise</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-text-primary font-heading">Core Values</h2>
        </div>
        
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             {
               icon: "fas fa-shield-alt",
               title: "Trust & Safety",
               desc: "Rigorous vetting processes ensure only the most reliable professionals cross your threshold, maintaining your peace of mind."
             },
             {
               icon: "fas fa-gem",
               title: "Unmatched Quality",
               desc: "We mandate the use of high-quality materials and adhere strictly to industry best-practices in every single engagement.",
               yOffset: true
             },
             {
               icon: "fas fa-handshake",
               title: "Transparency",
               desc: "Clear pricing, open communication, and absolutely no hidden fees. We believe in building relationships through honesty."
             }
           ].map((value, i) => (
             <div key={i} className={`p-12 premium-card group ${value.yOffset ? 'md:translate-y-12' : ''}`}>
                <div className="text-primary-gold text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                   <i className={value.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tighter text-text-primary font-heading">{value.title}</h3>
                <p className="text-text-secondary font-medium leading-relaxed text-sm opacity-80">{value.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 bg-dark-blue relative overflow-hidden">
        <div className="container-custom text-center max-w-4xl mx-auto relative z-10">
           <div className="text-border-dark text-9xl mb-12 flex justify-center drop-shadow-sm">
             <i className="fas fa-quote-left"></i>
           </div>
           <p className="text-3xl md:text-5xl font-light italic leading-tight text-text-primary mb-12 font-heading">
             "Our vision is to foster an environment where local experts can thrive by connecting them seamlessly with customers through a gold-standard interface."
           </p>
           <h4 className="text-primary-gold font-bold uppercase tracking-[0.4em] text-sm">The GK Star Leadership</h4>
        </div>
      </section>
    </div>
  );
}
