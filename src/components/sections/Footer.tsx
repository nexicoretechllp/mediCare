"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Care", href: "#what-we-do" },
  { label: "Programs", href: "#featured-product" },
  { label: "Upcoming", href: "#coming-soon" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X / Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/20">
                <span className="text-lg font-black text-brand-primary">M</span>
              </div>
              <span className="text-lg font-bold text-white">
                Medi<span className="text-brand-primary">Care</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Delivering compassionate, modern hospital care with emergency
              support, diagnostics, and specialist treatment for every stage of
              recovery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-brand-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-zinc-500">
                <Mail
                  size={14}
                  className="mt-0.5 shrink-0 text-brand-primary"
                />
                <span>
                  care@medicarehospital.com
                  <br />
                  appointments@medicarehospital.com
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-500">
                <Phone
                  size={14}
                  className="mt-0.5 shrink-0 text-brand-primary"
                />
                +91 80012 34567
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-500">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-brand-primary"
                />
                12 Wellness Avenue, Mumbai Central, Mumbai - 400008
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-all hover:border-brand-primary/50 hover:bg-brand-primary/5 hover:text-brand-primary"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 space-y-2 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-zinc-600">
            24/7 multispecialty care for families and communities.
          </p>
          <p className="text-xs text-zinc-600">
            (c) {currentYear} MediCare Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
