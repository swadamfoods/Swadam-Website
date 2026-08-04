import { SnackProduct, Testimonial } from './types';

export const WHATSAPP_NUMBER = '+91 88888 51522';
export const WHATSAPP_URL_NUMBER = '918888851522'; // international format for wa.me links
export const BUSINESS_EMAIL = 'swadamfoodsindia@gmail.com';
export const INSTAGRAM_ID = '@swadamfoodsindia';
export const INSTAGRAM_URL = 'https://www.instagram.com/swadamfoodsindia/';
export const FACEBOOK_URL = 'https://www.facebook.com/swadamfoodsindia';
export const TWITTER_URL = 'https://x.com/swadamfoods';
export const YOUTUBE_URL = 'https://www.youtube.com/@swadamfoodsindia';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/swadamfoods';
export const BUSINESS_OWNER = 'Vidya Dandekar';
export const BUSINESS_LOCATION = 'Dhayari, Pune, Maharashtra';
export const FSSAI_NUMBER = '21526080002094';
export const GST_NUMBER = '27AOCPD1930N1Z1';

export const SNACK_PRODUCTS: SnackProduct[] = [
  {
    id: 'prod-patal-poha-chivda',
    name: 'Premium Patal Poha Chivda',
    description: 'Crispy paper-thin flaked rice (Patal Poha) roasted with premium whole cashews, roasted peanuts, green chillies, dry coconut, and aromatic curry leaves in 100% refined rice bran oil.',
    longDescription: 'Handcrafted by Vidya Dandekar in Dhayari, Pune using traditional double-filtered refining techniques. Our Premium Patal Poha Chivda features thin flaked rice roasted to delicate golden perfection, tossed with crunch-roasted peanuts, rich cashew halves, thin dried coconut slices, fresh curry leaves, and a secret home-ground Puneri spice blend. Light, digestible, non-greasy, and completely free of artificial preservatives, vanaspati, or colorings.',
    pricing: [
      { weight: '1 Pack (200g)', price: 90 },
      { weight: '2 Packs (400g)', price: 180 },
      { weight: '3 Packs (600g)', price: 270 },
      { weight: '1kg Box (5 x 200g Packs)', price: 450 }
    ],
    defaultWeight: '1 Pack (200g)',
    imageFileName: 'patal-poha-chivda.jpg',
    imageFileNames: ['patal-poha-chivda.jpg', 'patal-poha-chivda-1.jpg', 'patal-poha-chivda-2.jpg', 'patal-poha-chivda-3.jpg'],
    videoFileName: 'patal-poha-chivda-video.mp4',
    ingredients: [
      'Paper-Thin Flaked Rice (Patal Poha)',
      '100% Refined Rice Bran Oil',
      'Whole Roasted Cashew Halves',
      'Select Roasted Peanuts',
      'Thin Dry Coconut Slices',
      'Fresh Green Chillies & Curry Leaves',
      'Handground Turmeric & Rock Salt',
      'Authentic Puneri Spice Blend'
    ],
    keyHighlights: [
      '100% Refined Rice Bran Oil',
      'Zero Vanaspati & Zero Preservatives',
      'Handcrafted Fresh in Dhayari, Pune',
      'Rich in Protein Nuts & Antioxidants'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Anjali Deshpande',
    location: 'Kothrud, Pune',
    rating: 5,
    comment: 'The Premium Patal Poha Chivda from Swadam Foods tastes exactly like how my grandmother used to make it in Pune! It is ultra-light, non-greasy, and packed with cashews and peanuts. Highly recommended!',
    date: 'June 2026'
  },
  {
    id: 't2',
    name: 'Rohan Dandavate',
    location: 'Baner, Pune',
    rating: 5,
    comment: 'Vidya Dandekar’s Patal Poha Chivda is an absolute masterpiece! My entire family loves having it with our evening tea. Ordering via WhatsApp was fast and effortless.',
    date: 'July 2026'
  },
  {
    id: 't3',
    name: 'Meera Kulkarni',
    location: 'Dhayari, Pune',
    rating: 5,
    comment: 'Since Vidya tai lives right here in Dhayari, I ordered bulk Patal Poha Chivda packets for a family gathering. Everyone praised the freshness and delicate crunch. Exceptional home cooking!',
    date: 'May 2026'
  }
];

export const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'We use WhatsApp for easy, direct ordering! Select your desired pack quantity (1 Pack of 200g, 2 Packs, 3 Packs, or a 1kg Box with 5 Packs) on this website, add to your bag, and click "Order via WhatsApp". It creates a pre-formatted message listing your order, address, and total, which sends directly to Vidya Dandekar at +91 88888 51522.'
  },
  {
    q: 'How fresh is the Patal Poha Chivda?',
    a: 'Every batch of Premium Patal Poha Chivda is prepared fresh in small batches by Vidya Dandekar herself at her home kitchen in Dhayari, Pune upon receiving your order. We never sell old or stored stock!'
  },
  {
    q: 'What oil is used in cooking?',
    a: 'We strictly use 100% high-grade refined rice bran oil. It is light, heart-healthy, non-greasy, and rich in natural antioxidants (oryzanol). We never use vanaspati or artificial butter.'
  },
  {
    q: 'What are the delivery options in Pune?',
    a: 'Self-pickup is available for free at Dhayari Phata, Pune. For doorstep delivery across Pune (Kothrud, Baner, Aundh, Hadapsar, Sinhagad Road, etc.), we send orders via Dunzo/Porter or direct express courier.'
  },
  {
    q: 'Can I place bulk orders for festivals, weddings, or corporate gifts?',
    a: 'Yes! We regularly fulfill bulk orders for Diwali Faral, family functions, corporate gifting, and wedding snack hampers. Please click the "Bulk Inquiry" tab or message us directly on WhatsApp for discounted bulk pricing.'
  },
  {
    q: 'What is the shelf life of Patal Poha Chivda?',
    a: 'Stored in an airtight container in a dry place, our Premium Patal Poha Chivda stays fresh and crisp for 4 to 6 weeks without any artificial chemical preservatives.'
  }
];
