import React from "react";
import Head from "next/head";
import Link from "next/link";
import userData from "@constants/data";

export default function Resume() {
  return (
    <>
      <Head>
        <title>{userData.name} - Resume / CV</title>
        <meta
          name="description"
          content={`Professional resume and curriculum vitae of ${userData.name}, ${userData.designation}`}
        />
      </Head>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
        {/* Action bar (hidden in print) */}
        <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            &larr; Back to Portfolio
          </Link>
          <div className="space-x-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Resume Sheet */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 sm:p-12 print:shadow-none print:p-0 print:max-w-full text-gray-800">
          {/* Header */}
          <header className="border-b-2 border-gray-200 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                  {userData.name}
                </h1>
                <p className="text-xl font-medium text-blue-600 mt-1">
                  {userData.designation} &bull; BSIT Undergraduate
                </p>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-gray-600 text-left sm:text-right space-y-1">
                <p>{userData.address}</p>
                <p>
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {userData.email}
                  </a>
                </p>
                <p>
                  <a
                    href={userData.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/{userData.githubUsername}
                  </a>
                </p>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Detail-oriented and resourceful Full-Stack Developer and 3rd-year
              Bachelor of Science in Information Technology (BSIT) student at the
              National College of Science and Technology (NCST). Experienced in
              designing and deploying database-driven web applications using
              PHP, MySQL, JavaScript, React, and CSS frameworks. Combines 6 months
              of professional data annotation and quality assurance background
              with hands-on system architecture to engineer reliable,
              user-centric digital solutions.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">Languages:</span>{" "}
                PHP, JavaScript (ES6+), SQL, HTML5, CSS3, Python (Basics)
              </div>
              <div>
                <span className="font-semibold text-gray-900">
                  Frameworks & UI:
                </span>{" "}
                React, Next.js, Bootstrap, Tailwind CSS
              </div>
              <div>
                <span className="font-semibold text-gray-900">
                  Databases & Servers:
                </span>{" "}
                MySQL, Apache (XAMPP), phpMyAdmin, RESTful APIs
              </div>
              <div>
                <span className="font-semibold text-gray-900">Tools & Workflow:</span>{" "}
                Git, GitHub, VS Code, Data Annotation & QA, Responsive Design
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-gray-900">
                    Bachelor of Science in Information Technology (BSIT)
                  </h3>
                  <span className="text-sm font-semibold text-gray-500">
                    2022 &ndash; Present (3rd Year)
                  </span>
                </div>
                <p className="text-sm text-blue-600 font-medium">
                  National College of Science and Technology (NCST) &bull; Dasmari&ntilde;as, Cavite
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Core Modules: Web Development, Relational Database Management Systems, Object-Oriented Programming, Data Structures & Algorithms, Systems Analysis and Design.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3">
              Featured Projects
            </h2>
            <div className="space-y-4 text-sm text-gray-700">


              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-gray-900">
                    School Enrollment & Student Management Portal
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    PHP / MySQL / Apache / Bootstrap
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-gray-600 text-xs sm:text-sm">
                  <li>
                    Developed full-featured institutional enrollment platform handling student registrations, subject evaluation, and scheduling.
                  </li>
                  <li>
                    Implemented administrative dashboard with secure authentication, student record auditing, and LMS file upload workflows.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-gray-900">
                    Clinic & Patient Record Management Portal
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    PHP / MySQL / JavaScript
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-gray-600 text-xs sm:text-sm">
                  <li>
                    Built a healthcare administration platform for managing patient consultation queues, appointments, and diagnostic histories.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-gray-900">
                    Data Annotation Specialist
                  </h3>
                  <span className="text-sm font-semibold text-gray-500">
                    6 Months
                  </span>
                </div>
                <p className="text-sm text-blue-600 font-medium">
                  Data Annotation &amp; Quality Services
                </p>
                <ul className="list-disc list-inside mt-1 space-y-1 text-gray-600 text-xs sm:text-sm">
                  <li>
                    Executed high-volume labeling and classification across multimodal datasets, ensuring strict compliance with QA guidelines.
                  </li>
                  <li>
                    Demonstrated precision, speed, and analytical rigor in detecting data anomalies and refining training datasets.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer note in print */}
          <footer className="pt-4 border-t border-gray-200 text-center text-xs text-gray-500 print:block">
            References available upon request &bull; {userData.name} &bull; {userData.email}
          </footer>
        </div>
      </div>
    </>
  );
}
