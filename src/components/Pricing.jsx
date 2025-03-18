import React, { useState } from 'react';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans = [
    { 
      title: "Free Trial", 
      price: { monthly: "$0", annual: "$0" }, 
      duration: { monthly: "14 days", annual: "14 days" },
      features: [
        "Limited project access",
        "Community support",
        "Basic analytics",
        "1 user account",
        "5GB storage"
      ],
      button: "Start Free Trial",
      icon: "🚀",
      trialText: "No credit card required"
    },
    { 
      title: "Pro", 
      price: { monthly: "$29", annual: "$290" },
      saveText: "Save $58",
      features: [
        "Unlimited projects",
        "Priority 24/7 support",
        "Advanced analytics & reporting",
        "Up to 10 team members",
        "Custom integrations",
        "API access",
        "Unlimited storage"
      ],
      button: "Get Started",
      highlight: true,
      icon: "⚡"
    }
  ];

  return (
    <div className="relative py-16 pb-50 bg-transparent text-white min-h-screen overflow-hidden">

      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 title-font">
              Simple Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-6">
            Everything you need to grow your business, no hidden fees.
          </p>
          
          <div className="mt-8 inline-flex items-center justify-center bg-gray-800/50 p-2 rounded-full backdrop-blur-sm">
            <span className={`px-4 py-2 ${!annual ? 'bg-[#007BCC] text-white rounded-full shadow-lg' : 'text-gray-300'} transition-all duration-300 cursor-pointer font-medium`} onClick={() => setAnnual(false)}>Monthly</span>
            <span className={`px-4 py-2 flex ${annual ? 'bg-[#007BCC] text-white rounded-full shadow-lg' : 'text-gray-300'} transition-all duration-300 cursor-pointer font-medium ml-2`} onClick={() => setAnnual(true)}>
              Annual <span className={`px-2 py-1 rounded-full text-xs font-semibold ml-1 ${annual ? 'bg-white text-black':'bg-[#66A3FE] text-white'}`}>20% off</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={plan.title}
              className={`relative rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-900/20 hover:shadow-2xl ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-[#003466] to-[#007BCC]'
                  : 'bg-transparent border border-gray-500'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/40 mb-6 border border-blue-800/50 shadow-inner">
                  <span className="text-4xl">{plan.icon}</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
                <div className="mt-6 mb-8">
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold">{annual ? plan.price.annual : plan.price.monthly}</span>
                    {plan.price.monthly !== "$0" && (
                      <span className="text-gray-300 ml-2 text-xl">{annual ? "/year" : "/month"}</span>
                    )}
                  </div>
                  {plan.duration && (
                    <div className="text-gray-300 mt-2">{annual ? plan.duration.annual : plan.duration.monthly}</div>
                  )}
                  {plan.saveText && annual && (
                    <div className="mt-3 inline-block bg-green-900/50 text-green-400 px-4 py-1 rounded-full font-medium border border-green-800/30">{plan.saveText}</div>
                  )}
                  {plan.trialText && (
                    <div className="mt-3 text-gray-400 text-sm">{plan.trialText}</div>
                  )}
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <p className="text-sm uppercase text-gray-400 font-semibold tracking-wider">Features include:</p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-font">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:translate-y-1 ${
                  plan.highlight
                    ? 'bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-500'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Questions about our plans? <span className="text-blue-400 underline cursor-pointer">Contact our sales team</span> to find the perfect solution for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;