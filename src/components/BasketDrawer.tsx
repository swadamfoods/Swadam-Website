import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Check, ChevronLeft, ArrowRight } from 'lucide-react';
import { CartItem, SnackWeight } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { WHATSAPP_URL_NUMBER } from '../data';
import { Language, TRANSLATIONS, PRODUCT_TRANSLATIONS } from '../translations';

interface BasketDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateCartQty: (productId: string, weight: SnackWeight, qty: number) => void;
  onRemoveFromCart: (productId: string, weight: SnackWeight) => void;
  onClearCart: () => void;
  lang: Language;
}

export function BasketDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateCartQty,
  onRemoveFromCart,
  onClearCart,
  lang
}: BasketDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'dunzo' | 'courier'>('pickup');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Reset checkout step when drawer closes or cart is empty
  useEffect(() => {
    if (!isOpen || cartItems.length === 0) {
      setIsCheckingOut(false);
    }
  }, [isOpen, cartItems.length]);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.selectedPrice * item.quantity, 0);

  const t = TRANSLATIONS[lang];

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);

    // Build the beautiful, human-readable WhatsApp message
    let messageText = '';
    if (lang === 'mr') {
      messageText += `*स्वादम् फूड्स ऑर्डर विनंती*\n\n`;
      messageText += `नमस्कार विद्या ताई, मला तुमच्या स्वादिष्ट घरगुती खाद्यपदार्थांची ऑर्डर द्यायची आहे:\n\n`;
      
      cartItems.forEach((item, index) => {
        const itemTotal = item.selectedPrice * item.quantity;
        const pTrans = PRODUCT_TRANSLATIONS['mr']?.[item.product.id] || { name: item.product.name };
        messageText += `${index + 1}. *${pTrans.name}* (${item.selectedWeight})\n`;
        messageText += `   • प्रमाण: ${item.quantity} पॅकेट\n`;
        messageText += `   • दर: ₹${item.selectedPrice} | एकूण: *₹${itemTotal}*\n\n`;
      });

      messageText += `-----------------------------\n`;
      messageText += `*एकूण ऑर्डर मूल्य:* *₹${totalAmount}*\n`;
      messageText += `-----------------------------\n\n`;

      messageText += `*वितरण तपशील:*\n`;
      messageText += `• *ग्राहकाचे नाव:* ${customerName.trim() || 'ग्राहक'}\n`;
      
      if (deliveryMethod === 'pickup') {
        messageText += `• *वितरण पद्धत:* स्वतः येऊन घेणे (धायरी, पुणे)\n`;
      } else {
        const modeLabel = deliveryMethod === 'dunzo' ? 'डंझो/पोर्टर स्थानिक पुणे (प्रत्यक्ष दराने)' : 'स्टँडर्ड कुरिअर';
        messageText += `• *वितरण पद्धत:* ${modeLabel}\n`;
        messageText += `• *पत्ता:* ${deliveryAddress.trim() || 'दिलेला नाही'}\n`;
      }

      messageText += `\nकृपया बनवण्याचे वेळापत्रक आणि UPI पेमेंट तपशील निश्चित करावेत. धन्यवाद!`;
    } else if (lang === 'hi') {
      messageText += `*स्वादम् फूड्स ऑर्डर अनुरोध*\n\n`;
      messageText += `नमस्ते विद्या ताई, मैं आपके स्वादिष्ट घर के बने स्नैक्स के लिए ऑर्डर देना चाहता हूँ:\n\n`;
      
      cartItems.forEach((item, index) => {
        const itemTotal = item.selectedPrice * item.quantity;
        const pTrans = PRODUCT_TRANSLATIONS['hi']?.[item.product.id] || { name: item.product.name };
        messageText += `${index + 1}. *${pTrans.name}* (${item.selectedWeight})\n`;
        messageText += `   • मात्रा: ${item.quantity} पैकेट\n`;
        messageText += `   • दर: ₹${item.selectedPrice} | उप-योग: *₹${itemTotal}*\n\n`;
      });

      messageText += `-----------------------------\n`;
      messageText += `*कुल ऑर्डर मूल्य:* *₹${totalAmount}*\n`;
      messageText += `-----------------------------\n\n`;

      messageText += `*वितरण विवरण:*\n`;
      messageText += `• *ग्राहक का नाम:* ${customerName.trim() || 'ग्राहक'}\n`;
      
      if (deliveryMethod === 'pickup') {
        messageText += `• *वितरण का तरीका:* स्व-पिकअप (धायरी, पुणे)\n`;
      } else {
        const modeLabel = deliveryMethod === 'dunzo' ? 'डंज़ो/पोर्टर स्थानीय पुणे (वास्तविक शुल्क)' : 'मानक कूरियर';
        messageText += `• *वितरण का तरीका:* ${modeLabel}\n`;
        messageText += `• *पता:* ${deliveryAddress.trim() || 'निर्दिष्ट नहीं'}\n`;
      }

      messageText += `\nकृपया ताज़ा तैयारी का समय और UPI भुगतान विवरण की पुष्टि करें। धन्यवाद!`;
    } else {
      // English
      messageText += `*Swadam Foods Order Request*\n\n`;
      messageText += `Hello Vidya tai, I would like to place an order for your delicious homemade snacks:\n\n`;

      cartItems.forEach((item, index) => {
        const itemTotal = item.selectedPrice * item.quantity;
        const pTrans = PRODUCT_TRANSLATIONS['en']?.[item.product.id] || { name: item.product.name };
        messageText += `${index + 1}. *${pTrans.name}* (${item.selectedWeight})\n`;
        messageText += `   • Quantity: ${item.quantity} packet(s)\n`;
        messageText += `   • Rate: ₹${item.selectedPrice} | Subtotal: *₹${itemTotal}*\n\n`;
      });

      messageText += `-----------------------------\n`;
      messageText += `*Total Order Value:* *₹${totalAmount}*\n`;
      messageText += `-----------------------------\n\n`;

      messageText += `*Delivery details:*\n`;
      messageText += `• *Customer Name:* ${customerName.trim() || 'Guest customer'}\n`;
      
      if (deliveryMethod === 'pickup') {
        messageText += `• *Delivery Mode:* Self-Pickup (Dhayari, Pune)\n`;
      } else {
        const modeLabel = deliveryMethod === 'dunzo' ? 'Dunzo/Porter Local Pune (At actuals)' : 'Standard India Courier';
        messageText += `• *Delivery Mode:* ${modeLabel}\n`;
        messageText += `• *Address:* ${deliveryAddress.trim() || 'Not specified'}\n`;
      }

      messageText += `\nPlease confirm the fresh preparation schedule and UPI payment details. Thank you!`;
    }

    // Generate WhatsApp link
    const encodedText = encodeURIComponent(messageText);
    const waLink = `https://wa.me/${WHATSAPP_URL_NUMBER}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waLink, '_blank');
      setIsSubmitting(false);
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[5px] z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[rgba(15,10,8,0.85)] dark:bg-[rgba(15,10,8,0.85)] light:bg-[rgba(255,252,249,0.95)] backdrop-blur-3xl z-50 shadow-2xl border-l border-[var(--border)] flex flex-col h-full text-[var(--text)] transition-colors duration-300"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5.5 h-5.5 text-[var(--gold)]" />
                <h3 className="font-serif text-xl font-bold tracking-wide">{t.basketTitle}</h3>
                <span className="bg-[var(--accent)] text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                className="icon-btn"
                aria-label="Close basket drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-[var(--border)]">
                    <ShoppingBag className="w-8 h-8 text-[var(--text-muted)]" />
                  </div>
                  <div>
                    <p className="text-[var(--text)] font-semibold font-serif text-lg">{t.basketEmpty}</p>
                    <p className="text-xs text-[var(--text-muted)] max-w-xs mx-auto mt-1 leading-relaxed">
                      {lang === 'mr' ? 'आमचा अस्सल घरगुती खाद्यपदार्थ संग्रह पहा, वजन निवडा आणि बॅगमध्ये जोडा!' : lang === 'hi' ? 'हमारा प्रामाणिक नाश्ता संग्रह देखें, पैक आकार चुनें और बैग में जोड़ें!' : 'Explore our delicious handcrafted collection, choose your preferred pack sizes, and add them to your bag!'}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-3 btn-modern text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer bg-[var(--text)] text-[var(--bg)]"
                  >
                    {t.basketExploreKitchen}
                  </button>
                </div>
              ) : !isCheckingOut ? (
                /* STEP 1: CART LIST VIEW */
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[var(--border)]">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{t.basketSelectedItems}</span>
                    <button
                      onClick={onClearCart}
                      className="text-xs font-semibold text-rose-500 hover:text-rose-400 hover:underline cursor-pointer"
                    >
                      {lang === 'mr' ? 'बॅग रिकामी करा' : lang === 'hi' ? 'बैग खाली करें' : 'Empty Bag'}
                    </button>
                  </div>

                  {cartItems.map((item) => {
                    const itemTotal = item.selectedPrice * item.quantity;
                    const pTrans = PRODUCT_TRANSLATIONS[lang]?.[item.product.id] || { name: item.product.name };
                    return (
                      <motion.div
                        layout
                        key={item.id}
                        className="flex gap-3 bg-[var(--surface)] p-3.5 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] transition-all group"
                      >
                        {/* Item Photo */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--border)] bg-black/10">
                          <ImageWithFallback
                            src={`/${item.product.imageFileName}`}
                            fallbackSrc={item.product.fallbackUnsplashUrl}
                            alt={pTrans.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Item Content */}
                        <div className="flex-grow min-w-0 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-1">
                            <div>
                              <h4 className="font-serif font-bold text-sm text-[var(--text)] truncate">{pTrans.name}</h4>
                              <p className="text-[10px] text-[var(--text-muted)] font-medium mt-0.5">{item.selectedWeight} • ₹{item.selectedPrice}</p>
                            </div>
                            <button
                              onClick={() => onRemoveFromCart(item.product.id, item.selectedWeight)}
                              className="text-white/30 hover:text-rose-500 p-0.5 rounded transition-colors opacity-100 md:opacity-0 group-hover:opacity-100 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex justify-between items-center mt-2.5">
                            {/* Quantity buttons */}
                            <div className="flex items-center border border-[var(--border)] bg-white/5 rounded-full overflow-hidden px-1 py-0.5">
                              <button
                                onClick={() => onUpdateCartQty(item.product.id, item.selectedWeight, item.quantity - 1)}
                                className="px-2 py-0.5 hover:bg-white/10 text-[var(--text)] transition-colors cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold font-sans text-[var(--text)]">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateCartQty(item.product.id, item.selectedWeight, item.quantity + 1)}
                                className="px-2 py-0.5 hover:bg-white/10 text-[var(--text)] transition-colors cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-sans text-sm font-bold text-[var(--gold)]">₹{itemTotal}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                /* STEP 2: DETAILS & CHECKOUT FORM VIEW */
                <div className="space-y-5">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline cursor-pointer select-none"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t.basketBack}</span>
                  </button>

                  {/* Order Summary Summary Panel */}
                  <div className="bg-white/5 rounded-2xl border border-[var(--border)] p-4 space-y-2.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{t.basketSummary}</h4>
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                      {cartItems.map((item) => {
                        const pTrans = PRODUCT_TRANSLATIONS[lang]?.[item.product.id] || { name: item.product.name };
                        return (
                          <div key={item.id} className="flex justify-between items-center text-xs text-[var(--text)]">
                            <span className="truncate pr-4">
                              {pTrans.name} ({item.selectedWeight}) <span className="text-[var(--text-muted)]">x{item.quantity}</span>
                            </span>
                            <span className="font-semibold text-[var(--gold)] shrink-0">₹{item.selectedPrice * item.quantity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Delivery Details Input Form */}
                  <form id="checkout-form" onSubmit={handleSendOrder} className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{t.basketDetailsTitle}</h4>
                    
                    {/* Name field */}
                    <div>
                      <label htmlFor="customer-name" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">{t.basketYourName}</label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder={lang === 'mr' ? 'उदा. आनंद देशपांडे' : lang === 'hi' ? 'जैसे: आनंद देशपांडे' : 'e.g. Anand Deshpande'}
                        className="w-full bg-white/5 border border-[var(--border)] px-4 py-2.5 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] focus:ring-1 focus:ring-[var(--accent)] placeholder:text-white/20 transition-all"
                      />
                    </div>

                    {/* Method select */}
                    <div>
                      <span className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">{t.basketMethod}</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('pickup')}
                          className={`py-2 px-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                            deliveryMethod === 'pickup'
                              ? 'bg-[var(--text)] text-[var(--bg)] border-[var(--text)] shadow-sm font-bold'
                              : 'bg-white/5 text-[var(--text-muted)] border-[var(--border)] hover:bg-white/10'
                          }`}
                        >
                          {lang === 'mr' ? 'स्वतः येणे' : lang === 'hi' ? 'पिकअप' : 'Pickup'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('dunzo')}
                          className={`py-2 px-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                            deliveryMethod === 'dunzo'
                              ? 'bg-[var(--text)] text-[var(--bg)] border-[var(--text)] shadow-sm font-bold'
                              : 'bg-white/5 text-[var(--text-muted)] border-[var(--border)] hover:bg-white/10'
                          }`}
                        >
                          {lang === 'mr' ? 'पुणे Dunzo' : lang === 'hi' ? 'पुणे Dunzo' : 'Pune Dunzo'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('courier')}
                          className={`py-2 px-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                            deliveryMethod === 'courier'
                              ? 'bg-[var(--text)] text-[var(--bg)] border-[var(--text)] shadow-sm font-bold'
                              : 'bg-white/5 text-[var(--text-muted)] border-[var(--border)] hover:bg-white/10'
                          }`}
                        >
                          {lang === 'mr' ? 'कुरिअर' : lang === 'hi' ? 'कूरियर' : 'Courier'}
                        </button>
                      </div>
                    </div>

                    {/* Address box */}
                    {deliveryMethod !== 'pickup' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1"
                      >
                        <label htmlFor="delivery-address" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">{t.basketAddress}</label>
                        <textarea
                          id="delivery-address"
                          required={deliveryMethod !== 'pickup'}
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          placeholder={lang === 'mr' ? 'वितरणासाठी पूर्ण पत्ता आणि पिनकोड लिहा...' : lang === 'hi' ? 'डिलीवरी के लिए पूरा डाक पता और पिनकोड लिखें...' : 'Complete postal address for delivery...'}
                          rows={3}
                          className="w-full bg-white/5 border border-[var(--border)] px-4 py-2.5 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] focus:ring-1 focus:ring-[var(--accent)] placeholder:text-white/20 transition-all resize-none"
                        />
                      </motion.div>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Sticky Checkout Panel */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[var(--border)] bg-black/20 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">{t.basketSubtotal}:</span>
                  <span className="font-sans text-2xl font-extrabold text-[var(--gold)]">₹{totalAmount}</span>
                </div>

                {!isCheckingOut ? (
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer text-sm font-sans select-none"
                  >
                    <span>{t.basketProceed}</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={isSubmitting}
                    className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.5)] transition-all cursor-pointer text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Check className="w-5 h-5 animate-pulse text-white" />
                        <span>{t.basketPreparing}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5 text-white" />
                        <span>{t.basketPlaceWhatsApp}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
