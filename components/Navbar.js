import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-brand-500 font-extrabold text-base group-hover:scale-105 transition shadow-sm">
            MC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-slate-900 dark:text-white leading-tight">
              {userData.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {userData.designation}
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = router.asPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-brand-500 font-bold"
                    : "hover:text-brand-500"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          {/* GitHub link if available */}
          {userData.socialLinks?.github && (
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center"
              title="GitHub Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          )}

          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle Color Theme"
            type="button"
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-slate-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition shadow-md shadow-brand-500/25"
          >
            <span>Let's Talk</span>
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium py-1.5 ${
                router.asPath === link.href
                  ? "text-brand-500 font-bold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
