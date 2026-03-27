"use client";

import './join.css';

export default function JoinWithUsPage() {
  return (
    <>
      <div className="page-header" style={{ backgroundColor: "var(--text-dark)", color: "var(--text-light)", padding: "120px 0 160px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        
        {/* Background dark overlay image */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ color: "var(--primary-color)", fontSize: "3.5rem", marginBottom: "20px", fontFamily: "var(--font-heading)" }}>
            Partner With Us
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#e0e0e0", fontWeight: 300 }}>
            Join the GK Star Platform ecosystem. Whether as a professional service provider or a corporate partner.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: "var(--bg-light)" }}>
        <div className="container">
          
          <div className="join-container">
            {/* Left Info Panel */}
            <div className="join-info">
              <div className="join-info-content">
                <h3>Why Join GK Star?</h3>
                <p>
                  We are building a trusted community mapping skilled professionals with those who need them most. 
                  Experience unparalleled growth, reliable payments, and a steady stream of requests.
                </p>
                
                <div style={{ marginTop: "40px" }}>
                  <div className="join-benefit-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Access to thousands of verified customers</span>
                  </div>
                  <div className="join-benefit-item">
                    <i className="fas fa-wallet"></i>
                    <span>Secure and timely payments</span>
                  </div>
                  <div className="join-benefit-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Flexible scheduling & complete autonomy</span>
                  </div>
                  <div className="join-benefit-item">
                    <i className="fas fa-headset"></i>
                    <span>24/7 dedicated partner support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="join-form-wrapper">
              <h3>Application Form</h3>
              <p>Fill out the details below and our onboarding team will contact you within 24 hours.</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-input-wrapper">
                  <label htmlFor="name">Full Name / Company Name</label>
                  <input type="text" id="name" className="join-input" placeholder="e.g. John Doe" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-input-wrapper">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="join-input" placeholder="john@example.com" required />
                  </div>
                  <div className="form-input-wrapper">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="join-input" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>

                <div className="form-input-wrapper">
                  <label htmlFor="interest">Area of Expertise / Partnership</label>
                  <select id="interest" className="join-input" required>
                    <option value="" disabled selected>Select your area...</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="carpentry">Carpentry & Woodwork</option>
                    <option value="appliance">Appliance Repair</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-input-wrapper">
                  <label htmlFor="message">Brief Introduction / Message</label>
                  <textarea id="message" rows={4} className="join-input" placeholder="Tell us a bit about your experience or business..." required></textarea>
                </div>
                
                <button type="submit" className="join-submit-btn">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
