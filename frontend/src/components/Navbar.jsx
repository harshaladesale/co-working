import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Plans", href: "#plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 999,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
  href="#"
  className="flex items-center gap-3 no-underline"
>
  {/* Logo */}
  <img
    src={logo}
    alt="Logo"
    className="h-14 w-14 object-contain"
  />

  {/* Text */}
  <div>
    {/* Brand Name */}
    <div className="relative text-xl font-bold text-gray-900">
      Gaurisha

      {/* Underline Accent (Always Visible) */}
      <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600"></span>
    </div>

    {/* Tagline */}
    <div className="mt-1 text-[11px] tracking-widest uppercase text-blue-600">
      Co-Working Space
    </div>
  </div>
</a>


        {/* Desktop Menu */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  style={{
                    textDecoration: "none",
                    fontWeight: 500,
                    color: active === item.name ? "#0d6efd" : "#000",
                    borderBottom:
                      active === item.name ? "2px solid #0d6efd" : "none",
                    paddingBottom: "4px",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div>
            <button onClick={() => setOpen(!open)}>☰</button>

            {open && (
              <ul
                style={{
                  position: "absolute",
                  right: 10,
                  top: "100%",
                  background: "#fff",
                  listStyle: "none",
                  padding: "1rem",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setActive(item.name);
                        setOpen(false);
                      }}
                      style={{
                        display: "block",
                        padding: "6px 0",
                        color: active === item.name ? "#0d6efd" : "#000",
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
