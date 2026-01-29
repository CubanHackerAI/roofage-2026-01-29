export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Snap",
      description: "Take a photo of the roof shingles with your phone or camera",
      icon: "📸",
    },
    {
      number: "2",
      title: "Analyze",
      description:
        "Our AI analyzes wear patterns, granule loss, and other indicators",
      icon: "🤖",
    },
    {
      number: "3",
      title: "Report",
      description:
        "Get an instant age estimate with confidence scores and a PDF report",
      icon: "📄",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
