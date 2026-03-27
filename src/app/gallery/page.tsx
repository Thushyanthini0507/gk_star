"use client";

import './gallery.css';

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Modern Bathroom Renovation",
      category: "Plumbing & Tiling",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Commercial Lighting",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1542617937-ff70f03eb981?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Custom Kitchen Cabinetry",
      category: "Carpentry",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a872e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Exterior House Painting",
      category: "Painting",
      image: "https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Deep House Cleaning",
      category: "Cleaning",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "HVAC Installation",
      category: "Appliance",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Hardwood Flooring",
      category: "Carpentry",
      image: "https://images.unsplash.com/photo-1521798835848-1db6fc6af53c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Smart Home Wiring",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "100px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "var(--primary-color)", fontSize: "3.5rem", marginBottom: "20px", fontFamily: "var(--font-heading)" }}>
            Project Gallery
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#e0e0e0", fontWeight: 300 }}>
            Take a look through our portfolio of successfully completed structural, aesthetic, and functional projects.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          
          <div className="text-center mb-12">
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>Our Recent Work</h2>
            <div style={{ height: "3px", width: "80px", backgroundColor: "var(--primary-color)", margin: "0 auto 30px" }}></div>
            
            {/* Filter Pills (Visual only for now) */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-5 py-2 rounded-full bg-black text-primary-color font-medium cursor-pointer" style={{ color: "var(--primary-color)" }}>All</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-gray-600 cursor-pointer transition-colors">Electrical</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-gray-600 cursor-pointer transition-colors">Plumbing</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-gray-600 cursor-pointer transition-colors">Carpentry</span>
              <span className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-gray-600 cursor-pointer transition-colors">Painting</span>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} className="gallery-image" loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-icon-wrapper">
                    <i className="fas fa-search-plus"></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
