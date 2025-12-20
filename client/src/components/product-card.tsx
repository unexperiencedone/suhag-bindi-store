import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
   highlighted?: boolean;
}




export function ProductCard({ product, highlighted }: ProductCardProps) {
  useEffect(() => {
  if (highlighted) {
    console.log("✅ SHOULD HIGHLIGHT", product.id);
  }
}, [highlighted]);
     console.log("ProductCard rendered", product.id, highlighted);
  return (
    <div id={`product-${product.id}`}>
      <Card
        className={`transition-all duration-300 bg-white
          ${highlighted ? "ring-4 ring-primary shadow-xl scale-[1.02]" : "shadow-sm"}
        `}
      >
        {/* INNER WRAPPER HANDLES OVERFLOW */}
        <div className="group overflow-hidden">
          {/* IMAGE */}
          <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* TITLE */}
          <div className="p-4 pb-0">
            <h3 className="font-serif text-lg font-bold">{product.name}</h3>
          </div>

          {/* DESCRIPTION */}
          <div className="p-4 pt-2">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
