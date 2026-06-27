import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function PartnerMetricCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-8 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 text-center h-full">
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-500/20">
          <Icon name={item.icon} className="text-white text-lg" />
        </div>
        <p className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 num-ltr">
          {item.value}
        </p>
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export function PartnersSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-[#f6f8ff] dark:bg-[#08080f]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-12 lg:mb-16"
        />

        <Reveal className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 mb-14 lg:mb-20">
          {t.logos.map((logo) => (
            <span
              key={logo}
              className="text-lg lg:text-xl font-black text-gray-300 dark:text-gray-600 tracking-tight select-none"
            >
              {logo}
            </span>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {t.metrics.map((item, i) => (
            <PartnerMetricCard key={item.title} item={item} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
