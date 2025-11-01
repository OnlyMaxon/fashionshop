import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2">
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => onViewDetails(product)}
              className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-colors transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </div>

        {product.featured && (
          <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <span className="text-xs text-gray-500">{product.stock} in stock</span>
        </div>
      </div>
    </div>
  );
}
