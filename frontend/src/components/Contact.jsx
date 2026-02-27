const Contact = () => {
  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        <div style={styles.grid}>
          
          <div style={styles.infoCard}>
            <h3 style={styles.heading}>Get in Touch</h3>

            <p style={styles.text}>
              <span style={styles.icon}>📍</span>
              <strong>Address:</strong><br />
              Virar, Maharashtra <br />
              Gaurisha co-working 223, 3rd floor, Thakur Arcade above Dr. Kharkar Clinic,  
              near Virar Railway Station, Virar West.
            </p>

            <p style={styles.text}>
              <span style={styles.icon}>📞</span>
              <strong>Phone:</strong><br />
              +91 98901 84552
            </p>

            <p style={styles.text}>
              <span style={styles.icon}>✉️</span>
              <strong>Email:</strong><br />
              KushalPandit40@gmail.com
            </p>
          </div>

          <div style={styles.mapCard}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.02717348175!2d72.8115985!3d19.454395200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a982a5fa2a01%3A0xe14103fbada1395d!2sGaurisha!5e0!3m2!1sen!2sin!4v1768112768053!5m2!1sen!2sin"
              style={styles.map}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #f8f9ff, #eef1ff)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "30px",
  },
  infoCard: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#222",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "20px",
    color: "#333",
  },
  icon: {
    marginRight: "8px",
  },
  mapCard: {
    background: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  },
  map: {
    width: "100%",
    height: "100%",
    minHeight: "350px",
    border: "0",
  },
};

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 768px) {
      section[id="contact"] div[style*="grid-template-columns"] {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}
