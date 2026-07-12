import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Flame, Leaf, ArrowRight, Heart, Calendar, Check, Users } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { BUSINESS_OWNER, BUSINESS_LOCATION } from '../data';
import { BulkInquiryForm } from './BulkInquiryForm';
import { FAQSection } from './FAQSection';
import { Language } from '../translations';

interface AboutSectionProps {
  lang: Language;
}

export function AboutSection({ lang }: AboutSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Dynamic process steps translations
  const getSteps = () => {
    if (lang === 'mr') {
      return [
        {
          title: '१. उत्कृष्ट साहित्याची निवड',
          icon: <Leaf className="w-5 h-5 text-emerald-400" />,
          desc: 'आम्ही सर्वोत्कृष्ट आणि ताजे कच्चे माल निवडतो. गव्हाचे पीठ हाताने चाळले जाते आणि उत्कृष्ट कुरकुरीतपणा येण्यासाठी सुरुवातीलाच शुद्ध गाईचे तूप मळले जाते.',
          highlight: 'भेसळमुक्त, फक्त शुद्ध आणि दर्जेदार साहित्य.'
        },
        {
          title: '२. घरगुती मसाल्यांचे कुटण',
          icon: <Award className="w-5 h-5 text-amber-400" />,
          desc: 'बाहेरून तयार मसाले आणण्याऐवजी, विद्या दांडेकर स्वतः अख्खे मसाले (हळद, जिरे, ओवा, आमचूर) भाजून घरगुती पद्धतीने कुटतात. यामुळे मसाल्यांचा खरा सुवास टिकून राहतो.',
          highlight: 'पिढ्यानपिढ्या चालत आलेली अस्सल मराठी रेसिपी.'
        },
        {
          title: '३. मळणे आणि लाटणे',
          icon: <Heart className="w-5 h-5 text-rose-400" />,
          desc: 'शंकरपाळ्यांसाठी आम्ही मोहन तंत्र वापरून शुद्ध तुपात पीठ मळतो आणि त्याचे बारीक थर देतो. यामुळे तळताना शंकरपाळे छान खुसखुशीत आणि थरदार होतात.',
          highlight: 'शुद्ध तुपात मळलेले पीठ.'
        },
        {
          title: '४. नियंत्रित तळण्याची पद्धत',
          icon: <Flame className="w-5 h-5 text-orange-400" />,
          desc: 'ताजे आणि double-filtered तेल वापरून लहान बॅचेसमध्ये तळले जाते. आम्ही तेल कधीही पुन्हा वापरत नाही, ज्यामुळे प्रत्येक घास हलका आणि ताजा राहतो.',
          highlight: 'कधीही पुन्हा न वापरलेले फ्रेश तेल.'
        },
        {
          title: '५. सुरक्षित पॅकेजिंग',
          icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
          desc: 'गार झाल्यानंतर सर्व पदार्थ ताबडतोब फूड-ग्रेड हवाबंद पाकिटात सील केले जातात. यामुळे कोणतेही केमिकल न वापरता पदार्थ ६ आठवडे कुरकुरीत राहतात.',
          highlight: 'शून्य प्रिझर्व्हेटिव्ह, दीर्घकाळ टिकणारा कुरकुरीतपणा.'
        }
      ];
    } else if (lang === 'hi') {
      return [
        {
          title: '1. उत्कृष्ट सामग्री का चयन',
          icon: <Leaf className="w-5 h-5 text-emerald-400" />,
          desc: 'हम बेहतरीन प्रीमियम कच्चे माल का चयन करते हैं। आटे को हाथ से छाना जाता है, और शुद्ध गाय का घी मिलाकर कुरकुरापन सुनिश्चित किया जाता है.',
          highlight: 'कोई मिलावट नहीं, केवल शुद्ध सामग्रियां.'
        },
        {
          title: '2. घरेलू मसाले पीसना',
          icon: <Award className="w-5 h-5 text-amber-400" />,
          desc: 'पैकेज्ड मसालों के बजाय, विद्या दांडेकर खुद खड़े मसालों को भूनती हैं और पीसती हैं। इससे असली खुशबू बनी रहती है.',
          highlight: 'पीढ़ियों पुरानी पारंपरिक मराठी रेसिपी.'
        },
        {
          title: '3. आटा गूंथना और परतें बनाना',
          icon: <Heart className="w-5 h-5 text-rose-400" />,
          desc: 'शंकरपाली के लिए हम शुद्ध घी का मोयन डालकर आटा गूंथते हैं और उसकी परतें बनाते हैं, जिससे तलने पर बेहतरीन परतदार कुरकुरापन आता है.',
          highlight: 'शुद्ध घी का पारंपरिक मोयन.'
        },
        {
          title: '4. नियंत्रित बैचों में तलना',
          icon: <Flame className="w-5 h-5 text-orange-400" />,
          desc: 'ताजे डबल-फिल्टर्ड तेल का उपयोग करके छोटे बैचों में तला जाता है। हम तेल को कभी दोबारा इस्तेमाल नहीं करते, जिससे नाश्ता हल्का और ताजा रहता है.',
          highlight: 'कभी दोबारा इस्तेमाल न किया गया ताजा तेल.'
        },
        {
          title: '5. एयरटाइट पैकेजिंग',
          icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
          desc: 'ठंडा होने के बाद, नमकीन को तुरंत फूड-ग्रेड एयरटाइट पाउच में सील कर दिया जाता है। इससे बिना रसायनों के 6 सप्ताह तक कुरकुरापन बना रहता है.',
          highlight: 'शून्य रसायन, लंबे समय तक चलने वाली ताजगी.'
        }
      ];
    } else {
      return [
        {
          title: '1. Ingredient Selection',
          icon: <Leaf className="w-5 h-5 text-emerald-400" />,
          desc: 'We select the finest premium raw materials. Flour is hand-screened, and top-tier ingredients are mixed with pure Cow Ghee (Sajuk Tup) to ensure premium crispiness right from the start.',
          highlight: 'No adulteration, only pure ingredients.'
        },
        {
          title: '2. Homemade Spice Grinding',
          icon: <Award className="w-5 h-5 text-amber-400" />,
          desc: 'Instead of purchasing pre-packaged spice mixes, Vidya Dandekar hand-roasts whole spices (turmeric, cumin, carom seeds, amchur) and stone-grinds them. This locks in the natural oils and authentic aroma.',
          highlight: 'Generational Marathi spice recipe.'
        },
        {
          title: '3. Kneading & Layering',
          icon: <Heart className="w-5 h-5 text-rose-400" />,
          desc: 'For our Salty and Tangy Shankarpali, we knead the dough using pure ghee (Moyan technique) and meticulously layer it. This creates micro-sheets in the dough that expand during frying, resulting in that classic flaky texture.',
          highlight: 'Traditional ghee-kneading.'
        },
        {
          title: '4. Precision Batch Frying',
          icon: <Flame className="w-5 h-5 text-orange-400" />,
          desc: 'Frying is done in small, controlled batches using fresh double-filtered sunflower groundnut oil. We keep the temperature steady so snacks cook evenly right to their core without absorbing excess oil.',
          highlight: 'Never double-used oil, always fresh.'
        },
        {
          title: '5. Airtight Sealing',
          icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
          desc: 'Once cooled, the snacks are immediately weighed and sealed into thick, food-grade airtight pouches. This keeps moisture out and preserves the natural crunch for up to 6 weeks without any artificial chemical preservatives!',
          highlight: 'No preservatives, long lasting freshness.'
        }
      ];
    }
  };

  const steps = getSteps();

  // Localized general texts
  const tStory = {
    badge: lang === 'mr' ? 'स्थापना २०२४ • अस्सल घरगुती किचन' : lang === 'hi' ? 'स्थापना 2024 • प्रामाणिक घरेलू रसोई' : 'Est. 2024 • Authentic Home-Kitchen',
    titleLine1: lang === 'mr' ? 'पुण्यातील घरांची चव,' : lang === 'hi' ? 'पुणे के घरों का स्वाद,' : 'A Taste of Pune Homes,',
    titleLine2: lang === 'mr' ? 'अत्यंत प्रेमाने तयार केलेली' : lang === 'hi' ? 'अत्यंत प्रेम से तैयार' : 'Crafted with Pure Love',
    desc1: lang === 'mr' 
      ? 'स्वादम् फूड्स मध्ये आपले स्वागत आहे! पुण्यातील धायरी या शांत आणि सुंदर परिसरातून आम्ही उत्कृष्ट, अस्सल भारतीय चवदार घरगुती खाद्यपदार्थ तयार करतो. घरगुती सण आणि घरच्या चवीसाठी बनवलेला फराळ आता एका लाडक्या ब्रँडमध्ये बदलला आहे, जो संपूर्ण पुण्यातील घरांमध्ये आनंद पसरवत आहे.' 
      : lang === 'hi'
      ? 'स्वादम् फूड्स में आपका स्वागत है! धायरी, पुणे के शांत इलाके से हम उत्कृष्ट, प्रामाणिक भारतीय घरेलू नमकीन तैयार करते हैं। पारिवारिक समारोहों और त्योहारों के लिए स्वादिष्ट फराळ बनाने से शुरू हुआ यह सफर अब एक पसंदीदा ब्रांड बन गया है।'
      : 'Welcome to Swadam Foods! Based in the peaceful neighborhood of Dhayari, Pune, Maharashtra, we manufacture premium, authentic Indian savory snacks. What started as preparing delicious snacks for family gatherings and festive farals has now blossomed into a beloved local brand, bringing joy to homes across Pune.',
    desc2: lang === 'mr'
      ? 'तुम्ही मागवलेले प्रत्येक उत्पादन—मग तो कुरकुरीत स्पेशल चिवडा असो, साजुक तुपातील शंकरपाळे असो किंवा तिखट-मीठ शंकरपाळे असो—हे सर्व मी, विद्या दांडेकर, पूर्णपणे स्वतः हाताने तयार करते.'
      : lang === 'hi'
      ? 'आप जो भी उत्पाद ऑर्डर करते हैं—चाहे वह कुरकुरा स्पेशल चिवड़ा हो, साजुक घी की शंकरपाली हो या चटपटी शंकरपाली—यह सब मेरे द्वारा, यानी विद्या दांडेकर द्वारा पूर्णतः हस्तनिर्मित है।'
      : 'Every single product you order—whether the crunchy Special Chivda, the layered Salted Shankarpali, or the tongue-tickling Tangy Shankarpali—is crafted completely by hand by me, Vidya Dandekar.',
    quote: lang === 'mr'
      ? '"एक गृहिणी म्हणून मला समजते की अन्न म्हणजे केवळ पोट भरणे नाही; ते सुरक्षा, विश्वास आणि जिव्हाळा देण्याबद्दल आहे. मी फक्त शुद्ध गाईचे तूप (साजुक तूप), प्रीमियम फिल्टर तेल आणि स्वतः निवडलेले घरगुती मसाले वापरते. मी कोणतेही रासायनिक प्रिझर्व्हेटिव्ह, रंग किंवा खायचा सोडा वापरत नाही."'
      : lang === 'hi'
      ? '"एक गृहिणी के रूप में मैं समझती हूं कि भोजन केवल पेट भरने के लिए नहीं है; यह सुरक्षा, विश्वास और स्नेह साझा करने के बारे में है। मैं केवल शुद्ध गाय का घी, प्रीमियम फिल्टर्ड तेल और हस्त-चयनित मसालों का उपयोग करती हूँ। मैं कोई रसायन या सोडा नहीं डालती।"'
      : '"As a homemaker, I understand that food is not just about filling your stomach; it\'s about safety, trust, and sharing absolute warmth. I use only pure Cow Ghee (Sajuk Tup), premium filtered oils, and hand-selected spices. I do not add any chemical preservatives, colorants, or soda."',
    quoteAuthor: lang === 'mr' ? '— विद्या दांडेकर, स्वादम् फूड्सच्या संस्थापिका' : lang === 'hi' ? '— विद्या दांडेकर, स्वादम् फूड्स की संस्थापक' : '— Vidya Dandekar, Founder of Swadam Foods',
    hygieneTitle: lang === 'mr' ? '१००% स्वच्छ' : lang === 'hi' ? '100% स्वच्छ' : '100% Hygienic',
    hygieneDesc: lang === 'mr' ? 'घरगुती किचनची खात्री' : lang === 'hi' ? 'घरेलू रसोई की शुद्धता' : 'Pure home kitchen prep',
    recipeTitle: lang === 'mr' ? 'पारंपारिक कृती' : lang === 'hi' ? 'पारंपरिक रेसिपी' : 'Traditional Recipe',
    recipeDesc: lang === 'mr' ? 'अस्सल पुणेरी चव' : lang === 'hi' ? 'असली पुणेरी स्वाद' : 'Generational Pune taste',
    decalTitle: lang === 'mr' ? 'अस्सल हस्तनिर्मित' : lang === 'hi' ? 'असली हस्तनिर्मित' : 'Truly Handcrafted',
    decalDesc: lang === 'mr' ? 'प्रत्येक बॅच सुरवातीपासून बनवली जाते' : lang === 'hi' ? 'हर बैच नए सिरे से बनाई जाती है' : 'Every single batch is made from scratch',
    processHeading: lang === 'mr' ? 'आमची बनवण्याची पद्धत' : lang === 'hi' ? 'हमारी निर्माण विधि' : 'Our Process',
    processTitle: lang === 'mr' ? 'आम्ही प्रत्येक खाद्यपदार्थ कसा बनवतो' : lang === 'hi' ? 'हम हर नाश्ता कैसे तैयार करते हैं' : 'How We Handcraft Every Snack',
    processDesc: lang === 'mr' 
      ? 'आम्ही प्रत्येक टप्प्यावर पूर्ण स्वच्छता, शुद्धता आणि उत्कृष्ट दर्जा राखतो. खालील टप्प्यांवर क्लिक करून पहा:' 
      : lang === 'hi'
      ? 'हम अपनी निर्माण प्रक्रिया के हर चरण में पूर्ण स्वच्छता, शुद्धता और सटीकता बनाए रखते हैं। नीचे दिए गए किसी भी चरण पर क्लिक करके देखें:'
      : 'We maintain absolute purity, hygiene, and perfection across every stage of our culinary process. Click any step below to see our method:',
    stepLabel: lang === 'mr' ? 'टप्पा' : lang === 'hi' ? 'चरण' : 'Step',
    btnNext: lang === 'mr' ? 'पुढचा टप्पा' : lang === 'hi' ? 'अगला चरण' : 'Next Process',
    btnRestart: lang === 'mr' ? 'सुरुवातीपासून पहा' : lang === 'hi' ? 'फिर से यात्रा शुरू करें' : 'Restart Journey'
  };

  return (
    <div className="space-y-16">
      
      {/* Intro Grid - Vidya Dandekar Personal Heritage */}
      <section id="heritage-story" className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-white/5 text-[var(--accent)] px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[var(--border)]">
              <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>{tStory.badge}</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] tracking-wide leading-tight">
              {tStory.titleLine1} <br />
              <span className="text-[var(--gold)] italic font-medium">{tStory.titleLine2}</span>
            </h2>
            
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              {tStory.desc1}
            </p>
            
            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              {tStory.desc2}
            </p>
            
            <div className="p-5 sm:p-6 bg-white/5 rounded-[20px] border-l-4 border-[var(--accent)] space-y-3 shadow-sm border border-[var(--border)] border-l-4">
              <p className="text-[var(--text)] text-sm leading-relaxed font-semibold italic">
                {tStory.quote}
              </p>
              <p className="text-xs font-bold text-[var(--gold)] tracking-widest uppercase text-right">{tStory.quoteAuthor}</p>
            </div>

            {/* Trust milestones */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">{tStory.hygieneTitle}</h4>
                  <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{tStory.hygieneDesc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--border)] flex items-center justify-center text-[var(--gold)] shrink-0 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text)] uppercase tracking-wider">{tStory.recipeTitle}</h4>
                  <p className="text-[10px] text-[var(--text-muted)] mt-0.5">{tStory.recipeDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Picture Gallery Frame */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-[24px] overflow-hidden border border-[var(--border)] shadow-xl relative bg-white/5 group">
              <ImageWithFallback
                src="/about-us.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                alt="Vidya Dandekar Kitchen Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">Homemade Purity</div>
                <h3 className="font-serif text-lg font-bold tracking-wide">{lang === 'mr' ? 'विद्या दांडेकर यांचे किचन' : lang === 'hi' ? 'विद्या दांडेकर की रसोई' : "Vidya Dandekar's Kitchen"}</h3>
                <p className="text-[11px] text-white/70">Dhayari, Pune, Maharashtra</p>
              </div>
            </div>
            
            {/* Decal badge overlay */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--surface)] p-3.5 rounded-[16px] shadow-lg border border-[var(--border)] flex items-center gap-3 max-w-[210px] backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/15 flex items-center justify-center text-[var(--accent)] shrink-0 border border-[var(--accent)]/20 animate-pulse">
                <Heart className="w-5.5 h-5.5 fill-[var(--accent)]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text)]">{tStory.decalTitle}</div>
                <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{tStory.decalDesc}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Process Stepper */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[var(--surface)] backdrop-blur-xl rounded-[24px] border border-[var(--border)] p-6 sm:p-8 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[2px] block mb-2">{tStory.processHeading}</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-wide">{tStory.processTitle}</h3>
            <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
              {tStory.processDesc}
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="flex justify-between border-b border-[var(--border)] pb-2 overflow-x-auto scrollbar-none gap-2">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 text-center whitespace-nowrap shrink-0 px-3 cursor-pointer ${
                    isActive
                      ? 'border-[var(--accent)] text-[var(--accent)] font-bold'
                      : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {tStory.stepLabel} {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Step Detail Panel */}
          <div className="bg-white/5 p-6 rounded-[16px] border border-[var(--border)] mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-[var(--border)] shrink-0 text-[var(--gold)]">
                      {steps[activeStep].icon}
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[var(--text)] tracking-wide">{steps[activeStep].title}</h4>
                  </div>
                  
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{steps[activeStep].desc}</p>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-bold bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{steps[activeStep].highlight}</span>
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-end">
                  {activeStep < steps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep((prev) => prev + 1)}
                      className="text-xs font-bold text-[var(--text)] bg-white/5 px-4 py-2.5 border border-[var(--border)] rounded-xl hover:bg-white/10 hover:border-[var(--border-hover)] transition-all cursor-pointer flex items-center gap-1.5 select-none"
                    >
                      <span>{tStory.btnNext}</span>
                      <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveStep(0)}
                      className="text-xs font-bold text-[var(--text)] bg-white/5 px-4 py-2.5 border border-[var(--border)] rounded-xl hover:bg-white/10 hover:border-[var(--border-hover)] transition-all cursor-pointer flex items-center gap-1.5 select-none"
                    >
                      <span>{tStory.btnRestart}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Deep Culinary Heritage SEO Article Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[var(--accent)]/10 text-[var(--accent)] px-3.5 py-1 rounded-full text-xs font-bold border border-[var(--accent)]/20">
              <Award className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>
                {lang === 'mr' 
                  ? 'अस्सल पुणेरी फराळ आणि घरगुती चव' 
                  : lang === 'hi' 
                    ? 'असली पुणेरी स्वाद और घरेलू मिठास' 
                    : 'Authentic Pune Snacking Heritage'}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-wide">
              {lang === 'mr' ? (
                <>महाराष्ट्राची समृद्ध खाद्यपरंपरा: <br /><span className="text-[var(--gold)] italic font-medium">स्वादम् फूड्सचा पुण्यातील चवदार प्रवास</span></>
              ) : lang === 'hi' ? (
                <>महाराष्ट्र की समृद्ध खाद्य परंपरा: <br /><span className="text-[var(--gold)] italic font-medium">स्वादम् फूड्स का पुणे में लजीज सफर</span></>
              ) : (
                <>Deep-Rooted Snacking Traditions of Maharashtra: <br /><span className="text-[var(--gold)] italic font-medium">The Culinary Journey of Swadam Foods in Pune</span></>
              )}
            </h3>

            <div className="space-y-4 text-[var(--text-muted)] text-sm leading-relaxed font-sans">
              <p>
                {lang === 'mr' ? (
                  'स्वादम् फूड्सची स्थापना अस्सल घरगुती आणि पारंपारिक भारतीय खाद्यपदार्थांची समृद्ध परंपरा जिवंत ठेवण्याच्या ध्येयाने झाली आहे. पुण्यातील धायरी या निसर्गरम्य परिसरातून विद्या दांडेकर यांनी सुरू केलेले हे घरगुती किचन शुद्धता, उत्कृष्ट चव आणि आरोग्यासाठी अत्यंत सुरक्षित उत्पादनांसाठी ओळखले जाते. आमच्याकडे साजुक तुपातील शंकरपाळे, तिखट-मीठ शंकरपाळे आणि अत्यंत खुसखुशीत स्पेशल चिवडा पारंपारिक पद्धतीने बनवला जातो.'
                ) : lang === 'hi' ? (
                  'स्वादम् फूड्स की शुरुआत शुद्ध घरेलू और पारंपरिक भारतीय व्यंजनों की समृद्ध विरासत को संजोए रखने के उद्देश्य से हुई है। पुणे के धायरी क्षेत्र से संचालित, विद्या दांडेकर द्वारा स्थापित यह घरेलू रसोई शुद्धता, उत्कृष्ट स्वाद और सेहतमंद व्यंजनों के लिए प्रतिबद्ध है। हमारे साजुक घी (शुद्ध गाय का घी) की शंकरपाली, चटपटी शंकरपाली और कुरकुरा स्पेशल चिवड़ा अपनी शुद्धता के लिए पुणेभर में प्रसिद्ध है।'
                ) : (
                  'Swadam Foods is born out of a passion to keep the rich culinary legacy of traditional Indian snacks and sweets alive. Founded by Vidya Dandekar in the scenic neighborhood of Dhayari, Pune, our home-kitchen is dedicated to crafting premium quality, healthy, and authentic savories. From our signature flaky Sajuk Tup (pure cow ghee) Shankarpali to crispy, savory Special Chivda, we offer the true homemade taste of Maharashtra.'
                )}
              </p>

              <p>
                {lang === 'mr' ? (
                  'स्वादम् फूड्समधील प्रत्येक पदार्थ मागणीनुसार अगदी ताजा तयार केला जातो. आम्ही शंकरपाळ्यांसाठी लागणारे पीठ मोहन तंत्राचा वापर करून शुद्ध गाईच्या तुपात (साजुक तूप) मळतो, ज्यामुळे पदार्थाला अप्रतिम थर आणि तोंडात वितळणारी मऊ चव मिळते. आम्ही बाहेरून तयार मसाले आणण्याऐवजी स्वतः अख्खे मसाले भाजून घरगुती पद्धतीने कुटतो. यामुळे मसाल्यांचा खरा सुवास टिकून राहतो. आमच्या पदार्थांमध्ये कोणतेही रासायनिक प्रिझर्व्हेटिव्ह, कृत्रिम रंग किंवा खायचा सोड्याचा वापर केला जात नाही.'
                ) : lang === 'hi' ? (
                  'हमारा मानना है कि खाने का असली आनंद उसकी ताजगी में है। इसीलिए स्वादम् फूड्स पर हर ऑर्डर पूरी तरह ताजा तैयार किया जाता है। मैदे में शुद्ध गाय के घी का गर्म मोयन (Moyan technique) मिलाकर आटा गूंथने से लेकर मसालों को भूनने तक, हर प्रक्रिया हाथ से की जाती है। हम बाहर से खरीदे गए मसालों के बजाय विद्या दांडेकर द्वारा हस्त-चयनित और पीसे गए मसालों का उपयोग करते हैं। हमारे उत्पादों में किसी भी प्रकार का कृत्रिम रंग, रासायनिक संरक्षक या सोडा नहीं मिलाया जाता।'
                ) : (
                  'Every item at Swadam Foods is prepared fresh on order in small batches. We hand-knead flour using traditional techniques such as "Moyan" (infusing warm pure cow ghee into dough) to achieve that signature melt-in-the-mouth layered crispiness. Instead of using generic pre-packaged commercial spices, Vidya Dandekar hand-roasts whole spices and grinds them herself. We believe in absolute purity, which means zero chemical preservatives, zero artificial colors, and zero baking soda.'
                )}
              </p>

              <p>
                {lang === 'mr' ? (
                  'तुमच्या रोजच्या चहाची वेळ आनंददायी करायची असो, किंवा घरगुती समारंभ, लग्नाची ऑर्डर, कॉर्पोरेट इव्हेंट्स, वाढदिवस, किंवा दिवाळी-गणेशोत्सवाचा पारंपारिक फराळ असो; स्वादम् फूड्स हा तुमचा हक्काचा सोबती आहे. आम्ही संपूर्ण पुणे आणि धायरी परिसरामध्ये ताजी आणि सुरक्षित डिलिव्हरी देतो. प्रत्येक ऑर्डर ग्राहकांच्या वैयक्तिक गरजेनुसार आणि पूर्ण काळजीने पॅक केली जाते.'
                ) : lang === 'hi' ? (
                  'दैनिक चाय के नाश्ते से लेकर शादी-ब्याह, जन्मदिन, त्योहारों, और पुणे में कॉर्पोरेट गिफ्टिंग या फेस्टिवल फराळ बॉक्स के लिए स्वादम् फूड्स आपका भरोसेमंद साथी है। हम पुणे के हर कोने और धायरी क्षेत्र में शुद्धता और घर जैसा स्नेह पहुंचाते हैं। ग्राहकों की पसंद के अनुसार मसाले और घी की मात्रा को भी संतुलित किया जा सकता है।'
                ) : (
                  'Whether you are looking for classic snacks for your daily tea-time, bulk catering for family celebrations, wedding orders, birthdays, corporate events in Pune, or festive faral boxes for Diwali and Ganesh Chaturthi, Swadam Foods is your trusted partner. We deliver across Dhayari, Sinhagad Road, and all areas of Pune, Maharashtra, ensuring that every package arrives with the same homemade warmth and fresh, long-lasting crunchiness.'
                )}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Quick Keyword Highlights Cards */}
            <div className="bg-white/5 p-6 rounded-[24px] border border-[var(--border)] space-y-4">
              <h4 className="font-serif text-base font-bold text-[var(--text)] flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[var(--gold)]" />
                <span>
                  {lang === 'mr' ? 'शुद्धतेचे ३ नियम' : lang === 'hi' ? 'शुद्धता के 3 नियम' : 'Our Purity Checklist'}
                </span>
              </h4>

              <ul className="space-y-3.5 text-xs text-[var(--text-muted)] font-sans">
                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text)] font-semibold">
                      {lang === 'mr' ? '१००% साजुक तूप (Cow Ghee):' : lang === 'hi' ? '100% शुद्ध गाय का घी:' : '100% Pure Cow Ghee (Sajuk Tup):'}
                    </strong>{' '}
                    {lang === 'mr' ? 'शून्य डालडा किंवा कृत्रिम बटर. आम्ही फक्त शुद्ध गाईचे तूप वापरतो.' : lang === 'hi' ? 'शून्य डालडा या कृत्रिम मक्खन। हम केवल शुद्ध गाय का घी उपयोग करते हैं।' : 'Zero vanaspati or artificial butter. We use only high-grade cow ghee for that natural rich aroma.'}
                  </div>
                </li>

                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text)] font-semibold">
                      {lang === 'mr' ? 'केमिकल किंवा प्रिजर्व्हेटिव्ह नाही:' : lang === 'hi' ? 'कोई संरक्षक या रसायन नहीं:' : 'No Chemical Preservatives:'}
                    </strong>{' '}
                    {lang === 'mr' ? 'पदार्थ दीर्घकाळ ताजे राहण्यासाठी आम्ही कोणतीही कृत्रिम रसायने घालत नाही.' : lang === 'hi' ? 'ताजगी बनाए रखने के लिए कोई हानिकारक रसायन या प्रिजर्वेटिव नहीं मिलाए जाते।' : 'We do not add any chemicals or additives. Airtight food-grade packing preserves natural shelf life.'}
                  </div>
                </li>

                <li className="flex gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text)] font-semibold">
                      {lang === 'mr' ? 'ताजे आणि आरोग्यदायी साहित्य:' : lang === 'hi' ? 'ताजा और सेहतमंद सामग्री:' : 'Fresh & Handpicked Ingredients:'}
                    </strong>{' '}
                    {lang === 'mr' ? 'दररोज सकाळी फ्रेश बॅचेस तयार होतात. तेल कधीही दुसऱ्यांदा तापवले जात नाही.' : lang === 'hi' ? 'प्रतिदिन सुबह ताजी बैच तैयार की जाती है। तेल को कभी दोबारा इस्तेमाल नहीं किया जाता।' : 'Prepared fresh daily in a super-clean home-kitchen. We never reuse frying oil.'}
                  </div>
                </li>
              </ul>
            </div>

            {/* Local business summary widget for search engine context */}
            <div className="bg-[var(--accent)]/5 p-6 rounded-[24px] border border-[var(--border)] space-y-3.5">
              <h4 className="font-serif text-sm font-bold text-[var(--gold)]">
                {lang === 'mr' ? 'अधिकृत संपर्क आणि माहिती' : lang === 'hi' ? 'आधिकारिक संपर्क एवं जानकारी' : 'Official Swadam Foods Registry'}
              </h4>

              <div className="space-y-2 text-xs text-[var(--text-muted)] font-sans">
                <p>
                  <strong>{lang === 'mr' ? 'मालक:' : lang === 'hi' ? 'संचालक:' : 'Owner:'}</strong> Vidya Dandekar (विद्या दांडेकर)
                </p>
                <p>
                  <strong>{lang === 'mr' ? 'पत्ता:' : lang === 'hi' ? 'पता:' : 'Location Address:'}</strong> Near Dhayari Phata, Dhayari, Pune, Maharashtra, India - 411041
                </p>
                <p>
                  <strong>{lang === 'mr' ? 'फोन / व्हॉट्सॲप:' : lang === 'hi' ? 'फ़ोन / व्हाट्सएप:' : 'Phone / WhatsApp:'}</strong> +91 88888 51522 / +91 93566 14958
                </p>
                <p>
                  <strong>{lang === 'mr' ? 'कार्यक्षेत्र:' : lang === 'hi' ? 'सेवा क्षेत्र:' : 'Service Area:'}</strong> Dhayari, Sinhagad Road, Kothrud, Deccan, Camp, Wakad, Baner, and all areas of Pune City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Bulk Inquiry Form */}
      <BulkInquiryForm lang={lang} />

      {/* Embedded FAQs Section */}
      <FAQSection lang={lang} />

    </div>
  );
}
