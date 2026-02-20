import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Plans.css";

const plans = [
  {
    name: "Dedicated Cabin (Full Access, Co-Working Space)",
    price: "₹3000",
    dayPass: "₹3000",
    nightPass: "₹4000",
    features: [
      "24/7 Access",
      "High speed Wi-Fi",
      "Secure access",
      "Power backup",
      "CCTV Camera",
      "Daily cleaning service",
    ],
  },
  {
    name: "Dedicated Cabin (Full Access, Co-Working Space)",
    price: "₹10000",
    dayPass: "₹10000",
    nightPass: "₹12000",
    features: [
      "24/7 Access",
      "High speed Wi-Fi",
      "Secure access",
      "Power backup",
      "CCTV Camera",
      "Daily cleaning service",
    ],
  },
  {
    name: "Day Pass (Flexible Access – Co-Working Space)",
    price: "₹400 / Day",
    dayPass: "₹400",
    nightPass: "₹600",
    features: [
      "Access during working hours",
      "High-speed Wi-Fi",
      "Comfortable shared seating",
      "Secure entry",
      "Essential power backup",
      "CCTV surveillance",
      "Clean & hygienic workspace",
    ],
  },
];

const Plans = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="plans" className="plans-section">
      <div className="container">
        <h2 className="section-title">Select Your Plan</h2>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <div
              className="plan-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h5 className="plan-name">{plan.name}</h5>

              <div className="plan-price-section">
                <div className="extra-passes">
                <p className="pass">
                  <strong>Day Pass:</strong> {plan.dayPass}
                </p>
                <p className="pass">
                  <strong>Night Pass:</strong> {plan.nightPass}
                </p>
              </div>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="bi bi-check-circle-fill"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn plan-btn" href="./EnquiryForm.jsx/#contact">Enquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
