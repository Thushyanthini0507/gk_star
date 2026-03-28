import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/logo.png" alt="GK Star Logo" width={60} height={52} style={{ objectFit: "contain" }} />
              <div>
                <div style={{ color: "var(--primary-color)", fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700 }}>GK Star</div>
                <div style={{ color: "#aaa", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase" }}>Private Limited</div>
              </div>
            </div>
            <p>All Your Needs in One Place.</p>
            <p>Providing exceptional services from the best professionals in Kilinochchi.</p>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link href="/services">Tailoring Services</Link></li>
              <li><Link href="/services">Aari Work Services</Link></li>
              <li><Link href="/services">Beauty &amp; Makeup</Link></li>
              <li><Link href="/services">Photography &amp; Camera</Link></li>
              <li><Link href="/services">Cake Services</Link></li>
              <li><Link href="/services">Web Design</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/join-with-us">Join With Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <i className="fas fa-map-marker-alt" style={{ marginTop: "4px", color: "var(--primary-color)" }} />
                <span style={{ color: "#ccc" }}>80 Sivan Road, Uruthirapuram,<br />Kilinochchi, Uruthirapuram North</span>
              </li>
              <li style={{ color: "#ccc" }}><i className="fas fa-phone" style={{ color: "var(--primary-color)", marginRight: "10px" }} />+94 76 542 7913</li>
              <li style={{ color: "#ccc" }}><i className="fas fa-phone" style={{ color: "var(--primary-color)", marginRight: "10px" }} />+94 74 369 8753</li>
              <li style={{ color: "#ccc" }}><i className="fas fa-phone" style={{ color: "var(--primary-color)", marginRight: "10px" }} />+94 77 286 1967</li>
              <li>
                <a href="https://wa.me/94772861967" target="_blank" rel="noopener noreferrer" style={{ color: "#ccc" }}>
                  <i className="fab fa-whatsapp" style={{ color: "#25D366", marginRight: "10px" }} />+94 77 286 1967
                </a>
              </li>
              <li>
                <a href="mailto:gkprivatelimited67@gmail.com" style={{ color: "#ccc" }}>
                  <i className="fas fa-envelope" style={{ color: "var(--primary-color)", marginRight: "10px" }} />gkprivatelimited67@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GK Star Multi Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
