import { Icon } from "@/components/icon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function TeamMemberCard({ member, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl p-5 bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-11 h-11 rounded-full gradient-bg flex-shrink-0 border-2 border-white dark:border-gray-900" />
          <div>
            <p className="font-bold text-sm text-gray-900 dark:text-white">
              {member.name}
            </p>
            <p className="text-xs text-gray-400">{member.role}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {member.skill}
          </span>
          <span className="text-xs font-bold text-primary-500 num-ltr">
            {member.level}%
          </span>
        </div>
        <ProgressBar value={member.level} delay={delay * 100} />
      </div>
    </Reveal>
  );
}

export function SeniorTeamSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              label={t.label}
              titleLead={t.titleLead}
              titleHighlight={t.titleHighlight}
              subtitle={t.subtitle}
              align="start"
              className="mb-10"
            />
            <div className="space-y-6">
              {t.points.map((point, i) => (
                <Reveal key={point.title} delay={(i % 3) + 1}>
                  <div className="flex items-start gap-4">
                    {t.numberedPoints ? (
                      <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-black text-primary-500 num-ltr">
                          {i + 1}
                        </span>
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-md shadow-primary-500/20">
                        <Icon name={point.icon} className="text-white text-sm" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {t.members.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} delay={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeniorTeamSection;
