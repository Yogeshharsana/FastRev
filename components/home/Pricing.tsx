"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Monthly",
      price: "₹49",
      period: "/month",
      description: "Perfect for short-term revision",
      features: [
        "Access to all subjects",
        "Short video lessons",
        "Downloadable notes",
        "Chapter-wise tests",
        "Mobile & desktop access",
      ],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Yearly",
      price: "₹199",
      period: "/year",
      description: "Best for complete exam prep",
      features: [
        "Everything in Monthly",
        "Save ₹389 per year",
        "Priority support",
        "Offline note access",
        "Progress tracking",
        "Mock test series",
      ],
      highlighted: true,
      badge: "Most Popular",
      cta: "Get Started",
    },
    {
      name: "Lifetime",
      price: "₹399",
      period: "one-time",
      description: "Unlimited learning forever",
      features: [
        "Everything in Yearly",
        "Lifetime access",
        "All future updates",
        "Premium support",
        "Certificate of completion",
        "Interview preparation",
      ],
      highlighted: false,
      badge: "Best Value",
      cta: "Get Lifetime Access",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your preparation timeline
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                group relative p-8 rounded-2xl bg-background border
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
                ${
                  plan.highlighted
                    ? "border-emerald-500 ring-1 ring-emerald-400/30 scale-105"
                    : "border-border hover:border-emerald-400"
                }
                hover:bg-emerald-50
              `}
            >
              {/* Glow */}
              <div className="
                pointer-events-none absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                ring-1 ring-emerald-400/20
              " />

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="
                    flex items-center gap-1 px-4 py-1.5
                    bg-gradient-to-r from-emerald-500 to-teal-500
                    text-white rounded-full text-sm font-semibold shadow-lg
                  ">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 transition-colors duration-300 group-hover:text-emerald-700">
                <h3 className="text-xl font-semibold mb-2">
                  {plan.name}
                </h3>

                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground group-hover:text-emerald-600">
                    {plan.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground group-hover:text-emerald-600">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="
                      w-5 h-5 rounded-full
                      bg-emerald-100
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-emerald-200
                    ">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm group-hover:text-emerald-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA – FIXED */}
              <Link
                href="/signup"
                className={`
                  block w-full text-center py-3 px-6 rounded-lg font-semibold
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-xl
                  ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }
                `}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 7-day money-back guarantee • Secure payment via Razorpay
          </p>
        </div>

      </div>
    </section>
  );
}