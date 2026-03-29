"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Tailoring", "Aari Work", "Makeup", "Photography", "Cakes"];

  const galleryItems = [
    {
      id: 1,
      title: "Royal Bridal Blouse",
      category: "Tailoring",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Intricate Aari Sleeve",
      category: "Aari Work",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Glamorous Bridal Makeup",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Cinematic Wedding Shoot",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Gold-Themed Tiered Cake",
      category: "Cakes",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb8c2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Custom Designer Gown",
      category: "Tailoring",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "Heavy Bridal Aari Work",
      category: "Aari Work",
      image: "https://images.unsplash.com/photo-1620794354252-09292db20b41?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      title: "Evening Party Look",
      category: "Makeup",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white text-foreground min-h-screen selection:bg-primary-gold/20 pt-20 overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-off-white">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/[0.03] to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <span className="text-primary-gold text-[11px] font-bold uppercase tracking-[0.5em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-1000">Visual Excellence</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-foreground font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            THE <span className="text-primary-gold italic font-heading">GALLERY</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            A curated showcase of our finest masterpieces. Explore the intersection of traditional craftsmanship and modern elegance.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-border-subtle sticky top-20 z-20 backdrop-blur-md bg-white/80">
        <div className="container-custom overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                  filter === cat 
                    ? "bg-foreground text-background border-foreground shadow-premium" 
                    : "bg-transparent text-muted-foreground border-border-subtle hover:border-primary-gold hover:text-primary-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group premium-card aspect-[4/5] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative flex-grow overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 cursor-pointer">
                   <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                         {item.category}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tighter text-foreground font-heading">
                         {item.title}
                      </h3>
                      <div className="mt-6 w-12 h-0.5 bg-primary-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="container-custom py-40 text-center">
             <div className="text-muted-foreground/10 text-8xl mb-8 flex justify-center">
               <i className="fas fa-camera"></i>
             </div>
             <p className="text-muted-foreground text-lg font-medium italic opacity-60">The collection is expanding. Check back shortly.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t border-border-subtle text-center">
         <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter text-foreground font-heading leading-tight">
               Ready for your <br /> <span className="text-primary-gold italic font-heading">Original</span> masterpiece?
            </h2>
            <Link href="/contact" className="inline-block bg-foreground text-background px-14 py-5 rounded-full font-bold text-xs uppercase tracking-[0.4em] hover:bg-primary-gold hover:text-foreground transition-all shadow-premium">
               Contact Our Artisans
            </Link>
         </div>
      </section>
    </div>
  );
}
