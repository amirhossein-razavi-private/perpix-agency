import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function MetricCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 lg:p-7 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full relative overflow-hidden">
        <div className="absolute top-0 end-0 w-24 h-24 opacity-5 rounded-bl-full gradient-bg" />
        <Icon name={item.icon} className="text-primary-500 text-sm mb-4" />
        <p className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 num-ltr">
          {item.value}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {item.label}
        </p>
        <div
          className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
            item.trendUp
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
              : "text-red-500 bg-red-50 dark:bg-red-500/10"
          }`}
        >
          <Icon name="trend" className="text-[10px]" />
          <span className="num-ltr">{item.trend}</span>
        </div>
      </div>
    </Reveal>
  );
}

export function MetricsSection({ t }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-14 lg:mb-16">
          {t.items.map((item, i) => (
            <MetricCard key={item.label} item={item} delay={(i % 3) + 1} />
          ))}
        </div>

        <Reveal className="text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            {t.certificationsLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {t.certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6"
              >
                <Icon name={cert.icon} className="text-primary-500 text-sm" />
                <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default MetricsSection;
