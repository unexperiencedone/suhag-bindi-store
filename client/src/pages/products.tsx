import { PublicLayout } from "@/components/layout/public-layout";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Products() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <PublicLayout>
      <div className="bg-background min-h-screen py-12">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Collections</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our exquisite range of Bindis, Mangalsutras, and Jewelry.
            </p>
          </div>

          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-10 overflow-x-auto pb-4">
              <TabsList className="bg-white border h-auto p-1 gap-2 rounded-full shadow-sm">
                <TabsTrigger value="all" className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium transition-all">
                  All Items
                </TabsTrigger>
                {CATEGORIES.map(cat => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium transition-all"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-xl text-muted-foreground font-serif italic">No products found in this category.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Render all other tabs content to avoid empty state issues if switching quickly, though typically redundant if filtering manually */}
             {CATEGORIES.map(cat => (
               <TabsContent key={cat.id} value={cat.id} className="mt-0">
                  {/* Content is handled by the shared filteredProducts logic above for simplicity in this mock */}
               </TabsContent>
             ))}
             <TabsContent value="all" className="mt-0"></TabsContent>

          </Tabs>
        </div>
      </div>
    </PublicLayout>
  );
}
