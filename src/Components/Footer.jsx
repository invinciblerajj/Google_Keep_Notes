import React from "react";

function Footer() {
  const curr = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Made with Love by Ayush © {curr}</p>
    </div>
  );
}

export default Footer;
