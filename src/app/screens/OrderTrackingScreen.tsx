import { ArrowLeft, CheckCircle2, Package, Truck, Home } from "lucide-react";
import { useNavigate, useParams } from "react-router";

export default function OrderTrackingScreen() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const orderSteps = [
    {
      icon: CheckCircle2,
      title: "Order Received",
      description: "Your order has been confirmed",
      time: "2:15 PM",
      completed: true,
    },
    {
      icon: Package,
      title: "Preparing",
      description: "We're preparing your delicious treats",
      time: "2:30 PM",
      completed: true,
    },
    {
      icon: Truck,
      title: "On the Way",
      description: "Your order is being delivered",
      time: "Est. 3:45 PM",
      completed: false,
      current: true,
    },
    {
      icon: Home,
      title: "Delivered",
      description: "Enjoy your desserts!",
      time: "Est. 4:00 PM",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto pb-8">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-secondary rounded-full transition-all"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-foreground">Track Order</h1>
            <p className="text-sm text-muted-foreground">Order #{orderId}</p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="px-6 py-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-green-900 mb-2">Order Confirmed!</h2>
          <p className="text-green-700">Your sweet treats are on their way</p>
        </div>

        {/* Estimated Delivery */}
        <div className="bg-white rounded-3xl p-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Estimated Delivery</p>
            <p className="text-3xl font-bold text-primary mb-1">25 mins</p>
            <p className="text-sm text-muted-foreground">Around 4:00 PM</p>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Order Status</h3>
          <div className="space-y-6">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === orderSteps.length - 1;
              
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        step.completed
                          ? "bg-green-500 text-white"
                          : step.current
                          ? "bg-primary text-white ring-4 ring-primary/20"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    {!isLast && (
                      <div
                        className={`w-0.5 h-12 my-2 ${
                          step.completed ? "bg-green-500" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-start justify-between mb-1">
                      <h4
                        className={`font-semibold ${
                          step.current ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-sm text-muted-foreground">{step.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Details */}
        <div className="bg-white rounded-3xl p-6 mt-6">
          <h3 className="font-semibold text-foreground mb-4">Delivery Details</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Delivering to</p>
              <p className="text-foreground font-medium">123 Sweet Street, Dessert City, DC 12345</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Delivery partner</p>
              <p className="text-foreground font-medium">John Smith</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Contact</p>
              <p className="text-foreground font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all">
            Contact Driver
          </button>
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-white border-2 border-border text-foreground py-4 rounded-2xl font-semibold hover:bg-secondary transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
