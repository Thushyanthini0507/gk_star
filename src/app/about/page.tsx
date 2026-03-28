import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Cinematic Header */}
      <section className="relative py-32 md:py-56 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Workspace"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="container relative z-10 px-6">
          <div className="max-w-4xl">
            <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Est. 2014</span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              THE LEGACY OF <br />
              <span className="text-primary-color">BEYOND SERVICE</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
              GK Star is not just a platform; it's a commitment to uncompromising quality and the pursuit of perfection in every craft we represent.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 1 */}
      <section className="py-32 px-6">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary-color/30"></div>
             <div className="relative aspect-square rounded-[3rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Craftsmanship" 
                  fill
                  className="object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-primary-color/30"></div>
          </div>
          <div className="space-y-8">
            <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em]">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              Crafting <br /> <span className="text-neutral-700 italic font-light font-serif">A New Standard</span>
            </h2>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              Founded on the principles of integrity and excellence, GK Star Multi Services was created to bridge the gap between skilled professionals and individuals seeking reliable help.
            </p>
            <p className="text-neutral-500 text-lg font-light leading-relaxed">
              We believe that finding quality home and corporate services shouldn't be a gamble. Every professional on our platform is vetted, and every project is backed by our satisfaction guarantee.
            </p>
            <div className="pt-8">
               <Link href="/services" className="bg-white text-black px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-color transition-all">Explore Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section 2 (Stats) */}
      <section className="py-24 bg-[#050505] border-y border-white/5 px-6">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center italic">
           <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-7xl font-black tracking-tighter text-neutral-800">5k+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-color">Masterpieces</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-7xl font-black tracking-tighter text-neutral-800">98%</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-color">Elegance Rating</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-7xl font-black tracking-tighter text-neutral-800">150+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-color">Vetted Artisans</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-7xl font-black tracking-tighter text-neutral-800">10+</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-color">Years of Trust</span>
           </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-[#000000]">
        <div className="container text-center mb-24">
          <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">The GK Promise</span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>Core Values</h2>
        </div>
        
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="p-12 bg-[#111111] rounded-[3rem] border border-white/5 hover:border-primary-color/40 transition-all duration-500 group">
              <div className="text-primary-color text-4xl mb-8 group-hover:scale-110 transition-transform">
                 <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter">Trust & Safety</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">Rigorous vetting processes ensure only the most reliable professionals cross your threshold, maintaining your peace of mind.</p>
           </div>

           <div className="p-12 bg-[#111111] rounded-[3rem] border border-white/5 hover:border-primary-color/40 transition-all duration-500 group transform md:translate-y-12">
              <div className="text-primary-color text-4xl mb-8 group-hover:scale-110 transition-transform">
                 <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter">Unmatched Quality</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">We mandate the use of high-quality materials and adhere strictly to industry best-practices in every single engagement.</p>
           </div>

           <div className="p-12 bg-[#111111] rounded-[3rem] border border-white/5 hover:border-primary-color/40 transition-all duration-500 group">
              <div className="text-primary-color text-4xl mb-8 group-hover:scale-110 transition-transform">
                 <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tighter">Transparency</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">Clear pricing, open communication, and absolutely no hidden fees. We believe in building relationships through honesty.</p>
           </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-48 px-6 bg-[#050505]">
        <div className="container text-center max-w-4xl mx-auto">
           <i className="fas fa-quote-left text-neutral-800 text-8xl mb-12"></i>
           <p className="text-3xl md:text-5xl font-light italic leading-tight text-neutral-300 mb-12 font-serif">
             "Our vision is to foster an environment where local experts can thrive by connecting them seamlessly with customers through a gold-standard interface."
           </p>
           <h4 className="text-primary-color font-black uppercase tracking-[0.4em] text-sm">The GK Star Leadership</h4>
        </div>
      </section>
    </div>
  );
}
