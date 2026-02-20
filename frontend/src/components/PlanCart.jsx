import React from "react";
import { Link } from "react-router-dom";

const PlanCard = ({ plan, delay }) => {
  return (
    <div
      className="plan-card"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <h5 className="plan-name">{plan.name}</h5>

      <div className="plan-price-section">
        <p className="pass">
          <strong>Day Pass:</strong> {plan.dayPass}
        </p>
        <p className="pass">
          <strong>Night Pass:</strong> {plan.nightPass}
        </p>
      </div>

      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <i className="bi bi-check-circle-fill"></i>
            {feature}
          </li>
        ))}
      </ul>

      {/* React Navigation */}
      <Link to="/contact" className="btn plan-btn">
        Enquire Now
      </Link>
    </div>
  );
};

export default PlanCard;
