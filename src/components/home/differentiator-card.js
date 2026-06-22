import { Icon } from "@/components/icon";

export function DifferentiatorCard({ item }) {
  return (
    <div className="card-hover gradient-border rounded-2xl p-8 lg:p-10 bg-white dark:bg-[#0e0e1a] group relative overflow-hidden h-full">
      <div className="absolute top-0 end-0 w-32 h-32 opacity-5 rounded-bl-full gradient-bg" />
      <div className="flex items-start gap-5 mb-7">
        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/25">
          <Icon name={item.icon} className="text-white text-xl" />
        </div>
        <div className="flex-1">
          <div className="senior-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3">
            <Icon name="check" className="text-primary-500 text-[10px]" />
            <span className="text-xs font-black text-primary-600 dark:text-primary-400">
              {item.tag}
            </span>
          </div>
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-3">
            {item.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
            {item.description}
          </p>
        </div>
      </div>
      <div className="pt-6 border-t border-gray-100 dark:border-white/6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {item.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              {i > 0 && <div className="w-px h-10 bg-gray-100 dark:bg-white/6" />}
              <div>
                <p className="font-black text-xl text-gray-900 dark:text-white num-ltr">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-9 h-9 rounded-xl gradient-bg-subtle flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
          <Icon name="arrow-right" className="text-primary-500 text-xs rtl:rotate-180" />
        </div>
      </div>
    </div>
  );
}

export default DifferentiatorCard;
