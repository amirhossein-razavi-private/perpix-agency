import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function AdvantageCard({ item, delay }) {
  if (item.featured) {
    return (
      <Reveal delay={delay}>
        <div className="card-hover rounded-2xl p-7 lg:p-8 h-full flex flex-col gradient-bg text-white shadow-xl shadow-primary-500/25 relative overflow-hidden">
          <div className="absolute top-0 end-0 w-32 h-32 opacity-10 rounded-bl-full bg-white" />
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
            <Icon name={item.icon} className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-black mb-3">{item.title}</h3>
          <p className="text-white/80 leading-relaxed text-sm flex-1 mb-5">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 lg:p-7 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full flex flex-col">
        <div className="w-11 h-11 rounded-xl gradient-bg-subtle flex items-center justify-center mb-5">
          <Icon name={item.icon} className="text-primary-500 text-lg" />
        </div>
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-white/6"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function AdvantagesSection({ t }) {
  return (
    <section id="advantages" className="py-24 lg:py-32 bg-[#f6f8ff] dark:bg-[#08080f] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <AdvantageCard key={item.title} item={item} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
