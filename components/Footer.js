import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Brand Icon */}
        <Link href="/" className="mb-6 inline-flex group" aria-label="Scroll to top">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-brand-500 font-extrabold text-lg group-hover:scale-105 transition shadow-sm">
            MC
          </div>
        </Link>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm font-medium text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-brand-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-brand-500 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-brand-500 transition-colors">
            Projects
          </Link>
          <Link href="/experience" className="hover:text-brand-500 transition-colors">
            Experience
          </Link>
          <Link href="/resume" className="hover:text-brand-500 transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-brand-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-8">
          {userData.socialLinks?.github && (
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-500 hover:text-white transition flex items-center justify-center text-sm"
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
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-500 hover:text-white transition flex items-center justify-center text-sm"
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
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {userData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
