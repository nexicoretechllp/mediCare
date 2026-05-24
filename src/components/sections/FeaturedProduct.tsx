"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface TrustBadgeData {
  icon: any;
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

interface FeaturedProductCard {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  trustBadges: TrustBadgeData[];
  highlights: string[];
  reversed?: boolean;
}

const featuredProducts: FeaturedProductCard[] = [
  {
    badge: "Featured Care Program",
    title: "Advanced Patient",
    titleHighlight: "Care Experience",
    description:
      "Our flagship care program brings consultations, diagnostics, treatment planning, and follow-up into one coordinated hospital journey for every patient.",
    ctaLabel: "Book Consultation",
    ctaHref: "#contact",
    trustBadges: [
      {
        icon: Building2,
        label: "Specialty Departments",
        value: 18,
        suffix: "+",
      },
      {
        icon: Users,
        label: "Patients Supported",
        value: 236836,
        suffix: "",
      },
    ],
    highlights: [
      "Same-day consultation coordination",
      "Integrated lab and imaging access",
      "Transparent treatment planning",
      "Discharge and follow-up guidance",
    ],
  },
  {
    badge: "Hospital Services",
    title: "Emergency and",
    titleHighlight: "Critical Response",
    description:
      "Dedicated emergency, ICU, and urgent response teams built to deliver rapid care around the clock with seamless admission and recovery support.",
    ctaLabel: "Request Support",
    ctaHref: "#contact",
    trustBadges: [
      {
        icon: Building2,
        label: "Emergency Coverage",
        value: 24,
        suffix: "/7",
      },
    ],
    highlights: [
      "Rapid triage and stabilization",
      "Critical care specialists on call",
      "Operating theatre readiness",
      "Post-emergency recovery planning",
      "Family communication support",
      "Continuous monitoring protocols",
    ],
    reversed: true,
  },
];

const ProductHeader: React.FC<{
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  delay?: number;
}> = ({ badge, title, titleHighlight, description, delay = 0.2 }) => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1"
    >
      <Star size={12} className="text-brand-primary" />
      <span className="text-xs font-medium text-brand-primary sm:text-sm">
        {badge}
      </span>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.1, duration: 0.6 }}
      className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
    >
      {title}
      <br />
      <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
        {titleHighlight}
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2, duration: 0.6 }}
      className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base lg:text-lg"
    >
      {description}
    </motion.p>
  </>
);

const CTAButton: React.FC<{
  label: string;
  href: string;
  delay?: number;
}> = ({ label, href, delay = 0.3 }) => {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-brand-primary px-6 py-4.5 text-sm font-semibold text-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-primary/20 sm:px-7 sm:py-4.5 sm:text-base"
    >
      {label}
      <ArrowUpRight size={16} />
    </motion.a>
  );
};

const TrustBadge: React.FC<TrustBadgeData> = ({
  icon: Icon,
  label,
  value,
  suffix = "+",
  delay = 0.4,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-center gap-3 rounded-xl border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 sm:px-5 sm:py-2"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-primary/30 bg-brand-primary/10">
      <Icon className="h-5 w-5 text-brand-primary" />
    </div>
    <div className="min-w-0">
      <p className="truncate text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p className="text-lg font-bold text-white">
        <AnimatedCounter target={value} suffix={suffix} />
      </p>
    </div>
  </motion.div>
);

const FeatureHighlights: React.FC<{
  items: string[];
  delay?: number;
}> = ({ items, delay = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col justify-center gap-4"
  >
    {items.map((item, i) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + i * 0.1, duration: 0.6 }}
        className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/60 px-4 py-3.5 sm:px-5 sm:py-4"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-primary" />
        <span className="text-sm font-medium text-zinc-300 sm:text-base">
          {item}
        </span>
      </motion.div>
    ))}
  </motion.div>
);

export default function FeaturedProduct() {
  return (
    <section
      id="featured-product"
      className="relative bg-black py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
        {featuredProducts.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-brand-primary/15 sm:rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-secondary/8" />
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand-primary/10 blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand-secondary/10 blur-[100px]" />

            <div
              className={`relative z-10 grid grid-cols-1 gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20 ${
                product.reversed ? "lg:auto-cols-fr" : ""
              }`}
            >
              <div className={product.reversed ? "lg:order-2" : ""}>
                <ProductHeader
                  badge={product.badge}
                  title={product.title}
                  titleHighlight={product.titleHighlight}
                  description={product.description}
                  delay={0.2}
                />

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 lg:mt-10 lg:gap-4">
                  <CTAButton
                    label={product.ctaLabel}
                    href={product.ctaHref}
                    delay={0.4}
                  />
                  <div
                    className={`grid w-full gap-3 ${
                      product.trustBadges.length === 1
                        ? "grid-cols-1"
                        : product.trustBadges.length === 2
                          ? "grid-cols-1 sm:grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {product.trustBadges.map((badge, bIdx) => (
                      <div
                        key={bIdx}
                        className={`w-full ${
                          product.trustBadges.length === 1
                            ? "col-span-full"
                            : ""
                        }`}
                      >
                        <TrustBadge {...badge} delay={0.5 + bIdx * 0.1} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={product.reversed ? "lg:order-1" : ""}>
                <FeatureHighlights items={product.highlights} delay={0.4} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
