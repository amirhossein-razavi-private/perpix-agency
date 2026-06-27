"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { teamMemberImage } from "@/components/our-team/team-image";

function MemberCard({ member, viewProfile, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="card-hover rounded-2xl bg-white dark:bg-[#0e0e1a] border border-gray-100 dark:border-white/6 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={teamMemberImage}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
          />
          <span className="absolute bottom-3 start-3 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-200 backdrop-blur-sm">
            {member.tag}
          </span>
        </div>
        <div className="p-5 lg:p-6 flex flex-col flex-1">
          <h3 className="font-black text-gray-900 dark:text-white">{member.name}</h3>
          <p className="text-sm font-bold text-primary-500 mb-3">{member.role}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
            {member.bio}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-400 border border-gray-100 dark:border-white/6"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="text-xs font-bold text-primary-500 flex items-center gap-1.5 ms-auto hover:gap-2.5 transition-all"
          >
            {viewProfile}
            <Icon name="arrow-right" className="text-[10px] rtl:rotate-180" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function TeamGridSection({ t }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? t.members
      : t.members.filter((m) => m.category === active);

  return (
    <section id="team" className="py-24 lg:py-32 bg-white dark:bg-[#06060e] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 lg:mb-16">
          {t.filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === filter.key
                  ? "gradient-bg text-white shadow-lg shadow-primary-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <SectionHeading
          label={t.label}
          titleLead={t.titleLead}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filtered.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              viewProfile={t.viewProfile}
              delay={(i % 3) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamGridSection;
