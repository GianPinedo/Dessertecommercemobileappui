import {
  User,
  MapPin,
  CreditCard,
  Clock,
  Heart,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import BottomNav from "../components/BottomNav";

export default function ProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: MapPin,
      title: "Saved Addresses",
      description: "Manage delivery addresses",
      action: () => {},
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage cards and wallets",
      action: () => {},
    },
    {
      icon: Clock,
      title: "Order History",
      description: "View past orders",
      action: () => {},
    },
    {
      icon: Heart,
      title: "Favorites",
      description: "Your favorite desserts",
      action: () => {},
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage notifications",
      action: () => {},
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help with orders",
      action: () => {},
    },
    {
      icon: Settings,
      title: "Settings",
      description: "App preferences",
      action: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-b-3xl px-6 pt-12 pb-8">
        <h1 className="text-2xl font-semibold text-primary-foreground mb-6">Profile</h1>
        
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-primary" />
          </div>
          <div className="flex-1 text-primary-foreground">
            <h2 className="text-xl font-semibold mb-1">Emma Johnson</h2>
            <p className="text-primary-foreground/80">emma.johnson@email.com</p>
          </div>
          <button className="p-2 bg-white/20 rounded-full">
            <ChevronRight className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-6 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-1">24</p>
              <p className="text-xs text-muted-foreground">Orders</p>
            </div>
            <div className="text-center border-l border-r border-border">
              <p className="text-2xl font-bold text-primary mb-1">12</p>
              <p className="text-xs text-muted-foreground">Favorites</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary mb-1">5</p>
              <p className="text-xs text-muted-foreground">Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={item.action}
              className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-foreground mb-0.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          );
        })}

        {/* Logout Button */}
        <button className="w-full bg-destructive/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-destructive/20 transition-all mt-4">
          <div className="w-12 h-12 bg-destructive/20 rounded-2xl flex items-center justify-center">
            <LogOut className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-destructive">Logout</h3>
          </div>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}