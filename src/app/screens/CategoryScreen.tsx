import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function CategoryScreen() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  let filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-background pb-24 max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-secondary rounded-full transition-all"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-2xl font-semibold text-foreground flex-1">Browse Desserts</h1>
          <button className="p-2 hover:bg-secondary rounded-full transition-all">
            <SlidersHorizontal className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="px-6 py-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm text-foreground bg-white border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="popular">Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
