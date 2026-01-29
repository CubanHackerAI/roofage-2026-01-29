export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            The Inspector-Adjuster Conflict
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Every home inspector knows the frustration: you estimate a roof is
              15 years old based on experience, but the insurance adjuster
              insists it&apos;s 8 years old. Without concrete evidence, it&apos;s your
              word against theirs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              RoofAge changes that. Upload a photo of the roof shingles, and
              our AI analyzes wear patterns, granule loss, and other indicators
              to provide an accurate age estimate with confidence scores. No
              more guessing. No more disputes.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-800 font-semibold">
                &ldquo;With RoofAge, I can back up my roof age estimates with data.
                Adjusters can&apos;t argue with AI-powered analysis.&rdquo;
              </p>
              <p className="text-sm text-gray-600 mt-2">— Home Inspector</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
