import { PRODUCTS } from "@/lib/data";
import { Link } from "wouter";

interface Props {
  query: string;
  onClose: () => void;
}

export default function LiveSearch({ query, onClose }: Props) {
  if (!query.trim()) return null;

  const search = query.toLowerCase();

  const results = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.description.toLowerCase().includes(search)
  ).slice(0, 6);

  return (
    <div className="absolute top-full mt-2 w-full bg-background border rounded-xl shadow-lg z-50">
      {results.length > 0 ? (
        results.map((product) => (
          <Link
            key={product.id}
            href={`/products?highlight=${product.id}&category=${product.category}`}
            onClick={onClose}
            className="flex gap-3 items-center p-3 hover:bg-muted transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-xs text-muted-foreground capitalize">
                {product.category}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="p-4 text-sm text-muted-foreground">
          No products found
        </div>
      )}
    </div>
  );
}