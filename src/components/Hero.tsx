import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gray-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '200ms' }}>
              Redefine
            </span>
            <span className="block bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '400ms' }}>
              Your Style
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '600ms' }}>
            Discover the latest trends in haute couture. Elevate your wardrobe with pieces that speak to your individuality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '800ms' }}>
            <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
              <span>Shop Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all hover:scale-105">
              Explore Trends
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
