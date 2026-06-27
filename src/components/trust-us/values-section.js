import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ValueCard({ item, readMore, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-7 lg:p-8 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full flex flex-col text-center items-center">
        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
          <Icon name={item.icon} className="text-white text-xl" />
        </div>
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
          {item.description}
        </p>
        <a
          href="#"
          className="text-sm font-bold text-primary-500 flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          {readMore}
          <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
        </a>
      </div>
    </Reveal>
  );
}

export function ValuesSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <ValueCard
              key={item.title}
              item={item}
              readMore={t.readMore}
              delay={(i % 4) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
