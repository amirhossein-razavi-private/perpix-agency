import { Icon } from "@/components/icon";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

function StatCard({ stat, delay }) {
  const highlighted = stat.highlight;

  return (
    <Reveal delay={delay}>
      <div
        className={`card-hover rounded-2xl p-6 h-full border ${
          highlighted
            ? "gradient-bg border-transparent text-white shadow-lg shadow-primary-500/25"
            : "bg-white dark:bg-[#0e0e1a] border-gray-100 dark:border-white/6"
        }`}
      >
        <Icon
          name={stat.icon}
          className={`text-lg mb-3 ${highlighted ? "text-white/80" : "text-primary-500"}`}
        />
        <div
          className={`text-3xl font-black mb-1 num-ltr ${
            highlighted ? "text-white" : "text-gray-900 dark:text-white"
          }`}
        >
          {stat.value.includes("/") ? (
            stat.value
          ) : (
            <>
              <CountUp value={stat.value} />
              {stat.suffix}
            </>
          )}
        </div>
        <p className={`text-sm ${highlighted ? "text-white/70" : "text-gray-400"}`}>
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
}

export function DifferenceSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-[#f6f8ff] dark:bg-[#08080f]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="section-label mb-5">
              <Icon name="circle-dot" className="text-primary-400" />
              <span>{t.label}</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.titleLead}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
              {t.subtitle}
            </p>
            <div className="space-y-6 mb-10">
              {t.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-primary-500 text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-black text-white glow-btn gradient-bg"
            >
              {t.cta}
              <Icon name="arrow-right" className="text-sm rtl:rotate-180" />
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {t.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferenceSection;
