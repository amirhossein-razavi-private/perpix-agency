import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

function TechItem({ item }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-white/4 border border-gray-100 dark:border-white/6 hover:border-primary-200 dark:hover:border-primary-500/30 transition-colors">
      <Icon name={item.icon} className="text-2xl text-primary-500" />
      <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
        {item.label}
      </span>
    </div>
  );
}

export function TechStackSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="section-label mb-5">
              <Icon name="circle-dot" className="text-primary-400" />
              <span>{t.label}</span>
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5">
              {t.titleLead}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-lg">
              {t.subtitle}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-black text-white glow-btn gradient-bg"
            >
              {t.cta}
              <Icon name="arrow-right" className="text-sm rtl:rotate-180" />
            </a>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
            {t.items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 4) + 1}>
                <TechItem item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
