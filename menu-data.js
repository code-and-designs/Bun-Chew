/**
 * Bun Chew Café - Structured Menu Data
 * Preserves exact product names, categories, and listed prices in Indian Rupees (₹).
 */
const MENU_DATA = [
  // --- Buns (15 items) ---
  {
    id: 'bun-signature-korean',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Signature Korean Bun',
    price: 150,
    image: 'assets/menu-garlic-bun.png',
    description: 'A Cream Cheese Garlic Bun is a soft, fluffy bread bun filled with a rich cream cheese mixture and coated with a savory garlic butter sauce. Inspired by the popular Korean-style cream cheese garlic bread, it combines sweet, creamy, and garlicky flavors in one bun.',
    isFeatured: true
  },
  {
    id: 'bun-bunchew-creamy',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Bunchew Creamy Bun',
    price: 140,
    image: 'assets/menu-crispy-bun.png',
    description: 'A soft and fluffy milk bun filled with rich creamy butter and delicious cheese. Lightly sweet, buttery, and cheesy, with a melt-in-your-mouth texture that makes every bite irresistibly satisfying.',
    isFeatured: true
  },
  {
    id: 'bun-butter',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Butter Bun',
    price: 60,
    image: null
  },
  {
    id: 'bun-strawberry',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Strawberry Bun',
    price: 110,
    image: null
  },
  {
    id: 'bun-blueberry',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Blueberry Bun',
    price: 110,
    image: null
  },
  {
    id: 'bun-mango',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Mango Bun',
    price: 110,
    image: null
  },
  {
    id: 'bun-mixed-fruits',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Mixed Fruits Bun',
    price: 110,
    image: null
  },
  {
    id: 'bun-chocolate',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Chocolate Bun',
    price: 130,
    image: null
  },
  {
    id: 'bun-oreo',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Oreo Bun',
    price: 140,
    image: null
  },
  {
    id: 'bun-nuttella',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Nuttella Bun',
    price: 150,
    image: null
  },
  {
    id: 'bun-hazelnut',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Hazelnut Bun',
    price: 150,
    image: null
  },
  {
    id: 'bun-almond',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Almond Bun',
    price: 150,
    image: null
  },
  {
    id: 'bun-cashewnut',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Cashewnut Bun',
    price: 150,
    image: null
  },
  {
    id: 'bun-pistachio',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Pistachio Bun',
    price: 160,
    image: 'assets/menu-pistachio-bun.png',
    isFeatured: true
  },
  {
    id: 'bun-butter-jam',
    category: 'buns',
    categoryName: 'Buns',
    name: 'Butter Jam Bun',
    price: 90,
    image: null
  },

  // --- Hot Beverages (3 items) ---
  {
    id: 'hot-dubai-karak-tea',
    category: 'hot-beverages',
    categoryName: 'Hot Beverages',
    name: 'Dubai Karak Tea',
    price: 25,
    image: null
  },
  {
    id: 'hot-creamy-coffee',
    category: 'hot-beverages',
    categoryName: 'Hot Beverages',
    name: 'Creamy Coffee',
    price: 79,
    image: 'assets/Bun Chew Cream Coffee Cup.png',
    isFeatured: true
  },
  {
    id: 'hot-hot-chocolate',
    category: 'hot-beverages',
    categoryName: 'Hot Beverages',
    name: 'Hot Chocolate',
    price: 140,
    image: null
  },

  // --- Cold Beverages (4 items) ---
  {
    id: 'cold-coffee',
    category: 'cold-beverages',
    categoryName: 'Cold Beverages',
    name: 'Cold Coffee',
    price: 140,
    image: 'assets/menu-iced-coffee.png',
    isFeatured: true
  },
  {
    id: 'cold-ice-tea',
    category: 'cold-beverages',
    categoryName: 'Cold Beverages',
    name: 'Ice Tea',
    price: 110,
    image: null
  },
  {
    id: 'cold-milk-muhabath',
    category: 'cold-beverages',
    categoryName: 'Cold Beverages',
    name: 'Milk Muhabath',
    price: 80,
    image: null
  },
  {
    id: 'cold-milky-avil',
    category: 'cold-beverages',
    categoryName: 'Cold Beverages',
    name: 'Milky Avil',
    price: 80,
    image: null
  },

  // --- Bubble Smoothie (5 items) ---
  {
    id: 'smoothie-mango',
    category: 'bubble-smoothie',
    categoryName: 'Bubble Smoothie',
    name: 'Mango',
    price: 140,
    image: null
  },
  {
    id: 'smoothie-watermelon',
    category: 'bubble-smoothie',
    categoryName: 'Bubble Smoothie',
    name: 'Watermelon',
    price: 140,
    image: null
  },
  {
    id: 'smoothie-strawberry',
    category: 'bubble-smoothie',
    categoryName: 'Bubble Smoothie',
    name: 'Strawberry',
    price: 140,
    image: null
  },
  {
    id: 'smoothie-blueberry',
    category: 'bubble-smoothie',
    categoryName: 'Bubble Smoothie',
    name: 'Blueberry',
    price: 140,
    image: null
  },
  {
    id: 'smoothie-pomegranate',
    category: 'bubble-smoothie',
    categoryName: 'Bubble Smoothie',
    name: 'Pomegranate',
    price: 160,
    image: null
  },

  // --- Shakes (3 items) ---
  {
    id: 'shake-nuttella-grand',
    category: 'shakes',
    categoryName: 'Shakes',
    name: 'Nuttella Grand',
    price: 140,
    image: null
  },
  {
    id: 'shake-milo-melt',
    category: 'shakes',
    categoryName: 'Shakes',
    name: 'Milo Melt',
    price: 160,
    image: null
  },
  {
    id: 'shake-hazelnut-mac',
    category: 'shakes',
    categoryName: 'Shakes',
    name: 'Hazelnut Mac',
    price: 140,
    image: null
  },

  // --- Burgers (3 items) ---
  {
    id: 'burger-chicken-bbq-hacker',
    category: 'burgers',
    categoryName: 'Burgers',
    name: 'Chicken BBQ Hacker',
    price: 150,
    image: null
  },
  {
    id: 'burger-chicken-brown-crack',
    category: 'burgers',
    categoryName: 'Burgers',
    name: 'Chicken Brown Crack',
    price: 170,
    image: null
  },
  {
    id: 'burger-mantra-veg',
    category: 'burgers',
    categoryName: 'Burgers',
    name: 'Mantra Veg Burger',
    price: 120,
    image: null
  },

  // --- Bun Chew Signature (3 items) ---
  {
    id: 'signature-taribo-chicken-loaded',
    category: 'bun-chew-signature',
    categoryName: 'Bun Chew Signature',
    name: 'Taribo Chicken Loaded',
    price: 160,
    image: null
  },
  {
    id: 'signature-morito-jalla-dip',
    category: 'bun-chew-signature',
    categoryName: 'Bun Chew Signature',
    name: 'Morito Jalla Dip',
    price: 150,
    image: null
  },
  {
    id: 'signature-popie-pop-chicken-filly',
    category: 'bun-chew-signature',
    categoryName: 'Bun Chew Signature',
    name: 'Popie Pop Chicken Filly',
    price: 160,
    image: null
  },

  // --- French Fries (3 items) ---
  {
    id: 'fries-classic',
    category: 'french-fries',
    categoryName: 'French Fries',
    name: 'Classic Fries',
    price: 110,
    image: null
  },
  {
    id: 'fries-v-crispers',
    category: 'french-fries',
    categoryName: 'French Fries',
    name: 'V Crispers',
    price: 130,
    image: null
  },
  {
    id: 'fries-bun-chew-smile',
    category: 'french-fries',
    categoryName: 'French Fries',
    name: 'Bun Chew Smile',
    price: 130,
    image: null
  }
];

const MENU_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'buns', name: 'Buns' },
  { id: 'hot-beverages', name: 'Hot Beverages' },
  { id: 'cold-beverages', name: 'Cold Beverages' },
  { id: 'bubble-smoothie', name: 'Bubble Smoothie' },
  { id: 'shakes', name: 'Shakes' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'bun-chew-signature', name: 'Bun Chew Signature' },
  { id: 'french-fries', name: 'French Fries' }
];
