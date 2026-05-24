"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(76,196,23,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,255,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Plan Your Care{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg"
          >
            Whether you need a specialist consultation, a second opinion, or
            immediate hospital support, our team is here to help you take the
            next step with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="mailto:care@medicarehospital.com,appointments@medicarehospital.com"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-black transition-all hover:brightness-110 hover:shadow-xl hover:shadow-brand-primary/20 sm:px-10 sm:py-4 sm:text-lg"
            >
              Book an Appointment
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5">
          <motion.a
            href="mailto:care@medicarehospital.com,appointments@medicarehospital.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-brand-primary/30"
          >
            <div className="relative flex h-32 items-center justify-center bg-zinc-900 sm:h-36">
              <motion.div
                className="absolute top-6 left-8 h-20 w-20 rounded-full bg-brand-primary/10 blur-2xl"
                animate={{ y: [0, -10, 0], x: [0, 5, 0], scale: [1, 1.15, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-4 right-6 h-16 w-16 rounded-full bg-brand-secondary/10 blur-2xl"
                animate={{ y: [0, 8, 0], x: [0, -5, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(76,196,23,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(76,196,23,0.2) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-primary/20 bg-brand-primary/10 backdrop-blur-sm">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-zinc-900/80 px-4 py-4 sm:px-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Email Us
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-200">
                care@medicarehospital.com
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-400">
                appointments@medicarehospital.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+918001234567"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-brand-primary/30"
          >
            <div className="relative flex h-32 items-center justify-center bg-zinc-900 sm:h-36">
              <motion.div
                className="absolute h-32 w-32 rounded-full border border-brand-secondary/10"
                animate={{ scale: [0.8, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute h-32 w-32 rounded-full border border-brand-primary/10"
                animate={{ scale: [0.8, 1.4], opacity: [0.4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute h-32 w-32 rounded-full border border-brand-secondary/10"
                animate={{ scale: [0.8, 1.4], opacity: [0.4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 2,
                }}
              />
              <motion.div
                className="absolute top-4 right-10 h-16 w-16 rounded-full bg-brand-secondary/8 blur-2xl"
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 backdrop-blur-sm">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-zinc-900/80 px-4 py-4 sm:px-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Call Us
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-200">
                +91 80012 34567
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.google.com/maps?q=18.963721,72.828766"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-brand-primary/30"
          >
            <div className="relative h-32 overflow-hidden sm:h-36">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d72.828766!3d18.963721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4t20!5e0!3m2!1sen!2sin&z=16"
                className="pointer-events-none h-full w-full border-0 brightness-[0.6] contrast-[1.2] grayscale-[0.5] saturate-[0.5] transition-all duration-300 group-hover:brightness-[0.8] group-hover:grayscale-0 group-hover:saturate-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MediCare Hospital Location"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/30 bg-black/60 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col bg-zinc-900/80 px-4 py-4 sm:px-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Visit Us
              </p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-zinc-200">
                12 Wellness Avenue, Mumbai Central, Mumbai - 400008
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
