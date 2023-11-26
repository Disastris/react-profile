// import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />, // localhost:3001
      },
      {
        path: "/Project", // localhost:3001/Project
        element: <Project />,
      },
      // {
      //   path: "/Resume",
      //   element: <Resume />,
      // },
      // {
      //   path: "/Contact",
      //   element: <Contact />,
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
