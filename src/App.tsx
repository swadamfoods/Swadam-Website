import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Sparkles, 
  Clock, 
  Package, 
  ArrowRight, 
  ChevronUp, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Compass,
  ArrowRightLeft
} from 'lucide-react';

import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductProfile } from './components/ProductProfile';
import { BasketDrawer } from './components/BasketDrawer';
import { AboutSection } from './components/AboutSection';
import { AdminGuide } from './components/AdminGuide';
import { ImageWithFallback } from './components/ImageWithFallback';

import { SNACK_PRODUCTS, TESTIMONIALS, WHATSAPP_NUMBER, BUSINESS_EMAIL } from './data';
import { SnackProduct, SnackWeight, CartItem } from './types';
import { Language, TRANSLATIONS } from './translations';

export default function App() {
  // Cart Persistent State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('swadam_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // 'home' | 'store' | 'heritage' | 'product-profile'
  const [selectedProduct, setSelectedProduct] = useState<SnackProduct | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Language State with persistence
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('swadam_lang');
      return (saved as Language) || 'en';
    } catch {
      return 'en';
    }
  });

  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('swadam_theme');
      return (saved as 'dark' | 'light') || 'dark';
    } catch {
      return 'dark';
    }
  });

  // Synchronize cart to local storage
  useEffect(() => {
    localStorage.setItem('swadam_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Synchronize theme to HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('swadam_theme', theme);
  }, [theme]);

  // Synchronize language to local storage
  useEffect(() => {
    localStorage.setItem('swadam_lang', lang);
  }, [lang]);

  // Disable right-clicking anywhere on the website
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (product: SnackProduct, weight: SnackWeight, quantity: number) => {
    setCartItems((prev) => {
      const id = `${product.id}-${weight}`;
      const existing = prev.find((item) => item.id === id);
      const price = product.pricing.find((p) => p.weight === weight)?.price || 0;

      if (existing) {
        return prev.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prev, 
          { id, product, selectedWeight: weight, selectedPrice: price, quantity }
        ];
      }
    });

    // Open drawer to give feedback
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (productId: string, weight: SnackWeight, qty: number) => {
    const id = `${productId}-${weight}`;
    if (qty <= 0) {
      handleRemoveFromCart(productId, weight);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  const handleRemoveFromCart = (productId: string, weight: SnackWeight) => {
    const id = `${productId}-${weight}`;
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProductClick = (product: SnackProduct) => {
    setSelectedProduct(product);
    setActiveSection('product-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToStore = () => {
    setActiveSection('store');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.selectedPrice * item.quantity), 0);
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
      
      {/* Ambient Glowing Blobs in Background */}
      <div className="ambient-glow">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Repeating Mandala Vector Geometric Pattern Overlay */}
      <div className="mandala-overlay"></div>

      {/* Header top navigation */}
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
      />

      {/* Page view content */}
      <main className="pt-32 pb-24 sm:pb-32 min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + (selectedProduct?.id || '')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* 1. HOME VIEW */}
            {activeSection === 'home' && (
              <div className="space-y-20">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-4 pt-4 sm:pt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Text Details */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 bg-white/5 text-[var(--accent)] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-[var(--border)] shadow-sm mx-auto lg:mx-0">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--gold)] animate-pulse" />
                        <span>{t.heroBadge}</span>
                      </div>

                      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] tracking-wide leading-[1.1] sm:leading-none">
                        {t.heroTitlePart1} <br className="hidden sm:block" />
                        <span className="text-[var(--accent)] italic font-medium">{t.heroTitlePart2}</span>
                      </h1>

                      <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                        {t.heroDesc}
                      </p>

                      {/* Call To Actions */}
                      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3">
                        <button
                          onClick={() => setActiveSection('store')}
                          className="bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm shadow-md transition-all select-none"
                        >
                          <span>{t.btnExplore}</span>
                          <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
                        </button>
                        <button
                          onClick={() => setActiveSection('heritage')}
                          className="bg-white/5 hover:bg-white/10 text-[var(--text)] font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 border border-[var(--border)] cursor-pointer text-sm transition-all select-none"
                        >
                          <Compass className="w-4 h-4 text-[var(--gold)]" />
                          <span>{t.btnOurStory}</span>
                        </button>
                      </div>

                      {/* Ratings ribbon */}
                      <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-[var(--text-muted)] text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="flex text-[var(--gold)]">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-4.5 h-4.5 fill-[var(--gold)] text-[var(--gold)]" />
                            ))}
                          </div>
                          <span className="font-bold text-[var(--text)]">{t.ratingLabel}</span>
                        </div>
                        <div className="hidden sm:block opacity-35">|</div>
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)] animate-pulse" />
                          <span>{t.lovedByPune}</span>
                        </div>
                      </div>
                    </div>

                    {/* Logo Rotating Ring Frame */}
                    <div className="lg:col-span-5 flex justify-center relative">
                      <div className="glass-hero-card">
                        <img 
                          src="/swadam-logo.jpg" 
                          alt="Swadam Foods Logo Circular Display"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop&q=80";
                          }}
                        />
                      </div>
                    </div>

                  </div>
                </section>

                {/* Grid trust pillars */}
                <section className="bg-[var(--surface)] border-t border-b border-[var(--border)] py-12 backdrop-blur-md">
                  <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      
                      <div className="space-y-2 text-center md:text-left">
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] mx-auto md:mx-0 shadow-sm">
                          <Heart className="w-5 h-5 fill-[var(--gold)]" />
                        </div>
                        <h3 className="text-sm font-bold tracking-wide uppercase font-serif text-[var(--text)]">{t.pillar1Title}</h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t.pillar1Desc}</p>
                      </div>

                      <div className="space-y-2 text-center md:text-left">
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] mx-auto md:mx-0 shadow-sm">
                          <Clock className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold tracking-wide uppercase font-serif text-[var(--text)]">{t.pillar2Title}</h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t.pillar2Desc}</p>
                      </div>

                      <div className="space-y-2 text-center md:text-left">
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] mx-auto md:mx-0 shadow-sm">
                          <Package className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold tracking-wide uppercase font-serif text-[var(--text)]">{t.pillar3Title}</h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t.pillar3Desc}</p>
                      </div>

                      <div className="space-y-2 text-center md:text-left">
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] mx-auto md:mx-0 shadow-sm">
                          <ShoppingBag className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold tracking-wide uppercase font-serif text-[var(--text)]">{t.pillar4Title}</h3>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{t.pillar4Desc}</p>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Word of mouth reviews hub */}
                <section className="max-w-6xl mx-auto px-4 py-8">
                  <div className="text-center max-w-xl mx-auto mb-12">
                    <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[2px] block mb-2 font-sans">{t.reviewsHeading}</span>
                    <h2 className="font-serif text-3xl font-bold text-[var(--text)] tracking-wide">{t.reviewsTitle}</h2>
                    <p className="text-xs text-[var(--text-muted)] mt-2">
                      {t.reviewsSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((test) => (
                      <div 
                        key={test.id}
                        className="p-6 rounded-[20px] bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between space-y-4 shadow-sm hover:border-[var(--border-hover)] transition-all"
                      >
                        <div className="space-y-3">
                          <div className="flex text-[var(--gold)]">
                            {Array.from({ length: test.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                            ))}
                          </div>
                          <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed italic">
                            "{
                              lang === 'mr' ? (
                                test.id === 't1' ? 'स्वादम् फूड्सचा पोहा चिवडा अगदी आमच्या आजीने बनवल्यासारखा वाटतो. खूपच हलका, कमी तेल असलेला आणि हिरव्या मिरच्या व शेंगदाण्यांचे प्रमाण अगदी परिपूर्ण आहे. नक्की वापरून पहा!' :
                                test.id === 't2' ? 'तिखट-मीठ शंकरपाळे म्हणजे एक उत्कृष्ट कलाकृतीच आहे! माझ्या मुलांना हे चटकदार कोटिंग खूप आवडते. आमच्या रोजच्या संध्याकाळच्या चहाचा हा मुख्य सोबती झाला आहे. व्हॉट्सॲपवरून ऑर्डर देणे खूप जलद आणि सोपे होते.' :
                                'विद्या ताई स्वतः धायरीमध्ये राहतात, त्यामुळे मी आमच्या घरच्या कार्यक्रमासाठी खमंग शंकरपाळे मागवले होते. ते खूपच ताजे आणि खुसखुशीत होते. पाकीट उघडताच शुद्ध साजूक तुपाचा सुवास घरभर पसरतो. अप्रतिम काम!'
                              ) : lang === 'hi' ? (
                                test.id === 't1' ? 'स्वादम् फूड्स का पोहा चिवड़ा बिल्कुल वैसे ही स्वाद देता है जैसे मेरी दादी बनाती थीं। यह बहुत ही हल्का है, इसमें बहुत कम तेल का उपयोग होता है, और हरी मिर्च तथा मूंगफली का संतुलन एकदम सही है। अत्यधिक अनुशंसित!' :
                                test.id === 't2' ? 'चटपटी शंकरपाली वास्तव में एक उत्कृष्ट रचना है! मेरे बच्चों को इसकी तीखी-मीठी कोटिंग बहुत पसंद है। यह हमारे दैनिक शाम की चाय का साथी बन गया है। व्हाट्सएप के माध्यम से ऑर्डर करने की प्रक्रिया अविश्वसनीय रूप से तेज और आसान थी।' :
                                'चूंकि विद्या ताई धायरी में ही रहती हैं, इसलिए मैंने एक पारिवारिक समारोह के लिए नमकीन शंकरपाली का ऑर्डर दिया था। वे बहुत ताजे और कुरकुरे थे। पैकेट खोलते ही शुद्ध गाय के घी (सजुक तूप) की महक आ जाती है। उत्कृष्ट कार्य!'
                              ) : test.comment
                            }"
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-white/5 text-[11px] text-[var(--text-muted)]">
                          <div>
                            <span className="font-serif font-bold text-[var(--text)] block text-xs">{test.name}</span>
                            <span className="block mt-0.5 opacity-70">
                              {lang === 'mr' ? (test.location === 'Kothrud, Pune' ? 'कोथरूड, पुणे' : test.location === 'Baner, Pune' ? 'बाणेर, पुणे' : 'धायरी, पुणे') : lang === 'hi' ? (test.location === 'Kothrud, Pune' ? 'कोथरुड, पुणे' : test.location === 'Baner, Pune' ? 'बानेर, पुणे' : 'धायरी, पुणे') : test.location}
                            </span>
                          </div>
                          <span className="font-medium opacity-60">
                            {lang === 'mr' ? (test.date.includes('June') ? 'जून २०२६' : test.date.includes('July') ? 'जुलै २०२६' : 'मे २०२६') : lang === 'hi' ? (test.date.includes('June') ? 'जून २०२६' : test.date.includes('July') ? 'जुलाई २०२६' : 'मई २०२६') : test.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* 2. COLLECTION / STORE VIEW */}
            {activeSection === 'store' && (
              <section className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
                {/* Menu Headers */}
                <div className="text-center max-w-xl mx-auto mb-12">
                  <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[2px] block mb-2 font-sans">{t.collHeading}</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-wide">
                    {t.collTitle}
                  </h2>
                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">
                    {t.collSubtitle}
                  </p>
                </div>

                {/* Product list grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SNACK_PRODUCTS.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      cartItems={cartItems}
                      onAddToCart={handleAddToCart}
                      onClickCard={() => handleProductClick(product)}
                      lang={lang}
                    />
                  ))}
                </div>

                {/* Bottom floating warning info */}
                {cartItems.length > 0 && (
                  <div className="mt-12 bg-[var(--surface)] backdrop-blur-xl rounded-[24px] border border-[var(--border)] p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg">
                    <div className="flex items-center gap-3.5 text-center sm:text-left">
                      <div className="p-3 rounded-full bg-[var(--accent)] text-white shrink-0 animate-bounce shadow-md">
                        <ShoppingBag className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[var(--text)]">
                          {lang === 'mr' ? `तुमच्या ऑर्डर बॅगमध्ये ${cartCount} पाकिटे आहेत!` : lang === 'hi' ? `आपके ऑर्डर बैग में ${cartCount} पैकेट हैं!` : `You have ${cartCount} pack${cartCount > 1 ? 's' : ''} in your order bag!`}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          {lang === 'mr' ? `एकूण ऑर्डर मूल्य: ₹${totalCartPrice}. तपशील पाहण्यासाठी चेकआउट वर क्लिक करा.` : lang === 'hi' ? `कुल ऑर्डर मूल्य: ₹${totalCartPrice}. विवरण की समीक्षा करने के लिए चेकआउट पर क्लिक करें।` : `Total order value: ₹${totalCartPrice}. Click check out to review details.`}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setIsCartOpen(true)}
                      className="btn-modern text-xs font-bold px-6 py-3 rounded-full cursor-pointer bg-[var(--text)] text-[var(--bg)] shrink-0 select-none"
                    >
                      {lang === 'mr' ? 'ऑर्डर बॅग उघडा' : lang === 'hi' ? 'ऑर्डर बैग खोलें' : 'Open Order Bag Drawer'}
                    </button>
                  </div>
                )}
              </section>
            )}

            {/* 3. PRODUCT PROFILE DETAILS VIEW */}
            {activeSection === 'product-profile' && selectedProduct && (
              <ProductProfile
                product={selectedProduct}
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onBack={handleBackToStore}
                lang={lang}
              />
            )}

            {/* 4. HERITAGE / OUR STORY VIEW */}
            {activeSection === 'heritage' && (
              <div>
                <AboutSection lang={lang} />
                <AdminGuide />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Section */}
      <footer className="bg-[var(--surface)] border-t border-b border-[var(--border)] text-[var(--text-muted)] pt-16 pb-8 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[var(--border)] items-start">
            
            {/* Logo and business credits */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--border)] bg-white p-0.5 flex items-center justify-center shrink-0">
                  <img
                    src="/swadam-logo.jpg"
                    alt="Swadam Foods circular footer logo"
                    className="w-full h-full object-contain rounded-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=100&h=100&fit=crop&q=80";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[var(--text)]">Swadam Foods</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold">
                    {lang === 'mr' ? 'विद्या दांडेकर यांच्याद्वारे घरगुती बनावट' : lang === 'hi' ? 'विद्या दांडेकर द्वारा हस्तनिर्मित' : 'Handcrafted by Vidya Dandekar'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm font-sans">
                {lang === 'mr' 
                  ? 'पुण्यामध्ये शुद्ध साजूक तूप आणि उत्कृष्ट साहित्य वापरून अत्यंत स्वच्छ वातावरणात तयार केलेले अस्सल घरगुती महाराष्ट्रीयन चहाच्या वेळचे पदार्थ.' 
                  : lang === 'hi' 
                  ? 'पुणे में शुद्ध साजूक तूप और प्रीमियम सामग्री का उपयोग करके पूर्ण स्वच्छता के साथ तैयार किए गए असली घर के बने महाराष्ट्रीयन चाय के समय के नाश्ते।' 
                  : 'Authentic, home-cooked Maharashtrian tea-time snacks prepared under strict hygiene guidelines using pure Sajuk Tup ghee and premium ingredients in Pune.'}
              </p>
            </div>

            {/* Quick Links Nav */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <h5 className="text-xs font-bold text-[var(--text)] uppercase tracking-widest font-serif">{t.footerNav}</h5>
              <div className="grid grid-cols-2 gap-2 font-sans">
                <button onClick={() => { setActiveSection('home'); window.scrollTo({top:0, behavior:'smooth'}); }} className="text-left hover:text-[var(--text)] hover:underline cursor-pointer">{t.navHome}</button>
                <button onClick={() => { setActiveSection('store'); window.scrollTo({top:0, behavior:'smooth'}); }} className="text-left hover:text-[var(--text)] hover:underline cursor-pointer">{t.navOurSnacks}</button>
                <button onClick={() => { setActiveSection('heritage'); window.scrollTo({top:0, behavior:'smooth'}); }} className="text-left hover:text-[var(--text)] hover:underline cursor-pointer">{t.navOurStory}</button>
                <button onClick={() => { setActiveSection('heritage'); setTimeout(() => { document.getElementById('bulk')?.scrollIntoView({behavior:'smooth'}); }, 300); }} className="text-left hover:text-[var(--text)] hover:underline cursor-pointer text-[var(--gold)]">{t.navBulkInquiry}</button>
                <button onClick={() => { setActiveSection('heritage'); setTimeout(() => { document.getElementById('faqs')?.scrollIntoView({behavior:'smooth'}); }, 300); }} className="text-left hover:text-[var(--text)] hover:underline cursor-pointer">FAQs</button>
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="md:col-span-4 space-y-3 text-xs leading-relaxed font-sans">
              <h5 className="text-xs font-bold text-[var(--text)] uppercase tracking-widest font-serif">{t.footerReachOut}</h5>
              <p className="text-[var(--text-muted)]">
                <strong>{t.footerLocation}:</strong> <br />
                {lang === 'mr' ? (
                  <>धायरी फाटा जवळ, धायरी, पुणे, <br />महाराष्ट्र, भारत - ४११०४१</>
                ) : lang === 'hi' ? (
                  <>धायरी फाटा के पास, धायरी, पुणे, <br />महाराष्ट्र, भारत - ४११०४१</>
                ) : (
                  <>Near Dhayari Phata, Dhayari, Pune, <br />Maharashtra, India - 411041</>
                )}
              </p>
              <p className="text-[var(--text-muted)]">
                <strong>{t.footerPhone}:</strong> <br />
                <a href={`https://wa.me/919356614958`} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] font-mono hover:underline font-bold">
                  {WHATSAPP_NUMBER}
                </a>
              </p>
              <p className="text-[var(--text-muted)]">
                <strong>{t.footerEmail}:</strong> <br />
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[var(--gold)] font-mono hover:underline font-bold">
                  {BUSINESS_EMAIL}
                </a>
              </p>
              <p className="text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                {t.footerPrepInfo}
              </p>
            </div>

          </div>

          {/* Copyright block */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[var(--text-muted)] opacity-60 uppercase tracking-wider font-semibold gap-4 font-sans">
            <p>
              {lang === 'mr' 
                ? `© ${new Date().getFullYear()} स्वादम् फूड्स पुणे. सर्व हक्क राखीव.` 
                : lang === 'hi' 
                ? `© ${new Date().getFullYear()} स्वादम् फूड्स पुणे. सर्वाधिकार सुरक्षित।` 
                : `© ${new Date().getFullYear()} Swadam Foods Pune. All Rights Reserved.`}
            </p>
            <p>
              {lang === 'mr' 
                ? 'धायरी, पुणे येथे प्रेमाने तयार • विद्या दांडेकर यांच्यासाठी डिझाइन केलेले' 
                : lang === 'hi' 
                ? 'धायरी, पुणे में प्यार से निर्मित • विद्या दांडेकर के लिए डिज़ाइन किया गया' 
                : 'Handmade with Love in Dhayari, Pune • Designed for Vidya Dandekar'}
            </p>
          </div>

        </div>
      </footer>

      {/* Cart Drawer Panel */}
      <BasketDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        lang={lang}
      />

      {/* Floating Scroll back to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 p-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer select-none"
            title="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
