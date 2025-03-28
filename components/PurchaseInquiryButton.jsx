import { useState } from "react";

export default function PurchaseInquiryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const subject = encodeURIComponent("Purchase Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    window.location.href = `mailto:fannymoneyonline@gmail.com?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 border border-black bg-gray rounded font-semibold hover:bg-gray-200 transition"
      >
        Purchase Inquiry
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-100 p-8 rounded w-[500px]">
            <h2 className="text-2xl mb-4">Purchase Inquiry</h2>
            <p className="text-lg mb-6">
              Thank you for your interest in Reiji Shimane's artwork. A member of our team
              will reach out within 48 hours of your inquiry.
            </p>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-4 bg-white border border-black rounded"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 bg-white border border-black rounded"
            />
            <textarea 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 h-40 bg-white border border-black rounded mb-4"
            />
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setIsOpen(false)} 
                className="px-6 py-3 border border-black rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="px-6 py-3 border-2 border-black rounded bg-black text-white hover:bg-gray-800 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
