import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  purity: string;
  images: string[];
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "citizen-jewellers-cart";

function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((current) => {
      const exists = current.some((entry) => entry.id === item.id);
      return exists
        ? current.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + item.quantity }
              : entry,
          )
        : [...current, item];
    });
  };

  const removeFromCart = (id: string) =>
    setCart((current) => current.filter((item) => item.id !== id));

  const increaseQuantity = (id: string) =>
    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );

  const decreaseQuantity = (id: string) =>
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );

  const clearCart = () => setCart([]);

  const totals = useMemo(
    () => ({
      totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        ...totals,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
