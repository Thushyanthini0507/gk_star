"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-bold tracking-tighter mb-3 text-foreground font-heading text-4xl md:text-5xl lg:text-6xl">
            Service <span className="text-primary-gold italic font-heading">Categories</span>
          </h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Manage your 10 core business divisions</p>
        </div>
        <button className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary-gold hover:text-foreground transition-all shadow-premium flex items-center gap-3">
          <i className="fas fa-plus"></i> Add New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="group premium-card p-8 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
            <div className="flex justify-between items-start mb-10">
               <div className="w-14 h-14 bg-off-white rounded-2xl flex items-center justify-center text-primary-gold text-xl group-hover:bg-primary-gold group-hover:text-foreground transition-all duration-500 shadow-sm border border-border-subtle">
                  <i className={service.icon}></i>
               </div>
               <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-xl bg-off-white border border-border-subtle flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-all shadow-sm">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="w-9 h-9 rounded-xl bg-off-white border border-border-subtle flex items-center justify-center text-xs text-muted-foreground hover:text-rose-500 hover:border-rose-300 transition-all shadow-sm">
                    <i className="fas fa-trash"></i>
                  </button>
               </div>
            </div>

            <h3 className="text-xl font-bold mb-2 tracking-tighter text-foreground font-heading">{service.name}</h3>
            <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em] mb-8 opacity-50">/{service.slug}</p>
            
            <div className="mt-auto pt-6 border-t border-border-subtle flex justify-between items-center">
              <div className="flex flex-col">
                 <span className="text-2xl font-bold tracking-tighter text-foreground font-heading">{service.itemsCount}</span>
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60">Items</span>
              </div>
              <Link 
                href={`/admin/items?service=${service.slug}`}
                className="text-primary-gold text-[10px] font-bold uppercase tracking-[0.2em] hover:underline flex items-center gap-2 group/link"
              >
                Manage <i className="fas fa-arrow-right group-hover/link:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
