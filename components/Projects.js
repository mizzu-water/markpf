import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
            PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 tracking-tight">
            All Projects &amp; Work
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            A comprehensive showcase of web applications, database architectures, and academic systems built with passion and precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.projects.map((proj, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={proj.imgUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full shadow-sm">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {idx === 0
                      ? "Complete institutional enrollment platform handling student registration, schedule auditing, tuition, and administrative dashboards."
                      : idx === 1
                      ? "Modern clinic administration system streamlining patient records, consultation histories, and appointment queues."
                      : idx === 2
                      ? "Interactive school web project created with clean HTML5, CSS3, JavaScript, and Bootstrap components."
                      : "Personal developer portfolio built with Next.js, React, and Tailwind CSS."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-500">
                    {idx === 0
                      ? "PHP &bull; MySQL &bull; Bootstrap"
                      : idx === 1
                      ? "PHP &bull; MySQL &bull; JS"
                      : idx === 2
                      ? "JS &bull; Bootstrap"
                      : "Next.js &bull; Tailwind CSS"}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-brand-500 transition-colors"
                  >
                    <span>View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
