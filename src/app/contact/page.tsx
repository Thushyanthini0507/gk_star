"use client";

import './contact.css';

export default function Contact() {
  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <h1 style={{ color: "var(--primary-color)", fontSize: "3rem", marginBottom: "20px" }}>Get In Touch</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            We're here to help you find the right professionals for your needs.
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
                <p>123 Elegance Boulevard, Suite 100<br />City Center, State 12345</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Phone Number</h4>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Address</h4>
                <p>hello@gkstar.com<br />support@gkstar.com</p>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <h4 style={{ fontFamily: "var(--font-body)", color: "#ddd", marginBottom: "15px", fontWeight: "500" }}>
                Fastest Way to Reach Us
              </h4>
              <a href="https://wa.me/yourwhatsappnumber" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", width: "100%", textAlign: "center", borderRadius: "6px" }}>
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
                <input type="text" name="subject" placeholder="Subject / Which service do you need?" required />
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

        {/* Google Map Embedding */}
        <div className="container">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x0%3A0x0!2zM40zMCswMFA!5e0!3m2!1sen!2sus!4v1633000000000!5m2!1sen!2sus" 
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
