import React, { useState } from 'react';

export default function Newsletter({ 
  title = "Stay Updated", 
  text = "Subscribe to our newsletter for the latest updates and insights.",
  buttonText = "Subscribe",
  backgroundColor = "bg-[#003466]",
  inputPlaceholder = "Enter your email",
  onSubscribe
}) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(email);
    }
    // Optional: You could add default subscribe logic here
    setEmail(''); // Clear input after potential subscription
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 title-font">
            {title}
          </h2>
          <p className="text-font text-blue-100 mb-8">
            {text}
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder={inputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 border-b border-blue-500 outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}