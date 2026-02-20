import React, { useEffect, useState } from "react";

const features = [
  {
    text: "Fully Furnished Cabins",
    icon: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
  },
  {
    text: "Night Working Available",
    icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
  },
  {
    text: "24/7 Security & CCTV",
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    text: "Affordable and flexible membership plans",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },
  {
    text: "High-speed internet & uninterrupted power",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046874.png",
  },
  {
    text: "Meeting rooms & collaboration areas",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    text: "Safe, secure & professional environment",
    icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
  },
  {
    text: "Supportive community & networking opportunities",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995568.png",
  },
];


const FeatureCard = ({ text, icon, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        background: "#fff",
        padding: "1.8rem",
        borderRadius: "14px",
        textAlign: "center",
        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
        transform: visible ? "translateY(0)" : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: "all 0.6s ease",
      }}
    >
      <img
        src={icon}
        alt={text}
        loading="lazy"
        style={{
          width: "42px",
          height: "42px",
          marginBottom: "0.8rem",
        }}
      />

      <p style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>
        {text}
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "linear-gradient(135deg, #f8f9ff, #ffffff)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(13,110,253,0.08)",
            top: `${i * 15}%`,
            left: `${(i * 17) % 80}%`,
            animation: "float 6s ease-in-out infinite",
          }}
        />
      ))}

      <h2
        style={{
          textAlign: "center",
          fontSize: "2.4rem",
          fontWeight: "700",
          marginBottom: "3rem",
        }}
      >
        Why Choose Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            text={item.text}
            icon={item.icon}
            delay={index * 120}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          @media (max-width: 992px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 576px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
