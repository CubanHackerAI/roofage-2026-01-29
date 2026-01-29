"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Guessing?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of home inspectors using RoofAge to provide accurate,
            data-backed roof age estimates.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-secondary hover:bg-secondary/90 rounded-lg font-semibold transition-colors"
            >
              Get Started Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
