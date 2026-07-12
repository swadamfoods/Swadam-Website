import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, HelpCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { WHATSAPP_URL_NUMBER, WHATSAPP_NUMBER } from '../data';
import { Language } from '../translations';

interface BulkInquiryFormProps {
  lang: Language;
}

export function BulkInquiryForm({ lang }: BulkInquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('All Products (Mix Gifting Hamper)');
  const [quantity, setQuantity] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Dynamic localization dictionary
  const tForm = {
    tag: lang === 'mr' ? 'घाऊक आणि कॉर्पोरेट ऑर्डर्स' : lang === 'hi' ? 'थोक और कॉर्पोरेट ऑर्डर' : 'Bulk & Corporate Orders',
    title: lang === 'mr' 
      ? 'घरगुती खमंग पदार्थांसह सण आणि कौटुंबिक सोहळे साजरे करा' 
      : lang === 'hi' 
      ? 'उत्कृष्ट घरेलू स्नैक्स के साथ त्योहार और उपहार मनाएं' 
      : 'Celebrate Festivals & Gifting with Genuine Homemade Snacks',
    desc1: lang === 'mr'
      ? 'पुण्यात लग्नकार्य, मुंज, गृहप्रवेश किंवा इतर कौटुंबिक सोहळ्यांचे नियोजन करत आहात? किंवा तुमच्या मित्रमैत्रिणींना आणि कर्मचाऱ्यांना सणानिमित्त उत्कृष्ट पारंपरिक दिवाळी फराळ किंवा स्वादिष्ट भेटवस्तूंचे बॉक्स पाठवू इच्छिता?'
      : lang === 'hi'
      ? 'क्या आप पुणे में शादी, गृहप्रवेश, पारिवारिक समारोह या दिवाली/त्योहारों के लिए अपने कर्मचारियों और दोस्तों को उपहार देने की योजना बना रहे हैं?'
      : 'Are you planning a wedding, pre-wedding ceremony, thread ceremony, housewarming, or family event? Or looking for pristine, authentic Diwali/festive faral hampers for your employees or friends in Pune?',
    desc2: lang === 'mr'
      ? 'आम्ही ५ किलो आणि त्याहून अधिक वजनाच्या मोठ्या ऑर्डर्ससाठी विशेष सवलत देतो. तुमच्या सोहळ्यानुसार आकर्षक पॅकेजिंग, लहान पाकिटे (उदा. १०० ग्रॅम सजावटीचे पॅक्स) किंवा तुमच्या आवडीचे विविध पदार्थ एकाच बॉक्समध्ये आकर्षक शुभेच्छा पत्रासह सजवून देऊ शकतो.'
      : lang === 'hi'
      ? 'हम 5 किलो और उससे अधिक के थोक ऑर्डर के लिए विशेष छूट देते हैं। हम आपकी पसंद के अनुसार आकर्षक पैकेजिंग (जैसे 100 ग्राम के छोटे सजावटी पैक) या कस्टम ग्रीटिंग टैग के साथ उपहार बॉक्स तैयार कर सकते हैं।'
      : 'We offer special discounts for bulk purchases starting from 5 kg and above. We can also prepare customized packaging, custom-weight pouches (e.g. 100g decorative packs), or mix-and-match festive boxes with custom greeting tags.',
    feat1Title: lang === 'mr' ? 'हवे तसे वजन:' : lang === 'hi' ? 'कस्टम वजन:' : 'Customized Weights:',
    feat1Desc: lang === 'mr' ? 'तुमच्या गरजेनुसार १०० ग्रॅमपासून ते २ किलोपर्यंत पॅक साईज करून मिळेल.' : lang === 'hi' ? 'आपकी पार्टी के लिए 100 ग्राम से 2 किलो तक की पैक साइज।' : 'Pack sizes from 100g to 2kg tailored to your party.',
    feat2Title: lang === 'mr' ? 'आकर्षक डिझाईन आणि पॅकिंग:' : lang === 'hi' ? 'सुंदर पैकेजिंग:' : 'Personalized Gifting:',
    feat2Desc: lang === 'mr' ? 'प्रत्येक पॅक आकर्षक शुभेच्छा पत्र (Greeting Tag) आणि रिबनने सजवून मिळेल.' : lang === 'hi' ? 'कस्टम ग्रीटिंग टैग के साथ सुंदर हस्तनिर्मित सजावट।' : 'Beautiful handmade outer wrapping with custom-designed tags.',
    helpTitle: lang === 'mr' ? 'त्वरित माहिती हवी आहे?' : lang === 'hi' ? 'त्वरित मूल्य सूची चाहिए?' : 'Need a quick quotation?',
    helpDesc: lang === 'mr'
      ? 'खालील फॉर्म भरा आणि सबमिट करा. तुमची चौकशी थेट विद्या दांडेकर यांच्याकडे पाठवण्यासाठी व्हॉट्सॲपवर मेसेज तयार होईल.'
      : lang === 'hi'
      ? 'अपनी आवश्यकताएं भरें और जमा करें। व्हाट्सएप आपके विवरण के साथ खुल जाएगा ताकि हम सीधे मूल्य पर चर्चा कर सकें।'
      : 'Fill in your requirements and submit. WhatsApp will open pre-filled with your custom inquiry so we can chat and finalize pricing!',
    formTitle: lang === 'mr' ? 'घाऊक चौकशी अर्ज' : lang === 'hi' ? 'थोक पूछताछ फॉर्म' : 'Bulk Inquiry Form',
    formSubtitle: lang === 'mr' ? 'विद्या दांडेकर यांच्याशी थेट संपर्क साधण्यासाठी कृपया खालील माहिती भरा.' : lang === 'hi' ? 'सीधे विद्या दांडेकर को पूछताछ भेजने के लिए विवरण दर्ज करें।' : 'Enter details below to send a structured inquiry directly to Vidya Dandekar.',
    successTitle: lang === 'mr' ? 'चौकशी यशस्वीरित्या तयार झाली!' : lang === 'hi' ? 'पूछताछ सफलतापूर्वक तैयार हुई!' : 'Inquiry Prepared Successfully!',
    successDesc: lang === 'mr' 
      ? `व्हॉट्सॲप उघडले गेले आहे. मेसेज न गेल्यास तुम्ही विद्या ताईंना थेट संपर्क साधू शकता.`
      : lang === 'hi'
      ? `व्हाट्सएप खुल गया है। यदि यह स्वचालित रूप से नहीं खुलता है, तो आप विद्या ताई को सीधे संपर्क कर सकते हैं।`
      : 'WhatsApp was launched. If it didn\'t open automatically, you can message Vidya tai directly.',
    labelName: lang === 'mr' ? 'तुमचे नाव' : lang === 'hi' ? 'आपका नाम' : 'Your Name',
    labelPhone: lang === 'mr' ? 'फोन नंबर' : lang === 'hi' ? 'फ़ोन नंबर' : 'Phone Number',
    labelProducts: lang === 'mr' ? 'आवश्यक पदार्थ' : lang === 'hi' ? 'उत्पाद की आवश्यकता' : 'Products Needed',
    labelQuantity: lang === 'mr' ? 'अंदाजे वजन/नग' : lang === 'hi' ? 'अनुमानित मात्रा' : 'Estimated Quantity',
    labelPurpose: lang === 'mr' ? 'कार्यक्रमाचा तपशील किंवा सविस्तर मागणी (ऐच्छिक)' : lang === 'hi' ? 'समारोह विवरण और कस्टमाइजेशन (वैकल्पिक)' : 'Event Details & Custom Requests (Optional)',
    placeholderName: lang === 'mr' ? 'उदा. आनंद कुलकर्णी' : lang === 'hi' ? 'उदा. आनंद कुलकर्णी' : 'e.g. Anand Kulkarni',
    placeholderPhone: lang === 'mr' ? 'उदा. ९८७६५४३२१०' : lang === 'hi' ? 'उदा. 9876543210' : 'e.g. +91 9876543210',
    placeholderQuantity: lang === 'mr' ? 'उदा. १५ किलो, किंवा ४० बॉक्स' : lang === 'hi' ? 'उदा. 15 किलो, या 40 डिब्बे' : 'e.g. 15 kg, or 40 boxes',
    placeholderPurpose: lang === 'mr' 
      ? 'उदा. पुढच्या आठवड्यात दिवाळीसाठी २०० ग्रॅम चे ४० मिक्स्ड बॉक्स हवे आहेत, सोबत ग्रीटिंग कार्ड...'
      : lang === 'hi'
      ? 'उदा. अगले सप्ताह तक पारिवारिक समारोह के लिए 200 ग्राम के 40 मिश्रित बॉक्स चाहिए...'
      : 'e.g. Need 40 boxes of 200g assortments for family festival gifting by next week, with greeting tag...',
    btnSubmitting: lang === 'mr' ? 'मेसेज तयार होत आहे...' : lang === 'hi' ? 'संदेश तैयार हो रहा है...' : 'Formulating WhatsApp request...',
    btnSubmit: lang === 'mr' ? 'घाऊक चौकशी पाठवा' : lang === 'hi' ? 'थोक पूछताछ सबमिट करें' : 'Submit & Send Bulk Inquiry',
    footerLocation: lang === 'mr' ? 'धायरी पुणे येथून • संपूर्ण भारतात सुरक्षित डिलिव्हरी' : lang === 'hi' ? 'धायरी पुणे से • पूरे भारत में सुरक्षित डिलिवरी' : 'Based in Dhayari, Pune • Safe Shipping India-wide',
    footerPhone: lang === 'mr' ? 'थेट फोन करा:' : lang === 'hi' ? 'सीधा संपर्क:' : 'Direct Line:'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedQuantity = quantity.trim();

    if (trimmedName.length < 2) {
      setErrorMsg(
        lang === 'mr' 
          ? 'कृपया तुमचे नाव लिहा (कमीतकमी २ अक्षरे).' 
          : lang === 'hi' 
            ? 'कृपया अपना नाम लिखें (कम से कम 2 अक्षर)।' 
            : 'Please enter a valid name (at least 2 characters).'
      );
      return;
    }

    // Support Indian (+91/0) or international formats, min 10 digits
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setErrorMsg(
        lang === 'mr' 
          ? 'कृपया १० अंकी वैध फोन नंबर लिहा.' 
          : lang === 'hi' 
            ? 'कृपया 10 अंकों का वैध फोन नंबर लिखें।' 
            : 'Please enter a valid 10-digit phone number.'
      );
      return;
    }

    if (trimmedQuantity.length < 1) {
      setErrorMsg(
        lang === 'mr' 
          ? 'कृपया अंदाजे वजन किंवा नग लिहा.' 
          : lang === 'hi' 
            ? 'कृपया अनुमानित मात्रा या वजन दर्ज करें।' 
            : 'Please enter an estimated quantity or weight.'
      );
      return;
    }

    setIsSubmitting(true);

    // Compile beautiful bulk message based on language selection
    let text = '';
    if (lang === 'mr') {
      text = `*स्वादम् फूड्स घाऊक चौकशी / Bulk Inquiry*\n\n`;
      text += `नमस्कार विद्या ताई, मला आपल्या घरगुती पदार्थांच्या घाऊक खरेदी संदर्भात चौकशी करायची आहे:\n\n`;
      text += `• *चौकशी करणाऱ्याचे नाव:* ${name.trim()}\n`;
      text += `• *संपर्क फोन नंबर:* ${phone.trim()}\n`;
      text += `• *पसंतीचे पदार्थ:* ${selectedProduct}\n`;
      text += `• *अंदाजे वजन/नग:* ${quantity.trim()}\n`;
      text += `• *कार्यक्रमाचा तपशील:* ${purpose.trim() || 'सर्वसाधारण घाऊक खरेदी'}\n\n`;
      text += `कृपया घाऊक सवलतीचे दर, पॅकिंग पर्याय आणि वेळेचे नियोजन याबद्दल माहिती द्यावी. धन्यवाद!`;
    } else if (lang === 'hi') {
      text = `*स्वादम् फूड्स थोक पूछताछ / Bulk Inquiry*\n\n`;
      text += `नमस्ते विद्या ताई, मुझे आपके घर के बने स्नैक्स के थोक ऑर्डर के बारे में पूछताछ करनी है:\n\n`;
      text += `• *पूछताछकर्ता का नाम:* ${name.trim()}\n`;
      text += `• *संपर्क नंबर:* ${phone.trim()}\n`;
      text += `• *पसंदीदा उत्पाद:* ${selectedProduct}\n`;
      text += `• *अनुमानित मात्रा:* ${quantity.trim()}\n`;
      text += `• *समारोह/विवरण:* ${purpose.trim() || 'सामान्य थोक खरीद'}\n\n`;
      text += `कृपया थोक दरें, पैकेजिंग कस्टमाइजेशन और समय अवधि की जानकारी साझा करें। धन्यवाद!`;
    } else {
      text = `*Swadam Foods Bulk/Corporate Inquiry*\n\n`;
      text += `Hello Vidya tai, I have a bulk inquiry regarding your handmade snacks:\n\n`;
      text += `• *Inquirer Name:* ${name.trim()}\n`;
      text += `• *Contact Phone:* ${phone.trim()}\n`;
      text += `• *Product of Interest:* ${selectedProduct}\n`;
      text += `• *Required Quantity:* ${quantity.trim()}\n`;
      text += `• *Event/Purpose:* ${purpose.trim() || 'General Bulk Purchase'}\n\n`;
      text += `Please share bulk pricing discounts, packing customizations, and production capability for this requirement. Thank you!`;
    }

    const encodedText = encodeURIComponent(text);
    const waLink = `https://wa.me/${WHATSAPP_URL_NUMBER}?text=${encodedText}`;

    setTimeout(() => {
      window.open(waLink, '_blank');
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName('');
      setPhone('');
      setQuantity('');
      setPurpose('');
      
      // Clear success after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 450);
  };

  return (
    <section id="bulk" className="py-16 border-t border-[var(--border)] bg-black/5">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Informational column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[2px]">{tForm.tag}</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text)] tracking-wide leading-tight">
              {tForm.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              {tForm.desc1}
            </p>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              {tForm.desc2}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-[var(--text)]">
                  <strong>{tForm.feat1Title}</strong> {tForm.feat1Desc}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-[var(--text)]">
                  <strong>{tForm.feat2Title}</strong> {tForm.feat2Desc}
                </p>
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-[var(--border)] rounded-2xl text-xs text-[var(--text-muted)] flex items-start gap-2.5">
              <HelpCircle className="w-4.5 h-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[var(--text)]">{tForm.helpTitle}</p>
                <p className="mt-1 leading-relaxed">
                  {tForm.helpDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--surface)] backdrop-blur-xl rounded-[24px] border border-[var(--border)] p-6 sm:p-8 shadow-lg relative overflow-hidden h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-[var(--text)] tracking-wide mb-1">{tForm.formTitle}</h3>
                <p className="text-xs text-[var(--text-muted)] mb-6">{tForm.formSubtitle}</p>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-emerald-950/40 text-emerald-300 rounded-2xl border border-emerald-500/25 flex items-start gap-3 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-emerald-200">{tForm.successTitle}</p>
                      <p className="text-[11px] text-emerald-400/80 font-normal mt-0.5">
                        {tForm.successDesc} <strong>{WHATSAPP_NUMBER}</strong>.
                      </p>
                    </div>
                  </motion.div>
                )}

                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-rose-950/40 text-rose-300 rounded-2xl border border-rose-500/25 flex items-start gap-3 text-xs"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-rose-200">
                        {lang === 'mr' ? 'चुकीची माहिती!' : lang === 'hi' ? 'त्रुटि!' : 'Validation Error'}
                      </p>
                      <p className="text-[11px] text-rose-400/80 font-normal mt-0.5">
                        {errorMsg}
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bulk-name" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                        {tForm.labelName}
                      </label>
                      <input
                        id="bulk-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={tForm.placeholderName}
                        className="w-full bg-white/5 border border-[var(--border)] px-4 py-3 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] placeholder:text-white/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="bulk-phone" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                        {tForm.labelPhone}
                      </label>
                      <input
                        id="bulk-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={tForm.placeholderPhone}
                        className="w-full bg-white/5 border border-[var(--border)] px-4 py-3 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] placeholder:text-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bulk-product" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                        {tForm.labelProducts}
                      </label>
                      <select
                        id="bulk-product"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full bg-white/5 border border-[var(--border)] px-4 py-3 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] transition-all cursor-pointer"
                      >
                        <option value="All Products (Mix Gifting Hamper)" className="bg-[rgba(20,15,10,0.95)] text-white">All Products (Mix Gifting Hamper)</option>
                        <option value="Salted Shankarpali" className="bg-[rgba(20,15,10,0.95)] text-white">Salted Shankarpali</option>
                        <option value="Tangy Shankarpali" className="bg-[rgba(20,15,10,0.95)] text-white">Tangy Shankarpali</option>
                        <option value="Special Chivda" className="bg-[rgba(20,15,10,0.95)] text-white">Special Chivda</option>
                        <option value="Custom Assortment" className="bg-[rgba(20,15,10,0.95)] text-white">Custom Assortment</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bulk-quantity" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                        {tForm.labelQuantity}
                      </label>
                      <input
                        id="bulk-quantity"
                        type="text"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={tForm.placeholderQuantity}
                        className="w-full bg-white/5 border border-[var(--border)] px-4 py-3 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] placeholder:text-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bulk-purpose" className="block text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">
                      {tForm.labelPurpose}
                    </label>
                    <textarea
                      id="bulk-purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      placeholder={tForm.placeholderPurpose}
                      rows={3}
                      className="w-full bg-white/5 border border-[var(--border)] px-4 py-3 rounded-xl text-sm text-[var(--text)] focus:outline-none focus:border-[var(--border-hover)] placeholder:text-white/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#25D366] hover:bg-[#20ba56] disabled:bg-stone-600 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(37,211,102,0.2)] hover:shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer text-sm animate-pulse-subtle"
                    >
                      {isSubmitting ? (
                        <span>{tForm.btnSubmitting}</span>
                      ) : (
                        <>
                          <MessageSquare className="w-5 h-5 text-white" />
                          <span>{tForm.btnSubmit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold gap-3">
                <span>{tForm.footerLocation}</span>
                <span className="text-[var(--text)] flex items-center gap-1">
                  {tForm.footerPhone} <a href={`tel:${WHATSAPP_NUMBER}`} className="underline hover:text-[var(--gold)]">{WHATSAPP_NUMBER}</a>
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
