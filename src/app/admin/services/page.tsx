"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminServices() {
  const [services, setServices] = useState([
    { id: '1', name: 'Tailoring Services', slug: 'tailoring', icon: 'fas fa-cut', itemsCount: 45 },
    { id: '2', name: 'Aari Work Services', slug: 'aari-work', icon: 'fas fa-magic', itemsCount: 32 },
    { id: '3', name: 'Beauty & Makeup', slug: 'beauty-makeup', icon: 'fas fa-sparkles', itemsCount: 28 },
    { id: '4', name: 'Hair Cutting & Salon', slug: 'hair-salon', icon: 'fas fa-user-tie', itemsCount: 20 },
    { id: '5', name: 'Designing Services', slug: 'designing', icon: 'fas fa-palette', itemsCount: 56 },
    { id: '6', name: 'Photography & Camera', slug: 'photography', icon: 'fas fa-camera', itemsCount: 15 },
    { id: '8', name: 'Cake Services', slug: 'cakes', icon: 'fas fa-birthday-cake', itemsCount: 12 },
    { id: '9', name: 'Vehicle Services', slug: 'vehicles', icon: 'fas fa-car', itemsCount: 8 },
    { id: '10', name: 'Poultry Services', slug: 'poultry', icon: 'fas fa-drumstick-bite', itemsCount: 5 },
    { id: '11', name: 'Panthal Services', slug: 'panthal', icon: 'fas fa-campground', itemsCount: 10 },
  ]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Service <span className="text-neutral-700 font-light italic">Categories</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light uppercase tracking-widest tracking-widest">Manage your 10 core business divisions</p>
        </div>
        <button className="bg-primary-color text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all transform active:scale-95 flex items-center gap-3">
          <i className="fas fa-plus"></i> Add New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group bg-[#111111] rounded-[2.5rem] border border-white/5 p-8 hover:border-primary-color/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(212,175,55,0.05)] flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary-color text-xl group-hover:bg-primary-color group-hover:text-black transition-all">
                  <i className={service.icon}></i>
               </div>
               <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-xs text-neutral-500 hover:text-white hover:border-white/20 transition-all">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-xs text-neutral-500 hover:text-rose-500 hover:border-rose-500/20 transition-all">
                    <i className="fas fa-trash"></i>
                  </button>
               </div>
            </div>

            <h3 className="text-2xl font-black mb-2 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>{service.name}</h3>
            <p className="text-neutral-600 text-[10px] font-black uppercase tracking-widest mb-8">slug: {service.slug}</p>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
              <div className="flex flex-col">
                 <span className="text-xs font-black tracking-tighter text-white">{service.itemsCount}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-neutral-600">Total Items</span>
              </div>
              <Link 
                href={`/admin/items?service=${service.slug}`}
                className="text-primary-color text-[10px] font-black uppercase tracking-widest hover:underline"
              >
                Manage Portfolio →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
