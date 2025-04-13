'use client'
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
    
  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Encode the data to safely insert into the mailto link
    const subject = encodeURIComponent("Contact Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    window.location.href = `mailto:fannymoneyonline@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true); // Show confirmation message after submit
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-10 pt-20">
        <Header />
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">We would love to hear from you. Please fill out the form below.</p>

      {isSubmitted ? (
        <div className="text-center text-green-600 mb-8">
          <h2>Thank you for reaching out!</h2>
          <p>We have received your inquiry and will get back to you shortly.</p>
        </div>
      ) : (
        <div className="bg-[#babeba] bg-opacity-90 p-8 rounded w-[500px]">
          {error && <p className="text-red-600 mb-4">{error}</p>} {/* Error message */}

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-[#061202] mb-4 bg-white rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[#061202] w-full p-3 mb-4 bg-white rounded"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-[#061202] w-full p-3 h-40 bg-white rounded mb-4"
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 border-2 border-black rounded bg-black text-white hover:bg-gray-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
