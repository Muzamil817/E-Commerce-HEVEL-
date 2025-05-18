import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextapiStore from "./context/ContextapiStore.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextapiStore>
      <RouterProvider router={router} />
    </ContextapiStore>
  </StrictMode>
);
