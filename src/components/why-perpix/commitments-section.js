import Image from "next/image";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { StarRating } from "@/components/ui/star-rating";
import officeImage from "@/assets/images/process-4.png";

export function CommitmentsSection({ t }) {
  return (
    <section className="py-24 lg:py-32 pb-32 lg:pb-32 bg-[#f6f8ff] dark:bg-[#08080f]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="section-label mb-5">
              <Icon name="circle-dot" className="text-primary-400" />
              <span>{t.label}</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
              {t.titleLead}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
              {t.subtitle}
            </p>
            <div className="space-y-6">
              {t.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg-subtle flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-primary-500 text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="relative">
            <div className="relative w-full max-w-[480px] mx-auto lg:ms-auto lg:me-0 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-gray-200/40 dark:shadow-black/30 border border-gray-100 dark:border-white/6">
              <Image
                src={officeImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 480px"
                placeholder="blur"
              />
            </div>
            <div className="absolute -bottom-6 start-4 lg:start-8 end-4 lg:end-auto lg:max-w-[300px] card-hover rounded-2xl p-5 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 shadow-xl">
              <StarRating count={t.testimonial.rating} className="mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                &ldquo;{t.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full gradient-bg flex-shrink-0 border-2 border-white dark:border-gray-900" />
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">
                    {t.testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.testimonial.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CommitmentsSection;
