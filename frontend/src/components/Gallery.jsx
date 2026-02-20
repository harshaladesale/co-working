import React from "react";
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g5 from "../assets/images/g5.jpg";
import g7 from "../assets/images/g7.jpg";
import g8 from "../assets/images/g8.jpg";
import g9 from "../assets/images/g9.jpg";

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g7, g8, g9];
  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Our Gallery</h2>

        <div style={styles.grid}>
          {images.map((src, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.lastChild.style.opacity = 1)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.lastChild.style.opacity = 0)
              }
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                style={styles.image}
              />

              <div style={styles.overlay}>
                <span style={styles.overlayText}>View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

const styles = {
  section: {
    padding: "80px 20px",
    background: "#f8f9ff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#222",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },
  card: {
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  overlayText: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
};

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    #gallery img:hover {
      transform: scale(1.08);
    }
  `;
  document.head.appendChild(style);
}
