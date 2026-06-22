import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

function FeaturedCard({ project, viewProject }) {
  return (
    <div className="card-hover rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 group bg-gray-50 dark:bg-gray-900/30 relative h-full">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: "linear-gradient(135deg, #4f6ef7, #7c3aed)" }}
        />
        <div
          className="absolute top-0 end-0 w-64 h-64 opacity-10"
          style={{ background: "radial-gradient(circle, #4f6ef7, transparent 70%)" }}
        />
      </div>
      <div className="relative p-8 lg:p-10">
        {/* Mock UI skeleton */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-5 mb-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="flex-1 h-5 bg-gray-100 dark:bg-gray-800 rounded-lg me-4" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[0.12, 0.08, 0.05].map((o) => (
              <div
                key={o}
                className="h-16 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, rgba(79,110,247,${o}), rgba(124,58,237,${o}))`,
                }}
              />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-full" />
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-4/5" />
            <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-3/5" />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                i === 0
                  ? "bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-lg font-black text-gray-900 dark:text-white num-ltr">
                  {m.value}
                  {m.unit && (
                    <span className="text-sm font-medium text-gray-500"> {m.unit}</span>
                  )}
                </p>
                <p className="text-xs text-gray-400">{m.label}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {viewProject}
            <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
          </a>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project }) {
  return (
    <div className="card-hover rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 p-7 group flex-1">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
          {project.tag}
        </span>
      </div>
      <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-black text-gray-900 dark:text-white num-ltr">
          {project.metric}{" "}
          <span className="text-xs font-medium text-gray-400">{project.metricLabel}</span>
        </span>
        <Icon name="arrow-right" className="text-primary-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180" />
      </div>
    </div>
  );
}

export function FeaturedProjects({ t }) {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-white dark:bg-[#0a0a0f] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-3 block">
              {t.label}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">
              {t.titleLead} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors"
          >
            {t.viewAll}
            <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Reveal delay={1} className="lg:col-span-2">
            <FeaturedCard project={t.featured} viewProject={t.viewProject} />
          </Reveal>
          <Reveal delay={2} className="flex flex-col gap-6">
            {t.secondary.map((project) => (
              <SmallCard key={project.title} project={project} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
