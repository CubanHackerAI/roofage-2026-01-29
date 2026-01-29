"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is RoofAge?",
      answer:
        "RoofAge achieves 95% accuracy in roof age estimation by analyzing multiple factors including granule loss, wear patterns, and environmental indicators. Each estimate includes a confidence score so you know how reliable it is.",
    },
    {
      question: "What type of photos do I need to upload?",
      answer:
        "You can upload any clear photo of roof shingles taken with a smartphone or camera. The photo should show the shingles clearly - close-up shots work best. Our AI can analyze various angles and lighting conditions.",
    },
    {
      question: "How long does analysis take?",
      answer:
        "Most analyses complete in under 30 seconds. You'll receive an instant age estimate with confidence scores, and a detailed PDF report is generated within a minute.",
    },
    {
      question: "Can I use RoofAge on mobile?",
      answer:
        "Yes! RoofAge is mobile-first and works perfectly on smartphones. You can take photos in the field and get instant results without leaving the inspection site.",
    },
    {
      question: "What if I disagree with the age estimate?",
      answer:
        "Each estimate includes a confidence score. If the confidence is low, you may want to upload additional photos or use your professional judgment. RoofAge is a tool to support your expertise, not replace it.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center hover:text-primary transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-700 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
