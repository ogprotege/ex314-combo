import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ex314.ai",
  description: "Privacy Policy for Ex314.ai Catholic Theological AI Assistant",
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-4">
          Last updated: January 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Ex314.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Catholic theological AI assistant service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">Information You Provide</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Account information (name, email address)</li>
            <li>Chat conversations and questions you submit</li>
            <li>Contact form submissions</li>
            <li>User preferences and settings</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Information Automatically Collected</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Usage data and analytics</li>
            <li>Device information</li>
            <li>IP addresses (hashed for privacy)</li>
            <li>Browser type and version</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our theological AI assistant service</li>
            <li>Respond to your questions and provide support</li>
            <li>Monitor for bias and improve AI responses</li>
            <li>Send service updates and communications</li>
            <li>Ensure security and prevent abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication</li>
            <li>Regular security audits</li>
            <li>IP address hashing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <p className="mb-4">
            We retain your information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. Chat conversations are retained to improve our AI model and may be reviewed by administrators for quality and bias monitoring.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of certain communications</li>
            <li>Export your chat history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We use third-party services including Firebase for authentication and data storage, and AI models for generating responses. These services have their own privacy policies governing the use of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-4">
            Email: privacy@ex314.ai<br />
            Or use our <a href="/contact" className="text-primary hover:underline">contact form</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
    </main>
  )
}