import React from 'react';

export default function Team () {

  return (
    
    <div>
            {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 title-font">
        Our Leadership <span className="text-[#007BCC]">Team!</span>
      </h2>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200?random=1"
                  alt="CEO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">Sarah Johnson</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Executive Officer</p>
              <p className="text-gray-400 text-font">
                Former fintech executive with 15+ years of experience in asset management solutions.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200?random=2"
                  alt="CTO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">Michael Chen</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Technology Officer</p>
              <p className="text-gray-400 text-font">
                Cloud architecture expert who previously built enterprise systems for Fortune 500 companies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://picsum.photos/200/200"
                  alt="COO Portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-200 title-font">David Martinez</h3>
              <p className="text-blue-600 mb-4 text-font">Chief Operations Officer</p>
              <p className="text-gray-400 text-font">
                Operations strategist with extensive experience in scaling SaaS businesses globally.
              </p>
            </div>
          </div>
        </div>
      </section>
  
    </div>


  );
};
