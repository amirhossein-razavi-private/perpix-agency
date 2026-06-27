import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { toneStyles } from "@/components/process/tone-styles";

function ValueCard({ item, delay }) {
  const tone = toneStyles[item.tone] ?? toneStyles.purple;

  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-7 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${tone.value}`}
        >
          <Icon name={item.icon} className="text-lg" />
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

export function ProcessValuesSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-[#f6f8ff] dark:bg-[#08080f]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <ValueCard key={item.title} item={item} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessValuesSection;
