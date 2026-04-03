import { ShoppingCart, Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function HomeScreen() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount] = useState(3);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.filter(p => p.reviews > 200);
  const newArrivals = products.slice(6, 10);

  return (
    <div className="min-h-screen bg-background pb-24 max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Hello, Emma!</p>
            <h1 className="text-2xl font-semibold text-foreground">Sweet Cravings?</h1>
          </div>
          <button
            onClick={() => navigate("/cart")}
            className="relative p-3 bg-secondary rounded-full"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <button
          onClick={() => navigate("/search")}
          className="w-full flex items-center gap-3 bg-background px-4 py-3.5 rounded-2xl"
        >
          <Search className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground">Search desserts...</span>
        </button>
      </div>

      {/* Category Chips */}
      <div className="px-6 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-6 text-foreground relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-2">¡Oferta Especial!</h2>
            <p className="text-foreground/80 mb-3">25% de descuento en todos los cupcakes</p>
            <button className="bg-white text-primary px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-all">
              Ordenar Ahora
            </button>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-20">
            <div className="w-32 h-32 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Featured</h2>
          <button
            onClick={() => navigate("/category")}
            className="text-primary text-sm"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Best Sellers</h2>
          <button
            onClick={() => navigate("/category")}
            className="text-primary text-sm"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {bestSellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">New Arrivals</h2>
          <button
            onClick={() => navigate("/category")}
            className="text-primary text-sm"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}