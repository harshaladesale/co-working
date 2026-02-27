import React from "react";

const features = [
  "Fully Furnished Cabins",
  "Night Working Available",
  "24/7 Security & CCTV",
  "Affordable and Flexible Membership Plans",
  "High-Speed Internet & Uninterrupted Power",
  "Meeting Rooms & Collaboration Areas",
  "Safe, Secure & Professional Environment",
  "Supportive Community & Networking Opportunities",
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header Centered */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Why Choose Us
            <span className="block h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">

          {features.map((text, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 border-b border-gray-200 pb-6 hover:border-blue-500 transition-all duration-500"
            >
              {/* Big Number */}
              <div className="relative text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Text */}
              <p className="text-lg font-medium text-gray-700 transition-all duration-500 group-hover:text-gray-900 group-hover:translate-x-2">
                {text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;