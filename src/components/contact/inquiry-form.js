"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { SectionLabel } from "@/components/ui/section-heading";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all";

export function InquiryForm({ t }) {
  const [projectTypes, setProjectTypes] = useState([]);

  function toggleType(type) {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((x) => x !== type) : [...prev, type]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="inquiry-form">
      <SectionLabel className="mb-4">{t.label}</SectionLabel>
      <h2 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-2">
        {t.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">{t.subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.firstName} <span className="text-primary-500">{t.required}</span>
            </label>
            <input type="text" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.lastName} <span className="text-primary-500">{t.required}</span>
            </label>
            <input type="text" required className={inputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            {t.email} <span className="text-primary-500">{t.required}</span>
          </label>
          <input type="email" required className={inputClass} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.company}
            </label>
            <input type="text" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              {t.budget}
            </label>
            <select className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>
                —
              </option>
              {t.budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">
            {t.projectType} <span className="text-primary-500">{t.required}</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {t.projectTypes.map((type) => {
              const selected = projectTypes.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selected
                      ? "gradient-bg text-white shadow-md shadow-primary-500/20"
                      : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/40"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            {t.message} <span className="text-primary-500">{t.required}</span>
          </label>
          <textarea required rows={5} className={`${inputClass} resize-y min-h-[120px]`} />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-black text-white glow-btn gradient-bg hover:-translate-y-0.5 transition-all"
        >
          {t.submit}
          <Icon name="paper-plane" className="text-sm rtl:rotate-180" />
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500 text-center leading-relaxed">
          {t.privacy}
        </p>
      </form>
    </div>
  );
}

export default InquiryForm;
