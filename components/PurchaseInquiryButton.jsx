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
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-block px-4 py-2 text-sm bg-white border border-gray-300 rounded-full text-black hover:border-gray-400 transition-colors uppercase"
        style={{ fontFamily: 'GeneralSans-Regular' }}
      >
        Inquire
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white p-8 rounded w-full h-full md:w-auto md:h-auto md:max-w-lg md:rounded-lg md:mx-auto md:my-20">
            <h2 className="text-lg mb-4 text-[#061202] font-semibold">Artwork Inquiry</h2>
            <p className="text-base mb-6 text-[#061202]">
              Thank you for your interest in Reiji Shimane's artwork. A member of our team
              will reach out within 48 hours of your inquiry.
            </p>
            
            {error && <p className="text-red-600 mb-4">{error}</p>}  {/* Error message */}
            
            <input 
              type="text" 
              placeholder="Artwork of Interest" 
              value={"Inquiry on " + artwork} 
              onChange={(e) => setArtwork(e.target.value)}
              className="w-full p-3 text-[#061202] mb-4 bg-white rounded border"
            />
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="text-[#061202] w-full p-3 mb-4 bg-white rounded border"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="text-[#061202] w-full p-3 mb-4 bg-white rounded border"
            />
            <textarea 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className="text-[#061202] w-full p-3 h-40 bg-white rounded mb-4 border"
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
