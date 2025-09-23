import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Articles from "./pages/Articles.tsx";
import Members from "./pages/Members.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

import App from "./App.tsx";
import Layout from "./components/common/Layout.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sobre",
        element: <About />,
      },
      {
        path: "artigos",
        element: <Articles />,
      },
      {
        path: "associe-se",
        element: <Members />,
      },
      {
        path: "contato",
        element: <Contact />,
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
