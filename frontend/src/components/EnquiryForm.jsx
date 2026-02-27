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
      await fetch(`${import.meta.env.VITE_BASE_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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

            {/* Image (Hidden on Mobile) */}
            <div className="imageBox" style={styles.imageBox}>
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                alt="Contact"
                style={styles.image}
              />
            </div>

            {/* Form */}
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

      {/* Responsive + Enhancements */}
      <style>
        {`
          /* Hide image on mobile */
          @media (max-width: 768px) {
            .imageBox {
              display: none;
            }
          }

          input:focus, textarea:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79,70,229,0.15);
          }

          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }

          button:active {
            transform: translateY(0);
          }
        `}
      </style>
    </section>
  );
};

export default EnquiryForm;

const styles = {
  section: {
    padding: "100px 20px",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "50px",
    color: "#111",
  },
  card: {
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
    padding: "40px",
  },
  content: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imageBox: {
    flex: "1",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "20px",
  },
  formBox: {
    flex: "1",
  },
  label: {
    display: "block",
    fontWeight: "600",
    marginBottom: "6px",
    marginTop: "16px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  textarea: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontSize: "15px",
    resize: "none",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    marginTop: "24px",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(90deg, #4f46e5, #6366f1)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};