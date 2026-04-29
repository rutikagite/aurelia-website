import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="#top" className="flex items-center gap-3 mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                AI
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-none tracking-tight">
                  Aurelia Innovatives
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Building production AI systems, advising on AI strategy, and providing vetted AI engineers for enterprise teams worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading tracking-wide uppercase text-sm">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">AI Development</Link></li>
              <li><Link href="#consultancy" className="hover:text-blue-400 transition-colors">Consultancy</Link></li>
              <li><Link href="#resources" className="hover:text-blue-400 transition-colors">Resource Augmentation</Link></li>
              <li><Link href="#products" className="hover:text-blue-400 transition-colors">Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-heading tracking-wide uppercase text-sm">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="#why" className="hover:text-blue-400 transition-colors">Why Aurelia</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} Aurelia Innovators. All rights reserved.</p>
          <p>Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
