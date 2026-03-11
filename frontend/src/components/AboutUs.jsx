import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const data = [
    {
      icon: "bi-building",
      title: "Our Story",
      text: "Gaurisha Coworking Space in Virar was established in 2021 to create a modern workspace for freelancers, startups and growing teams looking for a professional environment.",
    },
    {
      icon: "bi-people",
      title: "Our Community",
      text: "Our workspace brings together entrepreneurs, developers, designers and professionals to collaborate, network and grow in a positive business environment.",
    },
    {
      icon: "bi-lightbulb",
      title: "Our Mission",
      text: "We aim to build a dynamic ecosystem where innovation, collaboration and productivity help businesses and individuals achieve success.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Gaurisha Coworking Space
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-14">
          A premium coworking space in Virar designed for freelancers,
          entrepreneurs and growing startups who need a flexible and productive
          workspace.
        </p>

        {/* H2 */}
        <h2 className="text-2xl font-semibold mb-14 text-gray-800">
          Why Choose Our Workspace
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl text-indigo-600 mb-4 group-hover:text-purple-600 transition">
                <i className={`bi ${item.icon}`}></i>
              </div>

              {/* H3 */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-gray-600 mb-4">
            Want to experience our coworking space?
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Visit Our Workspace
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
