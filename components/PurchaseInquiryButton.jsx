import { useState } from "react";

export default function PurchaseInquiryButton({ artworkName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [artwork, setArtwork] = useState(artworkName);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Encode the data to safely insert into the mailto link
    const subject = encodeURIComponent("Inquiry on Artwork");
    const body = encodeURIComponent(
      `Artwork: ${artwork}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    window.location.href = `mailto:fannymoneyonline@gmail.com?subject=${subject}&body=${body}`;
    setIsOpen(false); // Close the modal
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gray-300 rounded text-black font-semibold hover:bg-gray-400 transition"
      >
        Inquire
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#babeba] bg-opacity-90 p-8 rounded w-[500px]">
            <h2 className="text-2xl mb-4 text-[#061202]">Inquire</h2>
            <p className="text-lg mb-6 text-[#061202]">
              Thank you for your interest in Reiji Shimane's artwork. A member of our team
              will reach out within 48 hours of your inquiry.
            </p>
            
            {error && <p className="text-red-600 mb-4">{error}</p>}  {/* Error message */}
            
            <input 
              type="text" 
              placeholder="Artwork of Interest" 
              value={"Inquiry on " + artwork} 
              onChange={(e) => setArtwork(e.target.value)}
              className="w-full p-3 text-[#061202] mb-4 bg-white rounded"
            />
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="text-[#061202] w-full p-3 mb-4 bg-white rounded"
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
                onClick={() => setIsOpen(false)} 
                className="px-6 py-3 rounded text-[#061202] bg-gray-100 hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="px-6 py-3 border-2 border-black rounded bg-black text-white hover:bg-gray-600 transition"
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
