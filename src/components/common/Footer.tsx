import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grayPalette-gray-apple-2 text-white p-4 text-center mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Acalme Brasil. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
