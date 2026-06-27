import Image from "next/image";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { processImages } from "@/components/process/process-images";
import { toneStyles } from "@/components/process/tone-styles";

function ProcessStep({ step, index }) {
  const reverse = index % 2 === 1;
  const tone = toneStyles[step.tone] ?? toneStyles.purple;
  const image = processImages[step.image];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
      <Reveal
        delay={1}
        className={`order-2 ${reverse ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="flex items-start gap-4 mb-5">
          <div
            className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${tone.icon}`}
          >
            <Icon name={step.icon} className="text-lg" />
          </div>
          <div>
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest num-ltr">
              {step.stepLabel}
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mt-1">
              {step.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base lg:text-lg mb-6">
          {step.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tone.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal
        delay={2}
        className={`order-1 flex justify-center ${
          reverse ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"
        }`}
      >
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-gray-200/40 dark:shadow-black/30 border border-gray-100 dark:border-white/6">
          <Image
            src={image}
            alt={step.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
            placeholder="blur"
          />
        </div>
      </Reveal>
    </div>
  );
}

export function ProcessStepsSection({ steps }) {
  return (
    <section id="steps" className="py-24 lg:py-32 bg-white dark:bg-[#06060e] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessStepsSection;
