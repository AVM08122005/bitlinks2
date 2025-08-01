export default function PrivacyPolicy() {
  return (
    <main className="bg-purple-100 min-h-screen p-8">
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This privacy policy explains how BitLinks collects,
          uses, and protects your information when you use our URL shortening service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Information We Collect</h2>
        <p className="mb-4">
          We collect and store the original URLs that you convert into shortened links in our database. This storage enables the service to redirect the short links to their corresponding original URLs.
          We do not collect personal information such as your name, address, or email.
          We only collect minimal data required for the service to function.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Usage Data</h2>
        <p className="mb-4">
          Our service may collect aggregated (non-personal) usage data, such as the number of times
          a shortened URL is accessed, to improve our service and for analytics.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Cookies</h2>
        <p className="mb-4">
          We do not use cookies or tracking technologies, ensuring your browsing experience remains private.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Third-Party Services</h2>
        <p className="mb-4">
          We do not share your data with third parties. Any links to external sites are provided for your convenience only, and we are not responsible for their privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Changes to this Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We encourage you to review it periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at: <br />
          <strong>achintya8122005@gmail.com</strong>
        </p>
      </section>
    </main>
  );
}

export const metadata = {
  title: "BitLinks - Privacy Policy",
  description: "This is a Privacy Policy page",
};