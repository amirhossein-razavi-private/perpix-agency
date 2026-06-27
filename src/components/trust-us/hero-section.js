import { Icon } from "@/components/icon";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

export function TrustHeroSection({ t }) {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[72px] trust-hero-bg mesh-bg">
      <div
        className="absolute top-1/4 start-[-10%] w-[500px] h-[500px] rounded-full opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col items-center text-center py-20 lg:py-28 xl:py-32 max-w-3xl mx-auto">
          <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-primary-100 dark:border-primary-500/20 shadow-sm mb-8">
            <Icon name="shield" className="text-primary-500 text-xs" />
            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
              {t.badge}
            </span>
          </div>

          <h1 className="stagger-2 text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
            {t.titleLead}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h1>

          <p className="stagger-3 text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10 font-light">
            {t.subtitle}
          </p>

          <div className="stagger-4 flex flex-col sm:flex-row gap-3.5 mb-16 w-full sm:w-auto justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-black text-white glow-btn gradient-bg"
            >
              {t.primaryCta}
              <Icon name="arrow-right" className="text-sm rtl:rotate-180" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-white/6 border border-gray-200 dark:border-white/12 hover:border-primary-300 dark:hover:border-primary-500/40 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              {t.secondaryCta}
              <Icon name="play" className="text-primary-500 text-sm" />
            </a>
          </div>

          <div className="stagger-5 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 w-full max-w-3xl">
            {t.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={(i % 4) + 1} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <Icon name={stat.icon} className="text-primary-500 text-sm" />
                  <span className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white num-ltr">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200/60 dark:via-primary-500/20 to-transparent" />
    </section>
  );
}

export default TrustHeroSection;
