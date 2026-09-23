import { motion } from 'framer-motion';
import { Instagram, Heart, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const links = {
    shop: ['All Products', 'Bouquets', 'Companions', 'Gifts', 'Custom Orders'],
    help: ['FAQ', 'Shipping Info', 'Returns', 'Contact Us', 'Size Guide'],
    about: ['Our Story', 'Behind the Scenes', 'Care Instructions', 'Testimonials'],
  };

  return (
    <footer id="contact" className="bg-text text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                ♡
              </div>
              <span className="font-heading text-xl font-semibold text-cream">
                Threads<span className="text-primary">Of</span>Love
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Handmade with love, stitched for you. Every piece is a little work of heart.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/threadsoflove_01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={16} className="text-cream" />
              </a>
              <a
                href="mailto:hello@threadsoflove.com"
                className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail size={16} className="text-cream" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">Shop</h4>
            <ul className="space-y-2">
              {links.shop.map(link => (
                <li key={link}>
                  <a href="#shop" className="text-sm text-cream/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">Help</h4>
            <ul className="space-y-2">
              {links.help.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-cream/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">About</h4>
            <ul className="space-y-2">
              {links.about.map(link => (
                <li key={link}>
                  <a href="#our-story" className="text-sm text-cream/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-cream/60 flex items-center gap-2">
                <MapPin size={14} />
                Made with love in India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/50">
              © 2024 ThreadsOfLove. All rights reserved.
            </p>
            <p className="text-sm text-cream/50 flex items-center gap-1">
              Made with <Heart size={12} className="text-primary fill-primary" /> by Bhavishka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
