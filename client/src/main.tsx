import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/hooks/use-cart";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(

  <BrowserRouter>
  <CartProvider>
    <App />
    </CartProvider>
  </BrowserRouter>
);
