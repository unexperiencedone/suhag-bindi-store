import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import LiveSearch from "../LiveSearch";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [search, setSearch] = useState("");

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Collections" },
    { href: "/about", label: "AboutUs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  // ✅ Redirect to products with query
  const handleSearch = () => {
    const q = search.trim();
    if (!q) return;
    setLocation(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="sticky top-0 z-[999] w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col gap-4">

        {/* LOGO */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl">
              S
            </div>
            <span className="text-2xl font-serif font-bold text-primary">
              SUHAG BINDI STORE
            </span>
          </Link>
        </div>

        {/* NAV + SEARCH */}
        <div className="flex items-center justify-between gap-8">

          {/* NAV LINKS */}
          <div className="flex items-center gap-14">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  isActive(link.href)
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-4 relative">
            <div className="relative">
              <div className="flex items-center border rounded-full px-4 py-1 bg-background">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search bindi, earrings..."
                  className="outline-none text-sm bg-transparent w-48"
                />
              </div>

              {/* ✅ LIVE SEARCH DROPDOWN */}
              <LiveSearch
                query={search}
                onClose={() => setSearch("")}
              />
            </div>

            {/* OPTIONAL BUTTON */}
            <Button
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}