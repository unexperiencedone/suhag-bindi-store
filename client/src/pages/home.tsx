import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/luxurious_indian_jewelry_on_maroon_velvet.png";

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>


        <div className="relative z-10 container text-center text-white px-4 animate-in fade-in zoom-in duration-700">
          <h2 className="text-lg md:text-xl uppercase tracking-[0.3em] mb-4 text-accent font-medium">
            Welcome to Suhag Bindi Store
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Tradition Meets <br /> <span className="text-accent">Elegance</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 text-gray-200 font-light">
            Varanasi's finest manufacturer & wholesaler of Bindi, Jewelry, and Bridal ornaments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold px-8 h-12 text-lg rounded-full">
                View Collections
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 h-12 text-lg rounded-full bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="w-full max-w-none px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Collections</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.id}`}>
                <div className="group cursor-pointer w-full">
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 relative shadow-md">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-serif text-xl font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                        View All
                      </span>
                    </div>
                  </div>
                  <h3 className="text-center font-medium text-lg text-primary">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-none px-10">

          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Handpicked bestsellers just for you
              </p>
            </div>

            <Link href="/products">
              <Button
                variant="link"
                className="text-accent hover:text-primary hidden md:flex"
              >
                View All Products →
              </Button>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile button */}
          <div className="mt-12 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="border-primary text-primary">
                View All Products
              </Button>
            </Link>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-6 text-primary-foreground">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-accent">Premium Quality</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We use the finest materials to ensure every piece reflects luxury and durability.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-6 text-primary-foreground">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-accent">Wholesale Prices</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Direct from manufacturer pricing for bulk orders and retailers.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-6 text-primary-foreground">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-accent">Wide Variety</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                From traditional to contemporary, explore our vast collection of designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview Strip */}
      <section className="py-10 bg-background overflow-hidden">
        <div className="flex justify-center mb-8">
          <Button
            asChild
            variant="outline"
            className="gap-2 rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors"
          >
            <a
              href="https://instagram.com/suhagbindistore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram @suhagbindistore
            </a>
          </Button>
        </div>

        {/* <div className="flex gap-4 min-w-full px-4 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0 w-64 aspect-square bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div> */}
      </section>
    </PublicLayout>
  );
}
