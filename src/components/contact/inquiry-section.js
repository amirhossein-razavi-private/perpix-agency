import { InquiryForm } from "@/components/contact/inquiry-form";
import { ContactSidebar } from "@/components/contact/contact-sidebar";
import { Reveal } from "@/components/ui/reveal";

export function InquirySection({ form, sidebar, contact }) {
  return (
    <section className="py-12 lg:py-20 bg-gray-50/80 dark:bg-[#080812]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <Reveal>
          <div className="bg-white dark:bg-[#0c0c18] rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/6 p-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              <div className="lg:col-span-3 order-1">
                <InquiryForm t={form} />
              </div>
              <div className="lg:col-span-2 order-2">
                <ContactSidebar t={sidebar} contact={contact} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default InquirySection;
