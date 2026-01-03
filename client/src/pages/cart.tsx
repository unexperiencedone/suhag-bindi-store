import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-xl font-semibold">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-serif font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="grid gap-4">
        {cart.map((item) => (
          <Card key={item.id} className="flex gap-4 p-4 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain bg-gray-50 rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>

              <p className="font-semibold mt-1">
                ₹{item.price.toLocaleString("en-IN")}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <Button size="icon" variant="outline" onClick={() => decreaseQty(item.id)}>
                  <Minus className="h-4 w-4" />
                </Button>

                <span className="min-w-[24px] text-center">
                  {item.quantity}
                </span>

                <Button size="icon" variant="outline" onClick={() => increaseQty(item.id)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-right min-w-[100px]">
              <p className="font-semibold">
                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => removeFromCart(item.id)}
            >
              <Trash2 className="h-5 w-5 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-bold">
          Total: ₹{totalAmount.toLocaleString("en-IN")}
        </div>

        <Button size="lg">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
