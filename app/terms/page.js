export default function TermsOfUse() {
  return (
    <main className="bg-purple-100 min-h-screen p-8">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">
          Terms of Use
        </h1>

        <p className="mb-4">Last updated: July 31, 2025</p>

        <p className="mb-4">
          Welcome to BitLinks! By using our URL shortening service, you agree to
          comply with and be bound by the following terms of use. Please read
          them carefully.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing or using BitLinks (the “Service”), you agree to be bound
          by these Terms of Use and our Privacy Policy. If you do not agree to
          these terms, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          2. Use of the Service
        </h2>
        <p className="mb-4">
          BitLinks provides a tool to shorten URLs for easier sharing. You are
          responsible for the content you shorten and share. You agree not to
          use the Service for any illegal, unlawful, or harmful purposes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">3. Prohibited Uses</h2>
        <p className="mb-4">You agree not to use the Service to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Violate any laws, regulations, or third-party rights</li>
          <li>
            Publish or share content that is fraudulent, harmful, defamatory,
            obscene, or otherwise objectionable
          </li>
          <li>Distribute malicious software, viruses, or other harmful code</li>
          <li>Engage in spamming, phishing, or other deceptive practices</li>
          <li>
            Tamper with the Service or attempt to interfere with its proper
            functioning
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-6">4. Data Storage</h2>
        <p className="mb-4">
          When you create shortened links, the original URLs are stored securely
          in our database. This is necessary for the redirection service to work
          properly. We do not store or require other personal information unless
          voluntarily provided.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          All content and technology used in the Service, including the BitLinks
          name and logo, are owned or licensed by us. You agree not to use our
          intellectual property without prior permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          6. Disclaimer of Warranties
        </h2>
        <p className="mb-4">
          The Service is provided on an “as is” and “as available” basis without
          warranties of any kind. We do not guarantee that the Service will be
          uninterrupted or error-free.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the extent permitted by law, BitLinks is not liable for any damages
          arising out of your use or inability to use the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">8. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to the
          Service at any time without notice if you violate these Terms of Use.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">
          9. Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms of Use from time to time. Your continued use
          of the Service after changes indicates your acceptance of the new
          terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at: <br />
          <strong>achintya8122005@gmail.com</strong>
        </p>
      </section>
    </main>
  );
}



export const metadata = {
  title: "BitLinks - Terms of Use",
  description: "This is a Terms of Use page",
};