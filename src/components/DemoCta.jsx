import React from 'react';

export default function DemoCTA({ 
  title = "Ready to get started?", 
  text = "Join thousands of companies using our platform to manage their assets more efficiently.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Schedule Demo",
  backgroundColor = "bg-[#003466]",
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonClassName = "bg-blue-600 hover:bg-blue-700",
  secondaryButtonClassName = "bg-transparent border border-white hover:bg-white/10"
}) {
  return (
    <section className={`py-16 ${backgroundColor} w-screen mt-5 md:mt-0`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onPrimaryClick}
            className={`px-8 py-4 ${primaryButtonClassName} text-white font-bold rounded-xl shadow-lg transition-all duration-300`}
          >
            {primaryButtonText}
          </button>
          <button 
            onClick={onSecondaryClick}
            className={`px-8 py-4 ${secondaryButtonClassName} text-white font-bold rounded-xl shadow-lg transition-all duration-300`}
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}