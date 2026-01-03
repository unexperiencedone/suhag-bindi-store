import { useEffect, useState } from "react";

export default function CartToast({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => setVisible(false), 1500);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="
      fixed bottom-6 right-6 z-[2000]
      bg-primary text-primary-foreground
      px-5 py-3 rounded-lg shadow-lg
      animate-slide-in
    ">
      🛒 Added to cart
    </div>
  );
}
