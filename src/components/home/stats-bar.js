import { Icon } from "@/components/icon";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

export function StatsBar({ t }) {
  return (
    <section className="bg-white dark:bg-[#0a0a12] border-y border-gray-100 dark:border-white/5 py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-100 dark:divide-white/5 rtl:lg:divide-x-reverse">
          {t.items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 4) + 1}
              className="flex flex-col items-center text-center lg:px-10"
            >
              <div className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-1.5 num-ltr">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <div className="text-sm text-gray-400 font-medium mb-2">
                {item.label}
              </div>
              <div
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                  item.tone === "success"
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
                    : "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10"
                }`}
              >
                <Icon name={item.icon} />
                {item.note}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
