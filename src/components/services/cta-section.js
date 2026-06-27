import { Icon } from "@/components/icon";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

export function ServicesCtaSection({ t }) {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#4f6ef7 0%,#7c3aed 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle,rgba(255,255,255,0.4),transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
          <Reveal className="text-center lg:text-start max-w-2xl">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-5 leading-[1.15]">
              {t.titleLead}{" "}
              <span className="text-amber-300">{t.titleHighlight}</span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">{t.subtitle}</p>
          </Reveal>
          <Reveal delay={1} className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-base font-black bg-white text-primary-600 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              {t.primaryCta}
              <Icon name="arrow-right" className="text-sm rtl:rotate-180" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-base font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              {t.secondaryCta}
              <Icon name="phone" className="text-sm" />
            </a>
          </Reveal>
        </div>

        <div className="pt-10 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) + 1} className="text-center">
              <div className="text-3xl font-black text-white mb-1 num-ltr">
                <CountUp value={stat.value} />
                {stat.suffix && (
                  <span className="text-white/60">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCtaSection;
