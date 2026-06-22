import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { DifferentiatorCard } from "@/components/home/differentiator-card";

export function DifferentiatorsSection({ t }) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) + 1}>
              <DifferentiatorCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorsSection;
