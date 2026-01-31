"use client";

import { Clock, Zap, Target, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Short 5–10 Minute Videos",
      description:
        "No lengthy lectures. Every concept explained in crisp, focused videos perfect for quick revision.",
    },
    {
      icon: Zap,
      title: "Formula-First Approach",
      description:
        "Direct access to important formulas, tricks, and shortcuts without unnecessary theory.",
    },
    {
      icon: Target,
      title: "Only Exam-Relevant Content",
      description:
        "Every topic is curated based on exam patterns and previous year questions.",
    },
    {
      icon: TrendingUp,
      title: "Last-Minute Revision Ready",
      description:
        "Designed specifically for learners in their final 3–6 months of preparation.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Fast Revision?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for serious learners who value their time and want results
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                group relative
                flex gap-6 p-6
                rounded-2xl
                bg-background
                border border-border
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-blue-400
                hover:bg-blue-50
              "
            >
              {/* Glow border */}
              <div className="
                pointer-events-none absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                ring-1 ring-blue-400/30
              " />

              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className="
                    w-14 h-14 rounded-xl
                    bg-gradient-to-br from-blue-500/20 to-purple-500/20
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:from-blue-500/30
                    group-hover:to-purple-500/30
                  "
                >
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="
                    text-xl font-semibold mb-2
                    transition-colors duration-300
                    group-hover:text-blue-700
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    text-muted-foreground
                    transition-colors duration-300
                    group-hover:text-slate-700
                  "
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}