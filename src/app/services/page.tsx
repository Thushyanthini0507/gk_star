"use client";

import Link from "next/link";
import './services.css';

export default function ServicesPage() {
  const servicesData = [
    {
      id: 1,
      title: "Tailoring Services",
      description: "Blouse stitching, Saree fall & pico, Custom designs, and Bridal blouse work.",
      icon: "fas fa-cut",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Aari Work Services",
      description: "Bridal Aari work, Custom embroidery, and Aari work classes for all levels.",
      icon: "fas fa-magic",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Beauty & Makeup",
      description: "Bridal makeup, Party makeup, Facials, Manicure, and Eyebrow threading.",
      icon: "fas fa-sparkles",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Hair Cutting & Salon",
      description: "Ladies & Men's haircut, styling, treatments, coloring, and straightening.",
      icon: "fas fa-user-tie",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Designing Services",
      description: "Logo, Visiting cards, Posters, Social media, and Banner designing.",
      icon: "fas fa-palette",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Photography & Camera",
      description: "Event photography, Wedding/Birthday shoots, and Camera rental services.",
      icon: "fas fa-camera",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Web Design",
      description: "Professional website design, landing pages, and online store development.",
      icon: "fas fa-laptop-code",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Cake Services",
      description: "Customized Birthday, Wedding, and Themed cakes for all your special occasions.",
      icon: "fas fa-birthday-cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 9,
      title: "Vehicle Services",
      description: "Professional vehicle hiring and rental services for all your travel needs.",
      icon: "fas fa-car",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      title: "Poultry Services",
      description: "Fresh chicken sales, Bulk chicken supply, and comprehensive Farm services.",
      icon: "fas fa-drumstick-bite",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      title: "Panthal Services",
      description: "Premium panthal and decoration services for weddings, parties, and events.",
      icon: "fas fa-campground",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
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
                  
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/services/i, '').replace(/--/g, '-').replace(/-$/, '')}`} 
                    className="premium-service-btn"
                  >
                    View Projects <span style={{ marginLeft: "8px" }}>→</span>
                  </Link>
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
