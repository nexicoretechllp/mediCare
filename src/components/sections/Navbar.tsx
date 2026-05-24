"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Care", href: "#what-we-do" },
  { label: "Programs", href: "#featured-product" },
  { label: "Departments", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = useCallback((href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/20 sm:h-9 sm:w-9">
            <span className="text-lg font-black text-brand-primary sm:text-xl">
              M
            </span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Medi<span className="text-brand-primary">Care</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-primary/25"
          >
            Book Visit
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleMobileNav(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-3 py-3 text-left text-base font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleMobileNav("#contact")}
                className="mt-2 rounded-full bg-brand-primary px-5 py-3 text-center text-base font-semibold text-black transition-all hover:brightness-110"
              >
                Book Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
