export type SnackWeight = 'Pocket pack(100gm)' | 'Regular pack(200gm)' | 'Large Pack(400gm)';

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
  imageFileName: string; // Primary image filename (e.g. 'salted.jpg')
  imageFileNames: string[]; // Trio of image filenames (e.g. ['salted.jpg', 'salted-2.jpg', 'salted-3.jpg'])
  fallbackUnsplashUrl: string; // Primary fallback
  fallbackUnsplashUrls: string[]; // Trio of fallback Unsplash URLs
  videoFileName?: string; // Optional custom local video filename
  fallbackVideoUrl?: string; // Optional high-quality fallback video stream URL
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
