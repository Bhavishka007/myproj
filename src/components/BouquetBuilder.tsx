import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { bouquetFlowers, bouquetColors, bouquetSizes } from '../data/products';

export default function BouquetBuilder() {
  const [step, setStep] = useState(1);
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [personalization, setPersonalization] = useState('');
  const [message, setMessage] = useState('');

  const toggleFlower = (name: string) => {
    setSelectedFlowers(prev =>
      prev.includes(name) ? prev.filter(f => f !== name) : [...prev, name]
    );
  };

  const totalSteps = 4;

  return (
    <section id="bouquets" className="py-20 bg-gradient-to-b from-cream to-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-accent text-2xl text-primary">Bouquet Builder</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text mt-2 mb-3">
            Build Your Dream Crochet Bouquet
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Pick your favorite flowers and create a bouquet that's completely yours.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Builder Steps */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 card-soft">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {[...Array(totalSteps)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                    i + 1 <= step ? 'bg-primary text-white' : 'bg-primary-light/50 text-muted'
                  }`}>
                    {i + 1 < step ? <Check size={14} /> : i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`w-8 sm:w-16 h-0.5 mx-1 transition-all ${
                      i + 1 < step ? 'bg-primary' : 'bg-primary-light/50'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Choose flowers */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-heading text-xl font-semibold mb-2">Choose your flowers</h3>
                  <p className="text-sm text-muted mb-6">Select the flowers you'd like in your bouquet</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {bouquetFlowers.map(flower => (
                      <button
                        key={flower.name}
                        onClick={() => toggleFlower(flower.name)}
                        className={`p-4 rounded-2xl border-2 transition-all text-center ${
                          selectedFlowers.includes(flower.name)
                            ? 'border-primary bg-primary-light/30'
                            : 'border-primary-light/50 hover:border-primary/50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{flower.emoji}</div>
                        <p className="text-sm font-medium text-text">{flower.name}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Pick colors */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-heading text-xl font-semibold mb-2">Pick your colors</h3>
                  <p className="text-sm text-muted mb-6">Choose the color palette for your bouquet</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {bouquetColors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`p-3 rounded-2xl border-2 transition-all text-center ${
                          selectedColor === color.name
                            ? 'border-primary bg-primary-light/20'
                            : 'border-primary-light/50 hover:border-primary/50'
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                        <p className="text-xs font-medium text-text">{color.name}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Choose size */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-heading text-xl font-semibold mb-2">Choose bouquet size</h3>
                  <p className="text-sm text-muted mb-6">How big should your bouquet be?</p>
                  <div className="space-y-3">
                    {bouquetSizes.map(size => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size.name)}
                        className={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center justify-between ${
                          selectedSize === size.name
                            ? 'border-primary bg-primary-light/30'
                            : 'border-primary-light/50 hover:border-primary/50'
                        }`}
                      >
                        <div>
                          <p className="font-medium text-text">{size.name}</p>
                          <p className="text-sm text-muted">
                            {size.name === 'Custom' ? 'You decide!' : `${size.flowers} flowers`}
                          </p>
                        </div>
                        <span className="font-semibold text-primary">
                          {size.name === 'Custom' ? 'Quote' : `₹${size.price}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Personal touch */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-heading text-xl font-semibold mb-2">Add a personal touch</h3>
                  <p className="text-sm text-muted mb-6">Make it extra special with a personal message</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-text block mb-2">Your Name (for the tag)</label>
                      <input
                        type="text"
                        value={personalization}
                        onChange={e => setPersonalization(e.target.value)}
                        placeholder="e.g., From Bhavishka ♡"
                        className="w-full px-4 py-3 rounded-xl border-2 border-primary-light/50 focus:border-primary focus:outline-none transition-colors bg-cream/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text block mb-2">Special Message</label>
                      <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Write a sweet message to include..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-primary-light/50 focus:border-primary focus:outline-none transition-colors bg-cream/50 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text block mb-2">Ribbon Color</label>
                      <div className="flex gap-3">
                        {['#D98B9C', '#E9B7A5', '#B8C9B2', '#FFF4E8', '#B8A9C9'].map(color => (
                          <button
                            key={color}
                            className="w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-primary-light/30">
              <button
                onClick={() => setStep(s => Math.max(1, s - 1))}
                disabled={step === 1}
                className="flex items-center gap-1 text-sm font-medium text-muted disabled:opacity-30 hover:text-primary transition-colors"
              >
                <ChevronLeft size={16} />
                Back
              </button>
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
                  className="btn-primary text-sm flex items-center gap-1"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button className="btn-primary text-sm">
                  Create My Bouquet ♡
                </button>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 card-soft text-center"
            >
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* Bouquet preview */}
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-light/40 to-accent/20 rounded-full blob-1 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-2">
                      {selectedFlowers.length > 0
                        ? bouquetFlowers.find(f => f.name === selectedFlowers[0])?.emoji || '💐'
                        : '💐'}
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {selectedFlowers.map(f => (
                        <span key={f} className="text-xl">
                          {bouquetFlowers.find(bf => bf.name === f)?.emoji}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Color indicator */}
                {selectedColor && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-4 border-white shadow-lg"
                    style={{ backgroundColor: bouquetColors.find(c => c.name === selectedColor)?.hex }}
                  />
                )}
              </div>

              <h3 className="font-heading text-xl font-semibold text-text mb-2">Your Bouquet Preview</h3>
              <p className="text-sm text-muted mb-4">
                {selectedFlowers.length > 0
                  ? `${selectedFlowers.length} flower${selectedFlowers.length > 1 ? 's' : ''} selected`
                  : 'Start by choosing your flowers'}
              </p>

              {/* Summary */}
              <div className="bg-cream/50 rounded-2xl p-4 text-left space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Flowers:</span>
                  <span className="font-medium text-text">
                    {selectedFlowers.length > 0 ? selectedFlowers.join(', ') : '—'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Color:</span>
                  <span className="font-medium text-text">{selectedColor || '—'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Size:</span>
                  <span className="font-medium text-text">{selectedSize || '—'}</span>
                </div>
                {selectedSize && (
                  <div className="flex justify-between text-sm pt-2 border-t border-primary-light/30">
                    <span className="font-medium text-text">Estimated Price:</span>
                    <span className="font-semibold text-primary">
                      ₹{bouquetSizes.find(s => s.name === selectedSize)?.price || '—'}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
