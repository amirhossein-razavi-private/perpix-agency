import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

export function SectionLabel({ children, className = "" }) {
  return (
    <span className={`section-label ${className}`}>
      <Icon name="circle-dot" className="text-primary-400" />
      <span>{children}</span>
    </span>
  );
}

export function SectionHeading({
  label,
  titleLead,
  titleHighlight,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "items-start";

  return (
    <Reveal
      className={`flex flex-col ${alignment} ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
    >
      {label && (
        <SectionLabel className={align === "center" ? "mb-5" : "mb-5"}>
          {label}
        </SectionLabel>
      )}
      <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
        {titleLead} <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-lg text-lg font-light">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;
