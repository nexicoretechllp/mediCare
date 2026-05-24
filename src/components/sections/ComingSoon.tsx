"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Stethoscope } from "lucide-react";

export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="relative bg-zinc-950 py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1">
            <Clock size={12} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-400 sm:text-sm">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Upcoming <span className="text-brand-secondary">Services</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            We&apos;re expanding our patient support ecosystem with care options
            that extend beyond the hospital visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl sm:mt-14"
        >
          <div className="relative overflow-hidden rounded-2xl p-[2px]">
            <motion.div
              className="absolute inset-[-50%] z-0"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #4CC417 10%, transparent 20%, transparent 50%, #0909FF 60%, transparent 70%, transparent 100%)",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10 rounded-2xl bg-zinc-900 p-6 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-secondary/20 bg-brand-secondary/10 sm:h-16 sm:w-16">
                  <Stethoscope className="h-7 w-7 text-blue-400 sm:h-8 sm:w-8" />
                </div>

                <div className="flex-1">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-0.5">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500" />
                    <span className="text-xs font-medium text-yellow-500">
                      In Development
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Home Recovery and Telemedicine
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    A connected care program for virtual consultations,
                    medication follow-ups, recovery guidance, and remote
                    monitoring to support patients after discharge.
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-brand-primary">
                    <span>Learn more when available</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
