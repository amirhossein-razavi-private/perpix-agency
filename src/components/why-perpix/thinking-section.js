import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function ThinkingCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl pt-10 pb-7 px-6 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full text-center relative mt-6">
        <div className="absolute -top-5 inset-x-0 flex justify-center">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-black num-ltr shadow-lg shadow-primary-500/25">
            {item.number}
          </div>
        </div>
        <div className="w-11 h-11 rounded-xl gradient-bg-subtle flex items-center justify-center mx-auto mb-4">
          <Icon name={item.icon} className="text-primary-500 text-lg" />
        </div>
        <h3 className="font-black text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export function ThinkingSection({ t }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {t.items.map((item, i) => (
            <ThinkingCard key={item.title} item={item} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThinkingSection;
