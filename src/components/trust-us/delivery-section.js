import { Icon } from "@/components/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function DeliveryItem({ item, index }) {
  return (
    <Reveal delay={(index % 4) + 1}>
      <div className="rounded-2xl p-5 lg:p-6 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-500/20">
            <Icon name={item.icon} className="text-white text-sm" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
        <ProgressBar value={item.progress} delay={index * 150} />
      </div>
    </Reveal>
  );
}

function DeliveryDashboard({ d }) {
  return (
    <Reveal delay={2}>
      <div className="hero-visual-card rounded-2xl p-6 lg:p-7 relative overflow-hidden">
        <div className="scan-line" style={{ animationDuration: "3s", opacity: 0.3 }} />

        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-black text-base text-gray-900 dark:text-white">
              {d.title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{d.subtitle}</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 led-blink" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {d.kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              className="rounded-xl p-3 text-center"
              style={{
                background: `linear-gradient(135deg,rgba(79,110,247,${0.1 - i * 0.02}),rgba(124,58,237,${0.1 - i * 0.02}))`,
              }}
            >
              <p className="font-black text-primary-500 text-sm num-ltr">{kpi.value}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{kpi.label}</p>
            </div>
          ))}
        </div>

        <div className="h-[72px] rounded-xl bg-gray-50 dark:bg-white/4 border border-gray-100 dark:border-white/6 p-2 flex items-end justify-around gap-1 mb-6">
          {[35, 58, 44, 78, 52, 68, 90].map((h, i) => (
            <div
              key={i}
              className={`w-4 rounded-t-md ${i >= 5 ? "gradient-bg" : "bg-primary-400/60"}`}
              style={{
                height: `${h}%`,
                animation: `fadeSlideUp 0.4s ease ${1.5 + i * 0.15}s both`,
              }}
            />
          ))}
        </div>

        <div className="space-y-3">
          {d.milestones.map((m) => (
            <div key={m.label} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                  m.done
                    ? "gradient-bg"
                    : "border border-gray-200 dark:border-white/10"
                }`}
              >
                {m.done && <Icon name="check" className="text-white text-[9px]" />}
              </div>
              <span
                className={`text-sm ${
                  m.done
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-400"
                }`}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function DeliverySection({ t }) {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            {t.items.map((item, i) => (
              <DeliveryItem key={item.title} item={item} index={i} />
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <DeliveryDashboard d={t.dashboard} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;
