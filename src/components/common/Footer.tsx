import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grayPalette-gray-apple-1 text-white p-4 text-center mt-auto">
      <p>
        &copy; {new Date().getFullYear()} CannabiBrasil. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
