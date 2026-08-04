import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Sparkles, AlertCircle, ShieldCheck, Heart, Info } from 'lucide-react';
import { SnackProduct, SnackWeight, CartItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { FssaiLogo } from './FssaiLogo';
import { Language, TRANSLATIONS, PRODUCT_TRANSLATIONS } from '../translations';

interface ProductProfileProps {
  product: SnackProduct;
  cartItems: CartItem[];
  onAddToCart: (product: SnackProduct, weight: SnackWeight, quantity: number) => void;
  onBack: () => void;
  lang: Language;
}

export function ProductProfile({ product, cartItems, onAddToCart, onBack, lang }: ProductProfileProps) {
  const [selectedWeight, setSelectedWeight] = useState<SnackWeight>(product.defaultWeight);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);

  const activePricing = product.pricing.find((p) => p.weight === selectedWeight) || product.pricing[0];
  const activePrice = activePricing.price;

  // Reset states when product changes
  useEffect(() => {
    setSelectedWeight(product.defaultWeight);
    setActiveThumbIndex(0);
  }, [product]);

  const handleAdd = () => {
    onAddToCart(product, selectedWeight, 1);
  };

  const t = TRANSLATIONS[lang];

  // Curate details matching the index.html template fields dynamically translated
  const getProductMeta = () => {
    if (lang === 'mr') {
      return {
        category: 'विशेष खमंग चिवडा',
        tagline: 'उत्कृष्ट काजू, खोबरे आणि शेंगदाणे घातलेला खमंग पातळ पोहा चिवडा.',
        allergen: 'शेंगदाणे आणि काजू समाविष्ट आहेत.',
        origin: 'घरगुती किचन, धायरी, पुणे',
        shelfLife: '४५ दिवस',
        prepMethod: 'रिफाइंड राइस ब्रॅन ऑइल मध्ये खमंग भाजलेले',
        purityBadges: ['प्रीमियम काजू व शेंगदाणे', '१००% रिफाइंड राइस ब्रॅन ऑइल', 'शून्य वनस्पती व प्रिझर्व्हेटिव्ह']
      };
    } else if (lang === 'hi') {
      return {
        category: 'विशेष पोहा चिवड़ा',
        tagline: 'काजू, सूखे नारियल और मूंगफली से भरपूर कुरकुरा पातल पोहा चिवड़ा।',
        allergen: 'इसमें मूंगफली और नट्स शामिल हैं।',
        origin: 'घरेलू रसोई, धायरी, पुणे',
        shelfLife: '45 दिन',
        prepMethod: '100% रिफाइंड राइस ब्रान ऑयल में भुना हुआ',
        purityBadges: ['प्रीमियम सूखे मेवे', '100% रिफाइंड राइस ब्रान ऑयल', 'शून्य रसायन']
      };
    } else {
      return {
        category: 'Signature Chivda',
        tagline: 'Crunchy golden flaked rice enriched with whole cashews, roasted peanuts & coconut slices.',
        allergen: 'Contains peanuts and cashew nuts.',
        origin: 'Home-Kitchen, Dhayari, Pune',
        shelfLife: '45 Days',
        prepMethod: 'Gentle pan-roasted in 100% Refined Rice Bran Oil',
        purityBadges: ['Premium Whole Cashews', '100% Refined Rice Bran Oil', 'Zero Preservatives']
      };
    }
  };

  const meta = getProductMeta();
  const prodTrans = PRODUCT_TRANSLATIONS[lang]?.[product.id] || {
    name: product.name,
    subtitle: '',
    description: product.longDescription
  };

  // Dynamically assemble media items from product properties
  const mediaItems = [
    ...(product.imageFileNames || []).map((fn) => ({
      type: 'image' as const,
      url: `/${fn}`
    })),
    ...(product.videoFileName ? [{
      type: 'video' as const,
      url: `/${product.videoFileName}`
    }] : [])
  ];

  const activeMedia = mediaItems[activeThumbIndex] || mediaItems[0] || {
    type: 'image' as const,
    url: `/${product.imageFileName}`
  };

  const isInCart = cartItems.some(
    (item) => item.product.id === product.id && item.selectedWeight === selectedWeight
  );

  // Dynamic ingredients translations for a high-end local touch
  const getLocalizedIngredients = () => {
    if (lang === 'mr') {
      return ['कागदी पातळ भाजके पोहे', '१००% रिफाइंड राइस ब्रॅन ऑइल', 'भाजलेले अख्खे काजू', 'निवडक शेंगदाणे', 'सुके खोबरे काप', 'कढीपत्ता व हिरवी मिरची', 'हळद व हलके मीठ', 'विशेष पुणेरी मसाले'];
    } else if (lang === 'hi') {
      return ['पतले भुने हुए पोहे', '100% रिफाइंड राइस ब्रान ऑयल', 'रोस्टेड साबुत काजू', 'मूंगफली', 'सूखा नारियल', 'हरी मिर्च व कढ़ी पत्ता', 'हल्दी व हल्का नमक', 'विशेष पुणेरी मसाला'];
    }
    return product.ingredients;
  };

  const localizedIngredients = getLocalizedIngredients();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Visual Media Gallery */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* Main Showcase Stage */}
          <div className="relative w-full aspect-square max-h-[500px] bg-[var(--surface)] border border-[var(--border)] rounded-[24px] overflow-hidden flex justify-center items-center shadow-lg group">
            {/* Elegant Back Navigation Button */}
            <button 
              onClick={onBack}
              className="absolute top-4 left-4 z-10 bg-black/50 border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
              title={t.profileBack}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Render dynamic image or video source */}
            <AnimatePresence mode="wait">
              {activeMedia.type === 'image' ? (
                <motion.div
                  key={activeMedia.url}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={activeMedia.url || ''}
                    alt={prodTrans.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="video-player"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-black/95 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const videoEl = document.getElementById('ambient-product-video') as HTMLVideoElement;
                    if (videoEl) {
                      if (videoEl.paused) {
                        videoEl.play().catch(() => {});
                      } else {
                        videoEl.pause();
                      }
                    }
                  }}
                  title="Click to play/pause video"
                >
                  <video 
                    id="ambient-product-video"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={activeMedia.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Gallery Thumbnail Sliders (Responsive Scrollable on Mobile) */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x touch-pan-x max-w-full">
            {mediaItems.map((item, idx) => {
              const isActive = activeThumbIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveThumbIndex(idx)}
                  className={`relative w-20 h-20 rounded-[12px] border-2 overflow-hidden transition-all duration-300 cursor-pointer shrink-0 snap-start ${
                    isActive ? 'border-[var(--accent)] opacity-100 scale-95' : 'border-[var(--border)] opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.type === 'image' ? (
                    <ImageWithFallback
                      src={item.url || ''}
                      alt={`${prodTrans.name} Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-black/80 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-40">
                        <ImageWithFallback
                          src={`/${product.imageFileName}`}
                          alt={`${prodTrans.name} Video Poster`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-10">
                        <div className="bg-black/55 p-1.5 rounded-full border border-white/20">
                          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Breakdown Section */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Headers */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[2px] text-[var(--accent)] block mb-2">
              {meta.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text)] font-bold tracking-wide">
              {prodTrans.name}
            </h2>
            <p className="text-sm font-semibold text-[var(--accent)] mt-1.5 leading-relaxed">
              {meta.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {lang === 'en' ? product.longDescription : prodTrans.description}
          </p>

          {/* Certified Purity Badges */}
          <div className="flex flex-wrap gap-3">
            {meta.purityBadges.map((badge, idx) => (
              <span key={idx} className="purity-pill flex items-center gap-1.5 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text)] font-medium rounded-full select-none">
                <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* FSSAI Registration Badge Banner */}
          <FssaiLogo variant="full" />

          {/* Size Select Weights */}
          <div className="pt-4 border-t border-[var(--border)]">
            <h4 className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--gold)] mb-3">
              {t.selectWeightLabel}
            </h4>
            <div className="flex flex-wrap gap-3">
              {product.pricing.map((priceOption) => {
                const isActive = selectedWeight === priceOption.weight;
                return (
                  <button
                    key={priceOption.weight}
                    onClick={() => setSelectedWeight(priceOption.weight)}
                    className={`weight-pill text-xs font-semibold tracking-wide border rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'active bg-[var(--text)] text-[var(--bg)] border-[var(--text)] font-bold' 
                        : 'bg-white/5 border-[var(--border)] text-[var(--text-muted)] hover:bg-white/10 hover:border-[var(--border-hover)]'
                    }`}
                  >
                    {priceOption.weight}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specs Table */}
          <div className="specs-table border-t border-[var(--border)] pt-5 flex flex-col gap-3">
            <div className="spec-row flex justify-between items-center py-1.5 border-b border-white/5 text-xs">
              <span className="spec-label text-[var(--text-muted)] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[var(--gold)]" /> {t.profileIngredients}
              </span>
              <span className="spec-value text-[var(--text)] font-medium max-w-[65%] text-right">
                {localizedIngredients.join(', ')}
              </span>
            </div>
            
            <div className="spec-row flex justify-between items-center py-1.5 border-b border-white/5 text-xs">
              <span className="spec-label text-[var(--text-muted)] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[var(--accent)]" /> {lang === 'mr' ? 'ऍलर्जी घटक' : lang === 'hi' ? 'एलर्जी चेतावनी' : 'Allergies'}
              </span>
              <span className="spec-value text-[var(--text)] font-medium max-w-[65%] text-right">
                {meta.allergen}
              </span>
            </div>

            <div className="spec-row flex justify-between items-center py-1.5 border-b border-white/5 text-xs">
              <span className="spec-label text-[var(--text-muted)] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" /> {t.profileKitchenOrigin}
              </span>
              <span className="spec-value text-[var(--text)] font-medium max-w-[65%] text-right">
                {meta.origin}
              </span>
            </div>

            <div className="spec-row flex justify-between items-center py-1.5 border-b border-white/5 text-xs">
              <span className="spec-label text-[var(--text-muted)] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--green)]" /> {t.profileShelfLife}
              </span>
              <span className="spec-value text-[var(--text)] font-medium max-w-[65%] text-right">
                {meta.shelfLife}
              </span>
            </div>

            <div className="spec-row flex justify-between items-center py-1.5 text-xs">
              <span className="spec-label text-[var(--text-muted)] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[var(--accent)]" /> {t.profilePrepMethod}
              </span>
              <span className="spec-value text-[var(--text)] font-medium max-w-[65%] text-right">
                {meta.prepMethod}
              </span>
            </div>
          </div>

          {/* Pricing and Action Button Footer */}
          <div className="flex justify-between items-center pt-6 border-t border-[var(--border)] mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                {lang === 'mr' ? 'चालू किंमत' : lang === 'hi' ? 'सक्रिय मूल्य' : 'Active Price'}
              </span>
              <span className="price-tag text-3xl font-bold text-[var(--gold)] font-sans mt-0.5">
                ₹{activePrice}
              </span>
              <span className="text-[10px] text-[var(--text-muted)] font-medium mt-0.5">
                {t.gstIncluded}
              </span>
            </div>

            <button
              onClick={handleAdd}
              className={`btn-modern flex items-center gap-2 font-bold px-8 py-4.5 rounded-full select-none cursor-pointer transition-all ${
                isInCart 
                  ? 'bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-700' 
                  : 'bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white hover:scale-105'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>{t.btnInCart}</span>
                </>
              ) : (
                <span>{t.profileAddToBag}</span>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
