import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1220] text-slate-300 py-24 md:py-32 border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1 — Brand */}
          <div className="flex flex-col">
            <Link href="#top" className="flex items-center gap-2 mb-6 group">
              <div className="font-heading font-extrabold text-2xl tracking-tighter text-white flex items-center">
                Aurelia<span className="text-blue-brand">.</span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed font-medium text-slate-400">
              Architecting and scaling mission-critical intelligence systems for the modern enterprise.
            </p>
          </div>

          {/* Column 2 — Capabilities */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-widest uppercase text-xs">Capabilities</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#services" className="hover:text-blue-brand transition-colors">AI Project Development</Link></li>
              <li><Link href="#resources" className="hover:text-blue-brand transition-colors">Resource Augmentation</Link></li>
              <li><Link href="#consultancy" className="hover:text-blue-brand transition-colors">Strategic Advisory</Link></li>
              <li><Link href="#products" className="hover:text-blue-brand transition-colors">Intelligence Systems</Link></li>
            </ul>
          </div>

          {/* Column 3 — Ecosystem */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-widest uppercase text-xs">Ecosystem</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="https://aixlacademy.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-brand transition-colors">AIXL Academy</a></li>
              <li><Link href="#products" className="hover:text-blue-brand transition-colors">Analytics</Link></li>
              <li><Link href="#blog" className="hover:text-blue-brand transition-colors">Technical Blog</Link></li>
              <li><Link href="#careers" className="hover:text-blue-brand transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-widest uppercase text-xs">Connect</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-brand transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-brand transition-colors">GitHub</a></li>
              <li><a href="mailto:hello@aureliainnovatives.com" className="hover:text-blue-brand transition-colors">hello@aureliainnovatives.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Aurelia Innovatives</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-blue-brand">Built for Production.</p>
        </div>
      </div>
    </footer>
  );
}

