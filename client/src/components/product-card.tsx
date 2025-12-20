import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full 
            h-full 
            object-contain     /* ✅ FIT IMAGE */
            p-4                /* ✅ SPACE AROUND IMAGE */
            transition-transform 
            duration-500 
            group-hover:scale-105
          "
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm font-medium uppercase text-xs tracking-wider"
          >
            {product.category}
          </Badge>
        </div>
      </div>

      {/* TITLE */}
      <CardHeader className="p-4 pb-0">
        <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
      </CardHeader>

      {/* DESCRIPTION */}
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
}
