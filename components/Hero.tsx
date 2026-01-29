"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Guessing Roof Age.
            <br />
            <span className="text-secondary">Start Knowing.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            AI-powered roof age estimation for home inspectors. Upload a photo,
            get an instant estimate with confidence scores.
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
