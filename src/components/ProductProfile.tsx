import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Sparkles, AlertCircle, ShieldCheck, Heart, Info } from 'lucide-react';
import { SnackProduct, SnackWeight, CartItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
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
      switch (product.id) {
        case 'prod-1':
          return {
            category: 'पारंपारिक चवदार',
            tagline: 'चहाच्या वेळेचा तोंडात विरघळणारा खमंग आणि कुरकुरीत सोबती.',
            allergen: 'गव्हाचे पीठ आणि दुग्धजन्य पदार्थ आहेत.',
            origin: 'घरगुती किचन, पुणे',
            shelfLife: '३० दिवस',
            prepMethod: 'हाताने लाटलेले आणि तळलेले',
            purityBadges: ['शुद्ध गाईचे तूप', 'बिना ब्लीच मैदा']
          };
        case 'prod-2':
          return {
            category: 'तिखट आणि चटपटीत',
            tagline: 'पारंपारिक कुरकुरीत चव आणि चटपटीत घरगुती मसाल्यांचे कोटिंग.',
            allergen: 'गव्हाचे पीठ आणि दुग्धजन्य पदार्थ आहेत.',
            origin: 'घरगुती किचन, पुणे',
            shelfLife: '३० दिवस',
            prepMethod: 'मसाल्यात घोळवलेले',
            purityBadges: ['घरगुती कुटलेले मसाले', 'शून्य प्रिझर्व्हेटिव्ह']
          };
        case 'prod-3':
          return {
            category: 'खमंग चिवडा',
            tagline: 'उत्कृष्ट दर्जाचे काजू, खोबरे आणि शेंगदाणे घातलेला खमंग भाजका चिवडा.',
            allergen: 'शेंगदाणे आणि काजू समाविष्ट आहेत.',
            origin: 'घरगुती किचन, पुणे',
            shelfLife: '४५ दिवस',
            prepMethod: 'खमंग कढईत भाजलेले',
            purityBadges: ['प्रीमियम ड्रायफ्रूट्स', 'कमी आणि उत्तम तेल']
          };
        default:
          return {
            category: 'विशेष चवदार',
            tagline: 'घरगुती पद्धतीने शुद्ध साहित्यात तयार केलेले.',
            allergen: 'गव्हाचे पीठ समाविष्ट आहे.',
            origin: 'घरगुती किचन, पुणे',
            shelfLife: '३० दिवस',
            prepMethod: 'घरगुती कृती',
            purityBadges: ['शुद्ध आणि प्रामाणिक', 'शून्य रसायने']
          };
      }
    } else if (lang === 'hi') {
      switch (product.id) {
        case 'prod-1':
          return {
            category: 'क्लासिक नमकीन',
            tagline: 'चाय के साथ मुंह में पिघल जाने वाला सही सुनहरा साथी।',
            allergen: 'इसमें ग्लूटेन और डेयरी शामिल है।',
            origin: 'घरेलू रसोई, पुणे',
            shelfLife: '30 दिन',
            prepMethod: 'हाथ से बेला और तला हुआ',
            purityBadges: ['शुद्ध गाय का घी', 'बिना मैदा-ब्लीच']
          };
        case 'prod-2':
          return {
            category: 'तीखा चटपटा',
            tagline: 'एक रोमांचक चटपटे मसाले के साथ पुराने जमाने का कुरकुरा स्वाद।',
            allergen: 'इसमें ग्लूटेन और डेयरी शामिल है।',
            origin: 'घरेलू रसोई, पुणे',
            shelfLife: '30 दिन',
            prepMethod: 'मसाला मिक्स',
            purityBadges: ['हाथ से पिसे मसाले', 'बिना प्रिझर्व्हेटिव्ह']
          };
        case 'prod-3':
          return {
            category: 'भुना हुआ पोहा',
            tagline: 'हाथ से चुने गए प्रीमियम सूखे मेवों से भरपूर कुरकुरे सुनहरे पोहे।',
            allergen: 'इसमें मूंगफली और नट्स शामिल हैं।',
            origin: 'घरेलू रसोई, पुणे',
            shelfLife: '45 दिन',
            prepMethod: 'हल्का भुना हुआ',
            purityBadges: ['प्रोटीन युक्त काजू', 'कोल्ड-प्रेस तेल']
          };
        default:
          return {
            category: 'विशेष स्वाद',
            tagline: 'प्रामाणिक स्वाद और शुद्ध सामग्रियों का मेल।',
            allergen: 'गेहूं की सामग्री शामिल है।',
            origin: 'घरेलू रसोई, पुणे',
            shelfLife: '30 दिन',
            prepMethod: 'घरेलू तैयारी',
            purityBadges: ['शुद्ध और प्रामाणिक', 'शून्य रसायन']
          };
      }
    } else {
      // Default to English
      switch (product.id) {
        case 'prod-1':
          return {
            category: 'Classic Savory',
            tagline: 'The perfect golden melt-in-mouth tea companion.',
            allergen: 'Contains gluten and dairy.',
            origin: 'Home-kitchen, Pune',
            shelfLife: '30 Days',
            prepMethod: 'Hand-rolled & Fried',
            purityBadges: ['Pure Ghee', 'No Maida-Bleach']
          };
        case 'prod-2':
          return {
            category: 'Bold & Tangy',
            tagline: 'Old-school crunch combined with an exciting chatpata spice dust.',
            allergen: 'Contains gluten and dairy.',
            origin: 'Home-kitchen, Pune',
            shelfLife: '30 Days',
            prepMethod: 'Masala-tumbled',
            purityBadges: ['Handground Spices', 'Zero Preservatives']
          };
        case 'prod-3':
          return {
            category: 'Golden Poha',
            tagline: 'Crunchy golden flakes enriched with hand-selected premium dry fruits.',
            allergen: 'Contains peanuts/nuts.',
            origin: 'Home-kitchen, Pune',
            shelfLife: '45 Days',
            prepMethod: 'Gentle pan-roast',
            purityBadges: ['High-Protein Nuts', 'Cold-Pressed Oils']
          };
        default:
          return {
            category: 'Special Taste',
            tagline: 'Authentic taste kneaded with pristine ingredients.',
            allergen: 'Standard wheat ingredients.',
            origin: 'Home-kitchen, Pune',
            shelfLife: '30 Days',
            prepMethod: 'Homemade Craft',
            purityBadges: ['Pure & Honest', 'Zero Chemicals']
          };
      }
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
    ...(product.imageFileNames || []).map((fn, idx) => ({
      type: 'image' as const,
      url: `/${fn}`,
      fallbackUrl: product.fallbackUnsplashUrls?.[idx] || product.fallbackUnsplashUrl
    })),
    ...(product.fallbackVideoUrl || product.videoFileName ? [{
      type: 'video' as const,
      url: product.videoFileName ? `/${product.videoFileName}` : undefined,
      fallbackUrl: product.fallbackVideoUrl
    }] : [])
  ];

  const activeMedia = mediaItems[activeThumbIndex] || mediaItems[0] || {
    type: 'image' as const,
    url: `/${product.imageFileName}`,
    fallbackUrl: product.fallbackUnsplashUrl
  };

  const isInCart = cartItems.some(
    (item) => item.product.id === product.id && item.selectedWeight === selectedWeight
  );

  // Dynamic ingredients translations for a high-end local touch
  const getLocalizedIngredients = () => {
    if (lang === 'mr') {
      switch (product.id) {
        case 'prod-1': return ['शुद्ध गव्हाचे पीठ', 'शुद्ध गाईचे तूप (साजुक तूप)', 'हलके चवीचे मीठ', 'डबल-फिल्टर केलेले तेल'];
        case 'prod-2': return ['उत्कृष्ट गव्हाचे पीठ', 'शुद्ध तूप', 'आमचूर पावडर', 'लाल मिरची पावडर', 'सेंद्रिय साखर', 'चाट मसाला'];
        case 'prod-3': return ['पातळ भाजके पोहे', 'भाजलेले काजू', 'शेंगदाणे', 'सुके खोबरे काप', 'कढीपत्ता', 'हिरवी मिरची', 'हळद', 'विशेष पुणेरी मसाले'];
        default: return product.ingredients;
      }
    } else if (lang === 'hi') {
      switch (product.id) {
        case 'prod-1': return ['शुद्ध गेहूं का आटा', 'शुद्ध गाय का घी (साजुक तूप)', 'हल्का नमक', 'डबल-फिल्टर्ड तेल'];
        case 'prod-2': return ['प्रीमियम गेहूं का आटा', 'शुद्ध घी', 'अमचूर पाउडर', 'लाल मिर्च पाउडर', 'जैविक चीनी', 'चाट मसाला'];
        case 'prod-3': return ['पतले भुने हुए पोहे', 'रोस्टेड काजू', 'मूंगफली', 'सूखा नारियल', 'हरी मिर्च', 'कढ़ी पत्ता', 'हल्दी', 'विशेष पुणेरी मसाला'];
        default: return product.ingredients;
      }
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
                  key={activeMedia.url || activeMedia.fallbackUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={activeMedia.url || ''}
                    fallbackSrc={activeMedia.fallbackUrl || ''}
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
                    <source src={activeMedia.fallbackUrl} type="video/mp4" />
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
                      fallbackSrc={item.fallbackUrl || ''}
                      alt={`${prodTrans.name} Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-black/80 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-40">
                        <ImageWithFallback
                          src={`/${product.imageFileName}`}
                          fallbackSrc={product.fallbackUnsplashUrl}
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
