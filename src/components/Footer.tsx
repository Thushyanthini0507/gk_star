import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep-dark border-t border-border-dark pt-24 pb-12 font-sans overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 bg-primary-gold opacity-10 rounded-xl group-hover:rotate-6 transition-transform duration-500"></div>
                <Image src="/logo.png" alt="GK Star Logo" fill className="object-contain p-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-primary-gold transition-colors">GK STAR</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-secondary">Private Limited</span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-xs italic opacity-80">
              "Redefining the standard of excellence in every service we provide. Your vision, our masterpiece."
            </p>
            <div className="flex gap-4">
               {[ 'facebook-f', 'instagram', 'whatsapp', 'linkedin-in' ].map(icon => (
                 <a key={icon} href="#" className="w-10 h-10 rounded-full border border-border-dark flex items-center justify-center text-text-secondary hover:text-primary-gold hover:border-primary-gold transition-all hover:shadow-neon bg-dark-blue shadow-premium">
                    <i className={`fab fa-${icon} text-xs`}></i>
                 </a>
               ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-text-primary">Divisions</h4>
            <ul className="space-y-4">
              {[ 'Tailoring Services', 'Aari Work Services', 'Beauty & Makeup', 'Photography & Camera', 'Cake Services', 'Vehicle Services' ].map(service => (
                <li key={service}>
                  <Link href="/services" className="text-text-secondary hover:text-primary-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-3"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-text-primary">Access</h4>
            <ul className="space-y-4">
              {[ 'Home', 'Our Services', 'Gallery', 'About Us', 'Join With Us', 'Contact' ].map(item => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} className="text-text-secondary hover:text-primary-gold text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-text-primary">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-dark-blue border border-border-dark flex items-center justify-center text-primary-gold flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-xs"></i>
                </div>
                <span className="text-text-secondary text-sm font-medium leading-relaxed">80 Sivan Road, Uruthirapuram, Kilinochchi, Sri Lanka</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg bg-dark-blue border border-border-dark flex items-center justify-center text-primary-gold flex-shrink-0">
                  <i className="fas fa-phone text-xs"></i>
                </div>
                <span className="text-text-secondary text-sm font-medium">+94 77 286 1967</span>
              </li>
              <li className="flex gap-4 items-center border-b border-border-dark pb-6">
                <div className="w-8 h-8 rounded-lg bg-dark-blue border border-border-dark flex items-center justify-center text-primary-gold flex-shrink-0">
                  <i className="fas fa-envelope text-xs"></i>
                </div>
                <span className="text-text-secondary text-sm font-medium lowercase">gkprivatelimited67@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary opacity-70">
            &copy; {new Date().getFullYear()} GK Star Private Limited. 
            <span className="hidden md:inline mx-3 text-border-dark">|</span> 
            <span>All Masterpieces Reserved.</span>
          </p>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary">
             <a href="#" className="hover:text-primary-gold transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
