"use client";

import { Award, Train, Briefcase } from "lucide-react";

export default function TrustStrip() {
  const exams = [
    {
      icon: Award,
      title: "SSC Exams",
      description: "CGL, CHSL, MTS, GD",
    },
    {
      icon: Train,
      title: "Railway Exams",
      description: "RRB, NTPC, Group D",
    },
    {
      icon: Briefcase,
      title: "Placement Aptitude",
      description: "For college students",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Focused Preparation for Your Goal
          </h2>
          <p className="text-muted-foreground">
            Tailored content for competitive exams and placements
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="
                group relative
                flex flex-col items-center p-6
                rounded-xl border bg-background
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-xl
                hover:border-blue-400
                hover:bg-blue-50
              "
            >
              {/* Soft blue glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  ring-1 ring-blue-400/30
                "
              />

              {/* Icon */}
              <div
                className="
                  w-14 h-14 rounded-full
                  bg-blue-100
                  flex items-center justify-center mb-4
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-blue-200
                "
              >
                <exam.icon className="w-7 h-7 text-blue-600" />
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl font-semibold mb-2
                  transition-colors duration-300
                  group-hover:text-blue-700
                "
              >
                {exam.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-sm text-muted-foreground text-center
                  transition-colors duration-300
                  group-hover:text-slate-700
                "
              >
                {exam.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}