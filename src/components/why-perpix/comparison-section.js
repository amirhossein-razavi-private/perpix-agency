import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function CellIcon({ value }) {
  if (value === "check") {
    return (
      <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mx-auto">
        <Icon name="check" className="text-emerald-500 text-xs" />
      </div>
    );
  }
  if (value === "x") {
    return (
      <div className="w-7 h-7 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mx-auto">
        <Icon name="x" className="text-red-500 text-xs" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center mx-auto">
      <Icon name="warning" className="text-amber-500 text-xs" />
    </div>
  );
}

export function ComparisonSection({ t }) {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#06060e]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-12 lg:mb-16"
        />

        <Reveal>
          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/6">
                  <th className="text-start py-4 px-4 text-sm font-bold text-gray-400">
                    {t.columns.feature}
                  </th>
                  <th className="py-4 px-4 text-sm font-black text-primary-500">
                    {t.columns.perpix}
                  </th>
                  <th className="py-4 px-4 text-sm font-bold text-gray-400">
                    {t.columns.freelancers}
                  </th>
                  <th className="py-4 px-4 text-sm font-bold text-gray-400">
                    {t.columns.agencies}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 dark:border-white/4 ${
                      i % 2 === 0 ? "bg-gray-50/50 dark:bg-white/[0.02]" : ""
                    }`}
                  >
                    <td className="py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 bg-primary-50/50 dark:bg-primary-500/5">
                      <CellIcon value={row.perpix} />
                    </td>
                    <td className="py-4 px-4">
                      <CellIcon value={row.freelancers} />
                    </td>
                    <td className="py-4 px-4">
                      <CellIcon value={row.agencies} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ComparisonSection;
