// src/components/common/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logotipo-acalmebrasil277x70.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="logo Acalme Brasil" className="h-22" />
        </Link>

        <ul className="flex space-x-6 ml-auto items-center">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Nosso Propósito
            </Link>
          </li>
          <li>
            <Link
              to="/artigos"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Artigos
            </Link>
          </li>
          <li>
            <Link
              to="/associe-se"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Associe-se
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-gradient-hero hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition-colors duration-200 flex items-center"
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
