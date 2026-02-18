export default function Footer() {
  return (
    <footer className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            YourBrand
          </h3>
          <p className="mt-4 text-slate-600 text-sm max-w-xs">
            We design modern, fast and conversion-focused websites
            that help businesses grow online.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li><a href="/about" className="hover:text-indigo-600">About</a></li>
            <li><a href="/services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="/work" className="hover:text-indigo-600">Work</a></li>
            <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li>Website Design</li>
            <li>Landing Pages</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li>📧 contact@email.com</li>
            <li>📍 India</li>
            <li>⏱️ Response within 24–48 hours</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
