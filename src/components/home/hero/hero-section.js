import { Icon } from "@/components/icon";
import { HeroBackground } from "@/components/home/hero/hero-background";
import { HeroVisual } from "@/components/home/hero/hero-visual";

export function HeroSection({ t }) {
  const trust = t.trust;

  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[72px] trust-hero-bg mesh-bg">
      <HeroBackground />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center py-20 lg:py-24 xl:py-32">
          {/* Left copy */}
          <div className="flex flex-col items-start max-w-xl">
            <div className="stagger-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-primary-100 dark:border-primary-500/20 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full gradient-bg flex-shrink-0 dot-pulse" />
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                {t.status}
              </span>
              <span className="w-px h-3.5 bg-gray-200 dark:bg-white/10" />
              <span className="text-xs font-black text-primary-500 num-ltr">
                {t.statusMetric}
              </span>
            </div>

            <h1 className="stagger-2 text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.3rem] font-black leading-[1.08] tracking-tight text-gray-900 dark:text-white mb-6">
              {t.titleLead}
              <br />
              <span className="shimmer-text">{t.titleHighlight}</span>
            </h1>

            <p className="stagger-3 text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mb-10 font-light">
              {t.subtitle}
            </p>

            <div className="stagger-4 flex flex-col sm:flex-row gap-3.5 mb-14 w-full sm:w-auto">
              <a
                href="#projects"
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
                <Icon name="phone" className="text-primary-500 text-sm" />
              </a>
            </div>

            <div className="stagger-5 flex flex-wrap items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-gray-900 gradient-bg"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="text-amber-400 text-xs" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-200 num-ltr">
                      {trust.nps}
                    </span>{" "}
                    {trust.npsLabel}
                  </p>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/8 hidden sm:block" />
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-white num-ltr">
                  {trust.onTimeValue}
                </p>
                <p className="text-xs text-gray-400">{trust.onTimeLabel}</p>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/8 hidden sm:block" />
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-white num-ltr">
                  {trust.yearsValue}
                </p>
                <p className="text-xs text-gray-400">{trust.yearsLabel}</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <HeroVisual v={t.visual} />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200/60 dark:via-primary-500/20 to-transparent" />
    </section>
  );
}

export default HeroSection;
