"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";
import { logout } from "@/lib/auth";

export default function Navbar() {
  const user = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      closeMobileMenu();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-xl font-semibold tracking-tight hover:text-blue-600 transition"
          >
            Fast Revision
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#subjects" className="text-muted-foreground hover:text-blue-600">
              Subjects
            </Link>

            <Link href="/#pricing" className="text-muted-foreground hover:text-blue-600">
              Pricing
            </Link>

            <Link href="/contact" className="text-muted-foreground hover:text-blue-600">
              Contact
            </Link>

            {/* AUTH BASED UI */}
            {user ? (
              <>
                {/* 🔵 PRIMARY DASHBOARD BUTTON */}
                <Link
                  href="/dashboard"
                  className="
                    px-5 py-2.5 rounded-lg
                    bg-blue-600 text-white font-semibold
                    transition-all duration-300
                    hover:bg-blue-700
                    hover:-translate-y-0.5
                    hover:shadow-lg hover:shadow-blue-500/30
                  "
                >
                  Go To Dashboard
                </Link>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-muted-foreground hover:text-blue-600"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>

                <Link
                  href="/login"
                  className="
                    px-5 py-2.5 rounded-lg
                    bg-blue-600 text-white font-semibold
                    transition-all duration-300
                    hover:bg-blue-700
                    hover:-translate-y-0.5
                    hover:shadow-lg hover:shadow-blue-500/30
                  "
                >
                  Start Free Revision
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">

              <Link href="/#subjects" onClick={closeMobileMenu} className="px-4 py-2">
                Subjects
              </Link>

              <Link href="/#pricing" onClick={closeMobileMenu} className="px-4 py-2">
                Pricing
              </Link>

              <Link href="/contact" onClick={closeMobileMenu} className="px-4 py-2">
                Contact
              </Link>

              {user ? (
                <>
                  {/* 🔵 MOBILE DASHBOARD CTA */}
                  <Link
                    href="/dashboard"
                    onClick={closeMobileMenu}
                    className="
                      mx-4 mt-2 px-5 py-2.5 rounded-lg text-center
                      bg-blue-600 text-white font-semibold
                      transition-all duration-300
                      hover:bg-blue-700
                      hover:shadow-lg hover:shadow-blue-500/30
                    "
                  >
                    Go To Dashboard
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="
                      mx-4 mt-2 px-5 py-2.5 rounded-lg
                      text-red-500 border border-red-500/30
                      hover:bg-red-50 transition text-left
                    "
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="px-4 py-2 flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>

                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="
                      mx-4 mt-2 px-5 py-2.5 rounded-lg text-center
                      bg-blue-600 text-white font-semibold
                      hover:bg-blue-700 transition
                    "
                  >
                    Start Free Revision
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}