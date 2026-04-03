import { ArrowLeft, MapPin, Calendar, CreditCard, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [orderNotes, setOrderNotes] = useState("");

  const total = 115.96;

  const handlePlaceOrder = () => {
    const orderId = "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase();
    navigate(`/order-tracking/${orderId}`);
  };

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
          <h1 className="text-2xl font-semibold text-foreground">Checkout</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* Delivery Address */}
        <div className="bg-white rounded-3xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Delivery Address</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="address"
                value="home"
                checked={selectedAddress === "home"}
                onChange={(e) => setSelectedAddress(e.target.value)}
                className="mt-1"
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Home</p>
                <p className="text-sm text-muted-foreground">
                  123 Sweet Street, Dessert City, DC 12345
                </p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="address"
                value="work"
                checked={selectedAddress === "work"}
                onChange={(e) => setSelectedAddress(e.target.value)}
                className="mt-1"
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Work</p>
                <p className="text-sm text-muted-foreground">
                  456 Office Plaza, Business District, BD 67890
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Delivery Date & Time */}
        <div className="bg-white rounded-3xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Delivery Time</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="date"
                value="today"
                checked={selectedDate === "today"}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Today</p>
                <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="date"
                value="tomorrow"
                checked={selectedDate === "tomorrow"}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Tomorrow</p>
                <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM</p>
              </div>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-3xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Payment Method</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={selectedPayment === "card"}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Credit/Debit Card</p>
                <p className="text-sm text-muted-foreground">**** **** **** 4532</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-border rounded-2xl cursor-pointer transition-all hover:border-primary">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={selectedPayment === "cash"}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              <div className="flex-1">
                <p className="font-medium text-foreground">Cash on Delivery</p>
                <p className="text-sm text-muted-foreground">Pay when you receive</p>
              </div>
            </label>
          </div>
        </div>

        {/* Order Notes */}
        <div className="bg-white rounded-3xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Order Notes (Optional)</h3>
          </div>
          <textarea
            value={orderNotes}
            onChange={(e) => setOrderNotes(e.target.value)}
            placeholder="Add special instructions for your order..."
            className="w-full bg-background px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary resize-none h-24"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-3xl p-5">
          <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium text-foreground">$109.97</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Delivery Fee</span>
              <span className="font-medium text-foreground">$5.99</span>
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

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-4 max-w-[430px] mx-auto rounded-t-3xl shadow-lg z-50">
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all shadow-lg"
        >
          Place Order - ${total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}