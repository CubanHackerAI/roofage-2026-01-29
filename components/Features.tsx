export default function Features() {
  const features = [
    {
      title: "Mobile-First",
      description: "Upload photos directly from your phone in the field",
      icon: "📱",
    },
    {
      title: "95% Accuracy",
      description: "AI-powered analysis with industry-leading accuracy rates",
      icon: "🎯",
    },
    {
      title: "PDF Reports",
      description: "Professional reports ready to share with clients",
      icon: "📋",
    },
    {
      title: "Instant Results",
      description: "Get age estimates in seconds, not hours",
      icon: "⚡",
    },
    {
      title: "Confidence Scores",
      description: "See how confident the AI is in each estimate",
      icon: "📊",
    },
    {
      title: "Easy Integration",
      description: "Works with your existing inspection workflow",
      icon: "🔗",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
