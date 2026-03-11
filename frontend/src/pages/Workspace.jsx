import React from "react";

const FeatureSection = () => {
  return (
    <section className="feature-section py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="/images/walk.jpg" 
            alt="Walking Zone"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Right Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🚶‍♂️ Walking Zone
          </h1>
          <h2 className="text-gray-700 mb-6 ">
            Take a quick refresh break! Our coworking space includes a dedicated walking zone
            to help you recharge, boost creativity, and maintain a healthy workflow.
          </h2>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              Quick 5–10 min refresh breaks
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              Safe and open environment
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              Helps improve focus & creativity
            </li>
          </ul>
        </div>

      </div>

      {/* Custom Styles */}
      <style>
        {`
          .feature-section img {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }
          .feature-section img:hover {
            transform: scale(1.03);
            box-shadow: 0 25px 40px rgba(0,0,0,0.15);
          }
          @media (max-width: 768px) {
            .feature-section {
              padding: 8rem 1.5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FeatureSection;