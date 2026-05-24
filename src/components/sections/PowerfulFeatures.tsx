"use client";

import { motion } from "framer-motion";
import { BarChart3, Building2, GitBranch, UserCheck } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "24/7 Emergency Readiness",
    description:
      "Round-the-clock teams, rapid triage processes, and always-on support for urgent patient needs.",
    colSpan: "sm:col-span-1",
  },
  {
    icon: UserCheck,
    title: "Patient-Centered Experience",
    description:
      "Clear guidance, compassionate communication, and coordinated care designed around comfort and trust.",
    colSpan: "sm:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Integrated Diagnostics",
    description:
      "Fast access to lab work, imaging, and specialist insights that help clinicians make informed decisions.",
    colSpan: "sm:col-span-1",
  },
  {
    icon: GitBranch,
    title: "Coordinated Recovery Plans",
    description:
      "Structured discharge planning, follow-up guidance, and recovery support for healthier outcomes.",
    colSpan: "sm:col-span-1",
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="relative bg-zinc-950 py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for <span className="text-brand-primary">Real Patient</span>{" "}
            Impact
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-brand-primary/20 sm:p-7 ${f.colSpan}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20 sm:h-12 sm:w-12">
                  <f.icon className="h-5 w-5 text-brand-primary sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
