import React from "react";

const amenities = [
  {
    name: "WiFi",
    icon: "https://cdn-icons-png.flaticon.com/512/93/93158.png",
  },
  {
    name: "Housekeeping",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
  {
    name: "Parking",
    icon: "https://cdn-icons-png.flaticon.com/512/75/75905.png",
  },
  {
    name: "Inverter Power Support",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046874.png",
  },
  {
    name: "Lift",
    icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
  },
  {
    name: "Comfortable Workstation",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
  },
  {
    name: "Conference Room",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    name: "Group Discussion",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995568.png",
  },
  {
    name: "CCTV Camera",
    icon: "https://cdn-icons-png.flaticon.com/512/1046/1046871.png",
  },
  {
    name: "RO Water",
    icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" style={styles.section}>
      <h2 style={styles.title}>Amenities</h2>

      <div style={styles.grid}>
        {amenities.map((item, index) => (
          <div key={index} style={styles.card}>
            <img
              src={item.icon}
              alt={item.name}
              style={styles.icon}
              loading="lazy"
            />
            <span style={styles.text}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;


const styles = {
  section: {
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#222",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "25px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#f9f9ff",
    padding: "25px 15px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
  },
  icon: {
    width: "48px",
    height: "48px",
    objectFit: "contain",
  },
  text: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },
};
