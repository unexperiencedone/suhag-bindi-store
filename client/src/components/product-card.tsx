import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";

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
      <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm font-medium uppercase text-xs tracking-wider">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <EnquiryDialog 
          productName={product.name}
          trigger={
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md">
              Enquire For Price
            </Button>
          }
        />
      </CardFooter>
    </Card>
  );
}
