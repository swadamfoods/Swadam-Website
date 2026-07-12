export type Language = 'en' | 'hi' | 'mr';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Header
    navHome: 'Home',
    navOurSnacks: 'Our Snacks',
    navOurStory: 'Our Story',
    navBulkInquiry: 'Bulk Gifting',
    themeDark: 'Dark Mode',
    themeLight: 'Light Mode',

    // Hero Section
    heroBadge: '100% Homemade Savories Prepared Fresh',
    heroTitlePart1: 'Purity in Every Bite,',
    heroTitlePart2: 'Swadam in Every Snack!',
    heroDesc: 'Experience authentic, traditional Maharashtrian delicacies freshly prepared in Pune. Kneaded with pure cow ghee (Sajuk Tup) and premium, double-filtered oils. Completely handmade by Vidya Dandekar with absolute hygiene and premium ingredients.',
    btnExplore: 'Explore Collection',
    btnOurStory: 'Our Story & Bulk Inquiry',
    ratingLabel: '5.0 Star Rated',
    lovedByPune: 'Loved by local families in Pune',

    // Trust Pillars
    pillar1Title: '100% Homemade',
    pillar1Desc: 'Made entirely by Vidya Dandekar in small precise home kitchen batches.',
    pillar2Title: 'Fresh Preparation',
    pillar2Desc: 'No stale stocks. Prepared freshly upon receiving your WhatsApp request.',
    pillar3Title: 'Premium Ingredients',
    pillar3Desc: 'Pure wheat flour, filtered oils, pure Cow Ghee (Sajuk Tup). Zero chemicals.',
    pillar4Title: 'Seamless Ordering',
    pillar4Desc: 'Add packs to bag, review subtotal, then finalize on WhatsApp instantly.',

    // Reviews Section
    reviewsHeading: 'Reviews',
    reviewsTitle: 'Loved by Pune Families',
    reviewsSubtitle: 'Read what actual clients say about our signature chivda and shankarpali packs.',

    // Collection Section
    collHeading: 'Our Snacking Collection',
    collTitle: 'Authentic Homemade Savories',
    collSubtitle: 'Select your preferred pack sizes right on the product cards to update rates, or click any card to view cooking steps, certified specs, and product gallery!',

    // Product Card UI
    btnViewDetails: 'View Details & Media',
    btnAddToCart: 'Add To Order Bag',
    btnInCart: 'Already in Bag',
    selectWeightLabel: 'Select Pack Weight',
    fromLabel: 'From',

    // Basket Drawer
    basketTitle: 'Your Order Bag',
    basketEmpty: 'Your Order Bag is Empty',
    basketExploreKitchen: 'Explore Kitchen Snacks',
    basketSelectedItems: 'Selected Items',
    basketSubtotal: 'Subtotal Amount',
    basketPreparing: 'Preparing Order...',
    basketPlaceWhatsApp: 'Place Order via WhatsApp',
    basketProceed: 'Proceed to Place Order',
    basketDetailsTitle: 'Delivery Details',
    basketYourName: 'Your Name',
    basketMethod: 'Delivery Method',
    basketAddress: 'Complete Address & Pincode',
    basketBack: 'Back to Order Bag',
    basketSummary: 'Order Summary',

    // Product Profile
    profileBack: 'Back to Collection',
    profileSpecifications: 'Craft Specifications',
    profileIngredients: 'Honest Ingredients',
    profileKitchenOrigin: 'Kitchen Origin',
    profileShelfLife: 'Shelf Life',
    profilePrepMethod: 'Preparation Method',
    profilePurityGuarantees: 'Purity Guarantees',
    profileAddToBag: 'Add Selected Pack to Bag',

    // Quick Navigation & Footer
    footerNav: 'Quick Navigation',
    footerReachOut: 'Reach Out Directly',
    footerLocation: 'Kitchen Location',
    footerPhone: 'WhatsApp / Phone',
    footerEmail: 'Email Address',
    footerPrepInfo: '⏰ Preparation: prepared fresh on your booking'
  },
  hi: {
    // Header
    navHome: 'होम',
    navOurSnacks: 'हमारे उत्पाद',
    navOurStory: 'हमारी कहानी',
    navBulkInquiry: 'थोक उपहार',
    themeDark: 'डार्क मोड',
    themeLight: 'लाइट मोड',

    // Hero Section
    heroBadge: '100% घर का बना ताजा नमकीन',
    heroTitlePart1: 'हर निवाले में शुद्धता,',
    heroTitlePart2: 'हर नाश्ते में स्वादम्!',
    heroDesc: 'पुणे में ताज़ा तैयार प्रामाणिक, पारंपरिक महाराष्ट्रीयन व्यंजनों का अनुभव करें। शुद्ध गाय के घी (साजुक तूप) और प्रीमियम, डबल-फिल्टर्ड तेलों से बना। पूरी तरह से विद्या दांडेकर द्वारा पूर्ण स्वच्छता और प्रीमियम सामग्री के साथ हस्तनिर्मित।',
    btnExplore: 'संग्रह देखें',
    btnOurStory: 'हमारी कहानी और थोक पूछताछ',
    ratingLabel: '5.0 स्टार रेटेड',
    lovedByPune: 'पुणे के स्थानीय परिवारों द्वारा पसंदीदा',

    // Trust Pillars
    pillar1Title: '100% घर का बना',
    pillar1Desc: 'पूरी तरह से विद्या दांडेकर द्वारा घरेलू रसोई में छोटे बैचों में बनाया गया।',
    pillar2Title: 'ताज़ा तैयारी',
    pillar2Desc: 'कोई पुराना स्टॉक नहीं। आपका व्हाट्सएप अनुरोध मिलने पर ताज़ा तैयार किया जाता है।',
    pillar3Title: 'प्रीमियम सामग्री',
    pillar3Desc: 'शुद्ध गेहूं का आटा, फिल्टर्ड तेल, शुद्ध गाय का घी (साजुक तूप)। शून्य रसायन।',
    pillar4Title: 'आसान ऑर्डरिंग',
    pillar4Desc: 'बैग में पैक जोड़ें, कुल राशि देखें, फिर तुरंत व्हाट्सएप पर ऑर्डर भेजें।',

    // Reviews Section
    reviewsHeading: 'समीक्षाएं',
    reviewsTitle: 'पुणे के परिवारों का पसंदीदा',
    reviewsSubtitle: 'जानें कि हमारे असली ग्राहक हमारे विशेष चिवड़ा और शंकरपाली पैक के बारे में क्या कहते हैं।',

    // Collection Section
    collHeading: 'हमारा नाश्ता संग्रह',
    collTitle: 'प्रामाणिक घरेलू नमकीन',
    collSubtitle: 'कीमतों को अपडेट करने के लिए उत्पाद कार्ड पर अपने पसंदीदा पैक आकार का चयन करें, या रेसिपी विवरण, प्रमाणित विनिर्देश और उत्पाद गैलरी देखने के लिए क्लिक करें!',

    // Product Card UI
    btnViewDetails: 'विवरण और गैलरी देखें',
    btnAddToCart: 'ऑर्डर बैग में जोड़ें',
    btnInCart: 'बैग में मौजूद है',
    selectWeightLabel: 'पैक वजन चुनें',
    fromLabel: 'न्यूनतम',

    // Basket Drawer
    basketTitle: 'आपका ऑर्डर बैग',
    basketEmpty: 'आपका ऑर्डर बैग खाली है',
    basketExploreKitchen: 'नाश्ता संग्रह देखें',
    basketSelectedItems: 'चयनित आइटम',
    basketSubtotal: 'कुल राशि',
    basketPreparing: 'ऑर्डर तैयार हो रहा है...',
    basketPlaceWhatsApp: 'व्हाट्सएप के माध्यम से ऑर्डर करें',
    basketProceed: 'ऑर्डर विवरण पर आगे बढ़ें',
    basketDetailsTitle: 'वितरण विवरण',
    basketYourName: 'आपका नाम',
    basketMethod: 'वितरण का तरीका',
    basketAddress: 'पूरा पता और पिनकोड',
    basketBack: 'ऑर्डर बैग पर वापस जाएं',
    basketSummary: 'ऑर्डर सारांश',

    // Product Profile
    profileBack: 'संग्रह पर वापस जाएं',
    profileSpecifications: 'उत्पाद विनिर्देश',
    profileIngredients: 'शुद्ध सामग्रियां',
    profileKitchenOrigin: 'रसोई का मूल',
    profileShelfLife: 'शेल्फ लाइफ',
    profilePrepMethod: 'तैयारी की विधि',
    profilePurityGuarantees: 'शुद्धता गारंटी',
    profileAddToBag: 'चयनित पैक बैग में जोड़ें',

    // Quick Navigation & Footer
    footerNav: 'त्वरित नेविगेशन',
    footerReachOut: 'सीधे संपर्क करें',
    footerLocation: 'रसोई का पता',
    footerPhone: 'व्हाट्सएप / फोन',
    footerEmail: 'ईमेल पता',
    footerPrepInfo: '⏰ तैयारी: आपके बुक करने पर ताजा तैयार'
  },
  mr: {
    // Header
    navHome: 'मुख्यपृष्ठ',
    navOurSnacks: 'आमचे खाद्यपदार्थ',
    navOurStory: 'आमची गोष्ट',
    navBulkInquiry: 'घाऊक भेटवस्तू',
    themeDark: 'डार्क मोड',
    themeLight: 'लाइट मोड',

    // Hero Section
    heroBadge: '१००% घरगुती आणि ताज्या चवीचे पदार्थ',
    heroTitlePart1: 'प्रत्येक घासात शुद्धता,',
    heroTitlePart2: 'प्रत्येक पदार्थात स्वादम्!',
    heroDesc: 'पुण्यामध्ये ताजे तयार केलेले अस्सल, पारंपारिक महाराष्ट्रीयन खाद्यपदार्थांचा आस्वाद घ्या. शुद्ध गाईचे तूप (साजुक तूप) आणि प्रीमियम, डबल-फिल्टर तेलाने मळलेले. पूर्ण स्वच्छता आणि उत्कृष्ट साहित्य वापरून विद्या दांडेकर यांनी स्वतः घरगुती पद्धतीने तयार केलेले.',
    btnExplore: 'खाद्यपदार्थ पहा',
    btnOurStory: 'आमची गोष्ट व घाऊक चौकशी',
    ratingLabel: '५.० स्टार मानांकन',
    lovedByPune: 'पुण्यातील कुटुंबांचा विश्वास',

    // Trust Pillars
    pillar1Title: '१००% घरगुती',
    pillar1Desc: 'विद्या दांडेकर यांच्या घरगुती किचनमध्ये लहान बॅचेसमध्ये अत्यंत प्रेमाने तयार केलेले.',
    pillar2Title: 'ताजी तयारी',
    pillar2Desc: 'शिल्लक माल नाही. तुमची व्हॉट्सॲप ऑर्डर मिळाल्यावरच ताजे आणि खमंग बनवले जाते.',
    pillar3Title: 'उत्कृष्ट साहित्य',
    pillar3Desc: 'शुद्ध गव्हाचे पीठ, फिल्टर तेल, शुद्ध गाईचे तूप (साजुक तूप). शून्य रसायने.',
    pillar4Title: 'सुलभ ऑर्डर पद्धत',
    pillar4Desc: 'पिशवीत पॅक जोडा, एकूण किंमत तपासा आणि थेट व्हॉट्सॲपवर ऑर्डर द्या.',

    // Reviews Section
    reviewsHeading: 'अभिप्राय',
    reviewsTitle: 'पुण्यातील कुटुंबांची पसंती',
    reviewsSubtitle: 'आमचे चवदार शंकरपाळे आणि भाजक्या पोह्यांच्या चिवड्याविषयी ग्राहक काय म्हणतात ते वाचा.',

    // Collection Section
    collHeading: 'आमचा खाद्यपदार्थ संग्रह',
    collTitle: 'अस्सल घरगुती चवदार पदार्थ',
    collSubtitle: 'किंमत पाहण्यासाठी थेट कार्डवर वजन निवडा, किंवा साहित्य, कृती, फोटो व व्हिडिओ पाहण्यासाठी कार्डवर क्लिक करा!',

    // Product Card UI
    btnViewDetails: 'माहिती व गॅलरी पहा',
    btnAddToCart: 'ऑर्डर बॅगमध्ये जोडा',
    btnInCart: 'बॅगमध्ये जोडले आहे',
    selectWeightLabel: 'पॅकचे वजन निवडा',
    fromLabel: 'किंमत',

    // Basket Drawer
    basketTitle: 'तुमची ऑर्डर बॅग',
    basketEmpty: 'तुमची ऑर्डर बॅग रिकामी आहे',
    basketExploreKitchen: 'खाद्यपदार्थ पहा',
    basketSelectedItems: 'निवडलेले पदार्थ',
    basketSubtotal: 'एकूण रक्कम',
    basketPreparing: 'ऑर्डर तयार होत आहे...',
    basketPlaceWhatsApp: 'व्हॉट्सॲपद्वारे ऑर्डर पाठवा',
    basketProceed: 'ऑर्डर तपशीलावर जा',
    basketDetailsTitle: 'वितरण तपशील',
    basketYourName: 'तुमचे नाव',
    basketMethod: 'वितरण पद्धत',
    basketAddress: 'पूर्ण पत्ता आणि पिनकोड',
    basketBack: 'ऑर्डर बॅगवर परत जा',
    basketSummary: 'ऑर्डरचा गोषवारा',

    // Product Profile
    profileBack: 'खाद्यपदार्थांवर परत जा',
    profileSpecifications: 'बनवण्याची वैशिष्ट्ये',
    profileIngredients: 'शुद्ध घरगुती साहित्य',
    profileKitchenOrigin: 'किचनचे ठिकाण',
    profileShelfLife: 'टिकण्याची मुदत',
    profilePrepMethod: 'बनवण्याची पद्धत',
    profilePurityGuarantees: 'शुद्धतेची हमी',
    profileAddToBag: 'निवडलेला पॅक बॅगमध्ये जोडा',

    // Quick Navigation & Footer
    footerNav: 'द्रुत नेव्हिगेशन',
    footerReachOut: 'थेट संपर्क साधा',
    footerLocation: 'किचनचे ठिकाण',
    footerPhone: 'व्हॉट्सॲप / फोन',
    footerEmail: 'ईमेल पत्ता',
    footerPrepInfo: '⏰ तयारी: तुमच्या ऑर्डरनुसार ताजे बनवले जाते'
  }
};

// Localized product details mapping
export const PRODUCT_TRANSLATIONS: Record<Language, Record<string, { name: string; subtitle: string; description: string }>> = {
  en: {
    'prod-1': {
      name: 'Salted Shankarpali (Sajuk Tup)',
      subtitle: 'Crispy, hand-rolled savory diamonds kneaded in pure cow ghee.',
      description: 'A traditional teatime companion, made with pure wheat flour and Sajuk Tup. Lightly salted, layered texture, and melts in your mouth.'
    },
    'prod-2': {
      name: 'Spicy Tangy Shankarpali',
      subtitle: 'A sweet, sour, and spicy twist on the classic shankarpali.',
      description: 'Coated with handground dry mango powder (amchur), red chili, and a hint of organic sugar. Bold, addictive Indian spice kick.'
    },
    'prod-3': {
      name: 'Premium Roasted Poha Chivda',
      subtitle: 'Crispy thin roasted rice flakes tossed with premium cashews and peanuts.',
      description: 'Completely oil-roasted light dietary snack. Tossed with premium dry fruits, green chilies, curry leaves, and local Pune spices.'
    }
  },
  hi: {
    'prod-1': {
      name: 'नमकीन शंकरपाली (सजुक तूप)',
      subtitle: 'शुद्ध गाय के घी में गुंथे हुए कुरकुरे, हाथ से बेले हुए नमकीन हीरे।',
      description: 'एक पारंपरिक चाय-समय का साथी, जो शुद्ध गेहूं के आटे और साजुक तूप से बना है। हल्का नमकीन, परतदार बनावट और मुंह में पिघल जाने वाला।'
    },
    'prod-2': {
      name: 'तीखी चटपटी शंकरपाली',
      subtitle: 'क्लासिक शंकरपाली पर एक मीठा, खट्टा और तीखा ट्विस्ट।',
      description: 'हाथ से पिसे हुए अमचूर, लाल मिर्च और जैविक चीनी के संकेत के साथ लेपित। साहसी, लत लगाने वाला भारतीय मसाला किक।'
    },
    'prod-3': {
      name: 'प्रीमियम भुना हुआ पोहा चिवड़ा',
      subtitle: 'कुरकुरे पतले भुने हुए चावल के गुच्छे प्रीमियम काजू और मूंगफली के साथ मिलाए गए।',
      description: 'पूरी तरह से तेल रहित भुना हुआ हल्का आहार नाश्ता। प्रीमियम सूखे मेवों, हरी मिर्च, कढ़ी पत्ते और स्थानीय पुणे मसालों के साथ मिलाया गया।'
    }
  },
  mr: {
    'prod-1': {
      name: 'खमंग शंकरपाळे (साजुक तूप)',
      subtitle: 'शुद्ध गाईच्या तुपात मळलेले, खुसखुशीत आणि कुरकुरीत शंकरपाळे.',
      description: 'चहाच्या वेळेचा पारंपारिक सोबती, जो शुद्ध गव्हाचे पीठ आणि साजुक तूप वापरून बनवला आहे. हलके नमकीन, खुसखुशीत आणि जिभेवर विरघळणारे.'
    },
    'prod-2': {
      name: 'तिखट-मीठ शंकरपाळे (चटपटीत)',
      subtitle: 'पारंपारिक शंकरपाळ्याला दिलेला तिखट, आंबट आणि गोड झटका.',
      description: 'घरगुती आमचूर पावडर, तिखट लाल मिरची आणि सेंद्रिय साखरेचे मिश्रण कोटिंग केलेले. जिभेला चटकदार चव देणारे.'
    },
    'prod-3': {
      name: 'भाजक्या पोह्यांचा चिवडा (प्रीमियम)',
      subtitle: 'पातळ भाजके पोहे, काजू, शेंगदाणे आणि खोबऱ्याचे काप टाकून बनवलेला कुरकुरीत चिवडा.',
      description: 'अतिशय कमी तेलात भाजलेला हलकाफुलका चिवडा. काजू, मनुके, हिरवी मिरची, कढीपत्ता आणि पुण्याचे खास मसाले घातलेले.'
    }
  }
};
