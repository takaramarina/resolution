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
        className="group relative px-6 py-3 text-sm bg-black text-white rounded-full hover:bg-[#061202] transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider flex items-center gap-2"
        style={{ fontFamily: 'GeneralSans-Regular' }}
      >
        <span>Inquire</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white w-full h-full md:w-auto md:h-auto md:max-w-2xl md:max-h-[90vh] md:rounded-2xl md:mx-auto md:my-12 shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-black to-[#061202] text-white p-8 pb-6 flex-shrink-0">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold tracking-tight uppercase" style={{ fontFamily: 'GeneralSans-Bold' }}>
                  Artwork Inquiry
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 pt-6 space-y-6 overflow-y-auto flex-1">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 animate-in slide-in-from-left">
                  {error}
                </div>
              )}
              
              <div className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium" style={{ fontFamily: 'GeneralSans-Medium' }}>
                    Artwork
                  </label>
                  <input 
                    type="text" 
                    value={"Inquiry on " + artwork} 
                    onChange={(e) => setArtwork(e.target.value)}
                    className="w-full px-4 py-3 text-[#061202] bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium" style={{ fontFamily: 'GeneralSans-Medium' }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 text-[#061202] bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium" style={{ fontFamily: 'GeneralSans-Medium' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-[#061202] bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-medium" style={{ fontFamily: 'GeneralSans-Medium' }}>
                    Message
                  </label>
                  <textarea 
                    placeholder="Tell us about your interest..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 text-[#061202] bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-4 px-8 pb-8 border-t border-gray-100 flex-shrink-0">
              <button 
                onClick={() => setIsOpen(false)} 
                className="px-8 py-3 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all font-medium uppercase tracking-wider text-sm border border-transparent hover:border-gray-200"
                style={{ fontFamily: 'GeneralSans-Medium' }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="px-8 py-3 rounded-full bg-black text-white hover:bg-[#061202] transition-all font-medium uppercase tracking-wider text-sm shadow-lg hover:shadow-xl relative overflow-hidden group"
                style={{ fontFamily: 'GeneralSans-Medium' }}
              >
                <span className="relative z-10">Send Inquiry</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
