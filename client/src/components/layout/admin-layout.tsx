import { Link, useLocation } from "wouter";
import { LayoutDashboard, Package, MessageSquare, LogOut } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [location] = useLocation();

  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex font-sans bg-gray-50 text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col fixed h-full shadow-xl">
        <div className="p-6 border-b border-primary-foreground/10">
          <div className="text-2xl font-serif font-bold text-accent">Admin Panel</div>
          <div className="text-xs text-primary-foreground/60 mt-1">Suhag Bindi Store</div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(link.href) 
                    ? "bg-accent text-accent-foreground font-medium shadow-md" 
                    : "text-primary-foreground/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-primary-foreground/10">
          <Link href="/admin/login">
            <button className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-primary-foreground/80 hover:bg-white/10 hover:text-white transition-colors">
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
