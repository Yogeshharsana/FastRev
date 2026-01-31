"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              Fast Revision
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast-track your exam preparation with short videos and crisp
              notes for SSC, Railway, and Placement exams.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-emerald-500">
              <MapPin className="w-4 h-4" />
              <span>Made in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Subjects", href: "/subjects" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      group relative inline-flex items-center
                      text-sm text-muted-foreground
                      transition-all duration-200
                      hover:text-emerald-500 hover:translate-x-1
                    "
                  >
                    {item.name}
                    <span
                      className="
                        absolute left-0 -bottom-0.5 h-px w-0
                        bg-emerald-500 transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div>
            <h4 className="font-semibold mb-4">Exams</h4>
            <ul className="space-y-3 text-sm">
              {[
                "SSC CGL",
                "SSC CHSL",
                "Railway RRB",
                "Railway NTPC",
                "Placement Aptitude",
              ].map((exam) => (
                <li
                  key={exam}
                  className="
                    text-muted-foreground
                    transition-all duration-200
                    hover:text-emerald-500
                    hover:translate-x-1
                  "
                >
                  {exam}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Refund Policy", href: "/refund-policy" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      group relative inline-flex items-center
                      text-sm text-muted-foreground
                      transition-all duration-200
                      hover:text-emerald-500 hover:translate-x-1
                    "
                  >
                    {item.name}
                    <span
                      className="
                        absolute left-0 -bottom-0.5 h-px w-0
                        bg-emerald-500 transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}

              {/* Email */}
              <li className="flex items-center gap-2 pt-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href="mailto:support@fastrevision.com"
                  className="
                    text-muted-foreground
                    transition-colors duration-200
                    hover:text-emerald-500 hover:underline
                  "
                >
                  support@fastrevision.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2026 Fast Revision. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  className="
                    text-sm text-muted-foreground
                    transition-all duration-200
                    hover:text-emerald-500
                    hover:-translate-y-1
                  "
                >
                  {social}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}