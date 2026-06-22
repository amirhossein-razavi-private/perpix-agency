import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ProcessSection({ t }) {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white dark:bg-[#06060e] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div className="process-line" />
          <div className="grid grid-cols-4 gap-8">
            {t.steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(i % 4) + 1}
                className="relative flex flex-col items-center text-center group"
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-7 z-10 relative transition-all group-hover:-translate-y-2 ${
                    i === 0
                      ? "gradient-bg shadow-xl shadow-primary-500/25"
                      : "border-2 border-primary-200 dark:border-primary-500/25 bg-primary-50 dark:bg-primary-500/5"
                  }`}
                >
                  <Icon
                    name={step.icon}
                    className={`text-xl ${i === 0 ? "text-white" : "text-primary-500"}`}
                  />
                </div>
                <span className="text-xs font-black text-primary-500 mb-2 num-ltr tracking-widest opacity-60">
                  {step.number}
                </span>
                <h3 className="font-black text-lg text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-5 senior-tag rounded-full px-4 py-1.5">
                  <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                    {step.duration}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical */}
        <div className="lg:hidden space-y-4">
          {t.steps.map((step, i) => (
            <Reveal
              key={step.number}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30"
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    i === 0
                      ? "gradient-bg"
                      : "border-2 border-primary-200 dark:border-primary-500/30 bg-primary-50 dark:bg-primary-500/5"
                  }`}
                >
                  <Icon
                    name={step.icon}
                    className={`text-sm ${i === 0 ? "text-white" : "text-primary-500"}`}
                  />
                </div>
                {i < t.steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-500/30 to-transparent rounded-full" />
                )}
              </div>
              <div>
                <span className="text-xs font-black text-primary-500 num-ltr">
                  {step.number}
                </span>
                <h3 className="font-black text-base text-gray-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
