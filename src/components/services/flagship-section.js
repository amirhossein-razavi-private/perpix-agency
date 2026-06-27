import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function FeaturedCard({ item }) {
  return (
    <Reveal className="h-full">
      <div className="card-hover rounded-2xl p-8 lg:p-10 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary-500/25">
            <Icon name={item.icon} className="text-white text-xl" />
          </div>
          <span className="senior-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black text-primary-600 dark:text-primary-400">
            {item.badge}
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-4">
          {item.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          {item.description}
        </p>
        <ul className="space-y-3 mb-10 flex-1">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-5 h-5 rounded-md gradient-bg flex items-center justify-center flex-shrink-0">
                <Icon name="check" className="text-white text-[9px]" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-black text-white glow-btn gradient-bg w-full sm:w-auto"
        >
          {item.cta}
          <Icon name="arrow-right" className="text-sm rtl:rotate-180" />
        </a>
      </div>
    </Reveal>
  );
}

function StatCard({ stat, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center">
            <Icon name={stat.icon} className="text-primary-500 text-sm" />
          </div>
          <h4 className="font-bold text-sm text-gray-900 dark:text-white">
            {stat.title}
          </h4>
        </div>
        {stat.value && (
          <p className="text-3xl font-black text-gray-900 dark:text-white mb-2 num-ltr">
            {stat.value}
          </p>
        )}
        {stat.tags && (
          <div className="flex flex-wrap gap-2 mb-3">
            {stat.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-gray-400">{stat.subtitle}</p>
        {stat.link && (
          <a
            href="#"
            className="text-xs font-bold text-primary-500 flex items-center gap-1.5 mt-3 hover:gap-2.5 transition-all"
          >
            {stat.link}
            <Icon name="arrow-right" className="text-[10px] rtl:rotate-180" />
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function FlagshipSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-[#f6f8ff] dark:bg-[#08080f]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-3">
            <FeaturedCard item={t.featured} />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-5">
            {t.stats.map((stat, i) => (
              <StatCard key={stat.title} stat={stat} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlagshipSection;
