import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground w-full overflow-x-hidden relative">
      
      {/* 🔴 HEADER MUST STAY ON TOP */}
      <header className="sticky top-0 z-[999] bg-background">
        <Navbar />
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
