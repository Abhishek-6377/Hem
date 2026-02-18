import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Brand<span className="text-cyan-500">Pro</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-indigo-600 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white shadow hover:scale-105 transition">
          Get Free Audit
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-white border-t shadow-sm overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-4 text-slate-700 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 hover:text-indigo-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => setOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 text-white font-semibold shadow"
              >
                Get Free Audit
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
