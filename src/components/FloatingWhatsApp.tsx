"use client";

export default function FloatingWhatsApp() {
  const phoneNumber = "919876543210"; // Default contact number
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Contact on WhatsApp"
    >
      <i className="fab fa-whatsapp text-3xl md:text-4xl"></i>
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-black text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-primary-color/20">
        Inquire on WhatsApp
      </span>
    </a>
  );
}
