"use client";

export default function Pricing() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "14 days",
      features: [
        "5 roof analyses",
        "Basic age estimates",
        "Email support",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      features: [
        "50 roof analyses",
        "Detailed age estimates",
        "PDF reports",
        "Email support",
        "Mobile app access",
        "Confidence scores",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Pro",
      price: "$199",
      period: "per month",
      features: [
        "Unlimited roof analyses",
        "Advanced age estimates",
        "Professional PDF reports",
        "Priority support",
        "Mobile app access",
        "Confidence scores",
        "API access",
        "Custom branding",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the plan that works for your inspection volume
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular
                  ? "border-2 border-primary scale-105 relative"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
