import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-light/30">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-primary" />
                <h2 className="font-heading text-xl font-semibold text-text">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-primary-light/50 flex items-center justify-center hover:bg-primary-light transition-colors"
              >
                <X size={16} className="text-text" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🧺</div>
                  <p className="text-muted font-medium">Your cart is empty</p>
                  <p className="text-sm text-muted/70 mt-1">Add some handmade love!</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary mt-6 text-sm"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4 bg-white rounded-2xl p-4 card-soft"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cream-warm to-primary-light/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">
                          {item.category === 'bouquets' ? '🌸' : item.category === 'companions' ? '🧸' : '🎁'}
                        </span>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-text text-sm truncate">{item.name}</h3>
                        <p className="text-primary font-semibold text-sm mt-1">₹{item.price}</p>

                        {/* Quantity */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-primary-light/50 flex items-center justify-center hover:bg-primary-light transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-primary-light/50 flex items-center justify-center hover:bg-primary-light transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted/50 hover:text-primary transition-colors self-start"
                      >
                        <X size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-primary-light/30 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-xl font-semibold text-text">₹{cartTotal}</span>
                </div>
                <p className="text-xs text-muted text-center">
                  Made especially for you ♡ Handmade with care
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-primary text-center"
                >
                  Checkout — ₹{cartTotal}
                </motion.button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-sm text-muted hover:text-primary transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
