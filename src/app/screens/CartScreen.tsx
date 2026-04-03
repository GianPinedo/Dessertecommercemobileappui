import { ArrowLeft, Minus, Plus, Trash2, Tag } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { products } from "../data/products";

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

export default function CartScreen() {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 2 },
    { product: products[3], quantity: 1 },
  ]);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newCart = [...cartItems];
    newCart[index].quantity = newQuantity;
    setCartItems(newCart);
  };

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const deliveryFee = 5.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-background pb-32 max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-12 pb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-full transition-all"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-2xl font-semibold text-foreground flex-1">My Cart</h1>
          <span className="text-muted-foreground">{cartItems.length} items</span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 px-6">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate("/home")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="px-6 py-6 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 flex gap-4 shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-2xl"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {item.product.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="p-1.5 bg-secondary rounded-lg"
                    >
                      <Minus className="h-3.5 w-3.5 text-foreground" />
                    </button>
                    <span className="font-medium text-foreground w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="p-1.5 bg-secondary rounded-lg"
                    >
                      <Plus className="h-3.5 w-3.5 text-foreground" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="p-2 hover:bg-destructive/10 rounded-full transition-all h-fit"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </button>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="px-6 mb-6">
            <div className="bg-white rounded-3xl p-4 flex gap-3">
              <div className="flex-1 flex items-center gap-3 bg-background px-4 py-3 rounded-2xl">
                <Tag className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 bg-transparent focus:outline-none text-foreground"
                />
              </div>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-semibold hover:bg-primary/90 transition-all">
                Apply
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="px-6 mb-6">
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium text-foreground">
                    ${deliveryFee.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-border pt-3 flex items-center justify-between">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Fixed Bottom CTA */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-border px-6 py-4 max-w-[430px] mx-auto rounded-t-3xl shadow-lg z-40">
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}