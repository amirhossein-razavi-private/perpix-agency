import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-heading";

export function ImpactStatement({ t }) {
  return (
    <section className="impact-section relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(79,110,247,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10 text-center">
        <Reveal>
          <SectionLabel className="mx-auto mb-8">{t.label}</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black text-white leading-[1.1] max-w-5xl mx-auto">
            {t.titleLead}
            <br />
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-8 w-20 h-1 rounded-full gradient-bg mx-auto opacity-60" />
          <p className="mt-8 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {t.tags.map((tag) => (
              <span
                key={tag.label}
                className="glass-dark px-5 py-2.5 rounded-full text-sm font-semibold text-gray-300 inline-flex items-center gap-2"
              >
                <Icon name={tag.icon} className="text-primary-400 text-xs" />
                {tag.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ImpactStatement;
