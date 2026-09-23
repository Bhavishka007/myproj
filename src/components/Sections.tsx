import { motion } from 'framer-motion';
import { categories, occasions, reviews } from '../data/products';
import { Star, Quote, ArrowRight, Instagram } from 'lucide-react';

/* ============ BRAND INTRO ============ */
export function BrandIntro() {
  return (
    <section className="py-20 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/40 to-accent/20 rounded-3xl blob-1" />
              <div className="absolute inset-4 bg-cream-warm rounded-3xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://image.qwenlm.ai/generated-images/741231b9-3daf-4dbb-be98-e0e96f04a555/_result.png" 
                  alt="Hands crocheting with soft pink yarn"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <span className="text-2xl">💕</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-2xl text-primary">Our Craft</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-4">
              Made by hand. Made for you.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Every ThreadsOfLove creation is carefully crocheted with patience, warmth and a little bit of love. 
              From the softest yarn to the final stitch, each piece carries a piece of our heart.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We believe in the magic of handmade things — the imperfections that make them unique, 
              the time invested that makes them precious, and the love woven into every loop.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-primary-light" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted">Handmade</p>
              </div>
              <div className="w-px h-10 bg-primary-light" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">∞</p>
                <p className="text-xs text-muted">Love Stitches</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============ FEATURED CATEGORIES ============ */
export function FeaturedCategories() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">Explore</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            Find something to love
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 text-center card-soft card-hover cursor-pointer group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-light/50 to-accent/30 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {cat.emoji}
              </div>
              <h3 className="font-heading font-semibold text-text text-lg mb-1">{cat.name}</h3>
              <p className="text-sm text-muted">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OCCASIONS ============ */
export function Occasions() {
  return (
    <section className="py-20 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">For Every Moment</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            A little love for every occasion
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {occasions.map((occ, i) => (
            <motion.div
              key={occ.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-5 text-center card-soft cursor-pointer group"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                className="text-3xl mb-2"
              >
                {occ.emoji}
              </motion.div>
              <p className="text-sm font-medium text-text group-hover:text-primary transition-colors">{occ.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ REVIEWS ============ */
export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            Loved by our little community
          </h2>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="scroll-horizontal flex gap-6 pb-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] sm:min-w-[350px] bg-white rounded-3xl p-6 card-soft flex-shrink-0"
            >
              <Quote size={24} className="text-primary-light mb-3" />
              <p className="text-text text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text text-sm">{review.name}</p>
                  <p className="text-xs text-muted">{review.product}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-xs">
                  ♡
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OUR STORY ============ */
export function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-gradient-to-b from-cream to-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-2xl text-primary">Our Story</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-6">
              Behind every loop is a little bit of love.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                ThreadsOfLove started with a simple idea — to create handmade things that carry real emotion. 
                What began as a personal passion for crochet has grown into a little studio where every piece 
                is made with intention and care.
              </p>
              <p>
                Each creation is more than just yarn and stitches. It's a gift of time, a token of affection, 
                and a reminder that the most beautiful things are made by hand. From custom bouquets to tiny 
                companions, every piece is designed to make someone smile.
              </p>
              <p>
                We believe that gifting handmade is gifting a piece of your heart. And that's exactly what 
                we pour into every order — love, one loop at a time.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all"
            >
              Get in touch <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Thread animation */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <motion.path
                  d="M50 200 C100 100, 200 50, 300 100 C350 130, 380 200, 350 280 C320 350, 200 380, 120 320 C60 270, 80 200, 150 180 C200 165, 250 200, 230 250 C215 285, 180 280, 190 250"
                  stroke="#D98B9C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </svg>
              
              <div className="absolute inset-8 bg-gradient-to-br from-cream-warm to-primary-light/30 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    💝
                  </motion.div>
                  <p className="font-accent text-2xl text-primary">Made with love</p>
                  <p className="text-sm text-muted mt-1">by Bhavishka</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============ INSTAGRAM SECTION ============ */
export function InstagramSection() {
  const posts = ['🌸', '🧶', '💐', '🌷', '🧸', '💝'];
  
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">Follow Along</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            A peek into our little crochet world
          </h2>
          <a href="https://instagram.com/threadsoflove_01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <Instagram size={18} />
            @threadsoflove_01
          </a>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {posts.map((emoji, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/threadsoflove_01"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-primary-light/40 to-accent/20 rounded-2xl flex items-center justify-center cursor-pointer group relative overflow-hidden"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{emoji}</span>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors rounded-2xl flex items-center justify-center">
                <Instagram size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ NEWSLETTER ============ */
export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-light/30 via-cream-dark/50 to-accent/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl mb-4 block">💌</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mb-3">
            Get little notes from ThreadsOfLove
          </h2>
          <p className="text-muted mb-8">
            New creations, custom drops and cute surprises delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border-2 border-primary-light/50 focus:border-primary focus:outline-none transition-colors bg-white/80"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary whitespace-nowrap"
            >
              Join the Love Club
            </motion.button>
          </div>
          <p className="text-xs text-muted mt-4">No spam, just love. Unsubscribe anytime ♡</p>
        </motion.div>
      </div>
    </section>
  );
}
