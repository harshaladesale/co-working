import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert("Thank you for your enquiry");

      setFormData({ name: "", mobile: "", email: "", message: "" });
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>

        <h2 style={styles.title}>Contact Us</h2>

        <div style={styles.card}>
          <div style={styles.content}>

            <div style={styles.imageBox}>
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                alt="Contact"
                style={styles.image}
              />
            </div>

            <div style={styles.formBox}>
              <form onSubmit={handleSubmit}>

                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={styles.input}
                  required
                />

                <label style={styles.label}>Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  style={styles.input}
                  required
                />

                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={styles.input}
                  required
                />

                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  style={styles.textarea}
                  required
                />

                <button type="submit" style={styles.button}>
                  Send Enquiry
                </button>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EnquiryForm;


const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #f4f6ff, #eef1ff)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#222",
  },
  card: {
    background: "#fff",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    padding: "30px",
  },
  content: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imageBox: {
    flex: "1",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "16px",
  },
  formBox: {
    flex: "1",
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "6px",
    marginTop: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    resize: "none",
  },
  button: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "#111",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

/* ============ RESPONSIVE FIX ============ */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @media (max-width: 768px) {
      #contact form {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
}
