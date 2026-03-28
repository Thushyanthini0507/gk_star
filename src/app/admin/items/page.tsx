"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import ItemModal from "@/components/admin/ItemModal";

function ItemsContent() {
  const searchParams = useSearchParams();
  const serviceFilter = searchParams.get("service") || "all";
  const [isModalOpen, setModalOpen] = useState(false);

  // Mock data for items
  const [items, setItems] = useState([
    { id: '1', title: 'Bridal Aari Design', service: 'aari-work', price: '₹4,500', category: 'Bridal', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=200' },
    { id: '2', title: 'Silk Blouse Stitching', service: 'tailoring', price: '₹1,200', category: 'Simple', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=200' },
    { id: '3', title: 'Logo Design Pack', service: 'designing', price: '₹2,500', category: 'Business', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=200' },
    // ... more mock items
  ]);

  const filteredItems = serviceFilter === "all" 
    ? items 
    : items.filter(item => item.service === serviceFilter);

  return (
    <div className="space-y-10">
      <ItemModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceSlug={serviceFilter !== 'all' ? serviceFilter : undefined}
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Portfolio <span className="text-neutral-700 font-light italic">Items</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light uppercase tracking-widest tracking-widest">
            {serviceFilter === "all" ? "Managing all portfolio projects" : `Portfolio for ${serviceFilter}`}
          </p>
        </div>
        <div className="flex gap-4">
           {serviceFilter !== 'all' && (
             <Link href="/admin/items" className="bg-neutral-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/5 hover:border-white/20 transition-all flex items-center gap-2">
               Show All
             </Link>
           )}
           <button 
             onClick={() => setModalOpen(true)}
             className="bg-primary-color text-black px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all transform active:scale-95 flex items-center gap-3"
           >
             <i className="fas fa-plus"></i> Add New Item
           </button>
        </div>
      </div>

      {/* Items Table/List */}
      <div className="bg-[#111111] rounded-[2.5rem] border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-neutral-500">Preview</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-neutral-500">Project Details</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-neutral-500">Service Category</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-neutral-500">Price Range</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-widest text-neutral-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                <td className="p-8">
                   <div className="w-20 h-20 bg-neutral-800 rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary-color/40 transition-all">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                   </div>
                </td>
                <td className="p-8">
                   <h4 className="font-black text-white mb-1">{item.title}</h4>
                   <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-500">{item.category}</span>
                </td>
                <td className="p-8 text-neutral-400 font-light text-sm uppercase tracking-widest">
                   {item.service}
                </td>
                <td className="p-8">
                   <span className="text-primary-color font-black">{item.price}</span>
                </td>
                <td className="p-8 text-right space-x-2">
                  <button className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 items-center justify-center text-xs text-neutral-500 hover:text-white hover:border-white/20 transition-all inline-flex">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 items-center justify-center text-xs text-neutral-500 hover:text-rose-500 hover:border-rose-500/20 transition-all inline-flex">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredItems.length === 0 && (
          <div className="p-24 text-center">
             <i className="fas fa-folder-open text-4xl text-neutral-800 mb-6 block"></i>
             <p className="text-neutral-500 font-light italic">No items found for this selection.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminItems() {
  return (
    <Suspense fallback={<div className="p-10 text-primary-color font-black italic">Loading Portfolio...</div>}>
      <ItemsContent />
    </Suspense>
  );
}
