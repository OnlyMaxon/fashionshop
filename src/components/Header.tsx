import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              ÉLITE
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">New Arrivals</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Collections</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">About</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md animate-in slide-in-from-top">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900">New Arrivals</a>
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900">Collections</a>
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}
