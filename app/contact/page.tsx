"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with backend / email service later
    alert("Thank you for contacting us! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    
    <main className="">
      
      
      <div className="max-w-6xl mx-auto min-h-screen py-5 md:py-5 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about Fast Revision? We’re here to help. Reach out to
            us and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Get in touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about features, pricing, or need help
                with your exam preparation, our team is ready to help.
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:support@fastrevision.com"
                    className="text-primary hover:underline"
                  >
                    support@fastrevision.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-background border border-border rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving students across India with localized content for
                    SSC, Railway, and placement exams.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border rounded-xl">
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We usually respond within 24 hours during business days
                (Mon–Sat, 9 AM – 6 PM IST).
              </p>
            </div>

            {/* FAQ CTA */}
            <div className="p-6 bg-secondary/30 rounded-xl">
              <h3 className="font-semibold mb-2">Before you contact us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Check our FAQ section for quick answers to common questions.
              </p>
              <Link
                href="/#faq"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Visit FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
