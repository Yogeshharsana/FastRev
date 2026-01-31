"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this useful for SSC & Railway exams?",
      answer:
        "Absolutely! Fast Revision is designed specifically for SSC (CGL, CHSL, MTS, GD) and Railway exams (RRB, NTPC, Group D). Content is strictly exam-oriented and based on PYQs.",
    },
    {
      question: "Can college students use it for placement aptitude?",
      answer:
        "Yes. We cover quantitative aptitude, reasoning, and verbal ability commonly asked in campus placements and MNC hiring tests.",
    },
    {
      question: "Are videos really short?",
      answer:
        "Yes. All videos are between 5–10 minutes — focused explanations, formulas, shortcuts, no fluff.",
    },
    {
      question: "Is this for revision or beginners?",
      answer:
        "Fast Revision is primarily for revision and last-phase preparation (3–6 months before exam).",
    },
    {
      question: "Can I access content on mobile devices?",
      answer:
        "Yes. The platform works seamlessly on mobile, tablet, and desktop with synced progress.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes. Every plan comes with a 7-day money-back guarantee.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Fast Revision
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  group rounded-2xl overflow-hidden
                  bg-background border
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-xl
                  ${
                    isOpen
                      ? "border-emerald-400 ring-1 ring-emerald-400/25"
                      : "border-border hover:border-emerald-300"
                  }
                `}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full px-6 py-5
                    flex items-center justify-between text-left
                    bg-transparent
                    transition-all duration-300
                  "
                >
                  <span
                    className={`
                      font-semibold text-base
                      transition-colors duration-300
                      ${
                        isOpen
                          ? "text-emerald-600"
                          : "text-foreground group-hover:text-emerald-500"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      w-5 h-5 flex-shrink-0
                      transition-all duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-emerald-500"
                          : "text-muted-foreground group-hover:text-emerald-500"
                      }
                    `}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    px-6 overflow-hidden
                    transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "max-h-96 pb-5 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-1"
                    }
                  `}
                >
                  <p className="text-white leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}