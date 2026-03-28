import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Elegance in Every <span style={{ color: "var(--text-light)" }}>Service</span>
          </h1>
          <p className="hero-subtitle">
            Your one-stop destination for premium tailoring, creative design, and professional services.
          </p>
          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <a href="https://wa.me/94772861967" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Premier Services</h2>
            <p>Curated professionals bringing quality and care to everything they do.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Tailoring"
                className="service-img"
              />
              <div className="service-content">
                <i className="fas fa-cut service-icon"></i>
                <h3>Tailoring Services</h3>
                <p>Blouse stitching, customized designs, and bridal blouse work by experts.</p>
                <Link href="/services/tailoring" className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>

            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Aari Work"
                className="service-img"
              />
              <div className="service-content">
                <i className="fas fa-magic service-icon"></i>
                <h3>Aari Work</h3>
                <p>Exquisite bridal Aari designs and professional embroidery embroidery classes.</p>
                <Link href="/services/aari-work" className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>

            <div className="service-card">
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Designing"
                className="service-img"
              />
              <div className="service-content">
                <i className="fas fa-palette service-icon"></i>
                <h3>Designing Services</h3>
                <p>Professional logo design, visiting cards, and social media branding.</p>
                <Link href="/services/designing" className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "50px" }}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "var(--secondary-color)", color: "var(--text-light)" }}>
        <div className="container text-center" style={{ maxWidth: "800px" }}>
          <h2 className="section-title" style={{ color: "var(--primary-color)" }}>Why Choose GK Star?</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
            We connect you with the most reliable experts in town. Whether you are planning a wedding, a party, or need an everyday service, our professionals are vetted and ready to serve.
          </p>
          <Link href="/about" className="btn btn-primary" style={{ backgroundColor: "var(--text-light)", color: "var(--secondary-color)" }}>
            Read Our Story
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px" }}>
            <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "12px", borderLeft: "4px solid var(--primary-color)" }}>
              <i className="fas fa-quote-left" style={{ color: "var(--primary-color)", fontSize: "2rem", marginBottom: "15px" }}></i>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "GK Star made my wedding planning so easy! I booked a makeup artist and a photographer through them and the quality was exceptional."
              </p>
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>&mdash; Sarah J.</h4>
            </div>
            <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "12px", borderLeft: "4px solid var(--primary-color)" }}>
              <i className="fas fa-quote-left" style={{ color: "var(--primary-color)", fontSize: "2rem", marginBottom: "15px" }}></i>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "I joined as a tailor and my client base has grown drastically. The 80% commission goes straight into my pocket. Best platform ever."
              </p>
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>&mdash; Michael T. (Vendor)</h4>
            </div>
            <div style={{ background: "var(--bg-light)", padding: "30px", borderRadius: "12px", borderLeft: "4px solid var(--primary-color)" }}>
              <i className="fas fa-quote-left" style={{ color: "var(--primary-color)", fontSize: "2rem", marginBottom: "15px" }}></i>
              <p style={{ fontStyle: "italic", marginBottom: "20px" }}>
                "The custom birthday cake I ordered via GK Star was beautiful and delicious. Highly recommend their food vendors!"
              </p>
              <h4 style={{ fontFamily: "var(--font-heading)", color: "var(--secondary-color)" }}>&mdash; Emily R.</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
