import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function AboutMe() {
  const skills = [
    {
      name: "PHP",
      level: "85%",
      desc: "Backend MVC architecture, APIs, session auth, routing.",
      icon: "PHP",
    },
    {
      name: "MySQL",
      level: "80%",
      desc: "Relational database modeling, SQL queries, normalization.",
      icon: "SQL",
    },
    {
      name: "JavaScript & React",
      level: "80%",
      desc: "Dynamic client-side functionality, Next.js, ES6+ features.",
      icon: "JS",
    },
    {
      name: "HTML5 & Tailwind CSS",
      level: "90%",
      desc: "Responsive web layouts, Bootstrap, modern semantic markup.",
      icon: "UI",
    },
  ];

  const specializations = [
    {
      num: "01",
      title: "Web Development",
      desc: "Designing and engineering responsive, user-friendly websites with clean architecture.",
    },
    {
      num: "02",
      title: "Database Systems",
      desc: "Structuring relational databases in MySQL for fast queries and solid data integrity.",
    },
    {
      num: "03",
      title: "Full-Stack Applications",
      desc: "Bridging frontend interfaces with PHP server-side controllers and secure sessions.",
    },
    {
      num: "04",
      title: "Data Annotation & QA",
      desc: "6 months of professional experience labeling datasets, auditing consistency, and QA.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
            ABOUT ME
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
            Who I Am &amp; What I Do
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            {userData.about.title}
          </p>
        </div>

        {/* Bio Narrative Section */}
        <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl p-8 sm:p-12 border border-slate-100 dark:border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <img
                  src={userData.avatarUrl}
                  alt={userData.name}
                  className="w-56 h-56 rounded-2xl object-cover shadow-xl border-4 border-white dark:border-slate-800"
                />
                <div className="absolute -bottom-4 -right-4 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md">
                  NCST BSIT
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {userData.about.description?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-md shadow-brand-500/25"
                >
                  <span>Check My Resume / CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <a
                  href={`mailto:${userData.email}`}
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 transition"
                >
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              PROFICIENCIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Core Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-brand-500 font-extrabold flex items-center justify-center text-sm mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs text-slate-400">Proficiency</span>
                    <span className="text-xs font-bold text-brand-500">
                      {skill.level}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-brand-500 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations / Services */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              FOCUS AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              What I Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec) => (
              <div
                key={spec.num}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect"
              >
                <span className="text-3xl font-extrabold text-blue-400">
                  {spec.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-2">
                  {spec.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
