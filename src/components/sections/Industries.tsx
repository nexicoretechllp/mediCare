"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Shield, Stethoscope } from "lucide-react";

const industries = [
  {
    icon: Activity,
    title: "Emergency and Trauma Care",
    description: "Rapid response, stabilization, and urgent treatment support.",
    status: "Live",
  },
  {
    icon: Stethoscope,
    title: "Diagnostics and Specialist Clinics",
    description:
      "Consultations, imaging, lab services, and focused medical expertise.",
    status: "Live",
  },
  {
    icon: Shield,
    title: "Preventive and Telehealth Programs",
    description:
      "Wellness checkups, remote follow-ups, and proactive care for long-term health.",
    status: "In Development",
  },
];

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const statusColor =
    industry.status === "Live"
      ? "bg-brand-primary/10 text-brand-primary border-brand-primary/30"
      : industry.status === "In Development"
        ? "bg-brand-secondary/10 text-blue-400 border-brand-secondary/30"
        : "bg-zinc-800 text-zinc-400 border-zinc-700";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-colors duration-300 hover:border-brand-primary/10 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 sm:h-12 sm:w-12">
            <industry.icon className="h-5 w-5 text-brand-primary sm:h-6 sm:w-6" />
          </div>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor}`}
          >
            {industry.status}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {industry.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
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
            Care Areas We <span className="text-brand-primary">Serve</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
