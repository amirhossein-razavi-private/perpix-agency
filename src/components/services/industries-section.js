import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

function IndustryCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full">
        <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center mb-4">
          <Icon name={item.icon} className="text-primary-500 text-sm" />
        </div>
        <h3 className="font-black text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-400 border border-gray-100 dark:border-white/6"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function IndustriesSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <Reveal className="max-w-xl">
            <span className="section-label mb-5">
              <Icon name="circle-dot" className="text-primary-400" />
              <span>{t.label}</span>
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white">
              {t.titleLead}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={1} className="max-w-md lg:text-end">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">
              {t.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <IndustryCard key={item.title} item={item} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
