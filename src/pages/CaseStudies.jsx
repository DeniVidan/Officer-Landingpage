import React, { useState } from "react";
import Footer from "../components/Footer";
import DemoCTA from "../components/DemoCta";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const casestudies = [
    {
      id: 1,
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      logo: "https://picsum.photos/200/100?random=1",
      challenge: "Inefficient asset tracking across multiple global facilities",
      solution:
        "Implemented comprehensive asset management system with real-time tracking",
      results: [
        "40% reduction in asset loss",
        "25% improved inventory accuracy",
        "$2.3M annual cost savings",
      ],
      quote:
        "This platform transformed how we manage our critical assets across continents.",
      quoteAuthor: "John Smith, CTO",
      metrics: [
        { label: "Asset Tracking Accuracy", value: "95%" },
        { label: "Cost Reduction", value: "40%" },
        { label: "ROI", value: "325%" },
      ],
    },
    {
      id: 2,
      client: "HealthTech Innovations",
      industry: "Healthcare",
      logo: "https://picsum.photos/200/100?random=2",
      challenge:
        "Complex medical equipment management with compliance requirements",
      solution:
        "Integrated asset lifecycle management with regulatory compliance tracking",
      results: [
        "100% compliance maintenance",
        "30% faster equipment maintenance cycles",
        "Reduced audit preparation time by 60%",
      ],
      quote: "Our asset management is now proactive instead of reactive.",
      quoteAuthor: "Sarah Johnson, Operations Director",
      metrics: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Maintenance Efficiency", value: "30%" },
        { label: "Audit Time Saved", value: "60%" },
      ],
    },
    {
      id: 3,
      client: "Energy Solutions Inc",
      industry: "Energy",
      logo: "https://picsum.photos/200/100?random=3",
      challenge: "Decentralized asset management across remote infrastructure",
      solution: "Cloud-based asset tracking with IoT integration",
      results: [
        "Real-time asset monitoring",
        "50% reduction in unexpected downtime",
        "$1.7M operational cost savings",
      ],
      quote: "We've gained unprecedented visibility into our asset ecosystem.",
      quoteAuthor: "Michael Rodriguez, Chief Operations Officer",
      metrics: [
        { label: "Downtime Reduction", value: "50%" },
        { label: "Asset Visibility", value: "100%" },
        { label: "Cost Savings", value: "$1.7M" },
      ],
    },
  ];

  const industries = [
    "All",
    ...new Set(casestudies.map((study) => study.industry)),
  ];

  const filteredCaseStudies =
    selectedIndustry === "All"
      ? casestudies
      : casestudies.filter((study) => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen relative">
      {/* Decorative Background Elements */}
      <div className="fixed top-44 right-0 w-[800px] h-[300px] bg-[#00509D]/30 rounded-bl-[40%] rounded-tl-[60%] rounded-br-[30%] blur-3xl pointer-events-none transform -rotate-6 z-[-1]"></div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="title-font text-3xl md:text-5xl font-bold text-gray-200 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-font text-gray-400 max-w-3xl mx-auto">
              Discover how our asset management solution transforms businesses
              across different industries, delivering measurable results and
              operational excellence.
            </p>
          </div>

          {/* Industry Filter - Updated for Responsiveness */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-md p-2 flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 whitespace-nowrap ${
                    selectedIndustry === industry
                      ? "bg-blue-600 text-white"
                      : "text-gray-200 hover:bg-white/10"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white/3 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* Client Logo */}
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                  <img
                    src={study.logo}
                    alt={`${study.client} logo`}
                    className="max-h-12 max-w-[150px]"
                  />
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">
                    {study.client} - {study.industry}
                  </h3>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-400 mb-2">
                      Challenge
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-400 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Key Results */}
                  <div className="bg-white/3 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-200 mb-2">
                      Key Results
                    </h4>
                    <ul className="list-disc list-inside text-gray-400">
                      {study.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="text-center bg-white/10 p-3 rounded-md"
                      >
                        <div className="text-xl font-bold text-gray-200">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Quote */}
                  <blockquote className="italic text-gray-600 mb-4">
                    "{study.quote}"
                    <footer className="text-right mt-2 text-sm">
                      - {study.quoteAuthor}
                    </footer>
                  </blockquote>

                  {/* Read Full Case Study Button */}
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                    Read Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <DemoCTA
        title="Ready to Transform Your Asset Management?"
        text="See how our solution can drive efficiency, reduce costs, and provide unprecedented visibility into your asset ecosystem."
        primaryButtonText="Schedule a Demo"
        secondaryButtonText="Contact Sales"
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
