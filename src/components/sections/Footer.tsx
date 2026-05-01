import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-grey-mid py-16 border-t border-navy relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <Link href="#top" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-blue-brand text-white flex items-center justify-center font-bold text-xl shadow-lg">
                AI
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-none tracking-tight">
                  Aurelia Innovatives
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed font-medium">
              AI-Powered. Production-Ready.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#services" className="hover:text-blue-soft transition-colors">AI Development</Link></li>
              <li><Link href="#consultancy" className="hover:text-blue-soft transition-colors">AI Consultancy</Link></li>
              <li><Link href="#resources" className="hover:text-blue-soft transition-colors">Resource Augmentation</Link></li>
              <li><Link href="#products" className="hover:text-blue-soft transition-colors">AI Products</Link></li>
              <li><a href="https://aixlacademy.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-soft transition-colors">AIXL Academy</a></li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#about" className="hover:text-blue-soft transition-colors">About</Link></li>
              <li><Link href="#careers" className="hover:text-blue-soft transition-colors">Careers</Link></li>
              <li><Link href="#blog" className="hover:text-blue-soft transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="hover:text-blue-soft transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-soft transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-soft transition-colors">GitHub</a></li>
              <li><a href="mailto:hello@aureliainnovatives.com" className="hover:text-blue-soft transition-colors">hello@aureliainnovatives.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-deep flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Aurelia Innovatives</span>
            <span className="text-grey-dark">•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-grey-dark">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p>Pune, India</p>
        </div>
      </div>
    </footer>
  );
}

