"use client";

import './about.css';

export default function AboutPage() {
  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "120px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "var(--primary-color)", fontSize: "3.5rem", marginBottom: "20px", fontFamily: "var(--font-heading)" }}>
            About GK Star
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", color: "#e0e0e0", fontWeight: 300 }}>
            Redefining the service industry through trust, quality craftsmanship, and uncompromising dedication to our clients.
          </p>
        </div>
      </div>

      <section className="about-section" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          
          {/* Mission Grid (Text Left, Image Right) */}
          <div className="about-grid">
            <div className="about-content">
              <span className="about-content-badge">Our Mission</span>
              <h2>To simplify your life through exceptional services.</h2>
              <p>
                Founded on the principles of integrity and excellence, GK Star Multi Services was created to bridge the gap between skilled professionals and individuals seeking reliable help.
              </p>
              <p>
                We believe that finding quality home and corporate services shouldn't be a gamble. Every professional on our platform is vetted, and every project is backed by our satisfaction guarantee. We don't just fix problems; we build lasting peace of mind.
              </p>
              <a href="/services" className="btn btn-primary" style={{ marginTop: "20px" }}>Discover Services</a>
            </div>
            <div className="about-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team working" />
            </div>
          </div>

          {/* Vision Grid (Image Left, Text Right using reverse) */}
          <div className="about-grid reverse" style={{ marginTop: "120px" }}>
            <div className="about-content">
              <span className="about-content-badge">Our Vision</span>
              <h2>A trusted ecosystem where quality meets demand instantly.</h2>
              <p>
                Our vision extends beyond today's repairs. We aim to foster an environment where local experts can thrive by connecting them seamlessly with customers utilizing our advanced, user-friendly platform.
              </p>
              <p>
                As we grow, we remain steadfast in our commitment to upholding the "Gold Standard" (our GK Star promise) in every interaction, transaction, and completed job.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Corporate Vision" />
            </div>
          </div>

        </div>
      </section>

      {/* Stats Band */}
      <div className="stats-container">
        <div className="stat-box">
          <h3>5k+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-box">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-box">
          <h3>150+</h3>
          <p>Verified Pros</p>
        </div>
        <div className="stat-box">
          <h3>10</h3>
          <p>Years Experience</p>
        </div>
      </div>

      {/* Values Section */}
      <section className="section-padding" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>The Core Values We Live By</h2>
            <div style={{ height: "3px", width: "80px", backgroundColor: "var(--primary-color)", margin: "0 auto" }}></div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-shield-alt value-icon"></i>
              <h3>Trust & Safety</h3>
              <p>Rigorous vetting processes ensure only the most reliable professionals cross your threshold.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-gem value-icon"></i>
              <h3>Unmatched Quality</h3>
              <p>We mandate the use of high-quality materials and adhere strictly to industry best-practices.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake value-icon"></i>
              <h3>Transparency</h3>
              <p>Clear pricing, open communication, and absolutely no hidden fees. Ever.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
