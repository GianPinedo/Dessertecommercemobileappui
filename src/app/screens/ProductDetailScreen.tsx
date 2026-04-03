import { ArrowLeft, Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  const product = products.find((p) => p.id === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    // Add to cart logic
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-background pb-24 max-w-[430px] mx-auto">
      {/* Image Gallery */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-6 p-3 bg-white/90 rounded-full shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-12 right-6 p-3 rounded-full shadow-lg transition-all ${
            isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-foreground"
          }`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="bg-white rounded-t-[32px] -mt-8 relative z-10 px-6 pt-6 pb-32">
        <h1 className="text-2xl font-semibold text-foreground mb-2">{product.name}</h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-foreground">{product.rating}</span>
          </div>
          <span className="text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <p className="text-3xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-2">Description</h3>
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
        </div>

        {/* Flavors or Ingredients */}
        {product.flavors && (
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Choose Flavor</h3>
            <div className="flex flex-wrap gap-2">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    selectedFlavor === flavor
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white text-foreground border-border"
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.ingredients && (
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ingredient) => (
                <span
                  key={ingredient}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-all"
            >
              <Minus className="h-4 w-4 text-foreground" />
            </button>
            <span className="text-xl font-semibold text-foreground w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-all"
            >
              <Plus className="h-4 w-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-4">You May Also Like</h3>
            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-6 py-4 max-w-[430px] mx-auto rounded-t-3xl shadow-lg z-50">
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>
  );
}