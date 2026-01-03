import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Products from "@/pages/products";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import CartPage from "@/pages/cart";
import { Navbar } from "@/components/layout/Navbar";

function App() {
  return (
    <>
      {/* ✅ NAVBAR ALWAYS ON TOP */}
      <Navbar />

      {/* ✅ PAGE CONTENT */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
