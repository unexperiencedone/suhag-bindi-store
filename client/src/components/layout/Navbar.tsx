import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import LiveSearch from "../LiveSearch";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const { cart, lastAddedId } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Collections" },
    { href: "/about", label: "AboutUs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  const handleSearch = () => {
    const q = search.trim();
    if (!q) return;
    setLocation(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="fixed top-0 left-0 z-[1000] w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-accent font-bold text-sm">
              S
            </div>
            <span className="text-lg font-serif font-bold text-primary">
              SUHAG
            </span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SEARCH + CART */}
          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="relative">
              <div className="flex items-center border rounded-full px-3 py-0.5">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search..."
                  className="outline-none text-sm bg-transparent w-32"
                />
              </div>
              <LiveSearch query={search} onClose={() => setSearch("")} />
            </div>

            {/* CART */}
            <Link href="/cart">
              <Button
                variant="ghost"
                className={`relative h-8 w-8 p-2 ${
                  lastAddedId ? "animate-cart-bounce" : ""
                }`}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
