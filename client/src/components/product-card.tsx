import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { Check } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  highlighted?: boolean;
}

export function ProductCard({ product, highlighted }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (highlighted) {
      console.log("Highlighted:", product.id);
    }
  }, [highlighted, product.id]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: 1,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <Card className="bg-white shadow-sm">
      <div className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain"
        />

        <h3 className="font-serif text-lg font-bold mt-2">
          {product.name}
        </h3>

        {/* PRICE */}
        <p className="text-lg font-semibold text-gray-800 mt-1">
          ₹{(product.price ?? 0).toLocaleString("en-IN")}
        </p>

        <p className="text-sm text-muted-foreground mt-1">
          {product.description}
        </p>

        <Button
          onClick={handleAddToCart}
          className={`w-full mt-3 transition-all duration-300
            ${added ? "bg-green-600 hover:bg-green-600 scale-105" : ""}
          `}
          disabled={added}
        >
          {added ? (
            <span className="flex items-center gap-2 animate-fade-in">
              <Check className="h-4 w-4" /> Added
            </span>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </div>
    </Card>
  );
}
