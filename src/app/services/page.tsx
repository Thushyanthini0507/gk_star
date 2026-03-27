"use client";

import './services.css';

export default function ServicesPage() {
  const servicesData = [
    {
      id: 1,
      title: "Plumbing Services",
      description: "Expert plumbing solutions for residential and commercial properties. From leak repairs to full installations.",
      icon: "fas fa-tint",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Electrical Work",
      description: "Certified electricians answering your every need. Lighting, wiring, panel upgrades, and emergency services.",
      icon: "fas fa-bolt",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Carpentry & Woodwork",
      description: "Custom carpentry, furniture repair, and comprehensive woodworking services by skilled artisans.",
      icon: "fas fa-hammer",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Home Cleaning",
      description: "Thorough, reliable, and detailed home and office cleaning services tailored to your schedule.",
      icon: "fas fa-broom",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Painting Services",
      description: "Transform your spaces with our premium interior and exterior painting solutions.",
      icon: "fas fa-paint-roller",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Appliance Repair",
      description: "Fast and reliable repair services for all your major household appliances. We get it working again.",
      icon: "fas fa-tools",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "100px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        
        {/* Subtle background pattern overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "var(--primary-color)", fontSize: "3.5rem", marginBottom: "20px", fontFamily: "var(--font-heading)", WebkitFontSmoothing: "antialiased" }}>
            Our Premium Services
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto", color: "#e0e0e0", fontWeight: 300 }}>
            Discover the wide array of top-tier professional services we offer at GK Star. 
            Quality craftsmanship paired with unmatched reliability.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container services-premium-container">
          
          <div className="text-center mb-16">
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>Explore What We Do</h2>
            <div style={{ height: "3px", width: "80px", backgroundColor: "var(--primary-color)", margin: "0 auto 20px" }}></div>
            <p style={{ color: "#666", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
              We bring convenience and excellence to your doorstep. Browse our most requested services below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service) => (
              <div key={service.id} className="premium-service-card">
                <div className="premium-img-container">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="premium-img-overlay"></div>
                </div>
                <div className="premium-service-content">
                  <div className="premium-service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="premium-service-title">{service.title}</h3>
                  <p className="premium-service-desc">{service.description}</p>
                  
                  <a href={`/contact?service=${encodeURIComponent(service.title)}`} className="premium-service-btn">
                    Book Service <span style={{ marginLeft: "8px" }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* Call to action section */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--primary-color)", color: "var(--text-dark)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "20px", color: "var(--text-dark)" }}>Don't see what you need?</h2>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 30px", opacity: 0.9 }}>
            Reach out to our support team and we will assist you with specialized requests.
          </p>
          <a href="/contact" className="btn btn-secondary" style={{ padding: "15px 35px", fontSize: "1.1rem" }}>
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
