import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Shop', 'Customize', 'Bouquets', 'Our Story', 'Reviews', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                ♡
              </div>
              <span className="font-heading text-xl font-semibold text-text hidden sm:block">
                Threads<span className="text-primary">Of</span>Love
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-muted hover:text-primary transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-primary-light/50 transition-colors" aria-label="Search">
                <Search size={18} className="text-muted" />
              </button>
              <button className="p-2 rounded-full hover:bg-primary-light/50 transition-colors relative" aria-label="Wishlist">
                <Heart size={18} className="text-muted" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 rounded-full hover:bg-primary-light/50 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} className="text-muted" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-full hover:bg-primary-light/50 transition-colors lg:hidden"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} className="text-text" /> : <Menu size={20} className="text-text" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/98 pt-20 px-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-heading font-medium text-text hover:text-primary transition-colors py-2"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
