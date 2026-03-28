"use client";

import './join.css';

export default function JoinWithUsPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <div className="join-hero">
        <div className="join-hero-bg" />
        <div className="container join-hero-content">
          <span className="join-badge">🌟 Partner Opportunities</span>
          <h1 className="join-hero-title">Grow With <span>GK Star</span></h1>
          <p className="join-hero-sub">
            Join a thriving ecosystem of skilled professionals and corporate partners.
            Unlock steady work, secure payments, and the support you deserve.
          </p>
          <a href="#apply" className="btn btn-primary join-hero-btn">
            Apply Now &rarr;
          </a>
        </div>
        <div className="join-hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9f9f9" />
          </svg>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <section className="join-stats-strip">
        <div className="container join-stats-grid">
          <div className="stat-item">
            <span className="stat-num">500+</span>
            <span className="stat-label">Active Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">12K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">98%</span>
            <span className="stat-label">Partner Satisfaction</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">24h</span>
            <span className="stat-label">Onboarding Time</span>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section className="section-padding" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container text-center">
          <h2 className="section-title">Why Partner With Us?</h2>
          <p style={{ color: "#666", maxWidth: 600, margin: "0 auto 50px", fontSize: "1.05rem" }}>
            We give professionals the tools, customers, and support to thrive — so you can focus on what you do best.
          </p>
          <div className="benefits-grid">
            {[
              { icon: "fas fa-users", title: "Verified Customer Base", desc: "Reach thousands of trusted, pre-screened customers actively seeking your services." },
              { icon: "fas fa-wallet", title: "Secure Payments", desc: "Get paid on time, every time. Our secure payment gateway ensures zero delays." },
              { icon: "fas fa-calendar-check", title: "Flexible Schedule", desc: "Work on your terms. Set your own hours and accept only the jobs you want." },
              { icon: "fas fa-headset", title: "24/7 Support", desc: "Our dedicated partner success team is always available to resolve any issue fast." },
              { icon: "fas fa-chart-line", title: "Business Growth", desc: "Access analytics, reviews, and tools to help you grow your professional reputation." },
              { icon: "fas fa-shield-alt", title: "Insurance & Safety", desc: "We provide liability coverage options so you and your clients are always protected." },
            ].map(({ icon, title, desc }) => (
              <div className="benefit-card" key={title}>
                <div className="benefit-icon-wrap">
                  <i className={icon} />
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding how-it-works-section">
        <div className="container text-center">
          <h2 className="section-title" style={{ color: "#fff" }}>How It Works</h2>
          <p style={{ color: "#e0c97f", marginBottom: 50, fontSize: "1.05rem" }}>
            Getting started is simple. Four easy steps to becoming a GK Star partner.
          </p>
          <div className="steps-grid">
            {[
              { num: "01", title: "Submit Application", desc: "Fill in the form below with your details and area of expertise." },
              { num: "02", title: "Background Check", desc: "We verify your credentials quickly and securely within 24 hours." },
              { num: "03", title: "Profile Goes Live", desc: "Your professional profile is published and customers can find you." },
              { num: "04", title: "Start Earning", desc: "Accept bookings, complete jobs, and receive secure payments." },
            ].map(({ num, title, desc }) => (
              <div className="step-card" key={num}>
                <div className="step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="section-padding" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="join-form-card">
            {/* Left panel */}
            <div className="join-info-panel">
              <div className="join-info-inner">
                <h3>Ready to Join?</h3>
                <p>
                  Fill in the application form and our onboarding team will contact you within
                  24 hours to get you set up.
                </p>
                <div className="join-checklist">
                  {[
                    "Access to verified customers",
                    "Secure and timely payments",
                    "Flexible scheduling",
                    "24/7 dedicated partner support",
                    "Free professional profile listing",
                    "Growth analytics dashboard",
                  ].map((item) => (
                    <div className="join-check-item" key={item}>
                      <i className="fas fa-check-circle" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="join-contact-hint">
                <i className="fab fa-whatsapp" />
                <a href="https://wa.me/94772861967" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp: +94 77 286 1967
                </a>
              </div>
              </div>
            </div>

            {/* Right form */}
            <div className="join-form-panel">
              <h3>Application Form</h3>
              <p className="join-form-sub">All fields are required. We respect your privacy.</p>
              <form onSubmit={(e) => e.preventDefault()} className="join-form">
                <div className="join-form-row">
                  <div className="form-input-wrapper">
                    <label htmlFor="name">Full Name / Company Name</label>
                    <input type="text" id="name" className="join-input" placeholder="e.g. John Doe" required />
                  </div>
                </div>
                <div className="join-form-row two-col">
                  <div className="form-input-wrapper">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="join-input" placeholder="john@example.com" required />
                  </div>
                  <div className="form-input-wrapper">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="join-input" placeholder="+94 77 123 4567" required />
                  </div>
                </div>
                <div className="join-form-row">
                  <div className="form-input-wrapper">
                    <label htmlFor="interest">Area of Expertise / Partnership</label>
                    <select id="interest" className="join-input" required>
                      <option value="" disabled>Select your area...</option>
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
                </div>
                <div className="join-form-row">
                  <div className="form-input-wrapper">
                    <label htmlFor="experience">Years of Experience</label>
                    <select id="experience" className="join-input" required>
                      <option value="" disabled>Select experience...</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1 – 3 years</option>
                      <option value="3-5">3 – 5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>
                <div className="join-form-row">
                  <div className="form-input-wrapper">
                    <label htmlFor="message">Brief Introduction</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="join-input"
                      placeholder="Tell us about your experience, skills, or partnership idea..."
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="join-submit-btn">
                  <i className="fas fa-paper-plane" style={{ marginRight: 8 }} />
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
