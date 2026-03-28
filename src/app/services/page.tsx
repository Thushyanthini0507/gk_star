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
    <div className="bg-[#FFFFFF] text-[#1A1A1A] min-h-screen selection:bg-primary-color/20 selection:text-black font-sans">
      {/* Refined Light Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#F9F9F9]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Services Overview"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white to-[#FFFFFF]"></div>
        </div>

        <div className="container relative z-10 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-neutral-100 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-color shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Professional Expertise</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>
            Our <span className="text-primary-color italic">Premium</span> <br/>
            Services
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
            Elevating standards through meticulous craftsmanship and visionary design. Experience excellence in every detail.
          </p>

          <div className="mt-12">
             <div className="w-px h-16 bg-gradient-to-b from-primary-color to-transparent mx-auto opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Light Aesthetic */}
      <section id="services-grid" className="py-32 px-6 relative bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-neutral-100 shadow-[var(--soft-shadow)] hover:shadow-[var(--premium-shadow)] hover:border-primary-color/20 transition-all duration-500 h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  
                  {/* Icon Badge - Light Style */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-white/20 flex items-center justify-center text-xl text-primary-color group-hover:bg-primary-color group-hover:text-white transition-all duration-500">
                    <i className={service.icon}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow relative -mt-16 z-10">
                  <h3 className="text-2xl font-bold mb-4 tracking-tighter text-[#1A1A1A] group-hover:text-primary-color transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-neutral-50">
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/services/i, '').replace(/--/g, '-').replace(/-$/, '')}`} 
                      className="group/link inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-primary-color transition-colors"
                    >
                      Learn More
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Clean Light Style */}
      <section className="py-48 bg-[#FAFAFA] border-y border-neutral-100 px-6">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary-color font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Commitment</span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-[#1A1A1A]" style={{ fontFamily: "var(--font-heading)" }}>
              Quality Without <br/>
              <span className="text-neutral-300">Compromise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="group p-8 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-500">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm border border-neutral-100 text-primary-color text-2xl group-hover:scale-110 transition-transform">
                <i className="fas fa-certificate"></i>
              </div>
              <h4 className="text-[#1A1A1A] font-bold uppercase text-xs tracking-widest mb-4">Certified</h4>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">Professional services backed by years of certified excellence and mastery.</p>
            </div>
            
            <div className="group p-8 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-500">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm border border-neutral-100 text-primary-color text-2xl group-hover:scale-110 transition-transform">
                <i className="fas fa-users"></i>
              </div>
              <h4 className="text-[#1A1A1A] font-bold uppercase text-xs tracking-widest mb-4">Expert Team</h4>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">Our specialists are dedicated to delivering bespoke solutions for every client.</p>
            </div>

            <div className="group p-8 rounded-3xl hover:bg-white hover:shadow-sm transition-all duration-500">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm border border-neutral-100 text-primary-color text-2xl group-hover:scale-110 transition-transform">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="text-[#1A1A1A] font-bold uppercase text-xs tracking-widest mb-4">Timed Delivery</h4>
              <p className="text-neutral-500 font-light leading-relaxed text-sm">We value your time as much as our craft, ensuring punctual and perfect results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
