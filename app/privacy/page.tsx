import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rangkada",
  description: "Rangkada Privacy Policy for Electric Fleet Solutions",
  openGraph: {
    title: "Privacy Policy | Rangkada",
    description: "Rangkada Privacy Policy for Electric Fleet Solutions",
    type: "website",
    url: "https://rangkada.com/privacy",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Rangkada",
    description: "Rangkada Privacy Policy for Electric Fleet Solutions",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/privacy",
  },
};

const Privacy = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-black text-white py-32 md:py-40 lg:py-48">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-500">
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg font-light text-gray-400">
              Last Updated: November 14, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-24 md:py-32 lg:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                Introduction
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  At Rangkada Pte. Ltd. ("Rangkada," "we," "us," or "our"), we recognize that privacy is of paramount importance and are committed to maintaining it. This Privacy Policy explains how we collect, use, disclose, and protect your personal information through our electric fleet solutions platform and services.
                </p>
                <p>
                  By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any part of this policy, please do not use our Services.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 1. Information We Collect */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                1. Information We Collect
              </h2>
              <div className="space-y-6 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Rangkada collects and processes the following categories of information:
                </p>
                
                <div>
                  <p className="font-normal text-gray-900 mb-3">1.1 Registration Information</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Company name, business registration details, and tax identification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Contact information (name, email address, phone number, business address)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Account credentials and login information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Billing and payment information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-normal text-gray-900 mb-3">1.2 Vehicle and Fleet Data</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Real-time GPS location and route information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Battery performance, charging patterns, and energy consumption data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Vehicle usage patterns, mileage, and operational hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Maintenance records and vehicle condition reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Driver behavior and performance metrics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-normal text-gray-900 mb-3">1.3 Device and Technical Information</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Mobile device information (hardware model, operating system, unique device identifiers)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>IP address, browser type, and device motion information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Application usage data and interaction patterns</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-normal text-gray-900 mb-3">1.4 Communication Data</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Customer support inquiries and correspondence</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Feedback and survey responses (including Alpha Partners program feedback)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400 mt-2">•</span>
                      <span>Any other information you personally provide to Rangkada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 2. Platform Permissions */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                2. Mobile Platform Permissions
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Our mobile application requires certain permissions to function properly. Most mobile platforms (iOS, Android) have permission systems for obtaining your consent:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">iOS:</span> Will alert you the first time the application requests permission to access certain data types and allows you to consent or decline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Android:</span> Will notify you of permissions before first use, and your use of the app constitutes your consent</span>
                  </li>
                </ul>
                <p>
                  Required permissions include location services (for GPS tracking), storage access (for fleet data), and network access (for real-time updates).
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 3. How We Use Your Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                3. How We Use Your Information
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Personal and operational information collected by Rangkada is used for the following purposes:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Service Delivery:</span> To provide, maintain, and improve our electric fleet solutions and fleet management platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Fleet Optimization:</span> To analyze vehicle performance, optimize routes, monitor battery health, and improve operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Customer Support:</span> To respond to your queries, provide technical support, and address service issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Product Development:</span> To develop new features, conduct data analysis, and create data-validated vehicle designs optimized for Philippine conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Safety and Security:</span> To prevent fraud, ensure platform security, troubleshoot technical issues, and maintain service integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Communication:</span> To send service updates, maintenance notifications, billing information, and promotional content (where permitted)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Analytics:</span> To monitor usage trends, measure service effectiveness, and generate performance reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Compliance:</span> To comply with legal obligations, resolve disputes, and enforce our agreements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 4. Sharing of Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                4. Sharing of Information
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Service Providers:</span> With vendors, consultants, and service providers who need access to perform work on our behalf (cloud hosting, payment processing, analytics, maintenance services)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Manufacturing Partners:</span> With Japanese and Chinese OEM partners for co-design and contract manufacturing purposes, strictly limited to aggregated, anonymized operational data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Alpha Partners Program:</span> With other program participants in aggregated form for product development consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Legal Requirements:</span> In response to legal requests, court orders, or to comply with applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Business Transfers:</span> In connection with mergers, acquisitions, or sale of assets, with appropriate confidentiality protections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">With Your Consent:</span> When you explicitly authorize us to share specific information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Aggregated Data:</span> In anonymized, aggregated form that cannot reasonably identify you or your business</span>
                  </li>
                </ul>
                <p className="font-normal text-gray-900 mt-6">
                  We do not sell your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 5. Data Security */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                5. Data Security
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Encrypted data transmission using SSL/TLS protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Secure cloud infrastructure with redundancy and backup systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Access controls and authentication mechanisms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Regular security audits and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Employee training on data protection practices</span>
                  </li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 6. Data Retention */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                6. Data Retention
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  We retain your information for as long as necessary to:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Provide you with our Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Comply with legal obligations and resolve disputes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Enforce our agreements and protect our rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span>Support product development and improvement initiatives</span>
                  </li>
                </ul>
                <p>
                  Account information and vehicle data are retained during your active subscription. Upon termination, data is securely deleted within 90 days unless retention is required by law or for legitimate business purposes.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 7. Your Rights */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                7. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Depending on your jurisdiction, you may have the following rights:
                </p>
                <ul className="space-y-3 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Access:</span> Request access to your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Correction:</span> Request correction of inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Deletion:</span> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Portability:</span> Request a copy of your data in a structured format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Restriction:</span> Request limitation of processing of your information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Objection:</span> Object to certain types of processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-400 mt-2">•</span>
                    <span><span className="font-normal text-gray-900">Consent Withdrawal:</span> Withdraw consent where processing is based on consent</span>
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@rangkada.com. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 8. Cookies and Tracking */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                8. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our Services. You can manage cookie preferences through your browser settings, though this may affect functionality.
                </p>
                <p>
                  Types of cookies we use include essential cookies (required for service operation), analytics cookies (to understand usage), and preference cookies (to remember your settings).
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 9. International Data Transfers */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                9. International Data Transfers
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 10. Children's Privacy */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                10. Children's Privacy
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 11. Changes to Privacy Policy */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                11. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  Rangkada reserves the right to modify this Privacy Policy at any time. Changes will be effective upon posting the updated policy on our website or application. Material changes will be communicated via email or in-app notification at least 30 days before taking effect.
                </p>
                <p>
                  Your continued use of the Services after changes constitutes acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-16" />

            {/* 12. Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-6">
                12. Contact Us
              </h2>
              <div className="space-y-4 text-lg font-light text-gray-600 leading-relaxed">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="font-normal text-gray-900">
                  <p>Rangkada Pte. Ltd.</p>
                  <p>Singapore</p>
                  <p className="mt-4">Email: privacy@rangkada.com</p>
                  <p>Support: support@rangkada.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
