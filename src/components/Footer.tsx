import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-12 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary-color/50 transition-all duration-500 bg-black/20 p-2">
                <Image src="/logo.png" alt="GK Star Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-primary-color transition-colors" style={{ fontFamily: "var(--font-heading)" }}>GK STAR</span>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-neutral-600">Private Limited</span>
              </div>
            </Link>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-xs italic font-serif">
              "Redefining the standard of excellence in every service we provide. Your vision, our masterpiece."
            </p>
            <div className="flex gap-4">
               {[ 'facebook-f', 'instagram', 'whatsapp', 'linkedin-in' ].map(icon => (
                 <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 hover:text-primary-color hover:border-primary-color/30 transition-all">
                    <i className={`fab fa-${icon} text-xs`}></i>
                 </a>
               ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-color">The Divisions</h4>
            <ul className="space-y-4">
              {[ 'Tailoring Services', 'Aari Work Services', 'Beauty & Makeup', 'Photography & Camera', 'Cake Services', 'Vehicle Services' ].map(service => (
                <li key={service}>
                  <Link href="/services" className="text-neutral-500 hover:text-white text-sm font-light transition-colors flex items-center gap-3 group">
                    <span className="w-0 h-[1px] bg-primary-color transition-all duration-300 group-hover:w-4"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-color">The Access</h4>
            <ul className="space-y-4">
              {[ 'Home', 'Our Services', 'Gallery', 'About Us', 'Join With Us', 'Contact' ].map(item => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`} className="text-neutral-500 hover:text-white text-sm font-light transition-colors flex items-center gap-3 group">
                    <span className="w-0 h-[1px] bg-primary-color transition-all duration-300 group-hover:w-4"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-color">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <i className="fas fa-map-marker-alt text-primary-color mt-1"></i>
                <span className="text-neutral-500 text-sm font-light leading-relaxed">80 Sivan Road, Uruthirapuram, Kilinochchi, Sri Lanka</span>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fas fa-phone text-primary-color"></i>
                <span className="text-neutral-500 text-sm font-light">+94 77 286 1967</span>
              </li>
              <li className="flex gap-4 items-center border-b border-white/5 pb-4">
                <i className="fas fa-envelope text-primary-color"></i>
                <span className="text-neutral-500 text-sm font-light lowercase">hello@gkstar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700">
            &copy; {new Date().getFullYear()} GK Star Private Limited. All Masterpieces Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700">
             <a href="#" className="hover:text-primary-color transition-colors">Privacy</a>
             <a href="#" className="hover:text-primary-color transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
