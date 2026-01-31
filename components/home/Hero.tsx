"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2 px-4 py-2 mb-8
              rounded-full text-sm
              bg-slate-200 text-slate-800
              transition-all duration-300
              hover:bg-slate-300
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Fast-track your exam preparation
          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight
              transition-all duration-300
              hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.35)]
            "
          >
            Master SSC, Railways & <br className="hidden md:block" />
            Placement Aptitude
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              In Record Time
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Short videos, crisp notes, and chapter-wise revision designed for fast learners.
            No lengthy lectures—just exam-focused content.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              {
                icon: <PlayCircle className="w-5 h-5 text-blue-600" />,
                label: "5–10 min videos",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                label: "Crisp notes",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                label: "Chapter-wise revision",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-slate-100 text-slate-800
                  border border-slate-200
                  transition-all duration-300
                  hover:bg-slate-200
                  hover:border-blue-400
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* PRIMARY BUTTON */}
            <Link
              href="/login"
              className="
                inline-flex items-center justify-center gap-2
                w-full sm:w-auto
                px-8 py-4 rounded-lg
                bg-blue-600 text-white font-semibold
                transition-all duration-300
                hover:bg-blue-700
                hover:-translate-y-1
                hover:shadow-xl hover:shadow-blue-500/30
                active:translate-y-0
              "
            >
              Start Revising
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="/#subjects"
              className="
                inline-flex items-center justify-center
                w-full sm:w-auto
                px-8 py-4 rounded-lg
                bg-blue-100 text-blue-700 font-semibold
                transition-all duration-300
                hover:bg-blue-200
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              View Subjects
            </Link>

          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-gray-500">
            ✓ No credit card required • ✓ Start for free
          </p>

        </div>
      </div>

      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}