import { PublicLayout } from "@/components/layout/public-layout";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useMemo } from "react";
import { useLocation } from "wouter";
import { useSearch } from "wouter";

export default function Products() {
  const search = useSearch();

  // ✅ Parse params from URL
  const { highlightId, searchQuery, initialCategory } = useMemo(() => {
  const params = new URLSearchParams(search);
  return {
    highlightId: params.get("highlight"),
    searchQuery: params.get("q")?.toLowerCase() || "",
    initialCategory: params.get("category") || "all",
  };
}, [search]);

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [readyToHighlight, setReadyToHighlight] = useState(false);


  // ✅ Enable highlight AFTER tab content mounts
  useEffect(() => {
  if (!highlightId) return;

  const timeout = setTimeout(() => {
    setReadyToHighlight(true);
  }, 0);

  return () => clearTimeout(timeout);
}, [highlightId, activeCategory]);

  // ✅ Sync category when URL changes
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  // ✅ Scroll into view when highlight changes
  useEffect(() => {
    if (!highlightId) return;

    const timeout = setTimeout(() => {
      const el = document.getElementById(`product-${highlightId}`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);

    return () => clearTimeout(timeout);
  }, [highlightId, activeCategory]);

  // ✅ Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;

    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <PublicLayout>
      <div className="bg-background min-h-screen py-12 w-full">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Collections
            </h1>

            {searchQuery && (
              <p className="text-muted-foreground mt-2">
                Showing results for "<strong>{searchQuery}</strong>"
              </p>
            )}
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <div className="mb-10 overflow-x-auto pb-4 -mx-4 px-4">
              <TabsList className="bg-white border p-1 gap-2 rounded-full shadow-sm">
                <TabsTrigger value="all">All Items</TabsTrigger>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id}>
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      highlighted={
                        readyToHighlight &&
                        String(product.id) === highlightId
                      }
                    />
                  ))
                ) : (
                  <p className="col-span-full text-center text-muted-foreground">
                    No products found.
                  </p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PublicLayout>
  );
}