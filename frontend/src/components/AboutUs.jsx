import React from "react";
``
const Title = ({ children }) => (
  <h1
    style={{
      fontSize: "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "0.5rem",
    }}
  >
    {children}
  </h1>
);

const Subtitle = ({ children }) => (
  <p
    style={{
      fontSize: "1.2rem",
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto 3rem",
      color: "#555",
    }}
  >
    {children}
  </p>
);

const Card = ({ title, text }) => (
  <div className="about-card">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);


const AboutUs = () => {
  const data = [
    {
      title: "Our Story",
      text:
        "Gaurisha CO-Working is a new-age coworking space established in 2021, providing reasonably priced, adaptable, and community-driven workplaces for startups, independent contractors, and expanding teams.",
    },
    {
      title: "Our Spaces",
      text:
        "Inspired by the ethos of a factory where ideas are developed and businesses take shape, Gaurisha CO-Working offers individual cabins, dedicated desks, and collaborative zones that adapt to your evolving needs.",
    },
    {
      title: "Our Mission",
      text:
        "We aim to create a dynamic ecosystem where businesses and individuals can collaborate to create, connect, and flourish while fostering creativity, teamwork, and scalable growth.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Us
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          A new-age coworking space fostering creativity, collaboration,
          and business growth in a premium professional environment.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl border border-white/40 
                       rounded-2xl p-8 shadow-lg 
                       hover:shadow-2xl hover:-translate-y-2
                       transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 group-hover:text-purple-600 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
