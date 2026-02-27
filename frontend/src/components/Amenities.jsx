import React from "react";
import {
  FaWifi,
  FaBroom,
  FaBolt,
  FaBuilding,
  FaDesktop,
  FaChalkboardTeacher,
  FaUsers,
  FaVideo,
  FaTint,
} from "react-icons/fa";

const amenities = [
  { name: "WiFi", icon: FaWifi, color: "from-pink-500 to-rose-500" },
  { name: "Housekeeping", icon: FaBroom, color: "from-green-400 to-emerald-500" },
  { name: "Inverter Power Support", icon: FaBolt, color: "from-yellow-400 to-orange-500" },
  { name: "Lift", icon: FaBuilding, color: "from-indigo-500 to-blue-600" },
  { name: "Comfortable Workstation", icon: FaDesktop, color: "from-cyan-400 to-blue-500" },
  { name: "Conference Room", icon: FaChalkboardTeacher, color: "from-purple-500 to-violet-600" },
  { name: "Group Discussion", icon: FaUsers, color: "from-teal-400 to-green-500" },
  { name: "CCTV Camera", icon: FaVideo, color: "from-red-500 to-pink-500" },
  { name: "RO Water", icon: FaTint, color: "from-sky-400 to-blue-600" },
];

const Amenities = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="amenities">
      
      {/* Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Amenities
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Modern facilities designed for comfort and productivity
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {amenities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center"
            >
              {/* Colorful Gradient Icon Circle */}
              <div
                className={`mx-auto mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${item.color} text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition">
                {item.name}
              </h3>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Amenities;