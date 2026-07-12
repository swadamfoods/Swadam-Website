import { SnackProduct, Testimonial } from './types';

export const WHATSAPP_NUMBER = '+91 88888 51522';
export const WHATSAPP_URL_NUMBER = '918888851522'; // international format for wa.me links
export const BUSINESS_EMAIL = 'swadamfoodsindia@gmail.com';
export const BUSINESS_OWNER = 'Vidya Dandekar';
export const BUSINESS_LOCATION = 'Dhayari, Pune, Maharashtra';

export const SNACK_PRODUCTS: SnackProduct[] = [
  {
    id: 'prod-1',
    name: 'Salted Shankarpali',
    description: 'Delicate, multilayered, and exquisitely flaky dough crispies prepared with pure ghee and sea salt.',
    longDescription: 'Our Salted Shankarpali is made using a generations-old rolling and folding technique. By hand-kneading premium flour with pure ghee, we achieve distinct crisp layers that shatter beautifully with every single bite.',
    pricing: [
      { weight: 'Pocket pack(100gm)', price: 65 },
      { weight: 'Regular pack(200gm)', price: 120 },
      { weight: 'Large Pack(400gm)', price: 230 }
    ],
    defaultWeight: 'Pocket pack(100gm)',
    imageFileName: 'salted.jpg',
    imageFileNames: ['salted.jpg', 'salted-2.jpg', 'salted-3.jpg'],
    fallbackUnsplashUrl: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80',
    fallbackUnsplashUrls: [
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    ],
    videoFileName: 'salted-video.mp4',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-frying-crispy-snacks-in-a-wok-34444-large.mp4',
    ingredients: [
      'Premium Flour',
      'Pure Ghee',
      'Organic Rock Salt',
      'Cold-pressed Oil'
    ],
    keyHighlights: [
      'Pure Ghee',
      'No Maida-Bleach'
    ]
  },
  {
    id: 'prod-2',
    name: 'Tangy Shankarpali',
    description: 'Our traditional crispies dusted with a signature hot-and-sour spice blend for an authentic flavor burst.',
    longDescription: 'Dusted immediately after escaping the oil with our proprietary in-house masala blend, this delivers a wave of sweet and sour flavor followed by a mild spicy kick. Zero artificial color enhancers.',
    pricing: [
      { weight: 'Pocket pack(100gm)', price: 70 },
      { weight: 'Regular pack(200gm)', price: 130 },
      { weight: 'Large Pack(400gm)', price: 250 }
    ],
    defaultWeight: 'Pocket pack(100gm)',
    imageFileName: 'tangy.jpg',
    imageFileNames: ['tangy.jpg', 'tangy-2.jpg', 'tangy-3.jpg'],
    fallbackUnsplashUrl: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80',
    fallbackUnsplashUrls: [
      'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
    ],
    videoFileName: 'tangy-video.mp4',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-spices-on-food-40241-large.mp4',
    ingredients: [
      'Premium Flour',
      'Ghee',
      'Amchur',
      'Black Salt',
      'Cayenne',
      'Cold-Pressed Oil'
    ],
    keyHighlights: [
      'Handground Spices',
      'Zero Preservatives'
    ]
  },
  {
    id: 'prod-3',
    name: 'Special Chivda',
    description: 'Light crispy flaked rice mixed with whole cashew nuts, roasted peanuts, green chillies, and curry leaves.',
    longDescription: 'Prepared using double-filtered oil, our Special Chivda balances roasted poha with standard curry leaf seasoning. Roasted peanuts and premium cashew halves lend a sweet nuttiness to every spoonful.',
    pricing: [
      { weight: 'Pocket pack(100gm)', price: 80 },
      { weight: 'Regular pack(200gm)', price: 150 },
      { weight: 'Large Pack(400gm)', price: 280 }
    ],
    defaultWeight: 'Pocket pack(100gm)',
    imageFileName: 'chivda.jpg',
    imageFileNames: ['chivda.jpg', 'chivda-2.jpg', 'chivda-3.jpg'],
    fallbackUnsplashUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    fallbackUnsplashUrls: [
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80'
    ],
    videoFileName: 'chivda-video.mp4',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-with-oil-in-a-frying-pan-40242-large.mp4',
    ingredients: [
      'Flat-roasted Rice',
      'Peanuts',
      'Cashews',
      'Green Chillies',
      'Curry Leaves',
      'Mustard Seeds',
      'Rock Salt'
    ],
    keyHighlights: [
      'High-Protein Nuts',
      'Cold-Pressed Oils'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali Deshpande',
    location: 'Kothrud, Pune',
    rating: 5,
    comment: 'The Poha Chivda from Swadam Foods tastes exactly like how my grandmother used to make it. It is very light, uses very little oil, and has the perfect balance of green chilies and peanuts. Highly recommended!',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Rohan Dandavate',
    location: 'Baner, Pune',
    rating: 5,
    comment: 'The Tangy Shankarpali is an absolute masterpiece! My children love the spicy and sour coating. It has become our daily evening companion with daily tea. Order process via WhatsApp was incredibly fast and seamless.',
    date: 'July 2026'
  },
  {
    id: 't3',
    name: 'Meera Kulkarni',
    location: 'Dhayari, Pune',
    rating: 5,
    comment: 'Since Vidya tai lives right here in Dhayari, I ordered Salty Shankarpali for a family function. They were so fresh and flaky. You can smell the purity of Sajuk Tup (ghee) the moment you open the packet. Outstanding work!',
    date: 'May 2026'
  }
];

export const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'We use WhatsApp for easy, direct ordering. Simply browse our snacks on this website, select the desired weights, add them to your order basket, and click "Order via WhatsApp". This will compile a pre-formatted message listing your items, prices, and totals, which you can send to Vidya Dandekar at +91 88888 51522. We will then coordinate payment (UPI/GPay/PhonePe) and delivery details with you.'
  },
  {
    q: 'How fresh are the snacks?',
    a: 'Every single packet of chivda and shankarpali is made fresh in small, hygienic batches by Vidya Dandekar herself at her home in Dhayari, Pune. We do not stock snacks for weeks. When you place an order, it is prepared fresh to ensure the longest shelf life and absolute crunch!'
  },
  {
    q: 'What are the delivery and shipping charges?',
    a: 'For residents in Dhayari and nearby areas in Pune, self-pickup is available for free, or we can arrange local Dunzo/Porter delivery at actual costs. For orders across Pune or other cities in India, we ship via trustworthy courier partners (Standard shipping rates apply based on weight).'
  },
  {
    q: 'Can I order custom weights or request bulk quantities?',
    a: 'Yes, absolutely! While our standard packaging is in 250g, 500g, and 1kg, we regularly undertake bulk orders for festivals (like Diwali Faral), family gatherings, weddings, and corporate gifting. Please use our Bulk Inquiry Form or message us directly on WhatsApp to discuss custom weights and discounted pricing.'
  },
  {
    q: 'What is the shelf life of these snacks?',
    a: 'Since we use premium double-filtered oils, pure ghee, and do not add any artificial preservatives, our Poha Chivda lasts beautifully for 4-6 weeks, and Shankarpali lasts for 3-4 weeks when stored in an airtight container in a cool, dry place.'
  }
];
