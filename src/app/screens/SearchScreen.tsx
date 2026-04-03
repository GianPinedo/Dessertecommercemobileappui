import { ArrowLeft, Search, X, Clock } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function SearchScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
    "Chocolate Cake",
    "Strawberry Cheesecake",
    "Cupcakes",
  ]);

  const searchResults = searchQuery.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const suggestedProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-background pb-24 max-w-[430px] mx-auto">
      {/* Header */}
      <div className="bg-white rounded-b-3xl shadow-sm px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-secondary rounded-full transition-all"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for desserts..."
              className="w-full bg-background pl-12 pr-10 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Results ({searchResults.length})
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}

        {/* Recent Searches */}
        {!searchQuery && recentSearches.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Searches</h2>
            <div className="space-y-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="flex items-center gap-3 w-full text-left p-3 hover:bg-white rounded-2xl transition-all"
                >
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground flex-1">{search}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Suggested Products */}
        {!searchQuery && (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Popular Desserts</h2>
            <div className="grid grid-cols-2 gap-4">
              {suggestedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
