"use client";

import {
  Calculator,
  Brain,
  BookText,
  Globe,
  Briefcase,
} from "lucide-react";

export default function Subjects() {
  const subjects = [
    {
      icon: Calculator,
      title: "Quantitative Aptitude",
      description: "Arithmetic, Algebra, Geometry, Data Interpretation",
      topics: "120+ Topics",
    },
    {
      icon: Brain,
      title: "Logical Reasoning",
      description:
        "Puzzles, Seating Arrangement, Blood Relations, Coding-Decoding",
      topics: "90+ Topics",
    },
    {
      icon: BookText,
      title: "Verbal Ability / English",
      description:
        "Grammar, Vocabulary, Comprehension, Sentence Correction",
      topics: "80+ Topics",
    },
    {
      icon: Globe,
      title: "General Awareness",
      description:
        "Current Affairs, History, Geography, Polity, Economics",
      topics: "150+ Topics",
    },
    {
      icon: Briefcase,
      title: "Placement Aptitude",
      description:
        "Company-specific patterns, Mock tests, Speed tricks",
      topics: "100+ Topics",
    },
  ];

  const Card = ({ subject }: { subject: any }) => (
    <div
      className="
        group relative p-6
        rounded-2xl
        bg-background
        border border-border
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-emerald-400
        hover:bg-white
      "
    >
      {/* Emerald glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          ring-1 ring-emerald-400/30
        "
      />

      {/* Icon */}
      <div
        className="
          w-12 h-12 mb-4 rounded-xl
          bg-gradient-to-br from-emerald-500/20 to-teal-500/20
          flex items-center justify-center
          transition-all duration-300
          group-hover:scale-110
        "
      >
        <subject.icon className="w-6 h-6 text-emerald-600" />
      </div>

      {/* Title */}
      <h3
        className="
          text-xl font-semibold mb-2
          transition-colors duration-300
          group-hover:text-emerald-700
        "
      >
        {subject.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm text-muted-foreground mb-4
          transition-colors duration-300
          group-hover:text-slate-700
        "
      >
        {subject.description}
      </p>

      {/* Topics */}
      <div
        className="
          inline-flex items-center px-3 py-1
          rounded-full text-xs font-medium
          bg-secondary/50
          transition-all duration-300
          group-hover:bg-emerald-50
          group-hover:text-emerald-700
        "
      >
        {subject.topics}
      </div>
    </div>
  );

  return (
    <section
      id="subjects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Subjects & Areas Covered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of all major topics across competitive exams
          </p>
        </div>

        {/* Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.slice(0, 3).map((subject, index) => (
            <Card key={index} subject={subject} />
          ))}
        </div>

        {/* Bottom 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {subjects.slice(3).map((subject, index) => (
            <Card key={index} subject={subject} />
          ))}
        </div>

      </div>
    </section>
  );
}