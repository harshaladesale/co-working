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
      style={{
        padding: "4rem 1.5rem",
        backgroundColor: "#fff",
      }}
    >
      <Title>About Us</Title>
      <Subtitle>
        A new-age coworking space fostering creativity, collaboration, and growth.
      </Subtitle>

      <div className="about-grid">
        {data.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>

      <style>
        {`
          .about-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .about-card {
            background: #f9f9f9;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .about-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          }

          .about-card h2 {
            margin-bottom: 0.75rem;
            font-size: 1.4rem;
            color: #0d6efd;
          }

          .about-card p {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
          }

          /* Tablet */
          @media (max-width: 992px) {
            .about-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* Mobile */
          @media (max-width: 576px) {
            .about-grid {
              grid-template-columns: 1fr;
            }

            .about-card {
              padding: 1.5rem;
            }

            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;
