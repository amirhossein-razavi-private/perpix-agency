"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/services/service-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function CoreServicesSection({ t }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? t.items
      : t.items.filter((item) => item.category === active);

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-10 lg:mb-12"
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 lg:mb-16">
          {t.filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === filter.key
                  ? "gradient-bg text-white shadow-lg shadow-primary-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {filtered.map((item, i) => (
            <ServiceCard
              key={item.title}
              item={item}
              learnMore={t.learnMore}
              delay={(i % 4) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreServicesSection;
