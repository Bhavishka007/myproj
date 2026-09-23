import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';
import { products } from '../data/products';
import { useState } from 'react';

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden card-soft card-hover"
    >
      {/* Image */}
      <div className="product-img-wrapper relative aspect-square bg-gradient-to-br from-cream-warm to-primary-light/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
            {product.category === 'bouquets' ? '🌸' : product.category === 'companions' ? '🧸' : '🎁'}
          </div>
        </div>
        
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg">
              <Eye size={16} />
            </button>
            <button
              onClick={() => addToCart(product)}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg"
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isWished ? 'bg-primary text-white' : 'bg-white/80 backdrop-blur-sm text-muted hover:text-primary'
          }`}
        >
          <Heart size={16} fill={isWished ? 'currentColor' : 'none'} />
        </button>

        {/* Badge */}
        {product.rating === 5 && (
          <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full font-medium">
            Bestseller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
          ))}
        </div>
        <h3 className="font-heading font-semibold text-text text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-muted mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">₹{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="text-sm font-medium text-primary hover:text-brown transition-colors flex items-center gap-1"
          >
            <ShoppingBag size={14} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'bouquets', 'companions', 'gifts'];
  
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <section id="shop" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">Our Collection</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            Little loves, best sellers
          </h2>
          <p className="text-muted max-w-md mx-auto">
            Some of our most-loved handmade pieces, crafted with care just for you.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-primary-light/40 text-muted hover:bg-primary-light/60'
              }`}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
