import React from "react";

const Heading = ({ children }) => (
  <h1 className="hero-heading">{children}</h1>
);

const NightBadge = ({ children }) => (
  <div className="night-badge">{children}</div>
);

const Paragraph = ({ children }) => (
  <p className="hero-paragraph">{children}</p>
);

const Button = ({ children, onClick }) => (
  <button className="hero-button" onClick={onClick}>{children}</button>
);

const Hero = () => {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.15)), url('/images/image.png')", backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    position: "relative",
    padding: "0 1rem"

  };

  return (
    <section style={heroStyle}>
      <Heading>ProDesk Co-Working</Heading>
      <NightBadge>🌙 Night Working Available</NightBadge>
      <Paragraph>Comfortable • Secure • Affordable Living</Paragraph>
      <Button onClick={() => console.log("Book clicked")}>Book Your Stay</Button>

      <style>
        {`
          .hero-heading {
          font-size: 3rem;
          font-weight: 700;
          margin-top: 80px;
          margin-bottom: 0.5rem;
          }

          .night-badge {
            background-color: rgba(255, 255, 255, 0.25);
            color: #fff;
            border-radius: 50px;
            font-size: 1.3rem;
            font-weight: 700;
            padding: 0.6rem 1.5rem;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(6px);
            white-space: nowrap;
            text-align: center;
            animation: glow 1.8s ease-in-out infinite alternate;
            margin: 1rem 0;
          }

          .hero-paragraph {
            font-size: 1.25rem;
            margin: 1.5rem 0;
          }

          .hero-button {
          padding: 0.9rem 2.2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          background: rgba(0, 0, 0, 0.25);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          }

          .hero-button:hover {
          background: #0d6efd;
          border-color: #0d6efd;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.35);
          }

         .hero-button:active {
          transform: translateY(0);
          }

          /* Glow animation */
          @keyframes glow {
            0% {
              box-shadow: 0 0 15px rgba(255, 255, 255, 0.7),
                          0 0 25px rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 25px rgba(255, 255, 255, 1),
                          0 0 35px rgba(255, 255, 255, 0.5);
            }
            100% {
              box-shadow: 0 0 15px rgba(255, 255, 255, 0.7),
                          0 0 25px rgba(255, 255, 255, 0.3);
            }
          }

          /* Responsive styles */
          @media (max-width: 992px) {
            .hero-heading {
              font-size: 2.5rem;
            }
            .night-badge {
              font-size: 1.1rem;
              padding: 0.5rem 1.2rem;
            }
            .hero-paragraph {
              font-size: 1.1rem;
            }
            .hero-button {
              font-size: 1.1rem;
              padding: 0.7rem 1.8rem;
            }
          }

          @media (max-width: 576px) {
            .hero-heading {
              font-size: 2rem;
            }
            .night-badge {
              font-size: 1rem;
              padding: 0.4rem 1rem;
            }
            .hero-paragraph {
              font-size: 1rem;
            }
            .hero-button {
              font-size: 1rem;
              padding: 0.6rem 1.5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
