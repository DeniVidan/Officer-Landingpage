import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Shield, Lock, FileCheck, Database, EyeOff, RefreshCw } from "lucide-react";
import { securityFaqs } from '../data/faqData';
import Faq from "../components/FAQ";
import DemoCTA from '../components/DemoCta';

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState('security');
  const securityFeatures = [
    { 
      icon: <Shield size={30} />, 
      title: "Advanced Encryption", 
      desc: "All data is protected with AES-256 encryption both in transit and at rest." 
    },
    { 
      icon: <Lock size={30} />, 
      title: "Access Controls", 
      desc: "Granular role-based permissions ensure users only access what they need." 
    },
    { 
      icon: <FileCheck size={30} />, 
      title: "Compliance Certifications", 
      desc: "SOC 2 Type II, GDPR, CCPA, and ISO 27001 certified operations." 
    },
    { 
      icon: <Database size={30} />, 
      title: "Data Protection", 
      desc: "Regular backups and disaster recovery protocols protect your asset data." 
    },
  ];
  
  const tabContent = {
    security: {
      title: "Enterprise-Grade Security",
      description: "We implement industry-leading security measures to protect your sensitive asset data.",
      features: [
        "Multi-factor authentication for all account access",
        "End-to-end encryption for all data transfers",
        "Regular penetration testing and vulnerability assessments",
        "Advanced threat detection and prevention systems",
        "Secure API endpoints with OAuth 2.0 and token-based authentication",
        "Automated security patching and updates"
      ],
      image: "https://picsum.photos/600/400"
    },
    compliance: {
      title: "Regulatory Compliance",
      description: "Our platform is designed to help your organization meet regulatory requirements.",
      features: [
        "SOC 2 Type II certified operations and controls",
        "GDPR and CCPA compliant data handling practices",
        "ISO 27001 certified information security management",
        "Customizable retention policies for regulatory compliance",
        "Comprehensive audit logs for compliance reporting",
        "Data residency options for regional compliance requirements"
      ],
      image: "https://picsum.photos/600/400"
    },
    privacy: {
      title: "Privacy Protection",
      description: "We prioritize the privacy of your organization's data with strict controls.",
      features: [
        "Data minimization principles applied throughout our systems",
        "Privacy by design methodology in all feature development",
        "Transparent data processing activities",
        "Strict vendor management and assessment protocols",
        "Regular privacy impact assessments",
        "Customer data deletion verification processes"
      ],
      image: "https://picsum.photos/600/400"
    },
    recovery: {
      title: "Business Continuity",
      description: "Ensuring your asset management system remains operational in all circumstances.",
      features: [
        "99.9% uptime SLA with transparent status monitoring",
        "Geo-redundant infrastructure across multiple regions",
        "Automated backup systems with point-in-time recovery",
        "Comprehensive disaster recovery procedures",
        "Regular recovery testing and validation",
        "24/7 monitoring and incident response team"
      ],
      image: "https://picsum.photos/600/400"
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Decorative Elements */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-tr-full blur-3xl pointer-events-none z-[-1]"></div>
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="title-font text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                Enterprise Security & Compliance
              </h1>
              <p className="text-font text-gray-400 mb-8">
                Your asset data security is our top priority. Our comprehensive security framework and compliance certifications ensure your information is protected to the highest standards.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition duration-300">
                Security Whitepaper
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400"
                alt="Security Dashboard Preview"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Overview */}
      <section className="py-10 mb-30 text-center border-1 border-[#00509D] rounded-3xl mx-5 relative z-[1]">
        <p className="text-blue-400 font-semibold mb-2 uppercase tracking-wider">SECURITY FEATURES</p>
        <h2 className="title-font text-3xl font-bold text-white mb-4">Protecting Your Most Valuable Assets</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-10 px-6">
          Our enterprise-grade security framework provides multiple layers of protection for your asset data, from access controls to encryption and compliance certification.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {securityFeatures.map((feature, i) => (
            <div key={i} className="p-6 bg-white/3 hover:bg-transparent border-1 border-transparent hover:border-1 hover:border-white/7 rounded-xl shadow-md transition-all duration-300">
              <div className="flex items-center justify-center text-blue-300 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-100 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Security Tabs */}
      <section className="py-20 bg-gray-50 relative z-[1]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-800 mb-4">Our Security Framework</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center">
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 rounded-lg font-medium transition duration-300 ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="title-font text-2xl font-bold text-gray-800 mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-font text-gray-600 mb-6">
                  {tabContent[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100">
                <img
                  src={tabContent[activeTab].image}
                  alt={`${tabContent[activeTab].title} Illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-20 relative z-[1]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-200 mb-4">Compliance Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-font text-gray-400 max-w-3xl mx-auto">
              Our platform meets rigorous compliance standards to help your organization manage regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100/10 flex items-center justify-center mb-4">
                  <Shield size={36} className="text-blue-400" />
                </div>
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">SOC 2 Type II</h3>
                <p className="text-font text-gray-400 mb-4 text-center">
                  Our infrastructure, software, people, data, processes, and procedures have been validated by independent auditors.
                </p>
              </div>
            </div>
            
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100/10 flex items-center justify-center mb-4">
                  <EyeOff size={36} className="text-blue-400" />
                </div>
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">GDPR & CCPA</h3>
                <p className="text-font text-gray-400 mb-4 text-center">
                  Our platform is fully compliant with global privacy regulations, including GDPR and CCPA requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-white/3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-100/10 flex items-center justify-center mb-4">
                  <FileCheck size={36} className="text-blue-400" />
                </div>
                <h3 className="title-font text-xl font-semibold text-gray-200 mb-3">ISO 27001</h3>
                <p className="text-font text-gray-400 mb-4 text-center">
                  Our information security management system is certified to the international standard for best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-gray-50 relative z-[1] w-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="title-font text-3xl font-bold text-gray-800 mb-4">Our Security Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-font text-gray-600 max-w-3xl mx-auto">
              Security is not a one-time effort but an ongoing process that we've integrated into every aspect of our operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Continuous Security Monitoring</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">24/7 Threat Detection</h4>
                    <p className="text-gray-600">Our security operations center monitors for unusual activities and potential threats around the clock.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Automated Vulnerability Scanning</h4>
                    <p className="text-gray-600">Continuous scanning of our infrastructure and application code for potential security issues.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Incident Response</h4>
                    <p className="text-gray-600">Dedicated team with documented procedures for rapid response to any security events.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security Development Lifecycle</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Secure Design Reviews</h4>
                    <p className="text-gray-600">Every feature undergoes security review before development begins.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Code Security Analysis</h4>
                    <p className="text-gray-600">Automated and manual security testing during the development process.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Regular Penetration Testing</h4>
                    <p className="text-gray-600">Third-party security experts regularly attempt to find vulnerabilities in our systems.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="mb-5 md:mb-0 mt-5 md:mt-0">
        <Faq
          faqs={securityFaqs}
          title="Security FAQs"
          subtitle="Q   uick answers to your most common questions"
          contactText="Need more help?"
          contactButtonText="Email Our Team"
          onContactClick={() =>
            (window.location.href = "mailto:support@assetflow.com")
          }
        />
      </section>

      {/* CTA Section */}
      <DemoCTA
        title="Ready to secure your asset management?"
        text="Learn more about how our security framework can help protect your organization's most valuable assets."
        primaryButtonText="Download Security Whitepaper"
        secondaryButtonText="Contact Security Team"
        onPrimaryClick={() => {
          // Handle primary button click
          console.log("Primary button clicked");
        }}
        onSecondaryClick={() => {
          // Handle secondary button click
          console.log("Secondary button clicked");
        }}
      />

      <Footer />
    </div>
  );
}