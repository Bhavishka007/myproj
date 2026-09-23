import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Blush Rose Bouquet',
    price: 45,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4f1e0096?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'A dreamy bouquet of hand-crocheted blush roses, perfect for any occasion.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Tiny Bunny Friend',
    price: 28,
    image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=400&h=400&fit=crop',
    category: 'companions',
    description: 'An adorable handmade crochet bunny, soft and cuddly.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sunflower Bunch',
    price: 38,
    image: 'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'Cheerful crocheted sunflowers that brighten any room.',
    rating: 4,
  },
  {
    id: '4',
    name: 'Lavender Dream Sachet',
    price: 22,
    image: 'https://images.unsplash.com/photo-1458652678550-5a1bf5f89afd?w=400&h=400&fit=crop',
    category: 'gifts',
    description: 'A fragrant lavender sachet wrapped in crochet lace.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Cherry Blossom Branch',
    price: 35,
    image: 'https://images.unsplash.com/photo-1522748906645-95e82fd4858a?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'Delicate crocheted cherry blossoms on a natural branch.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Heart Keychain',
    price: 15,
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
    category: 'gifts',
    description: 'A tiny crocheted heart keychain, perfect for gifting.',
    rating: 4,
  },
  {
    id: '7',
    name: 'Daisy Chain Garland',
    price: 32,
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'A whimsical garland of crocheted daisies for home decor.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Bear Cub Companion',
    price: 30,
    image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=400&h=400&fit=crop',
    category: 'companions',
    description: 'A sweet little crochet bear cub, handmade with love.',
    rating: 5,
  },
];

export const categories = [
  { name: 'Crochet Bouquets', description: 'Flowers that never fade.', emoji: '🌸' },
  { name: 'Cute Companions', description: 'Tiny handmade friends.', emoji: '🧸' },
  { name: 'Gifts', description: 'Little things for big feelings.', emoji: '🎁' },
  { name: 'Custom Creations', description: "Dream it. We'll crochet it.", emoji: '💝' },
];

export const occasions = [
  { name: 'Birthday', emoji: '🎂' },
  { name: 'Anniversary', emoji: '💕' },
  { name: 'Best Friend', emoji: '👯' },
  { name: 'Proposal', emoji: '💍' },
  { name: 'Graduation', emoji: '🎓' },
  { name: 'Thank You', emoji: '🙏' },
  { name: 'Just Because', emoji: '✨' },
  { name: 'Self Love', emoji: '🤍' },
];

export const reviews = [
  {
    id: '1',
    name: 'Priya S.',
    text: 'The bouquet was absolutely stunning! Every petal was so carefully made. My mom cried happy tears when she received it. ♡',
    product: 'Blush Rose Bouquet',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ananya R.',
    text: 'Ordered a custom bouquet for my best friend and it exceeded all expectations. The attention to detail is incredible!',
    product: 'Custom Bouquet',
    rating: 5,
  },
  {
    id: '3',
    name: 'Meera K.',
    text: 'The tiny bunny is now my daughters favorite toy. So soft and adorable. Will definitely order more!',
    product: 'Tiny Bunny Friend',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sneha D.',
    text: 'Beautiful packaging and even more beautiful product. You can feel the love in every stitch. Highly recommend!',
    product: 'Sunflower Bunch',
    rating: 5,
  },
  {
    id: '5',
    name: 'Riya M.',
    text: 'Got the heart keychain for my sister and she absolutely loved it. Such a thoughtful handmade gift!',
    product: 'Heart Keychain',
    rating: 5,
  },
];

export const bouquetFlowers = [
  { name: 'Rose', emoji: '🌹', colors: ['#D98B9C', '#E9B7A5', '#FFF4E8'] },
  { name: 'Tulip', emoji: '🌷', colors: ['#D98B9C', '#B8C9B2', '#E9B7A5'] },
  { name: 'Sunflower', emoji: '🌻', colors: ['#FFD700', '#E9B7A5', '#B8C9B2'] },
  { name: 'Daisy', emoji: '🌼', colors: ['#FFF4E8', '#FFD700', '#B8C9B2'] },
  { name: 'Lavender', emoji: '💜', colors: ['#B8A9C9', '#D98B9C', '#FFF4E8'] },
  { name: 'Cherry Blossom', emoji: '🌸', colors: ['#F6D9D5', '#D98B9C', '#FFF4E8'] },
  { name: 'Lily', emoji: '🪷', colors: ['#FFF4E8', '#E9B7A5', '#B8C9B2'] },
];

export const bouquetColors = [
  { name: 'Baby Pink', hex: '#F6D9D5' },
  { name: 'Cream', hex: '#FFF4E8' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Lavender', hex: '#B8A9C9' },
  { name: 'Sage', hex: '#B8C9B2' },
  { name: 'Butter Yellow', hex: '#FFEAA7' },
  { name: 'Peach', hex: '#E9B7A5' },
];

export const bouquetSizes = [
  { name: 'Mini', flowers: 3, price: 25 },
  { name: 'Small', flowers: 5, price: 35 },
  { name: 'Medium', flowers: 8, price: 45 },
  { name: 'Large', flowers: 12, price: 60 },
  { name: 'Custom', flowers: 0, price: 0 },
];
