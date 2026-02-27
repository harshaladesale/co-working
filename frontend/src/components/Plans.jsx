import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const plans = [
  {
    name: "Dedicated Desk (Full Access, Co-Working Space)",
    monthPass: "₹3000",
    monthNightPass: "₹4000",
    bg: "from-pink-500 to-rose-500",
    btn: "from-pink-600 to-rose-600",
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
    monthPass: "₹10000",
    monthNightPass: "₹12000",
    bg: "from-indigo-500 to-blue-600",
    btn: "from-indigo-600 to-blue-700",
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
    dayPass: "₹400",
    nightPass: "₹600",
    bg: "from-emerald-500 to-teal-500",
    btn: "from-emerald-600 to-teal-600",
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
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Select Your Plan
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
              className={`rounded-3xl p-[3px] bg-gradient-to-r ${plan.bg} shadow-xl hover:scale-105 transition duration-500`}
            >
              <div className="bg-white rounded-3xl p-8 text-center h-full">

                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  {plan.name}
                </h3>

                <div className="mb-6 space-y-2 text-gray-700">

                  {/* If Month Plan */}
                  {plan.monthPass && (
                    <>
                      <p>
                        <span className="font-semibold">Month Pass:</span>{" "}
                        {plan.monthPass}
                      </p>
                      <p>
                        <span className="font-semibold">Month Night Pass:</span>{" "}
                        {plan.monthNightPass}
                      </p>
                    </>
                  )}

                  {/* If Day Plan */}
                  {plan.dayPass && (
                    <>
                      <p>
                        <span className="font-semibold">Day Pass:</span>{" "}
                        {plan.dayPass}
                      </p>
                      <p>
                        <span className="font-semibold">Night Pass:</span>{" "}
                        {plan.nightPass}
                      </p>
                    </>
                  )}
                </div>

                <ul className="text-left space-y-2 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <span className="text-green-500 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${plan.btn} text-white font-semibold shadow-lg hover:shadow-2xl transition`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;