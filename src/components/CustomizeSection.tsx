import { motion } from 'framer-motion';
import { Palette, Scissors, Heart, MessageCircle, Image, Sparkles } from 'lucide-react';

export default function CustomizeSection() {
  const features = [
    { icon: <Palette size={24} />, title: 'Choose Colors', desc: 'Pick your favorite palette' },
    { icon: <Scissors size={24} />, title: 'Product Type', desc: 'Bouquet, companion, or gift' },
    { icon: <Heart size={24} />, title: 'Personalization', desc: 'Add names & messages' },
    { icon: <Image size={24} />, title: 'Inspiration', desc: 'Upload reference images' },
    { icon: <MessageCircle size={24} />, title: 'Special Notes', desc: 'Tell us your vision' },
    { icon: <Sparkles size={24} />, title: 'Custom Size', desc: 'Any size you dream of' },
  ];

  return (
    <section id="customize" className="py-20 bg-gradient-to-b from-cream-dark/30 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-accent text-2xl text-primary">Custom Orders</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-4">
              Your idea. Your colors. Your crochet.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Want something a little more personal? Create your own handmade piece. 
              We'll bring your vision to life, one stitch at a time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-4 card-soft text-center"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-primary-light/40 rounded-xl flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <p className="text-sm font-medium text-text">{feature.title}</p>
                  <p className="text-xs text-muted mt-0.5">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#bouquets"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-block"
            >
              Start Customizing
            </motion.a>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/30 to-accent/20 rounded-3xl blob-2" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-3xl p-8 card-soft">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-5xl mb-3 inline-block"
                  >
                    🧶
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold text-text">Custom Creation</h3>
                  <p className="text-sm text-muted mt-1">Dream it. We'll crochet it.</p>
                </div>

                {/* Color palette preview */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-muted mb-2">Color Palette</p>
                  <div className="flex gap-2">
                    {['#D98B9C', '#E9B7A5', '#F6D9D5', '#FFF4E8', '#B8C9B2', '#B8A9C9'].map(color => (
                      <motion.div
                        key={color}
                        whileHover={{ scale: 1.2 }}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Flower selection preview */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-muted mb-2">Selected Flowers</p>
                  <div className="flex gap-2">
                    {['🌹', '🌷', '🌻', '🌸'].map((flower, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="w-10 h-10 bg-cream-warm rounded-xl flex items-center justify-center text-lg cursor-pointer"
                      >
                        {flower}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="bg-cream/50 rounded-xl p-3">
                  <p className="text-xs text-muted">Personal Message</p>
                  <p className="text-sm text-text font-accent mt-1">"Happy Birthday, my love ♡"</p>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-2 shadow-lg"
              >
                <span className="text-xl">✨</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-2 shadow-lg"
              >
                <span className="text-xl">💝</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
