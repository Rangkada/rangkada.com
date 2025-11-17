'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconArrowLeft, IconCheck } from '@tabler/icons-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const AlphaPartnerApply = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    companyName: '',
    country: 'Philippines',
    industry: '',
    fleetSize: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not ready');
      }

      const recaptchaToken = await executeRecaptcha('alpha_partner_submit');

      // Get Google Apps Script URL from environment variable
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
      
      if (!scriptUrl) {
        throw new Error('Google Apps Script URL not configured');
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-white min-h-screen flex items-center py-32 md:py-40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center">
                <IconCheck className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6">
              Application Submitted
            </h1>
            <p className="text-xl font-light text-gray-600 leading-relaxed mb-12">
              Thank you for your interest in the Alpha Partners program. We've received your application and will be in touch within 48 hours.
            </p>
            <Link href="/alpha-partners">
              <button className="inline-flex items-center gap-3 text-lg font-light text-gray-900 hover:text-gray-600 transition-colors">
                <IconArrowLeft className="h-5 w-5" />
                Back to Alpha Partners
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen py-32 md:py-40">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-6">
              Join the Alpha<br />
              <span className="font-normal">Partners Program</span>
            </h1>
            
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              Help us build the future of electric mobility in the Philippines. Fill out the form below and we'll be in touch.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-light text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
                    placeholder="juan@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
                    placeholder="+63 912 345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-light text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
                    placeholder="Fleet Manager, CEO, etc."
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Company Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Company Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-light text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-light text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light bg-white"
                  >
                    <option value="Philippines">Philippines</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-light text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light bg-white"
                  >
                    <option value="">Select Industry</option>
                    <option value="Logistics & Delivery">Logistics & Delivery</option>
                    <option value="Food Delivery">Food Delivery</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Ride-Hailing">Ride-Hailing</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="fleetSize" className="block text-sm font-light text-gray-700 mb-2">
                    Current Fleet Size *
                  </label>
                  <select
                    id="fleetSize"
                    name="fleetSize"
                    required
                    value={formData.fleetSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light bg-white"
                  >
                    <option value="">Select Fleet Size</option>
                    <option value="1-10">1-10 vehicles</option>
                    <option value="11-50">11-50 vehicles</option>
                    <option value="51-100">51-100 vehicles</option>
                    <option value="101-500">101-500 vehicles</option>
                    <option value="500+">500+ vehicles</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-200" />

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Additional Information</h2>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                  Tell us about your fleet operations (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-900 focus:outline-none transition-colors font-light resize-none"
                  placeholder="Tell us about your current fleet, operations, challenges, or why you're interested in the Alpha Partners program..."
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 border border-red-200 bg-red-50 text-red-600 text-sm font-light">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gray-900 text-white font-light tracking-wide hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              
              <p className="text-sm font-light text-gray-500 text-center mt-6">
                By submitting this form, you agree to our{' '}
                <Link href="/terms" className="text-gray-900 hover:underline">
                  Terms & Conditions
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-gray-900 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AlphaPartnerApply;
