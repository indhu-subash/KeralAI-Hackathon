export const commodities = [
  {
    id: "cardamom-green",
    name: "Small Cardamom 8mm",
    nameMl: "ഏലയ്ക്ക 8mm (ഗ്രീൻ)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "8mm Bold Extra Green",
    primaryDistrict: "Idukki",
    farmgatePrice: 2450.00,
    mandiPrice: 2680.00,
    retailPrice: 3100.00,
    change24h: 85.00,
    change24hPercent: 3.28,
    volume: "68 Tonnes (Spices Park Auction)",
    image: "/cardamom.jpg",
    sparkline: [2520, 2550, 2580, 2600, 2620, 2650, 2680],
    districtPrices: {
      IDK: 2680, EKM: 2720, KTM: 2710, TCR: 2730,
      TVM: 2750, KKD: 2740, WYD: 2690, PKD: 2730,
      MLP: 2745, KLM: 2755, KNR: 2750, KSG: 2760,
      ALP: 2740, PTA: 2725
    },
    advisory: {
      farmer: "Spices Board auction average price breached ₹2,650/kg. Rains in Kattappana improved capsule size.",
      trader: "North Indian winter festive & marriage buyer inquiries pushing prices upward.",
      cooperative: "Farmers recommended to grade capsules carefully (8mm commands ₹350/kg premium over 7mm).",
      consumer: "High grade retail packs premium product."
    },
    history1M: [
      { date: "Sep 07", price: 2380, volume: 55 },
      { date: "Sep 12", price: 2420, volume: 58 },
      { date: "Sep 17", price: 2490, volume: 60 },
      { date: "Sep 22", price: 2560, volume: 62 },
      { date: "Sep 27", price: 2610, volume: 65 },
      { date: "Oct 02", price: 2640, volume: 66 },
      { date: "Oct 07", price: 2680, volume: 68 }
    ]
  },
  {
    id: "black-pepper",
    name: "Black Pepper (Malabar Garbled)",
    nameMl: "കുരുമുളക് (ഗാർബിൾഡ്)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "Ungarbled Malabar Black 550 g/l",
    primaryDistrict: "Wayanad",
    farmgatePrice: 625.00,
    mandiPrice: 665.00,
    retailPrice: 720.00,
    change24h: 5.00,
    change24hPercent: 0.76,
    volume: "180 Tonnes",
    image: "/pepper.jpg",
    sparkline: [650, 652, 655, 658, 660, 662, 665],
    districtPrices: {
      WYD: 665, IDK: 660, KTM: 662, EKM: 670,
      TCR: 668, KKD: 672, KNR: 670, KSG: 668,
      TVM: 675, KLM: 673, PTA: 665, ALP: 670,
      PKD: 669, MLP: 671
    },
    advisory: {
      farmer: "International pepper prices firm. Hold stock for better ungarbled rates above ₹680/kg.",
      trader: "Export buyers at IPSTA Kochi offering tight quotes.",
      cooperative: "Quality testing available at Sulthan Bathery lab.",
      consumer: "Spices market holding steady."
    },
    history1M: [
      { date: "Sep 07", price: 640, volume: 150 },
      { date: "Sep 12", price: 648, volume: 160 },
      { date: "Sep 17", price: 652, volume: 168 },
      { date: "Sep 22", price: 658, volume: 172 },
      { date: "Sep 27", price: 660, volume: 175 },
      { date: "Oct 02", price: 663, volume: 178 },
      { date: "Oct 07", price: 665, volume: 180 }
    ]
  },
  {
    id: "nutmeg-mace",
    name: "Nutmeg & Mace (Jathikka)",
    nameMl: "ജാതിക്ക & ജാതിപത്രി",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "With Shell Grade A / Red Mace",
    primaryDistrict: "Ernakulam",
    farmgatePrice: 310.00,
    mandiPrice: 345.00,
    retailPrice: 420.00,
    change24h: 12.00,
    change24hPercent: 3.60,
    volume: "95 Tonnes (Kalady Market)",
    image: "/nutmeg.jpg",
    sparkline: [330, 332, 335, 338, 340, 342, 345],
    districtPrices: {
      EKM: 345, IDK: 340, TCR: 348, KTM: 342,
      WYD: 338, KKD: 346, TVM: 350, KLM: 348,
      PKD: 344, KNR: 347, MLP: 345, KSG: 349,
      PTA: 341, ALP: 343
    },
    advisory: {
      farmer: "Red Mace (ജാതിപത്രി) fetching premium ₹1,850/kg. Separate mace carefully to maximize returns.",
      trader: "High demand from Ayurvedic pharma & Oleoresin extraction units.",
      cooperative: "Kalady and Angamaly procurement centers offering direct buyback.",
      consumer: "Retail spices stable."
    },
    history1M: [
      { date: "Sep 07", price: 320, volume: 80 },
      { date: "Sep 12", price: 325, volume: 84 },
      { date: "Sep 17", price: 330, volume: 88 },
      { date: "Sep 22", price: 335, volume: 90 },
      { date: "Sep 27", price: 338, volume: 92 },
      { date: "Oct 02", price: 341, volume: 94 },
      { date: "Oct 07", price: 345, volume: 95 }
    ]
  },
  {
    id: "clove-bold",
    name: "Clove / Karayampoovu",
    nameMl: "ഗ്രാമ്പൂ (കരായമ്പൂവ്)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "Extra Bold Headed Dried",
    primaryDistrict: "Idukki",
    farmgatePrice: 780.00,
    mandiPrice: 840.00,
    retailPrice: 960.00,
    change24h: 15.00,
    change24hPercent: 1.82,
    volume: "42 Tonnes",
    image: "/clove.jpg",
    sparkline: [810, 815, 820, 825, 830, 835, 840],
    districtPrices: {
      IDK: 840, EKM: 848, KTM: 845, TCR: 850,
      WYD: 835, KKD: 852, TVM: 855, KLM: 850,
      PKD: 842, KNR: 851, MLP: 848, KSG: 854,
      PTA: 843, ALP: 846
    },
    advisory: {
      farmer: "Zanzibar import arrivals moderate; High altitude Idukki clove commands 10% premium.",
      trader: "Essential oil extraction demand surging in domestic markets.",
      cooperative: "Drying level below 10% moisture strictly monitored.",
      consumer: "Retail price steady."
    },
    history1M: [
      { date: "Sep 07", price: 800, volume: 35 },
      { date: "Sep 12", price: 810, volume: 37 },
      { date: "Sep 17", price: 820, volume: 39 },
      { date: "Sep 22", price: 828, volume: 40 },
      { date: "Sep 27", price: 832, volume: 41 },
      { date: "Oct 02", price: 836, volume: 41 },
      { date: "Oct 07", price: 840, volume: 42 }
    ]
  },
  {
    id: "dry-ginger",
    name: "Dry Ginger / Chukku",
    nameMl: "ചുക്ക് (ഉണക്ക ഇഞ്ചി)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "Bleached Malabar Dry Ginger",
    primaryDistrict: "Wayanad",
    farmgatePrice: 320.00,
    mandiPrice: 355.00,
    retailPrice: 410.00,
    change24h: 8.00,
    change24hPercent: 2.31,
    volume: "110 Tonnes",
    image: "/ginger.jpg",
    sparkline: [338, 340, 342, 345, 348, 350, 355],
    districtPrices: {
      WYD: 355, IDK: 350, EKM: 360, TCR: 358,
      KKD: 362, TVM: 365, KLM: 363, PKD: 356,
      KTM: 357, KNR: 361, MLP: 359, KSG: 364,
      PTA: 354, ALP: 358
    },
    advisory: {
      farmer: "Wayanad ginger harvest yields strong. Chukku processing provides 30% higher margins.",
      trader: "Ayurvedic pharmacy bulk procurement ongoing.",
      cooperative: "VFPCK facilitating direct farmer trade.",
      consumer: "Winter spice demand firming up."
    },
    history1M: [
      { date: "Sep 07", price: 330, volume: 90 },
      { date: "Sep 12", price: 335, volume: 95 },
      { date: "Sep 17", price: 340, volume: 100 },
      { date: "Sep 22", price: 345, volume: 104 },
      { date: "Sep 27", price: 348, volume: 106 },
      { date: "Oct 02", price: 351, volume: 108 },
      { date: "Oct 07", price: 355, volume: 110 }
    ]
  },
  {
    id: "turmeric-finger",
    name: "Turmeric / Manjal",
    nameMl: "മഞ്ഞൾ (ആലപ്പുഴ ഫിംഗർ)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "Alleppey Finger High Curcumin (>5%)",
    primaryDistrict: "Palakkad",
    farmgatePrice: 145.00,
    mandiPrice: 165.00,
    retailPrice: 195.00,
    change24h: 3.50,
    change24hPercent: 2.17,
    volume: "140 Tonnes",
    image: "/turmeric.jpg",
    sparkline: [155, 157, 158, 160, 162, 163, 165],
    districtPrices: {
      PKD: 165, ALP: 168, EKM: 167, TCR: 166,
      WYD: 162, KKD: 169, TVM: 172, KLM: 170,
      IDK: 161, KTM: 165, KNR: 168, MLP: 167,
      KSG: 170, PTA: 166
    },
    advisory: {
      farmer: "High curcumin content Alleppey Finger grade getting export buyer premiums.",
      trader: "Nizamabad mandi prices stable; local Kerala supply absorbing well.",
      cooperative: "Organic certification increases payout by ₹20/kg.",
      consumer: "Retail price stable."
    },
    history1M: [
      { date: "Sep 07", price: 150, volume: 120 },
      { date: "Sep 12", price: 153, volume: 125 },
      { date: "Sep 17", price: 156, volume: 130 },
      { date: "Sep 22", price: 159, volume: 133 },
      { date: "Sep 27", price: 161, volume: 135 },
      { date: "Oct 02", price: 163, volume: 138 },
      { date: "Oct 07", price: 165, volume: 140 }
    ]
  },
  {
    id: "cinnamon-bark",
    name: "Cinnamon / Karuvapatta",
    nameMl: "കറുവപ്പട്ട (സുഗന്ധമുള്ളത്)",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "Ceylon Type Rolled Bark Grade 1",
    primaryDistrict: "Kannur",
    farmgatePrice: 280.00,
    mandiPrice: 315.00,
    retailPrice: 370.00,
    change24h: 6.00,
    change24hPercent: 1.94,
    volume: "38 Tonnes",
    image: "/cinnamon.jpg",
    sparkline: [300, 302, 305, 308, 310, 312, 315],
    districtPrices: {
      KNR: 315, KSG: 318, KKD: 316, EKM: 322,
      TCR: 320, TVM: 325, KLM: 323, WYD: 312,
      IDK: 310, KTM: 317, PKD: 319, MLP: 316,
      PTA: 318, ALP: 321
    },
    advisory: {
      farmer: "Rolled quills fetch higher price than coarse bark. Proper peeling technique key.",
      trader: "Bakery and confectionery trade active demand.",
      cooperative: "Grade A quills buyback active at Kannur mandi.",
      consumer: "Retail price steady."
    },
    history1M: [
      { date: "Sep 07", price: 295, volume: 30 },
      { date: "Sep 12", price: 300, volume: 32 },
      { date: "Sep 17", price: 305, volume: 34 },
      { date: "Sep 22", price: 308, volume: 35 },
      { date: "Sep 27", price: 311, volume: 36 },
      { date: "Oct 02", price: 313, volume: 37 },
      { date: "Oct 07", price: 315, volume: 38 }
    ]
  },
  {
    id: "rubber-rss4",
    name: "Rubber RSS-4",
    nameMl: "റബ്ബർ RSS-4",
    category: "plantation",
    categoryNameEn: "Plantation & Spices",
    categoryNameMl: "തോട്ടവിളകളും സുഗന്ധവ്യഞ്ജനങ്ങളും",
    unit: "kg",
    grade: "RSS-4 (Ribbed Smoked Sheet)",
    primaryDistrict: "Kottayam",
    farmgatePrice: 204.00,
    mandiPrice: 212.50,
    retailPrice: 226.00,
    change24h: 3.40,
    change24hPercent: 1.63,
    volume: "1,450 Quintals",
    image: "/rubber.jpg",
    sparkline: [205, 206, 204, 208, 210, 209, 212.5],
    districtPrices: {
      KTM: 212.50, EKM: 211.00, PTA: 210.50, IDK: 209.00,
      TCR: 213.00, PKD: 214.00, MLP: 213.50, KKD: 215.00,
      WYD: 208.50, KNR: 214.50, KSG: 215.50, KLM: 211.50,
      TVM: 213.00, ALP: 212.00
    },
    advisory: {
      farmer: "Demand for RSS-4 is high due to tyre manufacturing orders. Hold stock if you have dry storage; prices expected to test ₹220/kg.",
      trader: "Arbitrage gap between Idukki (₹209) and Kozhikode (₹215) is ₹6.00/kg. Freight cost approx ₹1.80/kg.",
      cooperative: "Procurement targets for Kottayam region achieved at 84%. Recommended payout to farmers: ₹206/kg.",
      consumer: "Industrial commodity - indirect impact on vehicle tyres and rubber footwear."
    },
    history1M: [
      { date: "Sep 07", price: 198, volume: 1100 },
      { date: "Sep 12", price: 201, volume: 1250 },
      { date: "Sep 17", price: 200, volume: 1180 },
      { date: "Sep 22", price: 204, volume: 1300 },
      { date: "Sep 27", price: 207, volume: 1380 },
      { date: "Oct 02", price: 209, volume: 1410 },
      { date: "Oct 07", price: 212.5, volume: 1450 }
    ]
  },
  {
    id: "copra-mandi",
    name: "Copra (Cleaned & Dried)",
    nameMl: "കൊപ്ര (ഉണക്കിയത്)",
    category: "coconut",
    categoryNameEn: "Coconut & Derivatives",
    categoryNameMl: "തെങ്ങ് & നാളികേര ഉൽപ്പന്നങ്ങൾ",
    unit: "quintal",
    grade: "Grade A Oil Grade",
    primaryDistrict: "Kozhikode",
    farmgatePrice: 10800.00,
    mandiPrice: 11450.00,
    retailPrice: 12200.00,
    change24h: -120.00,
    change24hPercent: -1.04,
    volume: "3,200 Quintals",
    image: "/copra.jpg",
    sparkline: [11600, 11580, 11550, 11500, 11480, 11470, 11450],
    districtPrices: {
      KKD: 11450, KSG: 11300, KNR: 11380, MLP: 11400,
      TCR: 11500, EKM: 11550, KTM: 11480, ALP: 11520,
      KLM: 11600, TVM: 11650, PKD: 11420, WYD: 11250,
      IDK: 11200, PTA: 11490
    },
    advisory: {
      farmer: "Moisture content must be below 6% to avoid deduction at Vatakara APMC.",
      trader: "Tamil Nadu copra influx at Kangayam market exerting mild downward pressure.",
      cooperative: "NAFED procurement ongoing at MSP ₹11,160/quintal.",
      consumer: "Coconut oil prices likely to stabilize around ₹165/litre next week."
    },
    history1M: [
      { date: "Sep 07", price: 11800, volume: 2900 },
      { date: "Sep 12", price: 11750, volume: 3000 },
      { date: "Sep 17", price: 11650, volume: 3100 },
      { date: "Sep 22", price: 11600, volume: 3050 },
      { date: "Sep 27", price: 11520, volume: 3150 },
      { date: "Oct 02", price: 11490, volume: 3180 },
      { date: "Oct 07", price: 11450, volume: 3200 }
    ]
  },
  {
    id: "coconut-oil",
    name: "Pure Coconut Oil",
    nameMl: "വെളിച്ചെണ്ണ (ശുദ്ധമായത്)",
    category: "coconut",
    categoryNameEn: "Coconut & Derivatives",
    categoryNameMl: "തെങ്ങ് & നാളികേര ഉൽപ്പന്നങ്ങൾ",
    unit: "litre",
    grade: "Agmark Certified 100% Pure",
    primaryDistrict: "Kollam",
    farmgatePrice: 154.00,
    mandiPrice: 168.00,
    retailPrice: 182.00,
    change24h: 1.50,
    change24hPercent: 0.90,
    volume: "45,000 Litres",
    image: "/coconutoil.jpg",
    sparkline: [165, 166, 165.5, 167, 167.5, 168, 168],
    districtPrices: {
      KLM: 168, TVM: 172, EKM: 170, TCR: 169,
      KKD: 166, KNR: 167, KSG: 165, PKD: 167,
      MLP: 168, KTM: 170, ALP: 169, PTA: 171,
      IDK: 173, WYD: 174
    },
    advisory: {
      farmer: "Millers offering premium for organic sulfur-free copra lots.",
      trader: "Festive season stocking starting; steady consumer demand across Kerala & Gulf exports.",
      cooperative: "KERAFED retail packs priced at ₹178/Litre.",
      consumer: "Stock up during current stable pricing window."
    },
    history1M: [
      { date: "Sep 07", price: 162, volume: 40000 },
      { date: "Sep 12", price: 163, volume: 42000 },
      { date: "Sep 17", price: 165, volume: 41000 },
      { date: "Sep 22", price: 166, volume: 43000 },
      { date: "Sep 27", price: 167, volume: 44000 },
      { date: "Oct 02", price: 167.5, volume: 44500 },
      { date: "Oct 07", price: 168, volume: 45000 }
    ]
  },
  {
    id: "nendran-banana",
    name: "Nendran Banana (A Grade)",
    nameMl: "നേന്ത്രപ്പഴം (A ഗ്രേഡ്)",
    category: "fruits",
    categoryNameEn: "Fruits & Bananas",
    categoryNameMl: "പഴവർഗ്ഗങ്ങൾ & നേന്ത്രൻ",
    unit: "kg",
    grade: "Grade A Extra Length (Export/Chips)",
    primaryDistrict: "Wayanad",
    farmgatePrice: 42.00,
    mandiPrice: 49.50,
    retailPrice: 62.00,
    change24h: 4.20,
    change24hPercent: 9.27,
    volume: "850 Tonnes",
    image: "/nendran.jpg",
    sparkline: [44, 43.5, 45, 46, 47.5, 48, 49.5],
    districtPrices: {
      WYD: 49.5, PKD: 48.0, TCR: 52.0, EKM: 54.0,
      TVM: 56.0, KLM: 55.0, KTM: 53.0, MLP: 50.0,
      KKD: 51.5, KNR: 52.5, IDK: 47.5, PTA: 54.5,
      ALP: 55.5, KSG: 53.0
    },
    advisory: {
      farmer: "Wayanad & Palakkad crop harvest volume picking up. High demand for banana chips processing.",
      trader: "Huge price gap between Wayanad (₹49.5) and Thiruvananthapuram (₹56.0). High margin transport corridor.",
      cooperative: "VFPCK offering ₹44/kg direct farmgate buyback for registered farmers.",
      consumer: "Retail price elevated due to wedding and temple festival season."
    },
    history1M: [
      { date: "Sep 07", price: 41, volume: 720 },
      { date: "Sep 12", price: 42, volume: 750 },
      { date: "Sep 17", price: 43.5, volume: 790 },
      { date: "Sep 22", price: 45, volume: 810 },
      { date: "Sep 27", price: 47, volume: 830 },
      { date: "Oct 02", price: 48.5, volume: 845 },
      { date: "Oct 07", price: 49.5, volume: 850 }
    ]
  },
  {
    id: "tapioca-kappa",
    name: "Tapioca / Kappa (Fresh)",
    nameMl: "കപ്പ / മരച്ചീനി",
    category: "tubers",
    categoryNameEn: "Tubers & Vegetables",
    categoryNameMl: "കിഴങ്ങുവർഗ്ഗങ്ങളും പച്ചക്കറികളും",
    unit: "kg",
    grade: "Raw Fresh White Root",
    primaryDistrict: "Thiruvananthapuram",
    farmgatePrice: 18.00,
    mandiPrice: 24.00,
    retailPrice: 32.00,
    change24h: -0.80,
    change24hPercent: -3.23,
    volume: "1,200 Tonnes",
    image: "/tapioca.jpg",
    sparkline: [26, 25.5, 25, 24.8, 24.5, 24.2, 24.0],
    districtPrices: {
      TVM: 24.0, KLM: 24.5, PTA: 23.5, KTM: 23.0,
      IDK: 21.0, EKM: 25.0, TCR: 25.5, PKD: 26.0,
      MLP: 26.5, KKD: 27.0, WYD: 22.0, KNR: 27.5,
      KSG: 28.0, ALP: 24.8
    },
    advisory: {
      farmer: "Peak harvest arrivals from Nedumangad & Adoor mandis. Starch factory demand steady.",
      trader: "High supply pressure; short shelf life requires fast dispatch to Northern districts.",
      cooperative: "Value addition into dried chips (Vaattu Kappa) advised to lock higher margins.",
      consumer: "Very affordable retail rates across local markets."
    },
    history1M: [
      { date: "Sep 07", price: 28, volume: 950 },
      { date: "Sep 12", price: 27, volume: 1020 },
      { date: "Sep 17", price: 26.5, volume: 1100 },
      { date: "Sep 22", price: 25.5, volume: 1150 },
      { date: "Sep 27", price: 24.8, volume: 1180 },
      { date: "Oct 02", price: 24.3, volume: 1190 },
      { date: "Oct 07", price: 24.0, volume: 1200 }
    ]
  }
];
