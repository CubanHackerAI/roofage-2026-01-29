export default function SocialProof() {
  const testimonials = [
    {
      quote:
        "RoofAge has completely changed how I estimate roof age. The confidence scores give me credibility with adjusters.",
      author: "Mike Johnson",
      role: "Certified Home Inspector",
      location: "Austin, TX",
    },
    {
      quote:
        "I used to spend hours researching roof ages. Now I get instant, accurate estimates in seconds.",
      author: "Sarah Williams",
      role: "Home Inspector",
      location: "Phoenix, AZ",
    },
    {
      quote:
        "The PDF reports are professional and easy to share with clients. This tool pays for itself.",
      author: "David Chen",
      role: "Property Inspector",
      location: "Seattle, WA",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Roofs Analyzed" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "500+", label: "Active Inspectors" },
    { number: "30s", label: "Average Analysis Time" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Trusted by Home Inspectors
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary"
            >
              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
