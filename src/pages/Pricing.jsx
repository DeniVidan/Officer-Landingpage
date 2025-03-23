import React, { useState } from 'react';
import Footer from '../components/Footer';
import Faq from '../components/FAQ';
import { pricingFaqs } from '../data/faqData';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  
  // Enhanced plans with more details for dedicated pricing page
  const plans = [
    { 
      id: "free",
      title: "Free Trial", 
      price: { monthly: "$0", annual: "$0" }, 
      duration: { monthly: "14 days", annual: "14 days" },
      features: [
        "Limited project access (up to 3)",
        "Community forum support",
        "Basic analytics dashboard",
        "1 user account",
        "5GB storage space",
        "Standard security features",
        "Email notifications"
      ],
      limitations: [
        "No API access",
        "No custom integrations",
        "Basic reporting only"
      ],
      button: "Start Free Trial",
      icon: "🚀",
      trialText: "No credit card required"
    },
    { 
      id: "pro",
      title: "Pro", 
      price: { monthly: "$29", annual: "$290" },
      saveText: "Save $58",
      features: [
        "Unlimited projects",
        "Priority email support (24hr response)",
        "Advanced analytics & reporting",
        "Up to 10 team members",
        "Basic integrations with popular tools",
        "Basic API access (100 calls/day)",
        "100GB storage space",
        "Enhanced security features",
        "Customizable notifications",
        "Workflow automation (basic)"
      ],
      button: "Get Started",
      highlight: true,
      icon: "⚡",
      popularChoice: true
    },
    {
      id: "business",
      title: "Business",
      price: { monthly: "$79", annual: "$790" },
      saveText: "Save $158",
      features: [
        "Unlimited projects and workspaces",
        "Priority 24/7 support with dedicated manager",
        "Enterprise-grade analytics & reporting",
        "Up to 50 team members",
        "Advanced custom integrations",
        "Full API access (unlimited calls)",
        "1TB storage space",
        "Advanced security with SSO",
        "Advanced workflow automation",
        "Audit logs and compliance reporting",
        "Custom onboarding & training",
        "Dedicated success manager"
      ],
      button: "Contact Sales",
      icon: "🏢"
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: { monthly: "Custom", annual: "Custom" },
      features: [
        "Unlimited everything",
        "White-glove 24/7 support",
        "Custom feature development",
        "Unlimited team members",
        "Custom integrations & API",
        "Unlimited storage",
        "Custom security protocols",
        "On-premise deployment option",
        "SLA guarantees",
        "Dedicated account team",
        "Quarterly business reviews",
        "Custom training & workshops"
      ],
      button: "Talk to Sales",
      icon: "🌐"
    }
  ];


  // Feature comparison data for detailed feature comparison
  const featureCategories = [
    {
      name: "Core Features",
      features: [
        { name: "Projects", free: "3 max", pro: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
        { name: "Team Members", free: "1", pro: "Up to 10", business: "Up to 50", enterprise: "Unlimited" },
        { name: "Storage", free: "5GB", pro: "100GB", business: "1TB", enterprise: "Unlimited" }
      ]
    },
    {
      name: "Support",
      features: [
        { name: "Support Channels", free: "Community", pro: "Email", business: "24/7 Priority", enterprise: "White-glove 24/7" },
        { name: "Response Time", free: "Best effort", pro: "24 hours", business: "4 hours", enterprise: "1 hour guaranteed" },
        { name: "Dedicated Manager", free: "No", pro: "No", business: "Yes", enterprise: "Yes + Team" }
      ]
    },
    {
      name: "Security & Compliance",
      features: [
        { name: "SSO Integration", free: "No", pro: "No", business: "Yes", enterprise: "Yes + Custom" },
        { name: "Audit Logs", free: "No", pro: "Basic", business: "Advanced", enterprise: "Comprehensive" },
        { name: "Compliance Reporting", free: "No", pro: "No", business: "Yes", enterprise: "Custom" }
      ]
    }
  ];

  const toggleComparison = () => {
    setShowComparison(!showComparison);
  };

  const getCheckIcon = (value) => {
    if (value === "No") {
      return <span className="text-gray-400">—</span>;
    }
    if (value === "Yes" || value === "Unlimited") {
      return (
        <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    return <span className="text-gray-200">{value}</span>;
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* Decorative Elements - kept with z-index -1 */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none z-[-1]"></div>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 title-font">
              Pricing Plans for Every Need
            </h1>
            <p className="text-gray-300 mb-8">
              Transparent pricing with no hidden fees. Choose the plan that works best for your business.
            </p>
            
            <div className="mt-8 inline-flex items-center justify-center bg-gray-800/50 p-2 rounded-full backdrop-blur-sm">
              <span 
                className={`px-4 py-2 ${!annual ? 'bg-[#007BCC] text-white rounded-full shadow-lg' : 'text-gray-300'} transition-all duration-300 cursor-pointer font-medium`} 
                onClick={() => setAnnual(false)}
              >
                Monthly
              </span>
              <span 
                className={`px-4 py-2 flex items-center ${annual ? 'bg-[#007BCC] text-white rounded-full shadow-lg' : 'text-gray-300'} transition-all duration-300 cursor-pointer font-medium ml-2`} 
                onClick={() => setAnnual(true)}
              >
                Annual <span className={`px-2 py-1 rounded-full text-xs font-semibold ml-1 ${annual ? 'bg-white text-black':'bg-[#66A3FE] text-white'}`}>20% off</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-900/20 hover:shadow-2xl ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-[#003466] to-[#007BCC]'
                    : 'bg-transparent border border-gray-500'
                }`}
              >
                {plan.popularChoice && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900/40 mb-6 border border-blue-800/50 shadow-inner">
                    <span className="text-4xl">{plan.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="mt-6 mb-8">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold">{annual ? plan.price.annual : plan.price.monthly}</span>
                      {plan.price.monthly !== "$0" && plan.price.monthly !== "Custom" && (
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

                <div className="space-y-4 mb-8">
                  <p className="text-sm uppercase text-gray-400 font-semibold tracking-wider">Features include:</p>
                  {plan.features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-font">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 5 && (
                    <div className="text-center">
                      <button 
                        onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                        className="text-blue-400 text-sm hover:underline focus:outline-none"
                      >
                        {selectedPlan === plan.id ? "Show less" : `+${plan.features.length - 5} more features`}
                      </button>
                    </div>
                  )}
                  
                  {selectedPlan === plan.id && plan.features.length > 5 && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      {plan.features.slice(5).map((feature, i) => (
                        <div key={i} className="flex items-start mb-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-font">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations && (
                        <>
                          <p className="text-sm uppercase text-gray-400 font-semibold tracking-wider mt-6 mb-4">Limitations:</p>
                          {plan.limitations.map((limitation, i) => (
                            <div key={i} className="flex items-start mb-4">
                              <div className="flex-shrink-0 w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-400 text-font">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  )}
                </div>

                <button 
                  className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:translate-y-1 ${
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
        </div>
      </section>

      {/* Feature Comparison Toggle */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <button 
              onClick={toggleComparison}
              className="px-6 py-3 bg-blue-600/30 border border-blue-500/50 rounded-full text-white hover:bg-blue-600/50 transition-all duration-300"
            >
              {showComparison ? "Hide Detailed Comparison" : "View Detailed Feature Comparison"}
            </button>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table - conditionally rendered */}
      {showComparison && (
        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
              <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 w-1/5">Features</th>
                    <th className="text-center py-4 w-1/5">Free Trial</th>
                    <th className="text-center py-4 w-1/5">Pro</th>
                    <th className="text-center py-4 w-1/5">Business</th>
                    <th className="text-center py-4 w-1/5">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-gray-800/30">
                        <td colSpan={5} className="py-3 px-4 font-semibold text-gray-300">{category.name}</td>
                      </tr>
                      {category.features.map((feature, i) => (
                        <tr key={i} className="border-b border-gray-800/30">
                          <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                          <td className="py-4 text-center">{getCheckIcon(feature.free)}</td>
                          <td className="py-4 text-center">{getCheckIcon(feature.pro)}</td>
                          <td className="py-4 text-center">{getCheckIcon(feature.business)}</td>
                          <td className="py-4 text-center">{getCheckIcon(feature.enterprise)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <Faq
          faqs={pricingFaqs}
          title="Support FAQs"
          subtitle="Quick answers to your most common questions"
          contactText="Need more help?"
          contactButtonText="Email Our Team"
          onContactClick={() =>
            (window.location.href = "mailto:support@assetflow.com")
          }
        />

      {/* CTA Section */}
      <section className="py-16 bg-[#003466] w-screen mt-5 md:mt-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using our platform to manage their assets more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border border-white hover:bg-white/10 text-white font-bold rounded-xl shadow-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-10 border border-blue-800/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
                <p className="text-gray-300 mb-6">
                  Our enterprise plan is tailored to meet the unique needs of large organizations. Get a custom quote based on your specific requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Custom implementation and integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Dedicated technical account manager</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Volume licensing discounts</span>
                  </li>
                </ul>
                <button className="px-8 py-3 bg-white text-blue-800 hover:bg-gray-100 font-bold rounded-xl shadow-lg transition-all duration-300">
                  Contact Sales Team
                </button>
              </div>
              <div className="md:w-1/3 bg-blue-900/20 p-6 rounded-2xl border border-blue-800/30">
                <h3 className="text-xl font-bold mb-4">Enterprise customers include:</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <span className="text-lg font-semibold text-gray-200">Fortune 500 Company</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <span className="text-lg font-semibold text-gray-200">Global Tech Firm</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <span className="text-lg font-semibold text-gray-200">Leading Manufacturer</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <span className="text-lg font-semibold text-gray-200">Government Agency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

