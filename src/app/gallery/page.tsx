"use client";

import Image from "next/image";
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
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Header */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-color/5 to-transparent"></div>
        <div className="container relative z-10 px-6 text-center">
          <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Visual Excellence</span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
            THE <span className="text-primary-color italic font-light font-serif">GALLERY</span>
          </h1>
          <p className="text-neutral-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            A curated showcase of our finest masterpieces. Explore the intersection of traditional craftsmanship and modern elegance.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-20 px-6">
        <div className="container overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-4 min-w-max pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                  filter === cat 
                    ? "bg-primary-color text-black border-primary-color shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                    : "bg-transparent text-neutral-500 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-40 px-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#111111] border border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 backdrop-blur-[2px] group-hover:backdrop-blur-none">
                 <span className="text-primary-color text-[8px] font-black uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                 </span>
                 <h3 className="text-xl font-black tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    {item.title}
                 </h3>
                 <div className="mt-4 w-10 h-[2px] bg-primary-color scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="container py-40 text-center">
             <i className="fas fa-camera text-neutral-800 text-6xl mb-6"></i>
             <p className="text-neutral-500 font-light italic">More masterpieces arriving soon...</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-[#050505] border-t border-white/5 text-center px-6">
         <div className="container max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
               Ready for your <br /> <span className="text-primary-color uppercase italic font-light font-serif">Original</span> masterpiece?
            </h2>
            <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-primary-color transition-all transform hover:scale-105 active:scale-95">
               Contact Our Artisans
            </Link>
         </div>
      </section>
    </div>
  );
}

import Link from "next/link";
