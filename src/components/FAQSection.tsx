import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';
import { Language } from '../translations';

interface FAQSectionProps {
  lang: Language;
}

export function FAQSection({ lang }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Localized FAQs mapping
  const getFaqs = () => {
    if (lang === 'mr') {
      return [
        {
          q: 'मी ऑर्डर कशी देऊ शकतो?',
          a: 'आम्ही ऑर्डर देण्यासाठी थेट व्हॉट्सॲपचा वापर करतो. या वेबसाईटवर तुमचे आवडते पदार्थ आणि वजन निवडून ते ऑर्डर बॅगमध्ये जोडा आणि "व्हॉट्सॲपद्वारे ऑर्डर पाठवा" वर क्लिक करा. यामुळे तुमच्या ऑर्डरची सर्व माहिती असलेली एक सुंदर संदेश तयार होईल, जो तुम्ही थेट विद्या दांडेकर (+91 ८८८८८ ५१५२२) यांना पाठवू शकता.'
        },
        {
          q: 'पदार्थ किती ताजे असतात?',
          a: 'प्रत्येक पिशवी चिवडा किंवा शंकरपाळे हे पुण्यातील धायरी येथे विद्या दांडेकर स्वतः त्यांच्या घरगुती किचनमध्ये अगदी ताजे बनवतात. आम्ही कोणताही शिळा माल साठवून ठेवत नाही. तुमची ऑर्डर मिळाल्यावरच सर्व खमंग पदार्थ तयार केले जातात.'
        },
        {
          q: 'डिलिव्हरी आणि शिपिंगचे शुल्क काय आहे?',
          a: 'धायरी आणि जवळपासच्या परिसरातील ग्राहकांसाठी सेल्फ-पिकअप मोफत उपलब्ध आहे किंवा डन्झो/पोर्टरद्वारे प्रत्यक्ष दराने डिलिव्हरी केली जाऊ शकते. पुणे किंवा भारताच्या इतर शहरांसाठी आम्ही कूरियरद्वारे पाठवतो.'
        },
        {
          q: 'मी दिवाळी फराळ किंवा मोठ्या प्रमाणावर (घाऊक) ऑर्डर करू शकतो का?',
          a: 'होय, नक्कीच! लग्नकार्य, सण-उत्सव (उदा. दिवाळी फराळ), वाढदिवस किंवा कॉर्पोरेट भेटवस्तूंसाठी आम्ही मोठ्या प्रमाणावर ऑर्डर्स स्वीकारतो. विशेष सवलतीसाठी कृपया आमच्या वेबसाईटवरील "घाऊक चौकशी फॉर्म" भरा किंवा थेट व्हॉट्सॲपवर संपर्क साधा.'
        },
        {
          q: 'या पदार्थांची टिकण्याची मुदत (Shelf Life) किती आहे?',
          a: 'आम्ही रिफाइंड राइस ब्रॅन ऑइल, उत्कृष्ट दुहेरी फिल्टर केलेले तेल वापरतो आणि कोणतेही केमिकल प्रिझर्व्हेटिव्ह घालत नाही. चिवडा ४ ते ६ आठवडे आणि शंकरपाळे ३ ते ४ आठवडे हवाबंद डब्यात कोरड्या ठिकाणी ठेवल्यास उत्तम टिकतात.'
        }
      ];
    } else if (lang === 'hi') {
      return [
        {
          q: 'मैं ऑर्डर कैसे दे सकता हूं?',
          a: 'हम सीधे ऑर्डर के लिए व्हाट्सएप का उपयोग करते हैं। वेबसाइट पर अपनी पसंद के स्नैक्स और वजन चुनें, उन्हें ऑर्डर बास्केट में जोड़ें और "व्हाट्सएप के माध्यम से ऑर्डर करें" पर क्लिक करें। इससे एक संदेश स्वचालित रूप से तैयार हो जाएगा, जिसे आप विद्या दांडेकर को (+91 88888 51522) भेज सकते हैं।'
        },
        {
          q: 'स्नैक्स कितने ताजे होते हैं?',
          a: 'चिवड़ा और शंकरपाली का हर एक पैकेट विद्या दांडेकर द्वारा धायरी, पुणे में उनके घर पर पूरी स्वच्छता के साथ ताजा बनाया जाता है। हम कोई पुराना स्टॉक नहीं रखते हैं। ऑर्डर मिलने पर ही ताजा बनाया जाता है।'
        },
        {
          q: 'डिलिवरी और शिपिंग शुल्क क्या हैं?',
          a: 'धायरी और पुणे के आसपास के क्षेत्रों के लिए सेल्फ-पिकअप मुफ्त है, या हम Dunzo/Porter के माध्यम से डिलिवरी की व्यवस्था कर सकते हैं। अन्य शहरों के लिए हम कूरियर पार्टनर्स के माध्यम से शिप करते हैं।'
        },
        {
          q: 'क्या मैं त्योहारों या विशेष अवसरों के लिए थोक ऑर्डर दे सकता हूं?',
          a: 'जी हाँ, बिल्कुल! हम त्योहारों (जैसे दिवाली फराळ), पारिवारिक समारोहों और कॉर्पोरेट गिफ्टिंग के लिए थोक ऑर्डर स्वीकार करते हैं। छूट दरों के लिए कृपया थोक पूछताछ फॉर्म भरें या सीधे व्हाट्सएप पर संदेश भेजें।'
        },
        {
          q: 'इन स्नैक्स की शेल्फ लाइफ क्या है?',
          a: 'चूंकि हम प्रीमियम डबल-फिल्टर्ड तेल, रिफाइंड राइस ब्रान ऑयल का उपयोग करते हैं और कोई रसायन नहीं मिलाते हैं, इसलिए पोहा चिवड़ा 4-6 सप्ताह तक और शंकरपाली 3-4 सप्ताह तक एयरटाइट कंटेनर में बिल्कुल कुरकुरे रहते हैं।'
        }
      ];
    } else {
      return FAQS;
    }
  };

  const activeFaqs = getFaqs();

  const labels = {
    heading: lang === 'mr' ? 'नेहमी विचारले जाणारे प्रश्न' : lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions',
    title: lang === 'mr' ? 'काही शंका आहेत? आमच्याकडे उत्तरे आहेत!' : lang === 'hi' ? 'कोई प्रश्न है? हमारे पास उत्तर हैं' : "Got Questions? We've Got Answers",
    subtitle: lang === 'mr' 
      ? 'आमचे घरगुती खाद्यपदार्थ, ऑर्डर देण्याची सोपी पद्धत, डिलिव्हरी आणि पुण्यातील वितरण याबद्दल ग्राहकांनी विचारलेले नेहमीचे प्रश्न येथे दिले आहेत.'
      : lang === 'hi'
      ? 'हमारे घर के बने स्नैक्स, ऑर्डर करने, बैच शेड्यूल और पुणे में डिलीवरी के बारे में हमारे ग्राहकों द्वारा पूछे जाने वाले सबसे आम सवाल यहां दिए गए हैं।'
      : 'Here are the most common questions our clients ask about our homemade snacks, ordering, batch schedules, and delivery in Pune.'
  };

  return (
    <section id="faqs" className="py-16 border-t border-[var(--border)] bg-black/5">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[2px] block mb-2 font-sans">{labels.heading}</span>
          <h2 className="font-serif text-3xl font-bold text-[var(--text)] tracking-wide">{labels.title}</h2>
          <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {activeFaqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[var(--surface)] backdrop-blur-xl rounded-[16px] border border-[var(--border)] hover:border-[var(--border-hover)] overflow-hidden transition-all duration-350"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-[var(--text)] transition-colors cursor-pointer text-sm"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[var(--gold)] shrink-0" />
                    <span className="leading-tight">{faq.q}</span>
                  </span>
                  <div className="p-1.5 rounded-full bg-white/5 text-[var(--text-muted)] shrink-0 border border-[var(--border)]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-[var(--border)] text-xs text-[var(--text-muted)] leading-relaxed">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
