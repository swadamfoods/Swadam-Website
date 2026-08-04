export type SnackWeight = '1 Pack (200g)' | '2 Packs (400g)' | '3 Packs (600g)' | '1kg Box (5 x 200g Packs)';

export interface ProductPricing {
  weight: SnackWeight;
  price: number;
}

export interface SnackProduct {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  pricing: ProductPricing[];
  defaultWeight: SnackWeight;
  imageFileName: string; // Primary image filename (e.g. 'patal-poha-chivda.jpg')
  imageFileNames: string[]; // Trio of image filenames
  fallbackUnsplashUrl?: string; // Optional primary fallback
  fallbackUnsplashUrls?: string[]; // Optional fallback Unsplash URLs
  videoFileName?: string; // Optional custom local video filename
  fallbackVideoUrl?: string; // Optional video stream URL
  ingredients: string[];
  keyHighlights: string[];
}

export interface CartItem {
  id: string; // Combination of product.id + weight
  product: SnackProduct;
  selectedWeight: SnackWeight;
  selectedPrice: number;
  quantity: number;
}

export interface BulkInquiry {
  name: string;
  phone: string;
  productName: string;
  quantityNeeded: string; // e.g. '10 kg', '50 packets'
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}
