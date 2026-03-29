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
    <div className="bg-white min-h-screen selection:bg-primary-gold/20 overflow-hidden pt-20">
      {/* Header Section */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-off-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Services Overview"
            fill
            className="object-cover opacity-[0.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-premium border border-border-subtle mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-gold"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Professional Expertise</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1] tracking-tighter text-foreground font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Our <span className="text-primary-gold italic font-heading">Premium</span> <br/>
            Services
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Elevating standards through meticulous craftsmanship and visionary design. Experience excellence in every detail.
          </p>

          <div className="mt-14 opacity-40">
             <div className="w-px h-16 bg-gradient-to-b from-primary-gold to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className="group premium-card flex flex-col h-full overflow-hidden"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-premium border border-border-subtle flex items-center justify-center text-lg text-primary-gold group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500">
                    <i className={service.icon}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-primary-gold transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-10 flex-grow opacity-80">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-border-subtle">
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/services/i, '').replace(/--/g, '-').replace(/-$/, '')}`} 
                      className="group/link inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary-gold transition-colors"
                    >
                      Learn More
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-off-white border-y border-border-subtle">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Commitment</span>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-foreground font-heading">
              Quality Without <br/>
              <span className="text-muted-foreground/30">Compromise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: "fas fa-certificate",
                title: "Certified",
                desc: "Professional services backed by years of certified excellence and mastery."
              },
              {
                icon: "fas fa-users",
                title: "Expert Team",
                desc: "Our specialists are dedicated to delivering bespoke solutions for every client."
              },
              {
                icon: "fas fa-clock",
                title: "Timed Delivery",
                desc: "We value your time as much as our craft, ensuring punctual and perfect results."
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-white rounded-3xl border border-border-subtle shadow-premium hover:shadow-hover transition-all duration-700 text-center">
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-off-white text-primary-gold text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <i className={item.icon}></i>
                </div>
                <h4 className="text-foreground font-bold uppercase text-xs tracking-widest mb-4">{item.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
