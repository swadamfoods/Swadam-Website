export type Language = 'en' | 'hi' | 'mr';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Header
    navHome: 'Home',
    navOurSnacks: 'Our Chivda',
    navOurStory: 'Our Story',
    navBulkInquiry: 'Bulk Orders',
    themeDark: 'Dark Mode',
    themeLight: 'Light Mode',

    // Hero Section
    heroBadge: '100% Homemade Fresh Patal Poha Chivda',
    heroTitlePart1: 'Purity in Every Bite,',
    heroTitlePart2: 'Swadam in Every Snack!',
    heroDesc: 'Experience Pune’s favorite authentic Premium Patal Poha Chivda, prepared fresh in 100% refined rice bran oil with double-filtered refining. Completely handmade by Vidya Dandekar in Dhayari, Pune with cashew halves, roasted peanuts, and hand-selected spices.',
    btnExplore: 'Order Patal Poha Chivda',
    btnOurStory: 'Our Story & Bulk Inquiry',
    ratingLabel: '5.0 Star Rated',
    lovedByPune: 'Loved by families across Pune',

    // Trust Pillars
    pillar1Title: '100% Homemade',
    pillar1Desc: 'Made entirely by Vidya Dandekar in small precise home kitchen batches in Dhayari, Pune.',
    pillar2Title: 'Fresh Batch Prep',
    pillar2Desc: 'No stale stock. Roasted fresh in small batches upon receiving your WhatsApp request.',
    pillar3Title: 'Refined Rice Bran Oil',
    pillar3Desc: 'Heart-healthy, light, non-greasy. Zero vanaspati, zero preservatives, zero soda.',
    pillar4Title: 'Instant WhatsApp Order',
    pillar4Desc: 'Select pack weight, review subtotal, and send direct booking on WhatsApp in 1 click.',

    // Reviews Section
    reviewsHeading: 'Testimonials',
    reviewsTitle: 'Loved by Pune Families',
    reviewsSubtitle: 'Read what actual clients say about Vidya Dandekar’s signature Premium Patal Poha Chivda.',

    // Collection Section
    collHeading: 'Signature Specialty',
    collTitle: 'Authentic Premium Patal Poha Chivda',
    collSubtitle: 'Select your preferred pack option (1 Pack 200g, 2 Packs, 3 Packs, or 1kg Box with 5 Packs) directly to update pricing, or click to view recipe details, purity specs, and media gallery!',

    // Product Card UI
    btnViewDetails: 'View Details & Gallery',
    btnAddToCart: 'Add To Order Bag',
    btnInCart: 'Added in Bag',
    selectWeightLabel: 'Select Pack Weight',
    fromLabel: 'From',
    gstIncluded: '(Incl. 5% GST)',

    // Basket Drawer
    basketTitle: 'Your Order Bag',
    basketEmpty: 'Your Order Bag is Empty',
    basketExploreKitchen: 'Explore Patal Poha Chivda',
    basketSelectedItems: 'Selected Packs',
    basketSubtotal: 'Subtotal Amount',
    basketPreparing: 'Preparing Order Message...',
    basketPlaceWhatsApp: 'Place Order via WhatsApp',
    basketProceed: 'Proceed to Delivery Details',
    basketDetailsTitle: 'Delivery / Pickup Details',
    basketYourName: 'Your Full Name',
    basketMethod: 'Fulfillment Method',
    basketAddress: 'Complete Address & Landmark (Pune / Cities)',
    basketBack: 'Back to Order Bag',
    basketSummary: 'Order Summary',

    // Product Profile
    profileBack: 'Back to Products',
    profileSpecifications: 'Craft Specifications',
    profileIngredients: 'Honest Pure Ingredients',
    profileKitchenOrigin: 'Kitchen Origin',
    profileShelfLife: 'Fresh Shelf Life',
    profilePrepMethod: 'Preparation Technique',
    profilePurityGuarantees: 'Purity Guarantees',
    profileAddToBag: 'Add Selected Pack to Bag',

    // Quick Navigation & Footer
    footerNav: 'Quick Navigation',
    footerReachOut: 'Contact Vidya Dandekar',
    footerLocation: 'Kitchen Location',
    footerPhone: 'WhatsApp / Phone',
    footerEmail: 'Email Address',
    footerInstagram: 'Instagram',
    footerPrepInfo: '⏰ Batch Info: Freshly prepared upon order booking'
  },
  hi: {
    // Header
    navHome: 'होम',
    navOurSnacks: 'हमारा चिवड़ा',
    navOurStory: 'हमारी कहानी',
    navBulkInquiry: 'थोक ऑर्डर',
    themeDark: 'डार्क मोड',
    themeLight: 'लाइट मोड',

    // Hero Section
    heroBadge: '100% घर का बना ताज़ा पातल पोहा चिवड़ा',
    heroTitlePart1: 'हर निवाले में शुद्धता,',
    heroTitlePart2: 'हर नाश्ते में स्वादम्!',
    heroDesc: 'पुणे का पसंदीदा प्रामाणिक प्रीमियम पातल पोहा चिवड़ा आज़माएं, जिसे 100% रिफाइंड राइस ब्रान ऑयल में ताज़ा भुना जाता है। धायरी, पुणे में विद्या दांडेकर द्वारा साबुत काजू, भुनी मूंगफली और हाथ से पिसे मसालों के साथ हस्तनिर्मित।',
    btnExplore: 'पातल पोहा चिवड़ा ऑर्डर करें',
    btnOurStory: 'हमारी कहानी और थोक पूछताछ',
    ratingLabel: '5.0 स्टार रेटेड',
    lovedByPune: 'पुणे के परिवारों का पसंदीदा',

    // Trust Pillars
    pillar1Title: '100% घर का बना',
    pillar1Desc: 'धायरी, पुणे में विद्या दांडेकर द्वारा घरेलू रसोई में छोटे बैचों में बनाया गया।',
    pillar2Title: 'ताज़ा बैच तैयारी',
    pillar2Desc: 'कोई पुराना स्टॉक नहीं। व्हाट्सएप अनुरोध मिलने पर तुरंत ताजा भुना जाता है।',
    pillar3Title: 'रिफाइंड राइस ब्रान ऑयल',
    pillar3Desc: 'हृदय के लिए स्वास्थ्यप्रद, हल्का और गैर-चिकना। शून्य वनस्पति, शून्य रसायन।',
    pillar4Title: 'व्हाट्सएप 1-क्लिक ऑर्डर',
    pillar4Desc: 'पैक का वजन चुनें, कुल राशि देखें और 1-क्लिक में व्हाट्सएप पर ऑर्डर भेजें।',

    // Reviews Section
    reviewsHeading: 'अभिप्राय',
    reviewsTitle: 'पुणे के परिवारों की पसंद',
    reviewsSubtitle: 'जानें कि ग्राहक विद्या दांडेकर के पातल पोहा चिवड़ा के बारे में क्या कहते हैं।',

    // Collection Section
    collHeading: 'विशेषता',
    collTitle: 'प्रामाणिक प्रीमियम पातल पोहा चिवड़ा',
    collSubtitle: 'कीमत अपडेट करने के लिए अपना पसंदीदा विकल्प (1 पैक 200 ग्राम, 2 पैक, 3 पैक, या 5 पैक का 1 किग्रा बॉक्स) चुनें!',

    // Product Card UI
    btnViewDetails: 'विवरण और गैलरी देखें',
    btnAddToCart: 'ऑर्डर बैग में जोड़ें',
    btnInCart: 'बैग में मौजूद है',
    selectWeightLabel: 'पैक वजन चुनें',
    fromLabel: 'शुरुआती कीमत',
    gstIncluded: '(5% जीएसटी शामिल)',

    // Basket Drawer
    basketTitle: 'आपका ऑर्डर बैग',
    basketEmpty: 'आपका ऑर्डर बैग खाली है',
    basketExploreKitchen: 'पातल पोहा चिवड़ा देखें',
    basketSelectedItems: 'चयनित पैक',
    basketSubtotal: 'कुल राशि',
    basketPreparing: 'ऑर्डर तैयार हो रहा है...',
    basketPlaceWhatsApp: 'व्हाट्सएप द्वारा ऑर्डर भेजें',
    basketProceed: 'वितरण विवरण पर आगे बढ़ें',
    basketDetailsTitle: 'वितरण / पिकअप विवरण',
    basketYourName: 'आपका पूरा नाम',
    basketMethod: 'ऑर्डर प्राप्ति का तरीका',
    basketAddress: 'पूरा पता और लैंडमार्क (पुणे / अन्य शहर)',
    basketBack: 'ऑर्डर बैग पर वापस जाएं',
    basketSummary: 'ऑर्डर सारांश',

    // Product Profile
    profileBack: 'उत्पाद सूची पर वापस जाएं',
    profileSpecifications: 'उत्पाद विनिर्देश',
    profileIngredients: 'शुद्ध सामग्रियां',
    profileKitchenOrigin: 'रसोई का मूल',
    profileShelfLife: 'ताजा शेल्फ लाइफ',
    profilePrepMethod: 'तैयारी की विधि',
    profilePurityGuarantees: 'शुद्धता गारंटी',
    profileAddToBag: 'चयनित पैक बैग में जोड़ें',

    // Quick Navigation & Footer
    footerNav: 'त्वरित नेविगेशन',
    footerReachOut: 'विद्या दांडेकर से संपर्क करें',
    footerLocation: 'रसोई का पता',
    footerPhone: 'व्हाट्सएप / फोन',
    footerEmail: 'ईमेल पता',
    footerInstagram: 'इंस्टाग्राम',
    footerPrepInfo: '⏰ बैच जानकारी: ऑर्डर बुक करने पर ताजा तैयार'
  },
  mr: {
    // Header
    navHome: 'मुख्यपृष्ठ',
    navOurSnacks: 'आमचा चिवडा',
    navOurStory: 'आमची गोष्ट',
    navBulkInquiry: 'घाऊक ऑर्डर्स',
    themeDark: 'डार्क मोड',
    themeLight: 'लाइट मोड',

    // Hero Section
    heroBadge: '१००% घरगुती व खमंग पातळ पोहा चिवडा',
    heroTitlePart1: 'प्रत्येक घासात शुद्धता,',
    heroTitlePart2: 'प्रत्येक पदार्थात स्वादम्!',
    heroDesc: 'पुण्यातील घरांची आवडता अस्सल प्रीमियम पातळ पोहा चिवडा चाखा! १००% रिफाइंड राइस ब्रॅन ऑइल मध्ये खमंग भाजलेला. धायरी, पुणे येथे विद्या दांडेकर यांच्या हस्ते काजू, शेंगदाणे, खोबऱ्याचे काप आणि घरगुती मसाल्यांसह बनवलेला.',
    btnExplore: 'पातळ पोहा चिवडा ऑर्डर करा',
    btnOurStory: 'आमची गोष्ट व घाऊक चौकशी',
    ratingLabel: '५.० स्टार मानांकन',
    lovedByPune: 'संपूर्ण पुण्यातील कुटुंबांचा विश्वास',

    // Trust Pillars
    pillar1Title: '१००% घरगुती',
    pillar1Desc: 'धायरी, पुणे येथे विद्या दांडेकर यांच्या घरगुती किचनमध्ये लहान बॅचेसमध्ये प्रेमाने बनवलेला.',
    pillar2Title: 'ताजी तयारी',
    pillar2Desc: 'शिल्लक माल नाही. तुमची व्हॉट्सॲप ऑर्डर मिळाल्यावरच ताजे आणि खमंग भाजला जातो.',
    pillar3Title: 'रिफाइंड राइस ब्रॅन ऑइल',
    pillar3Desc: 'हृदयासाठी उत्तम, हलका, बिन-तेलकट. शून्य वनस्पती, शून्य रसायने, शून्य सोडा.',
    pillar4Title: '१-क्लिक व्हॉट्सॲप ऑर्डर',
    pillar4Desc: 'वजन निवडा, एकूण किंमत तपासा आणि थेट १-क्लिक मध्ये व्हॉट्सॲपवर ऑर्डर पाठवा.',

    // Reviews Section
    reviewsHeading: 'अभिप्राय',
    reviewsTitle: 'पुण्यातील कुटुंबांची पसंती',
    reviewsSubtitle: 'विद्या दांडेकर यांच्या खमंग पातळ पोहा चिवड्याबद्दल ग्राहकांचे अभिप्राय वाचा.',

    // Collection Section
    collHeading: 'खास वैशिष्ट्य',
    collTitle: 'अस्सल प्रीमियम पातळ पोहा चिवडा',
    collSubtitle: 'किंमत पाहण्यासाठी आणि ऑर्डर्ससाठी तुमचा आवडता पॅक (१ पॅक २०० ग्रॅम, २ पॅक्स, ३ पॅक्स, किंवा ५ पॅक्सचा १ किलोग्रॅम बॉक्स) निवडा!',

    // Product Card UI
    btnViewDetails: 'माहिती व गॅलरी पहा',
    btnAddToCart: 'ऑर्डर बॅगमध्ये जोडा',
    btnInCart: 'बॅगमध्ये जोडले आहे',
    selectWeightLabel: 'पॅकचे वजन निवडा',
    fromLabel: 'किंमत',
    gstIncluded: '(५% जीएसटी समाविष्ट)',

    // Basket Drawer
    basketTitle: 'तुमची ऑर्डर बॅग',
    basketEmpty: 'तुमची ऑर्डर बॅग रिकामी आहे',
    basketExploreKitchen: 'पातळ पोहा चिवडा पहा',
    basketSelectedItems: 'निवडलेले पॅक्स',
    basketSubtotal: 'एकूण रक्कम',
    basketPreparing: 'ऑर्डर मेसेज तयार होत आहे...',
    basketPlaceWhatsApp: 'व्हॉट्सॲपद्वारे ऑर्डर पाठवा',
    basketProceed: 'वितरण तपशीलावर जा',
    basketDetailsTitle: 'वितरण / पिकअप तपशील',
    basketYourName: 'तुमचे पूर्ण नाव',
    basketMethod: 'ऑर्डर मिळण्याची पद्धत',
    basketAddress: 'पूर्ण पत्ता आणि लँडमार्क (पुणे व इतर शहरे)',
    basketBack: 'ऑर्डर बॅगवर परत जा',
    basketSummary: 'ऑर्डरचा गोषवारा',

    // Product Profile
    profileBack: 'उत्पादनांवर परत जा',
    profileSpecifications: 'बनवण्याची वैशिष्ट्ये',
    profileIngredients: 'शुद्ध घरगुती साहित्य',
    profileKitchenOrigin: 'किचनचे ठिकाण',
    profileShelfLife: 'ताजी टिकण्याची मुदत',
    profilePrepMethod: 'भाजण्याची पद्धत',
    profilePurityGuarantees: 'शुद्धतेची हमी',
    profileAddToBag: 'निवडलेला पॅक बॅगमध्ये जोडा',

    // Quick Navigation & Footer
    footerNav: 'द्रुत नेव्हिगेशन',
    footerReachOut: 'विद्या दांडेकर यांच्याशी संपर्क साधा',
    footerLocation: 'किचनचे ठिकाण',
    footerPhone: 'व्हॉट्सॲप / फोन',
    footerEmail: 'ईमेल पत्ता',
    footerInstagram: 'इंस्टाग्राम',
    footerPrepInfo: '⏰ बॅच माहिती: तुमची ऑर्डर मिळाल्यावरच ताजे भाजले जाते'
  }
};

// Localized product details mapping
export const PRODUCT_TRANSLATIONS: Record<Language, Record<string, { name: string; subtitle: string; description: string }>> = {
  en: {
    'prod-patal-poha-chivda': {
      name: 'Premium Patal Poha Chivda',
      subtitle: 'Crispy paper-thin flaked rice tossed with premium cashews, roasted peanuts & curry leaves.',
      description: '100% oil-roasted delicate dietary chivda made with refined rice bran oil. Light, digestible, crunchy, and seasoned with authentic Pune home spices.'
    }
  },
  hi: {
    'prod-patal-poha-chivda': {
      name: 'प्रीमियम पातल पोहा चिवड़ा',
      subtitle: 'काजू, भुनी मूंगफली और कढ़ी पत्ता के साथ भुना हुआ कुरकुरा पतला पोहा।',
      description: '100% रिफाइंड राइस ब्रान ऑयल में भुना हुआ हल्का सुपाच्य चिवड़ा। ताजे काजू, मूंगफली, नारियल और घर के मसालों से भरपूर।'
    }
  },
  mr: {
    'prod-patal-poha-chivda': {
      name: 'प्रीमियम पातळ पोहा चिवडा',
      subtitle: 'काजू, शेंगदाणे, खोबऱ्याचे काप आणि कढीपत्ता घालून भाजलेला कुरकुरीत चिवडा.',
      description: 'अतिशय कमी व स्वच्छ रिफाइंड राइस ब्रॅन ऑइल मध्ये भाजलेला खमंग पातळ पोहा चिवडा. पचनास हलका, कुरकुरीत आणि घरगुती पुणेरी मसाल्यांची अस्सल चव.'
    }
  }
};
