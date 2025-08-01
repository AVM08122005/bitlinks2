import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-purple-100 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About BitLinks
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto ">
            The privacy-focused URL shortener built for simplicity and speed
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-gray-700 mb-4 text-center ">
              BitLinks was born out of frustration with existing URL shorteners
              that either tracked every click or required accounts for basic
              functionality. In 2025, we set out to create a simple alternative
              that respects user privacy while delivering all the essential
              features you need.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                Privacy First
              </h3>
              <p className="text-gray-700">
                We do not track your clicks or require personal information. Your
                links are yours alone.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                Simplicity
              </h3>
              <p className="text-gray-700">
                No unnecessary features or complicated dashboards. Just
                straightforward link shortening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                Reliability
              </h3>
              <p className="text-gray-700">
                99.9% uptime guarantee. Your links will always work when you
                need them.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">The Team</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-gray-700 mb-4 text-center">
              BitLinks is developed by a small, passionate team of developers
              and privacy advocates who believe the web should be simpler and
              more private.
            </p>
            <p className="text-gray-700 text-center">
              We are fully independent and self-funded, which means we answer to
              our users — not investors or advertisers.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to try BitLinks?
          </h2>
          <Link href="/shorten">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}

export const metadata = {
  title: "About BitLinks",
  description:
    "Learn about our privacy-focused URL shortener and the team behind it",
};
