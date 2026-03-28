"use client";

import { useState } from "react";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug?: string;
}

export default function ItemModal({ isOpen, onClose, serviceSlug }: ItemModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-black/60">
      <div className="bg-[#111111] w-full max-w-2xl rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-10 md:p-12 relative">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500/20 hover:text-rose-500 transition-all"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="mb-10">
            <span className="text-primary-color text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Portfolio Management</span>
            <h2 className="text-3xl font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              Add New <span className="text-neutral-700 font-light italic text-2xl lowercase">Project</span>
            </h2>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Project Title</label>
                <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="e.g. Bridal Silk Blouse" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Price / Range</label>
                <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="e.g. ₹4,500" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Sub-Category</label>
                <select className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-all appearance-none cursor-pointer">
                   <option>Simple</option>
                   <option>Bridal</option>
                   <option>Heavy Work</option>
                   <option>Custom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Target Service</label>
                <input type="text" className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white/40 cursor-not-allowed" value={serviceSlug || "All Services"} readOnly />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-4">Description</label>
              <textarea rows={3} className="w-full bg-[#050505] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-color transition-all" placeholder="Describe the craftsmanship and details..."></textarea>
            </div>

            <div className="p-10 border-2 border-dashed border-white/5 rounded-3xl text-center group hover:border-primary-color/20 transition-all cursor-pointer">
               <i className="fas fa-cloud-upload-alt text-4xl text-neutral-800 group-hover:text-primary-color transition-colors mb-4"></i>
               <p className="text-xs font-black uppercase tracking-widest text-neutral-600">Click to Upload Portfolio Image</p>
               <p className="text-[10px] text-neutral-800 mt-2 font-light">PNG, JPG up to 10MB</p>
            </div>

            <div className="flex gap-4 pt-4">
               <button type="button" onClick={onClose} className="flex-1 px-8 py-5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Cancel</button>
               <button type="submit" className="flex-grow bg-primary-color text-black px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-primary-color/5">Publish to Portfolio</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
