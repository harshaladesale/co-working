const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "0.95rem",
      }}
    >
      <p style={{ margin: 0 }}>
        © 2026 Gaurisha Co-Working Space | Designed & Developed by{" "}
        <a
          href="https://localvocalizetechnology.tech/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00d4ff",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Localvocalize
        </a>
      </p>
    </footer>
  );
};

export default Footer;