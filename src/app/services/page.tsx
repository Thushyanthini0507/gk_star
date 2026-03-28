import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const servicesData = [
    {
      id: 1,
      title: "Tailoring Services",
      description: "Bespoke stitching, Saree fall & pico, and bridal blouse work by master tailors.",
      icon: "fas fa-cut",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Aari Work Services",
      description: "Traditional bridal Aari designs and professional embroidery embroidery craftsmanship.",
      icon: "fas fa-magic",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Beauty & Makeup",
      description: "Luxury bridal makeup, party styling, and professional skin treatments.",
      icon: "fas fa-sparkles",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Hair Cutting & Salon",
      description: "Premium hair styling, treatments, and coloring for ladies and gentlemen.",
      icon: "fas fa-user-tie",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Designing Services",
      description: "Visual identity, logo design, and professional business branding solutions.",
      icon: "fas fa-palette",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Photography & Camera",
      description: "Cinematic event coverage, wedding shoots, and professional camera rentals.",
      icon: "fas fa-camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "Cake Services",
      description: "Customized designer cakes for weddings, birthdays, and grand celebrations.",
      icon: "fas fa-birthday-cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      title: "Vehicle Services",
      description: "Luxury vehicle rentals and professional transport services for all events.",
      icon: "fas fa-car",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 10,
      title: "Poultry Services",
      description: "Fresh high-quality poultry supply and comprehensive farm solutions.",
      icon: "fas fa-drumstick-bite",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 11,
      title: "Panthal Services",
      description: "Elegant event panthal setup and traditional decoration services.",
      icon: "fas fa-campground",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Luxury Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
          alt="Services Overview"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="container relative z-10 px-6 text-center">
          <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
            Our <span className="text-primary-color">Premium</span> Services
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            Discover a world of professional excellence. From bespoke craftsmanship to event management, we bring your vision to life with luxury and precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="group flex flex-col bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary-color/40 transition-all duration-500 hover:shadow-[0_20px_80px_rgba(212,175,55,0.1)] h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="w-12 h-12 bg-primary-color/10 border border-primary-color/20 text-primary-color rounded-xl flex items-center justify-center text-lg mb-6 group-hover:bg-primary-color group-hover:text-black transition-all duration-500 transform group-hover:-rotate-12">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tighter group-hover:text-primary-color transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/services/i, '').replace(/--/g, '-').replace(/-$/, '')}`} 
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors"
                  >
                    Explore Projects <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Trust Section */}
      <section className="py-32 bg-[#050505] border-t border-white/5 px-6">
        <div className="container max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>Tailored Excellence <br /><span className="text-neutral-600">Guaranteed</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                 <h4 className="text-primary-color font-black uppercase text-xs tracking-widest mb-4">Unmatched Quality</h4>
                 <p className="text-neutral-500 font-light leading-relaxed text-sm">We maintain rigorous standards across all our services, ensuring every stitch, photo, and design meets the highest benchmark.</p>
              </div>
              <div>
                 <h4 className="text-primary-color font-black uppercase text-xs tracking-widest mb-4">Expert Professionals</h4>
                 <p className="text-neutral-500 font-light leading-relaxed text-sm">Our team consists of vetted experts with years of mastery in their respective fields, dedicated to delivering perfection.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
