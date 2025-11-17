'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { useState, useRef } from "react";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const TalkToUs = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef(0);

  async function handleSubmit(e) {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) return;
    lastSubmitTime.current = now;
    
    setIsSubmitting(true);
    setResult("");
    
    try {
      sendGAEvent('event', 'form_submit', { value: 'Contact Form - Submit' });
      
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      if (!formData.message.includes(' ') || formData.message.length < 16) {
        setResult('error');
        setIsSubmitting(false);
        return;
      }

      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA not ready');
      }

      const recaptchaToken = await executeRecaptcha('contact_form_submit');

      // Get Google Apps Script URL from environment variable
      const scriptUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
      
      if (!scriptUrl) {
        throw new Error('Contact form URL not configured');
      }

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      // Note: With no-cors mode, we can't read the response
      // We assume success if no error is thrown
      setResult("success");
      e.target.reset(); // Reset form on success
    } catch (error) {
      console.error('Form submission error:', error);
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-8">
              <span className="inline-block text-xs tracking-[0.3em] uppercase font-semibold text-gray-400">
                Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[1.1] mb-6">
              Talk to Us
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Want to learn more about how Rangkada can transform your fleet operations? Fill out the form below, and one of our fleet specialists will get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-4 text-lg font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@company.com"
                  className="w-full p-4 text-lg font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                required
                minLength={10}
                rows={6}
                placeholder="Tell us about your fleet and operational needs..."
                className="w-full p-4 text-lg font-light text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b border-gray-200 focus:border-gray-900 focus:ring-0 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-4 text-lg font-light tracking-wide text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : '🔥 Submit Application'}
              </button>
            </div>

            {/* Messages */}
            {result === 'success' && (
              <div className="mt-6 p-6 border border-gray-200 bg-gray-50">
                <p className="text-base font-light text-gray-900">
                  Thank you for your interest. We'll be in touch within 24 hours to discuss your fleet transformation.
                </p>
              </div>
            )}
            {result === 'error' && (
              <div className="mt-6 p-6 border border-gray-200 bg-gray-50">
                <p className="text-base font-light text-gray-900">
                  Unable to submit form. Please try again or email us directly.
                </p>
              </div>
            )}
          </form>

          {/* Additional Info */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-light text-gray-900 mb-3">50%</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Guaranteed Savings</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-900 mb-3">₱0</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Upfront Cost</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-900 mb-3">24h</div>
                <div className="text-sm tracking-wide text-gray-600 uppercase">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
