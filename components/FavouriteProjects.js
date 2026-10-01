import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function FavouriteProjects() {
  const featured = userData.projects?.slice(0, 3) || [];

  return (
    <section className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/60" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
            Selected Work
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A showcase of database-driven management systems, institutional portals, and web applications I've built.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((proj, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm card-hover-effect"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={proj.imgUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full shadow-sm">
                  0{idx + 1}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {idx === 0
                      ? "Full-featured student enrollment portal handling registration, subject evaluations, and academic records."
                      : idx === 1
                      ? "Healthcare management system with patient records, queue scheduling, and consultation logs."
                      : "Responsive front-end application built with JavaScript, Bootstrap, and modern web standards."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-brand-500">
                    {idx === 0
                      ? "PHP &bull; MySQL &bull; Bootstrap"
                      : idx === 1
                      ? "PHP &bull; MySQL &bull; JS"
                      : "HTML5 &bull; CSS3 &bull; JS"}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-brand-500 transition-colors"
                  >
                    <span>View</span>
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

        {/* Center CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md shadow-brand-500/25 text-sm"
          >
            <span>View All Projects</span>
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
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
