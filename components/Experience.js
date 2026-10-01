import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Experience() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
            RESUME
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
            Work Experience &amp; Education
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            My academic journey at NCST and practical experience in software development and data quality assurance.
          </p>
        </div>

        {/* 2-Column Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {userData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-brand-500">
                    {exp.year}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-brand-500 flex items-center justify-center shrink-0 mt-0.5 font-extrabold text-sm">
                    {idx === 0 ? "EDU" : "EXP"}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {exp.companyLink && exp.companyLink !== "#" ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-brand-500 transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <span className="text-[11px] font-semibold text-slate-400">
                  {idx === 0 ? "Undergraduate Degree" : "Professional Contract"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3 rounded-full transition shadow-md shadow-brand-500/25 text-sm"
          >
            <span>View Complete Resume / CV</span>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
