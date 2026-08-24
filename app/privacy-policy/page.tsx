import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kydon',
  description: 'Kydon Holdings Privacy Policy - Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 mb-8">
          Last updated: March 2026
        </p>

        {/* Content */}
        <div className="prose prose-neutral max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Kydon Holdings Pte Ltd (&quot;Kydon&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website, use our services, or interact with us in any way.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              By accessing our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We may collect information about you in various ways, including:
            </p>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Personal Data</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              When you contact us or use our services, we may collect personal information such as your name, 
              email address, phone number, company name, job title, and any other information you choose to provide.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Usage Data</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We automatically collect certain information when you visit our website, including your IP address, 
              browser type, operating system, referring URLs, access times, and pages viewed.
            </p>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Cookies and Tracking Technologies</h3>
            <p className="text-neutral-600 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you updates, marketing communications, and promotional materials (with your consent)</li>
              <li>To analyse usage patterns and improve user experience</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Data Security</h2>
            <p className="text-neutral-600 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information 
              against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission 
              over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Data Retention</h2>
            <p className="text-neutral-600 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purposes for which 
              it was collected, including to satisfy legal, accounting, or reporting requirements. When your 
              information is no longer needed, we will securely delete or anonymise it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Your Rights</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate or incomplete personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict or object to processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. International Data Transfers</h2>
            <p className="text-neutral-600 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country 
              of residence, where data protection laws may differ. By using our services, you consent to such 
              transfers. We ensure appropriate safeguards are in place to protect your information in accordance 
              with applicable laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-neutral-600 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If we become aware that we have collected personal data from 
              a child without parental consent, we will take steps to delete that information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review 
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Contact Us</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-50 rounded-xl p-6">
              <p className="text-neutral-700 font-semibold">Kydon Holdings Pte Ltd</p>
              <p className="text-neutral-600">1 Fusionopolis Place, #03-20 Galaxis</p>
              <p className="text-neutral-600">Singapore 138522</p>
              <p className="text-neutral-600 mt-2">
                Email: <a href="mailto:info@kydongrp.com" className="text-primary hover:underline">info@kydongrp.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
