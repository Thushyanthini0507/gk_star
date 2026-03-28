"use client";

import { use, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SAMPLE_ITEMS, SERVICE_NAMES } from "@/lib/data";

export default function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = use(params);
  const serviceSlug = resolvedParams.service;
  const serviceName = SERVICE_NAMES[serviceSlug] || "Our Services";
  
  const [activeFilter, setActiveFilter] = useState("All");

  // Get all items for this service
  const allItems = useMemo(() => 
    SAMPLE_ITEMS.filter(item => item.category === serviceSlug),
  [serviceSlug]);

  // Extract unique subcategories for filtering
  const subcategories = useMemo(() => {
    const subs = Array.from(new Set(allItems.map(item => item.subcategory)));
    return ["All", ...subs];
  }, [allItems]);

  // Filter items based on selection
  const filteredItems = useMemo(() => 
    activeFilter === "All" 
      ? allItems 
      : allItems.filter(item => item.subcategory === activeFilter),
  [allItems, activeFilter]);

  // Dynamic Hero Image based on service
  const heroImages: Record<string, string> = {
    "tailoring": "https://images.unsplash.com/photo-1552010103-ba68b422a550?auto=format&fit=crop&q=80&w=1920",
    "aari-work": "https://images.unsplash.com/photo-1620794354252-09292db20b41?auto=format&fit=crop&q=80&w=1920",
    "beauty-makeup": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1920",
    "hair-cutting-salon": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920",
    "designing": "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1920",
    "photography-camera": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1920",
    "default": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
  };

  const currentHero = heroImages[serviceSlug] || heroImages.default;

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col">
      {/* 2. Hero Section Upgrade */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <Image
          src={currentHero}
          alt={serviceName}
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Dark luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container relative z-10 px-6">
          <Link href="/services" className="inline-flex items-center text-primary-color hover:text-white transition-colors mb-8 text-xs font-black tracking-widest uppercase bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-primary-color/20">
            <span className="mr-2">←</span> Browse Categories
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              {serviceName.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-primary-color" : "text-white"}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mb-10">
              Discover premium <span className="text-white font-medium italic">{serviceName.toLowerCase()}</span> tailored for your luxury lifestyle and special moments.
            </p>
            <a href="#services-grid" className="bg-primary-color text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 inline-block">
              Explore Projects
            </a>
          </div>
        </div>
      </section>

      {/* 6. Filtering System */}
      <div className="sticky top-[80px] z-[40] bg-black/80 backdrop-blur-xl border-y border-white/10 py-4">
        <div className="container px-6 overflow-x-auto flex gap-4 no-scrollbar items-center">
          <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest mr-4 whitespace-nowrap">Filter By:</span>
          {subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveFilter(sub)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeFilter === sub 
                  ? "bg-primary-color text-black border-primary-color" 
                  : "bg-neutral-900 text-neutral-400 border-white/5 hover:border-primary-color/50"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Card Design Enhancement (Grid) */}
      <section id="services-grid" className="py-20 px-6 bg-[#000000]">
        <div className="container">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group flex flex-col bg-[#111111] rounded-3xl overflow-hidden border border-white/5 hover:border-primary-color/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)] h-full">
                  {/* Image Handling */}
                  <div className="relative aspect-[1/1] overflow-hidden bg-[#1a1a1a]">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary-color uppercase border border-primary-color/20">
                      {item.subcategory}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight group-hover:text-primary-color transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-col gap-6 pt-6 border-t border-white/5 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">Price Basis</span>
                        <span className="text-2xl font-black text-primary-color tracking-tighter">{item.price}</span>
                      </div>
                      
                      {/* 5. CTA Button Improvement */}
                      <a 
                        href={`https://wa.me/${item.phone}?text=Hello GK Star, I am interested in ${item.title} (${item.subcategory})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-primary-color text-black font-black py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-xs uppercase tracking-widest group/btn"
                      >
                        <i className="fab fa-whatsapp text-lg"></i>
                        Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="w-32 h-32 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-10 border border-white/5">
                <i className="fas fa-search text-neutral-700 text-5xl"></i>
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">No items found</h3>
              <p className="text-neutral-500 max-w-md mx-auto mb-12 font-light">Try selecting a different filter or check back later for new arrivals.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="text-primary-color font-black uppercase tracking-widest text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. Extra Sections */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Legacy</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>What Clients <span className="text-neutral-600">Are Saying</span></h2>
            </div>
            <div className="flex gap-4">
              <i className="fas fa-star text-primary-color"></i>
              <i className="fas fa-star text-primary-color"></i>
              <i className="fas fa-star text-primary-color"></i>
              <i className="fas fa-star text-primary-color"></i>
              <i className="fas fa-star text-primary-color"></i>
              <span className="font-black text-xs uppercase ml-2 tracking-widest">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Lakshmi R.", text: "The Aari work was absolutely stunning. Perfect for my bridal blouse!", rating: 5 },
              { name: "Priya S.", text: "Incredible attention to detail. The tailoring fit was precise and comfortable.", rating: 5 },
              { name: "Anitha M.", text: "GK Star's makeup services are world-class. Truly premium experience.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="p-10 bg-[#111111] rounded-[40px] border border-white/5 relative overflow-hidden group">
                 <i className="fas fa-quote-right absolute -top-4 -right-4 text-white/5 text-8xl group-hover:text-primary-color/10 transition-colors duration-700"></i>
                 <p className="text-lg font-light leading-relaxed italic mb-8 relative z-10 text-neutral-300">"{review.text}"</p>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-primary-color/20 flex items-center justify-center text-primary-color font-black text-xs uppercase">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest">{review.name}</h4>
                      <div className="flex text-[8px] text-primary-color gap-1 mt-1">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                      </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <div className="bg-[#000000] py-16 border-t border-white/5 px-6">
        <div className="container flex flex-wrap justify-between gap-12 items-center">
           <div className="max-w-xs">
              <h5 className="text-primary-color font-black uppercase text-xs tracking-widest mb-4">Quality Assurance</h5>
              <p className="text-neutral-500 text-sm font-light">Every project at GK Star undergoes a 3-step quality check to ensure absolute perfection.</p>
           </div>
           <div className="flex gap-16 flex-wrap">
              <div className="flex flex-col gap-2">
                 <span className="text-3xl font-black tracking-tighter">100%</span>
                 <span className="text-neutral-600 text-[10px] font-black uppercase tracking-widest">Success Rate</span>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-3xl font-black tracking-tighter">24/7</span>
                 <span className="text-neutral-600 text-[10px] font-black uppercase tracking-widest">Support</span>
              </div>
              <div className="flex flex-col gap-2">
                 <span className="text-3xl font-black tracking-tighter">5k+</span>
                 <span className="text-neutral-600 text-[10px] font-black uppercase tracking-widest">Happy Clients</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
