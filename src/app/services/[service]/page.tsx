"use client";

import { use } from "react";
import Link from "next/link";
import { SAMPLE_ITEMS, SERVICE_NAMES } from "@/lib/data";

export default function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = use(params);
  const serviceSlug = resolvedParams.service;
  const serviceName = SERVICE_NAMES[serviceSlug] || "Our Services";
  
  const items = SAMPLE_ITEMS.filter(item => item.category === serviceSlug);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Premium Header */}
      <div className="relative bg-neutral-950 py-24 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-color opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-color opacity-5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 px-4">
          <Link href="/services" className="inline-flex items-center text-primary-color hover:text-white transition-colors mb-8 text-sm font-semibold tracking-widest uppercase">
            <span className="mr-2">←</span> Back to all services
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-black text-text-primary mb-6 leading-tight tracking-tight text-6xl md:text-8xl lg:text-9xl font-heading">
              {serviceName}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              Experience excellence in every detail. Browse our portfolio of specialized {serviceName.toLowerCase()} tailored to meet your standards.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-grow py-20 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Latest Projects</h2>
              <div className="h-1 w-20 bg-primary-color"></div>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm">
              Showing {items.length} premium options available in this category. Click WhatsApp to inquire or book instantly.
            </p>
          </div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {items.map((item) => (
                <div key={item.id} className="group bg-dark-blue rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <i className="fab fa-whatsapp text-white text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-500"></i>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 text-neutral-900 leading-tight group-hover:text-secondary-color transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-neutral-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-400 uppercase font-black tracking-widest mb-1">Starting from</span>
                        <span className="text-2xl font-bold text-neutral-900">{item.price}</span>
                      </div>
                      
                      <a 
                        href={`https://wa.me/${item.phone}?text=Hello GK Star, I would like to inquire about ${item.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-color hover:bg-neutral-900 text-neutral-950 hover:text-primary-color font-black py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-tighter"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-dark-blue rounded-3xl p-20 text-center shadow-sm border border-neutral-100">
              <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-layer-group text-neutral-300 text-4xl"></i>
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4 uppercase tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Update in Progress</h3>
              <p className="text-neutral-500 max-w-md mx-auto mb-10">We're currently curating the best projects for this category. Check back shortly to see our high-quality work.</p>
              <Link href="/services" className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-color hover:text-black transition-all">Explore Other Categories</Link>
            </div>
          )}
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-neutral-100 py-10 border-y border-neutral-200">
        <div className="container px-4 flex flex-wrap justify-around gap-8 text-neutral-400 font-bold uppercase text-[10px] tracking-widest">
           <span className="flex items-center gap-2"><i className="fas fa-check-circle text-primary-color"></i> Verified Experts</span>
           <span className="flex items-center gap-2"><i className="fas fa-clock text-primary-color"></i> On-Time Delivery</span>
           <span className="flex items-center gap-2"><i className="fas fa-shield-alt text-primary-color"></i> Secure Booking</span>
           <span className="flex items-center gap-2"><i className="fas fa-star text-primary-color"></i> Premium Quality</span>
        </div>
      </div>
    </div>
  );
}
