import { useEffect, useState } from "react";

const SocialFloat = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.wrapper}>
      <a
        href="https://wa.me/9890184552"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.icon, background: "#25D366" }}
      >
        <i className="bi bi-whatsapp" />
      </a>

      <a
        href="https://www.instagram.com/your_instagram_username"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.icon,
          background:
            "linear-gradient(45deg,#f58529,#dd2a7b,#8134af)",
        }}
      >
        <i className="bi bi-instagram" />
      </a>

      <a
        href="https://www.google.com/search?q=gaurishacoworking"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...styles.icon, background: "#4285F4" }}
      >
        <i className="bi bi-geo-alt-fill" />
      </a>

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          style={{ ...styles.icon, background: "#000" }}
        >
          <i className="bi bi-chevron-up" />
        </button>
      )}
    </div>
  );
};

export default SocialFloat;



const styles = {
  wrapper: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 999,
  },

  icon: {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    transition: "transform 0.3s ease",
  },
};
