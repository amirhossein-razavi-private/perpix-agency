import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

function TestimonialCard({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 lg:p-7 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full flex flex-col relative">
        <StarRating count={item.rating} className="mb-4" />
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1 mb-6">
          &ldquo;{item.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full gradient-bg flex-shrink-0 border-2 border-white dark:border-gray-900" />
          <div>
            <p className="font-bold text-sm text-gray-900 dark:text-white">
              {item.name}
            </p>
            <p className="text-xs text-gray-400">{item.role}</p>
          </div>
        </div>
        <Icon
          name="quote"
          className="absolute bottom-5 end-5 text-primary-200 dark:text-primary-500/20 text-2xl"
        />
      </div>
    </Reveal>
  );
}

export function TestimonialsSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <TestimonialCard key={item.name} item={item} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
