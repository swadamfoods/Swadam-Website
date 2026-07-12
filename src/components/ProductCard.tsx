import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Check, ShoppingBag } from 'lucide-react';
import { SnackProduct, SnackWeight, CartItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { Language, TRANSLATIONS, PRODUCT_TRANSLATIONS } from '../translations';

interface ProductCardProps {
  product: SnackProduct;
  cartItems: CartItem[];
  onAddToCart: (product: SnackProduct, weight: SnackWeight, quantity: number) => void;
  onClickCard: () => void;
  lang: Language;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, cartItems, onAddToCart, onClickCard, lang }) => {
  const [selectedWeight, setSelectedWeight] = useState<SnackWeight>(product.defaultWeight);

  const activePricing = product.pricing.find((p) => p.weight === selectedWeight) || product.pricing[0];
  const activePrice = activePricing.price;

  const handleWeightClick = (e: React.MouseEvent, weight: SnackWeight) => {
    e.stopPropagation();
    setSelectedWeight(weight);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedWeight, 1);
  };

  // Get custom tags & styles matching index.html
  const getSpiceTag = () => {
    switch (product.id) {
      case 'prod-1':
        return { 
          text: lang === 'mr' ? 'रिफाइंड राइस ब्रॅन ऑइल' : lang === 'hi' ? 'रिफाइंड राइस ब्रान ऑयल' : 'Haldi Blend', 
          style: { background: 'rgba(212, 175, 55, 0.3)' } 
        };
      case 'prod-2':
        return { 
          text: lang === 'mr' ? 'चटपटीत' : lang === 'hi' ? 'चटपटा मसाला' : 'Zesty Saffron', 
          style: { background: 'rgba(226, 114, 91, 0.3)' } 
        };
      case 'prod-3':
        return { 
          text: lang === 'mr' ? 'प्रीमियम भाजका' : lang === 'hi' ? 'प्रीमियम भुना' : 'Cardamom & Curry', 
          style: { background: 'rgba(143, 168, 130, 0.3)' } 
        };
      default:
        return { 
          text: 'Pure', 
          style: { background: 'rgba(255, 255, 255, 0.15)' } 
        };
    }
  };

  const spiceTag = getSpiceTag();

  const t = TRANSLATIONS[lang];
  const prodTrans = PRODUCT_TRANSLATIONS[lang]?.[product.id] || {
    name: product.name,
    subtitle: '',
    description: product.description
  };

  // Check if item is in cart with currently selected weight
  const isInCartWithSelectedWeight = cartItems.some(
    (item) => item.product.id === product.id && item.selectedWeight === selectedWeight
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={onClickCard}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClickCard();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${prodTrans.name} - ${lang === 'mr' ? 'तपशील पाहण्यासाठी क्लिक करा' : lang === 'hi' ? 'विवरण देखने के लिए क्लिक करें' : 'Click to view product details'}`}
      className="glass-product-card group border border-[var(--border)] rounded-[24px] overflow-hidden flex flex-col h-full bg-[var(--surface)] backdrop-blur-xl cursor-pointer hover:-translate-y-1.5 hover:border-[var(--border-hover)] transition-all duration-350 hover:shadow-[0_20px_40px_var(--shadow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      {/* Product Image Visual area */}
      <div className="h-[260px] relative overflow-hidden">
        <span 
          className="spice-tag absolute top-4 right-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] rounded-full text-white border border-white/20 backdrop-blur-md"
          style={spiceTag.style}
        >
          {spiceTag.text}
        </span>
        <ImageWithFallback
          src={`/${product.imageFileName}`}
          fallbackSrc={product.fallbackUnsplashUrl}
          alt={prodTrans.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />
      </div>

      {/* Product content description */}
      <div className="p-7 flex flex-col flex-grow gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)]">
            {prodTrans.subtitle}
          </span>
          <h3 className="font-serif text-2xl text-[var(--text)] mt-1 tracking-wide">
            {prodTrans.name}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
            {prodTrans.description}
          </p>
        </div>

        {/* Size/Weight selector */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-muted)] block mb-2">
            {t.selectWeightLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {product.pricing.map((priceOption) => {
              const isActive = selectedWeight === priceOption.weight;
              return (
                <button
                  key={priceOption.weight}
                  onClick={(e) => handleWeightClick(e, priceOption.weight)}
                  className={`weight-pill text-[11px] font-semibold tracking-wide border rounded-full px-3.5 py-1.5 transition-all cursor-pointer ${
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

        {/* Card Footer with Price and Add Button */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--border)]">
          <span className="price-tag text-xl font-bold font-sans text-[var(--gold)]">
            ₹{activePrice}
          </span>
          <button
            onClick={handleAddClick}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isInCartWithSelectedWeight 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                : 'bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white hover:scale-110'
            }`}
            title={t.btnAddToCart}
          >
            {isInCartWithSelectedWeight ? (
              <Check className="w-5 h-5 animate-pulse" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
