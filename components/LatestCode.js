import React, { useState } from "react";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos] = useState(repositories || []);

  if (!repos || repos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
              OPEN SOURCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Latest GitHub Repositories
            </h2>
          </div>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-5 py-2.5 rounded-full transition text-xs sm:text-sm shadow-sm"
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
            <span>Visit @{userData.githubUsername}</span>
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="bg-slate-50/70 dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-brand-500 flex items-center justify-center">
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
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
          {latestRepo.language && (
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {latestRepo.language}
            </span>
          )}
        </div>

        <h3 className="font-bold text-base text-slate-900 dark:text-white">
          {latestRepo.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
          {latestRepo.description || "Public repository and source code on GitHub."}
        </p>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <span className="text-xs text-slate-400">Open Source</span>
        <a
          href={latestRepo.html_url || latestRepo.clone_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 hover:text-brand-600 transition"
        >
          <span>View Repo</span>
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
  );
};
