"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import ItemModal from "@/components/admin/ItemModal";

function ItemsContent() {
  const searchParams = useSearchParams();
  const serviceFilter = searchParams.get("service") || "all";
  const [isModalOpen, setModalOpen] = useState(false);

  const [items, setItems] = useState([
    { id: '1', title: 'Bridal Aari Design', service: 'aari-work', price: '₹4,500', category: 'Bridal', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=200' },
    { id: '2', title: 'Silk Blouse Stitching', service: 'tailoring', price: '₹1,200', category: 'Simple', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=200' },
    { id: '3', title: 'Logo Design Pack', service: 'designing', price: '₹2,500', category: 'Business', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=200' },
  ]);

  const filteredItems = serviceFilter === "all" 
    ? items 
    : items.filter(item => item.service === serviceFilter);

  return (
    <div className="space-y-12">
      <ItemModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceSlug={serviceFilter !== 'all' ? serviceFilter : undefined}
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-bold tracking-tighter mb-3 text-foreground font-heading text-4xl md:text-5xl lg:text-6xl">
            Portfolio <span className="text-primary-gold italic font-heading">Items</span>
          </h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">
            {serviceFilter === "all" ? "All portfolio projects" : `Division: ${serviceFilter}`}
          </p>
        </div>
        <div className="flex gap-4">
           {serviceFilter !== 'all' && (
             <Link href="/admin/items" className="bg-white text-foreground px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] border border-border-subtle shadow-sm hover:border-primary-gold hover:text-primary-gold transition-all flex items-center gap-2">
               Show All
             </Link>
           )}
           <button 
             onClick={() => setModalOpen(true)}
             className="bg-foreground text-background px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary-gold hover:text-foreground transition-all shadow-premium flex items-center gap-3"
           >
             <i className="fas fa-plus"></i> Add New Item
           </button>
        </div>
      </div>

      {/* Items Table */}
      <div className="bg-white rounded-[2.5rem] border border-border-subtle overflow-hidden shadow-premium">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border-subtle bg-off-white">
              <th className="p-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Preview</th>
              <th className="p-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Project Details</th>
              <th className="p-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Division</th>
              <th className="p-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Price</th>
              <th className="p-8 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-b border-border-subtle hover:bg-off-white transition-colors group">
                <td className="p-8">
                   <div className="w-20 h-20 bg-off-white rounded-2xl overflow-hidden border border-border-subtle group-hover:border-primary-gold/40 transition-all shadow-sm">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                   </div>
                </td>
                <td className="p-8">
                   <h4 className="font-bold text-foreground mb-2 tracking-tight">{item.title}</h4>
                   <span className="px-3 py-1 bg-off-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground border border-border-subtle">{item.category}</span>
                </td>
                <td className="p-8 text-muted-foreground font-medium text-sm uppercase tracking-[0.2em] opacity-70">
                   {item.service}
                </td>
                <td className="p-8">
                   <span className="text-primary-gold font-bold">{item.price}</span>
                </td>
                <td className="p-8 text-right space-x-2">
                  <button className="w-10 h-10 rounded-xl bg-off-white border border-border-subtle items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-all inline-flex shadow-sm">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-off-white border border-border-subtle items-center justify-center text-xs text-muted-foreground hover:text-rose-500 hover:border-rose-300 transition-all inline-flex shadow-sm">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredItems.length === 0 && (
          <div className="p-24 text-center">
             <div className="text-muted-foreground/10 text-3xl md:text-4xl mb-6 flex justify-center">
               <i className="fas fa-folder-open"></i>
             </div>
             <p className="text-muted-foreground font-medium italic opacity-60">No items found for this selection.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminItems() {
  return (
    <Suspense fallback={<div className="p-10 text-primary-gold font-bold italic animate-pulse">Loading Portfolio...</div>}>
      <ItemsContent />
    </Suspense>
  );
}
