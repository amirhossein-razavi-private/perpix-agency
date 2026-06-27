import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

export function ServiceCard({ item, learnMore, delay = 1 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-6 lg:p-7 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full flex flex-col group">
        <div className="w-11 h-11 rounded-xl gradient-bg-subtle flex items-center justify-center mb-5">
          <Icon name={item.icon} className="text-primary-500 text-lg" />
        </div>
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-white/6"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-sm font-bold text-primary-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all mt-auto"
        >
          {learnMore}
          <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
        </a>
      </div>
    </Reveal>
  );
}

export default ServiceCard;
