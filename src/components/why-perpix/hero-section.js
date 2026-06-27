import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

export function WhyHeroSection({ t }) {
  return (
    <section className="relative overflow-hidden pt-16 lg:pt-[72px] trust-hero-bg mesh-bg">
      <div
        className="absolute top-1/4 start-[-8%] w-[520px] h-[520px] rounded-full opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col items-center text-center py-20 lg:py-24 max-w-3xl mx-auto">
          <div className="stagger-1 section-label mb-8">
            <Icon name="circle-dot" className="text-primary-400" />
            <span>{t.badge}</span>
          </div>

          <h1 className="stagger-2 text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
            {t.titleLead}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>
          </h1>

          <p className="stagger-3 text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10 font-light">
            {t.subtitle}
          </p>

          <div className="stagger-4 flex flex-col sm:flex-row gap-3.5 mb-12 w-full sm:w-auto justify-center">
            <a
              href="#advantages"
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
              <Icon name="folder-open" className="text-primary-500 text-sm" />
            </a>
          </div>

          <div className="stagger-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {t.trust.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <Icon name={item.icon} className="text-emerald-500 text-xs" />
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200/60 dark:via-primary-500/20 to-transparent" />
    </section>
  );
}

export default WhyHeroSection;
