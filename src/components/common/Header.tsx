// src/components/common/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="logo Acalme Brasil" className="h-24 rounded-lg" />
        </Link>

        <ul className="flex space-x-6 ml-auto items-center">
          <li>
            <Link
              to="/"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="/nosso-proposito"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Nosso Propósito
            </Link>
          </li>
          <li>
            <Link
              to="/artigos"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Artigos
            </Link>
          </li>
          <li>
            <Link
              to="/associe-se"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Associe-se
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className="hover:text-grayPalette-gray-apple-2 transition-colors duration-200"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-grayPalette-gray-apple-1 hover:bg-grayPalette-gray-apple-2 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
