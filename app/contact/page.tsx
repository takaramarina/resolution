'use client'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

// EmailJS integration - you'll need to install @emailjs/browser and configure these
// npm install @emailjs/browser
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Option 1: EmailJS (Frontend only - recommended for simple setups)
      // Uncomment the lines below after installing @emailjs/browser and setting up EmailJS
      /*
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'fannymoneyonline@gmail.com'
        },
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
      );
      
      if (result.text === 'OK') {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
      */

      // Option 2: Next.js API Route (Backend approach)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="content-padding flex-grow overflow-x-hidden pt-0 md:pt-12">
        <div className="max-w-4xl mx-auto py-20">
          <h1 
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'GeneralSans-Regular' }}
          >
            Contact
          </h1>
          <div className="w-16 h-[1px] bg-gray-300 mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-xl mb-4"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  Get in Touch
                </h2>
                <p 
                  className="text-gray-600 leading-relaxed mb-6"
                  style={{ fontFamily: 'GeneralSans-Regular' }}
                >
                  For exhibition opportunities, acquisitions, press inquiries, or general questions, please reach out using the form or contact information below.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 
                    className="text-lg mb-2"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Email
                  </h3>
                  <a 
                    href="mailto:fannymoneyonline@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    fannymoneyonline@gmail.com
                  </a>
                </div>

                <div>
                  <h3 
                    className="text-lg mb-2"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Follow
                  </h3>
                  <a 
                    href="https://www.instagram.com/moon_rail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Instagram
                  </a>
                </div>

                <div>
                  <h3 
                    className="text-lg mb-2"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Response Time
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    We typically respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 
                    className="text-xl mb-4"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Thank You
                  </h3>
                  <p 
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors rounded-md"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      <p style={{ fontFamily: 'GeneralSans-Regular' }}>{error}</p>
                    </div>
                  )}

                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      <option value="">Select a subject</option>
                      <option value="artwork-inquiry">Artwork Inquiry</option>
                      <option value="commission">Commission Request</option>
                      <option value="exhibition">Exhibition Opportunity</option>
                      <option value="press">Press Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm mb-2"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-vertical"
                      style={{ fontFamily: 'GeneralSans-Regular' }}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors rounded-md"
                    style={{ fontFamily: 'GeneralSans-Regular' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
