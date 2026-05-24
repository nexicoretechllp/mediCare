"use client";

import { motion } from "framer-motion";
import { TrendingUp, Workflow } from "lucide-react";

const capabilities = [
  {
    icon: Workflow,
    title: "Emergency and Critical Care",
    description:
      "Immediate access to urgent evaluation, critical monitoring, and fast clinical coordination when patients need it most.",
  },
  {
    icon: TrendingUp,
    title: "Diagnostics and Specialty Treatment",
    description:
      "Integrated labs, imaging, specialist consultations, and personalized treatment plans under one trusted hospital system.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative bg-zinc-950 py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What We <span className="text-brand-primary">Do</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg">
              We deliver coordinated hospital services across emergency care,
              diagnostics, specialist consultation, treatment support, and
              long-term wellness programs.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group flex gap-4 rounded-2xl border border-white/5 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-brand-primary/20 hover:bg-zinc-900/80 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 sm:h-12 sm:w-12">
                  <cap.icon className="h-5 w-5 text-brand-primary sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {cap.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
