// src/components/common/WhatsAppButton.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-14 right-2 p-4 rounded-full bg-green-400 text-white shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Entre em contato via WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsAppButton;
