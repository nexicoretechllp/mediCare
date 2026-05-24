"use client";

import { motion } from "framer-motion";
import { Cog, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Cog,
    title: "Clinical Excellence",
    description:
      "Every care plan is guided by experienced specialists, precise diagnostics, and evidence-based treatment.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "From emergency admission to urgent intervention, our teams act quickly when every second matters.",
  },
  {
    icon: Shield,
    title: "Patient-First Safety",
    description:
      "Safety, hygiene, and compassionate support are built into every touchpoint across the hospital.",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative bg-black py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Who We <span className="text-brand-primary">Are</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg">
            MediCare Hospital is a patient-centered healthcare provider
            combining skilled doctors, modern infrastructure, and coordinated
            support to deliver trusted care for individuals and families.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-brand-primary/20 hover:bg-zinc-900/80 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20 sm:h-12 sm:w-12">
                  <value.icon className="h-5 w-5 text-brand-primary sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
