import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>GK Star Multi Services</h4>
            <p>All Your Needs in One Place.</p>
            <p>Providing exceptional services from the best professionals.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Work With Us</h4>
            <ul className="footer-links">
              <li><Link href="/join">Join as Professional</Link></li>
              <li><Link href="/join">Commission Model</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-phone"></i> +1 234 567 8900</li>
              <li><i className="fab fa-whatsapp"></i> +1 234 567 8900</li>
              <li><i className="fas fa-envelope"></i> info@gkstar.com</li>
              <li><i className="fas fa-map-marker-alt"></i> Main Street, City Center</li>
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
