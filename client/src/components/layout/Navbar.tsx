import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [search, setSearch] = useState("");

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Collections" },
    { href: "/about", label: "AboutUs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  const handleSearch = () => {
    if (!search.trim()) return;
    setLocation(`/search?q=${encodeURIComponent(search)}`);
  };

  return (
  <nav className="sticky top-0 z-[999] w-full border-b bg-background/95 backdrop-blur">
    <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col gap-4">

      {/* ===== TOP ROW : LOGO ===== */}
      <div className="flex justify-center md:justify-start">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap">
          <div className="h-11 w-11 rounded-full bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-serif font-bold text-primary">
            SUHAG BINDI STORE
          </span>
        </Link>
      </div>

      {/* ===== BOTTOM ROW : NAV + SEARCH ===== */}
      <div className="flex items-center justify-between gap-8 flex-nowrap">

        {/* Navigation Links */}
        <div className="flex items-center gap-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-full px-4 py-1">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search..."
              className="outline-none text-sm bg-transparent w-48"
            />
          </div>

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