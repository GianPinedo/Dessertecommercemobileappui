import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  reviews?: number;
}

export default function ProductCard({ id, image, name, price, rating, reviews }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
            isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-foreground"
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-foreground">{rating}</span>
          {reviews && <span className="text-xs text-muted-foreground">({reviews})</span>}
        </div>
        <p className="text-lg font-semibold text-primary">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
