import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

function StackItem({ item }) {
  return (
    <div className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-default">
      <Icon name={item.icon} className="text-3xl" />
      <span className="font-bold text-sm">{item.label}</span>
    </div>
  );
}

export function StackSection({ t }) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 mb-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-3 block">
            {t.label}
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white">
            {t.titleLead} <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee-track items-center">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-12 px-6" aria-hidden={dup === 1}>
              {t.items.map((item) => (
                <StackItem key={`${dup}-${item.label}`} item={item} />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 start-0 w-24 pointer-events-none bg-gradient-to-r rtl:bg-gradient-to-l from-gray-50 dark:from-[#0b0b12] to-transparent" />
        <div className="absolute inset-y-0 end-0 w-24 pointer-events-none bg-gradient-to-l rtl:bg-gradient-to-r from-gray-50 dark:from-[#0b0b12] to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 mt-12">
        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          {t.badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <Icon name={badge.icon} className="text-primary-500 text-sm" />
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                {badge.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default StackSection;
