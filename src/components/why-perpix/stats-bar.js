import { Icon } from "@/components/icon";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

function StatCard({ stat, delay }) {
  const highlighted = stat.highlight;
  const accent = stat.accent && !highlighted;

  return (
    <Reveal delay={delay}>
      <div
        className={`card-hover rounded-2xl p-6 lg:p-7 h-full border ${
          highlighted
            ? "gradient-bg border-transparent text-white shadow-lg shadow-primary-500/25"
            : "bg-white dark:bg-[#0e0e1a] border-gray-100 dark:border-white/6"
        }`}
      >
        <Icon
          name={stat.icon}
          className={`text-lg mb-4 ${highlighted ? "text-white/80" : "text-primary-500"}`}
        />
        <div
          className={`text-3xl lg:text-4xl font-black mb-1 num-ltr ${
            highlighted
              ? "text-white"
              : accent
                ? "text-emerald-500"
                : "text-gray-900 dark:text-white"
          }`}
        >
          {stat.value.includes("/") || stat.value.includes(".") ? (
            stat.value
          ) : (
            <>
              <CountUp value={stat.value} />
              {stat.suffix}
            </>
          )}
        </div>
        <p
          className={`text-sm font-medium ${
            highlighted ? "text-white/70" : "text-gray-400"
          }`}
        >
          {stat.label}
        </p>
      </div>
    </Reveal>
  );
}

export function WhyStatsBar({ stats }) {
  return (
    <section className="pb-16 lg:pb-20 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyStatsBar;
