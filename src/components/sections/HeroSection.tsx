"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { Spotlight } from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <Spotlight className="relative min-h-screen overflow-hidden bg-black">
      <InteractiveGrid
        gap={16}
        proximity={200}
        activeColor="rgba(76, 196, 23, 1)"
      />
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-16 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(76,196,23,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 sm:mb-8"
            >
              <Sparkles size={14} className="text-brand-primary" />
              <span className="text-xs font-medium text-brand-primary sm:text-sm">
                Trusted by 315+ Care Teams
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white">Modern Healthcare.</span>
              <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Care Without Delays.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg md:max-w-2xl md:text-xl"
            >
              We provide compassionate hospital care with emergency response,
              advanced diagnostics, specialty consultations, and recovery
              support designed around every patient journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-primary px-8 py-3.5 text-base font-semibold text-black transition-all hover:shadow-xl hover:shadow-brand-primary/20 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
              >
                Book Appointment
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  {"->"}
                </motion.span>
              </a>
              <a
                href="#who-we-are"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-8 py-3.5 text-base font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/5 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </Spotlight>
  );
}
