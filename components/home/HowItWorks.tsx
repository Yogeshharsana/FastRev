"use client";

import { BookOpen, Target, Play } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Target,
      number: "01",
      title: "Choose Exam / Subject",
      description:
        "Select from SSC, Railway, or Placement Aptitude, then pick your subject area.",
    },
    {
      icon: BookOpen,
      number: "02",
      title: "Pick Chapter & Topic",
      description:
        "Navigate to specific chapters and topics you need to revise quickly.",
    },
    {
      icon: Play,
      number: "03",
      title: "Watch & Revise",
      description:
        "Learn from short 5–10 minute videos and review crisp, exam-focused notes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with Fast Revision in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-border rotate-45" />
                </div>
              )}

              {/* Card */}
              <div
                className="
                  relative z-10 h-full
                  flex flex-col items-center text-center
                  rounded-2xl border border-border
                  bg-background
                  px-6 py-10
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:border-blue-400
                  hover:bg-blue-50
                "
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className="
                      w-24 h-24 rounded-2xl
                      flex items-center justify-center
                      bg-gradient-to-br from-blue-500/20 to-purple-500/20
                      transition-all duration-300
                      group-hover:from-blue-500/30
                      group-hover:to-purple-500/30
                      group-hover:scale-110
                    "
                  >
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>

                  {/* Step Number */}
                  <div
                    className="
                      absolute -top-2 -right-2
                      w-8 h-8 rounded-full
                      bg-blue-600 text-white
                      flex items-center justify-center
                      text-sm font-semibold
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="
                    text-xl font-semibold mb-3
                    transition-colors duration-300
                    group-hover:text-blue-700
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-muted-foreground
                    transition-colors duration-300
                    group-hover:text-slate-700
                  "
                >
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}