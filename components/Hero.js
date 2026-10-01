import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Hero() {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Greeting pill with burst graphics */}
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                I'm
              </span>
              <div className="relative inline-block">
                <span className="bg-brand-500 text-white font-bold text-2xl sm:text-3xl md:text-4xl px-5 py-1.5 rounded-full inline-block shadow-sm">
                  {userData.name.split(" ")[0]}
                </span>
                {/* Sunburst accent rays above badge */}
                <div className="absolute -top-3.5 -right-3 flex items-center gap-1 select-none pointer-events-none">
                  <div className="w-1 h-3 bg-brand-500 rounded-full rotate-45"></div>
                  <div className="w-1.5 h-3.5 bg-brand-500 rounded-full"></div>
                  <div className="w-1 h-3 bg-brand-500 rounded-full -rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {userData.designation}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-xl leading-relaxed">
              3rd-year BSIT student at NCST building reliable, high-performance web systems and intuitive digital experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3.5 rounded-full transition shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 text-sm"
              >
                <span>Hire Me Now</span>
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
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-full transition text-sm"
              >
                <span>View Projects</span>
              </Link>
            </div>

            {/* Social Links Circles */}
            <div className="flex items-center gap-3 pt-2">
              {userData.socialLinks?.github && (
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 text-brand-500 hover:bg-brand-500 hover:text-white transition flex items-center justify-center text-sm shadow-sm"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              )}
              {userData.email && (
                <a
                  href={`mailto:${userData.email}`}
                  className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 text-brand-500 hover:bg-brand-500 hover:text-white transition flex items-center justify-center text-sm shadow-sm"
                  title="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </a>
              )}
              {userData.resumeUrl && (
                <Link
                  href={userData.resumeUrl}
                  className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 text-brand-500 hover:bg-brand-500 hover:text-white transition flex items-center justify-center text-sm shadow-sm font-bold text-xs"
                  title="Resume"
                >
                  CV
                </Link>
              )}
            </div>
          </div>

          {/* Right Column Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-80 sm:w-96">
              {/* Rounded arch backdrop */}
              <div className="hero-arch-bg w-full h-[390px] absolute bottom-0 inset-x-0 mx-auto shadow-inner"></div>

              {/* Portrait Presentation */}
              <div className="relative z-10 flex justify-center">
                <img
                  alt={userData.name}
                  src="/mark.png"
                  className="w-72 sm:w-80 object-cover object-top h-[430px] rounded-t-full drop-shadow-2xl"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-24 -left-2 sm:-left-4 z-20 bg-brand-600 text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center p-2 shadow-xl border-4 border-white dark:border-slate-900">
                <span className="text-xl sm:text-2xl font-black leading-tight">3rd Yr</span>
                <span className="text-[10px] sm:text-xs font-semibold opacity-90 leading-tight">
                  BSIT Student<br />NCST
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics & Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-brand-500 tracking-tight mb-1">
              Full-Stack
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Web Architecture
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">
              Proficient in PHP, MySQL, JavaScript, React, and responsive UI frameworks.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-brand-500 tracking-tight mb-1">
              3rd Year
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              BSIT at NCST
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">
              National College of Science and Technology, Dasmari&ntilde;as, Cavite.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-sm">
            <div className="text-3xl font-black text-brand-500 tracking-tight mb-1">
              6 Months
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Data Annotation QA
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed">
              Hands-on dataset structuring, categorization, and quality control precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
