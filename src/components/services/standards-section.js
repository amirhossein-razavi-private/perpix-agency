import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function StandardCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl pt-10 pb-7 px-6 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full text-center relative mt-6">
        <div className="absolute -top-6 inset-x-0 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 flex items-center justify-center shadow-sm">
            <div className="w-9 h-9 rounded-full gradient-bg-subtle flex items-center justify-center">
              <Icon name={item.icon} className="text-primary-500 text-sm" />
            </div>
          </div>
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

export function StandardsSection({ t }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {t.items.map((item, i) => (
            <StandardCard key={item.title} item={item} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandardsSection;
