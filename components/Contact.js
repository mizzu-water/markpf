import React, { useState } from "react";
import userData from "@constants/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-500 uppercase">
                STAY CONNECTED
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                Let's Work Together!
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                Have a project in mind, an internship opportunity, or want to discuss full-stack development? Feel free to reach out.
              </p>
            </div>

            <div className="space-y-5 pt-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-brand-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Email
                  </h4>
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 hover:text-brand-500 transition-colors"
                  >
                    {userData.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-brand-500 flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Location
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {userData.address}
                  </p>
                </div>
              </div>

              {/* GitHub */}
              {userData.socialLinks?.github && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-brand-500 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      GitHub
                    </h4>
                    <a
                      href={userData.socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 hover:text-brand-500 transition-colors"
                    >
                      github.com/{userData.githubUsername}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 mx-auto flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-500">
                    Thank you for reaching out. Mark will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="Hi Mark, I would like to talk about..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3 rounded-full transition shadow-md shadow-brand-500/25 text-sm"
                    >
                      <span>Send Message</span>
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
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
