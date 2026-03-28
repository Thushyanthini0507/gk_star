"use client";

import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--primary-color)", fontSize: "3rem", marginBottom: "20px" }}>Get In Touch</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            We&apos;re here to help you find the right professionals for your needs.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container contact-container">
          {/* Contact Info */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Our Location</h4>
                <p>80 Sivan Road, Uruthirapuram,<br />Kilinochchi, Uruthirapuram North</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone Numbers</h4>
                <p>
                  <a href="tel:+94765427913" style={{ color: "#ddd" }}>+94 76 542 7913</a><br />
                  <a href="tel:+94743698753" style={{ color: "#ddd" }}>+94 74 369 8753</a><br />
                  <a href="tel:+94772861967" style={{ color: "#ddd" }}>+94 77 286 1967</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Address</h4>
                <p>
                  <a href="mailto:gkprivatelimited67@gmail.com" style={{ color: "#ddd" }}>
                    gkprivatelimited67@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <h4 style={{ fontFamily: "var(--font-body)", color: "#ddd", marginBottom: "15px", fontWeight: "500" }}>
                Fastest Way to Reach Us
              </h4>
              <a href="https://wa.me/94772861967" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "100%", textAlign: "center", borderRadius: "6px" }}>
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 style={{ color: "var(--secondary-color)", marginBottom: "25px", fontSize: "1.8rem", fontFamily: "var(--font-heading)" }}>
              Send a Message
            </h3>
            <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email Address" required />
              </div>
              <div className="form-group">
                <select name="service" required style={{ width: "100%", padding: "14px 15px", border: "1px solid #ddd", borderRadius: "6px", fontFamily: "inherit", fontSize: "1rem", color: "#555", background: "#fff" }}>
                  <option value="">Select a Service...</option>
                  <option value="tailoring">Tailoring Services</option>
                  <option value="aari">Aari Work Services</option>
                  <option value="beauty">Beauty &amp; Makeup</option>
                  <option value="salon">Hair Cutting &amp; Salon</option>
                  <option value="designing">Designing Services</option>
                  <option value="photography">Photography &amp; Camera</option>
                  <option value="webdesign">Web Design</option>
                  <option value="cake">Cake Services</option>
                  <option value="vehicle">Vehicle Services</option>
                  <option value="poultry">Poultry Services</option>
                  <option value="panthal">Panthal Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" rows={6} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7!2d80.3964!3d9.3988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjMnNTYuNyJOIDgwwrAyMyczMS43IkU!5e0!3m2!1sen!2slk!4v1633000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
