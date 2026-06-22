import { Icon } from "@/components/icon";

const socials = ["linkedin", "x-twitter", "dribbble", "github"];

export function SiteFooter({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center gradient-bg">
                <span className="text-white font-black text-sm">P</span>
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                Per<span className="gradient-text">{t.brandSuffix}</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              {t.tagline}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500/50 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all"
                >
                  <Icon name={social} className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {t.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-black text-white text-sm mb-5">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-black text-white text-sm mb-5">{t.contact.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Icon name="envelope" className="text-primary-400 text-xs w-4" />
                <span className="num-ltr">{t.contact.email}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Icon name="phone" className="text-primary-400 text-xs w-4" />
                <span className="num-ltr">{t.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Icon name="location" className="text-primary-400 text-xs w-4 mt-0.5" />
                {t.contact.location}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Icon name="clock" className="text-primary-400 text-xs w-4" />
                {t.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © <span className="num-ltr">{year}</span> Per{t.brandSuffix}. {t.rights}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            {t.legal.map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
