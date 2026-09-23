import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/30 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sage/15 rounded-full blur-3xl" />
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {['🌸', '🧶', '💕', '🌷', '✨', '🌼'][i]}
          </motion.div>
        ))}

        {/* Yarn particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="yarn-particle"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${10 + (i % 4) * 20}%`,
              background: ['#D98B9C', '#E9B7A5', '#F6D9D5', '#B8C9B2'][i % 4],
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary-light/40 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-medium text-primary">Handmade with love</span>
            </motion.div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
              Handmade little things,{' '}
              <span className="text-primary relative">
                made with lots of love
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 0 150 8 200 4" stroke="#D98B9C" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Cute crochet creations, personalized just for you. Each piece is carefully handcrafted with patience, warmth, and a little bit of love.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-base"
              >
                Shop Handmade
              </motion.a>
              <motion.a
                href="#bouquets"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary text-base"
              >
                Create Your Bouquet
              </motion.a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['🌸', '🌷', '🌻'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-sm border-2 border-cream">
                      {emoji}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted">500+ happy customers</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
                <span className="text-sm text-muted ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Main image circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 to-accent/30 rounded-full blob-1" />
              
              {/* Product display */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 bg-gradient-to-br from-cream-warm to-primary-light/40 rounded-full blob-2 flex items-center justify-center overflow-hidden shadow-xl"
              >
                <img 
                  src="https://image.qwenlm.ai/generated-images/f21e0c7a-5af4-4f9d-a711-d3bce59edcac/_result.png" 
                  alt="Beautiful handmade crochet flowers and yarn arrangement"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
              >
                <span className="text-2xl">🧶</span>
                <p className="text-xs font-medium text-text">100% Handmade</p>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-0 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
              >
                <span className="text-2xl">💝</span>
                <p className="text-xs font-medium text-text">Customizable</p>
              </motion.div>

              <motion.div
                animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
                className="absolute top-1/2 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
              >
                <span className="text-2xl">✨</span>
                <p className="text-xs font-medium text-text">Premium Quality</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 30 1440 30V60H0V30Z" fill="#FCEEEF" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
