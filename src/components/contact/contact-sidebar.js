import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";

const socials = ["linkedin", "x-twitter", "dribbble", "github"];

const trustIconColors = {
  shield: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10",
  star: "text-amber-500 bg-amber-50 dark:bg-amber-500/10",
  rocket: "text-blue-500 bg-blue-50 dark:bg-blue-500/10",
  handshake: "text-primary-500 bg-primary-50 dark:bg-primary-500/10",
};

export function ContactSidebar({ t, contact }) {
  return (
    <div className="space-y-8">
      <Reveal>
        <div
          className="rounded-2xl p-6 lg:p-7 text-white"
          style={{ background: "linear-gradient(135deg,#5b4ef7 0%,#7c3aed 100%)" }}
        >
          <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-5">
            <Icon name="headset" className="text-lg" />
          </div>
          <h3 className="text-xl font-black mb-3 leading-snug">{t.consultation.title}</h3>
          <p className="text-sm text-white/75 leading-relaxed mb-6">
            {t.consultation.description}
          </p>
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-black bg-white text-primary-600 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Icon name="calendar" className="text-sm" />
            {t.consultation.cta}
          </a>
          <p className="text-xs text-white/60 text-center mt-4">{t.consultation.note}</p>
        </div>
      </Reveal>

      <Reveal delay={1}>
        <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-4">
          {t.directLabel}
        </p>
        <ul className="space-y-3.5 mb-6">
          <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0">
              <Icon name="envelope" className="text-primary-500 text-xs" />
            </span>
            <span className="num-ltr">{contact.email}</span>
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0">
              <Icon name="phone" className="text-primary-500 text-xs" />
            </span>
            <span className="num-ltr">{contact.phone}</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="location" className="text-primary-500 text-xs" />
            </span>
            {contact.location}
          </li>
          <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0">
              <Icon name="clock" className="text-primary-500 text-xs" />
            </span>
            {contact.hours}
          </li>
        </ul>

        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">
          {t.followUs}
        </p>
        <div className="flex items-center gap-2.5">
          {socials.map((social) => (
            <a
              key={social}
              href="#"
              aria-label={social}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-500 hover:border-primary-300 dark:hover:border-primary-500/40 transition-all"
            >
              <Icon name={social} className="text-sm" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={2}>
        <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-4">
          {t.trustLabel}
        </p>
        <ul className="space-y-2.5">
          {t.trust.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/4 border border-gray-100 dark:border-white/6"
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  trustIconColors[item.icon] || "text-primary-500 bg-primary-50"
                }`}
              >
                <Icon name={item.icon} className="text-xs" />
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-snug">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export default ContactSidebar;
