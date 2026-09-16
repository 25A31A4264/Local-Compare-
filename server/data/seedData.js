// Realistic Seed Data for LocalCompare
// Center Reference: Bangalore City Center (12.9716, 77.5946)
// Supporting 10+ Products in EACH of the 15 Categories (150+ Total Products)

export const categories = [
  { id: 'mobiles', name: 'Mobiles', icon: 'Smartphone', description: 'Smartphones, feature phones, cases & screen guards' },
  { id: 'laptops', name: 'Laptops', icon: 'Laptop', description: 'Ultrabooks, gaming rigs, macbooks & accessories' },
  { id: 'tvs', name: 'TVs', icon: 'Tv', description: 'Smart TVs, 4K OLED, QLED & home theater systems' },
  { id: 'home_appliances', name: 'Home appliances', icon: 'Home', description: 'Washing machines, refrigerators, ACs & purifiers' },
  { id: 'electrical_appliances', name: 'Electrical appliances', icon: 'Zap', description: 'Fans, heaters, geysers, irons & inverters' },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt', description: 'Men, women, kids apparel, ethnic & casuals' },
  { id: 'beauty_products', name: 'Beauty products', icon: 'Sparkles', description: 'Cosmetics, skincare, makeup & fragrances' },
  { id: 'footwear', name: 'Footwear', icon: 'Footprints', description: 'Sneakers, formal shoes, sandals & boots' },
  { id: 'furniture', name: 'Furniture', icon: 'Armchair', description: 'Chairs, desks, beds, sofas & storage' },
  { id: 'kitchen_appliances', name: 'Kitchen appliances', icon: 'Utensils', description: 'Mixer grinders, microwaves, induction & toasters' },
  { id: 'personal_care', name: 'Personal care', icon: 'HeartPulse', description: 'Trimmers, toothbrushes, hair dryers & grooming' },
  { id: 'accessories', name: 'Accessories', icon: 'Briefcase', description: 'Bags, sunglasses, watches, wallets & belts' },
  { id: 'stationery', name: 'Stationery', icon: 'BookOpen', description: 'Notebooks, pens, art supplies & office goods' },
  { id: 'hardware', name: 'Hardware', icon: 'Wrench', description: 'Power tools, plumbing, fasteners & paints' },
  { id: 'grocery', name: 'Grocery', icon: 'ShoppingCart', description: 'Staples, oils, spices, snacks & beverages' }
];

export const users = [
  {
    id: 'usr_admin',
    name: 'Admin System',
    email: 'admin@localcompare.com',
    role: 'admin',
    phone: '+91 98765 00001'
  },
  {
    id: 'usr_shop_1',
    name: 'Ramesh Kumar',
    email: 'ramesh@srilakshmi.com',
    role: 'shop_owner',
    phone: '+91 98450 12345',
    shopId: 'shop_1'
  },
  {
    id: 'usr_shop_2',
    name: 'Suresh Patel',
    email: 'suresh@digitalworld.com',
    role: 'shop_owner',
    phone: '+91 98450 54321',
    shopId: 'shop_2'
  },
  {
    id: 'usr_shop_3',
    name: 'Anand Sharma',
    email: 'anand@cromaexpress.com',
    role: 'shop_owner',
    phone: '+91 98450 67890',
    shopId: 'shop_3'
  },
  {
    id: 'usr_customer_1',
    name: 'Venkat Rao',
    email: 'venkat@example.com',
    role: 'customer',
    phone: '+91 99887 76655'
  }
];

export const shops = [
  {
    id: 'shop_1',
    name: 'Sri Lakshmi Electronics',
    ownerName: 'Ramesh Kumar',
    phone: '+91 98450 12345',
    whatsapp: '+919845012345',
    email: 'ramesh@srilakshmi.com',
    address: '42, 100 Feet Road, Indiranagar, Bengaluru',
    lat: 12.9783,
    lng: 77.6408,
    category: 'tvs',
    gstin: '29ABCDE1234F1Z5',
    verified: true,
    status: 'active',
    rating: 4.6,
    reviewCount: 142,
    trustScore: 98,
    openingHours: '9:00 AM – 9:30 PM',
    photoUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80',
    priceAccuracyScore: 99,
    description: 'Authorized retailer for Samsung, LG, Sony and premier home appliances with genuine manufacturer warranties.'
  },
  {
    id: 'shop_2',
    name: 'Digital World Superstore',
    ownerName: 'Suresh Patel',
    phone: '+91 98450 54321',
    whatsapp: '+919845054321',
    email: 'suresh@digitalworld.com',
    address: '88, 80 Feet Road, 4th Block, Koramangala, Bengaluru',
    lat: 12.9352,
    lng: 77.6245,
    category: 'tvs',
    gstin: '29FGHIJ5678K1Z2',
    verified: true,
    status: 'active',
    rating: 4.8,
    reviewCount: 318,
    trustScore: 96,
    openingHours: '9:30 AM – 10:00 PM',
    photoUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80',
    priceAccuracyScore: 97,
    description: 'Multi-brand electronic hub offering competitive festive pricing and instant spot delivery.'
  },
  {
    id: 'shop_3',
    name: 'Croma Express Hub',
    ownerName: 'Anand Sharma',
    phone: '+91 98450 67890',
    whatsapp: '+919845067890',
    email: 'anand@cromaexpress.com',
    address: '15, Brigade Road, Ashok Nagar, Bengaluru',
    lat: 12.9719,
    lng: 77.6070,
    category: 'tvs',
    gstin: '29KLMNO9012P1Z9',
    verified: true,
    status: 'active',
    rating: 4.2,
    reviewCount: 89,
    trustScore: 91,
    openingHours: '10:00 AM – 9:00 PM',
    photoUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    priceAccuracyScore: 92,
    description: 'Convenient neighborhood store specializing in personal tech, laptops, smart TVs and kitchen essentials.'
  },
  {
    id: 'shop_4',
    name: 'Modern Home Needs & Appliances',
    ownerName: 'Geetha Reddy',
    phone: '+91 98450 11223',
    whatsapp: '+919845011223',
    email: 'geetha@modernhomeneeds.com',
    address: '204, CMH Road, Indiranagar, Bengaluru',
    lat: 12.9790,
    lng: 77.6360,
    category: 'home_appliances',
    gstin: '29PQRST3456U1Z4',
    verified: true,
    status: 'active',
    rating: 4.5,
    reviewCount: 96,
    trustScore: 95,
    openingHours: '9:00 AM – 9:00 PM',
    photoUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
    priceAccuracyScore: 96,
    description: 'Trusted retailer for washing machines, refrigerators, microwaves, and cookware.'
  },
  {
    id: 'shop_5',
    name: 'Metro Tools & Industrial Hardware',
    ownerName: 'Harish Varma',
    phone: '+91 98450 99887',
    whatsapp: '+919845099887',
    email: 'harish@metrohardware.com',
    address: '77, Commercial Street, Tasker Town, Bengaluru',
    lat: 12.9822,
    lng: 77.6083,
    category: 'hardware',
    gstin: '29UVWXY7890Z1Z1',
    verified: true,
    status: 'active',
    rating: 4.7,
    reviewCount: 64,
    trustScore: 94,
    openingHours: '8:30 AM – 8:30 PM',
    photoUrl: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80',
    priceAccuracyScore: 95,
    description: 'Genuine power tools, drill bits, hand tools, fasteners, and professional construction equipment.'
  },
  {
    id: 'shop_6',
    name: 'Royal Mart Supermarket',
    ownerName: 'Mohan Lal',
    phone: '+91 98450 33445',
    whatsapp: '+919845033445',
    email: 'mohan@royalmart.com',
    address: '12, Old Airport Road, Domlur, Bengaluru',
    lat: 12.9609,
    lng: 77.6480,
    category: 'grocery',
    gstin: '29ABCDE4567G1Z8',
    verified: true,
    status: 'active',
    rating: 4.4,
    reviewCount: 210,
    trustScore: 97,
    openingHours: '7:30 AM – 10:30 PM',
    photoUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80',
    priceAccuracyScore: 98,
    description: 'Daily fresh staples, cooking oils, gourmet spices, flours, and organic packaged produce.'
  },
  {
    id: 'shop_7',
    name: 'Apex Mobiles & Gadgets',
    ownerName: 'Deepak Jain',
    phone: '+91 98450 77112',
    whatsapp: '+919845077112',
    email: 'deepak@apexmobiles.com',
    address: '5th Main, Gandhinagar, Bengaluru',
    lat: 12.9760,
    lng: 77.5780,
    category: 'mobiles',
    gstin: '29PQRS9999K1Z0',
    verified: true,
    status: 'active',
    rating: 4.3,
    reviewCount: 42,
    trustScore: 89,
    openingHours: '10:00 AM – 9:30 PM',
    photoUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    priceAccuracyScore: 91,
    description: 'Specializes in flagship phones, Apple, Samsung, OnePlus with quick exchange offers.'
  }
];

// 150+ Real Catalog Products: 10 in each of the 15 categories!
export const products = [
  // 1. Mobiles (10 items)
  {
    id: 'prod_mob_1',
    name: 'Apple iPhone 15 (128GB) - Black',
    brand: 'Apple',
    category: 'mobiles',
    modelNumber: 'MTP03HN/A',
    mrp: 79900,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    description: 'Dynamic Island, 48MP Main camera with 2x Telephoto, durable color-infused glass and aluminum design, USB-C.',
    specs: { 'Display': '6.1-inch Super Retina XDR OLED', 'Chip': 'A16 Bionic chip', 'Storage': '128 GB', 'Camera': '48MP Dual Camera' },
    aliases: ['iPhone 15', 'Apple iPhone 15 128GB', 'iPhone 15 Black']
  },
  {
    id: 'prod_mob_2',
    name: 'Samsung Galaxy S24 5G (8GB RAM, 256GB)',
    brand: 'Samsung',
    category: 'mobiles',
    modelNumber: 'SM-S921B',
    mrp: 79999,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80',
    description: 'Galaxy AI built-in with Circle to Search, Live Translate, 50MP ProVisual Engine and compact armor aluminum frame.',
    specs: { 'Display': '6.2-inch Dynamic AMOLED 2X, 120Hz', 'Processor': 'Exynos 2400 Deca-Core', 'RAM / Storage': '8GB / 256GB', 'Battery': '4000 mAh' },
    aliases: ['Samsung S24', 'Galaxy S24 5G']
  },
  {
    id: 'prod_mob_3',
    name: 'OnePlus 12 5G (16GB RAM, 512GB)',
    brand: 'OnePlus',
    category: 'mobiles',
    modelNumber: 'CPH2581',
    mrp: 69999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
    description: 'Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, 5400 mAh battery with 100W SUPERVOOC charging.',
    specs: { 'Display': '6.82-inch 2K 120Hz ProXDR', 'Processor': 'Snapdragon 8 Gen 3', 'Charging': '100W Wired, 50W Wireless' },
    aliases: ['OnePlus 12', 'OnePlus 12 5G']
  },
  {
    id: 'prod_mob_4',
    name: 'Google Pixel 8 Pro (128GB) - Obsidian',
    brand: 'Google',
    category: 'mobiles',
    modelNumber: 'GC3VE',
    mrp: 106999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
    description: 'Google Tensor G3, fully upgraded cameras, Best Take and Magic Editor, 24-hour battery with Extreme Battery Saver.',
    specs: { 'Display': '6.7-inch Super Actua OLED', 'Chip': 'Google Tensor G3', 'Camera': '50MP Triple Pro Camera' },
    aliases: ['Pixel 8 Pro', 'Google Pixel 8 Pro']
  },
  {
    id: 'prod_mob_5',
    name: 'Apple iPhone 15 Pro (256GB) - Natural Titanium',
    brand: 'Apple',
    category: 'mobiles',
    modelNumber: 'MTV13HN/A',
    mrp: 134900,
    image: 'https://images.unsplash.com/photo-1695048065036-0705a63907c1?w=800&q=80',
    description: 'Aerospace-grade titanium design, A17 Pro chip, Action button, and 48MP camera with 3x optical zoom.',
    specs: { 'Material': 'Grade 5 Titanium', 'Chip': 'A17 Pro', 'Display': '6.1-inch ProMotion 120Hz' },
    aliases: ['iPhone 15 Pro', 'iPhone 15 Pro Titanium']
  },
  {
    id: 'prod_mob_6',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 512GB)',
    brand: 'Samsung',
    category: 'mobiles',
    modelNumber: 'SM-S928B',
    mrp: 139999,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80',
    description: 'Titanium exterior, built-in S Pen, 200MP camera system with Quad Tele Space Zoom and Galaxy AI.',
    specs: { 'Display': '6.8-inch QHD+ Flat AMOLED', 'Camera': '200MP + 50MP + 12MP + 10MP', 'Pen': 'Integrated S-Pen' },
    aliases: ['S24 Ultra', 'Samsung S24 Ultra']
  },
  {
    id: 'prod_mob_7',
    name: 'Xiaomi 14 5G (12GB RAM, 512GB)',
    brand: 'Xiaomi',
    category: 'mobiles',
    modelNumber: '23127PN0CG',
    mrp: 69999,
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800&q=80',
    description: 'Leica Summilux optical lens, Snapdragon 8 Gen 3, ultra-thin bezel 1.5K display and 90W HyperCharge.',
    specs: { 'Lens': 'Leica Vario-Summilux', 'Display': '6.36-inch LTPO AMOLED', 'RAM': '12GB LPDDR5X' },
    aliases: ['Xiaomi 14', 'Mi 14 5G']
  },
  {
    id: 'prod_mob_8',
    name: 'Nothing Phone (2) (12GB RAM, 256GB) - Dark Grey',
    brand: 'Nothing',
    category: 'mobiles',
    modelNumber: 'AIN065',
    mrp: 44999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    description: 'Iconic Glyph Interface with customizable LED notifications, Snapdragon 8+ Gen 1, dual 50MP cameras.',
    specs: { 'Display': '6.7-inch Flexible OLED, 120Hz', 'Processor': 'Snapdragon 8+ Gen 1', 'Interface': 'Glyph LED Back' },
    aliases: ['Nothing Phone 2', 'Phone 2 Nothing']
  },
  {
    id: 'prod_mob_9',
    name: 'Realme 12 Pro+ 5G (8GB RAM, 256GB)',
    brand: 'Realme',
    category: 'mobiles',
    modelNumber: 'RMX3840',
    mrp: 29999,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80',
    description: 'Periscope portrait camera with 3x optical zoom, luxury watch design with vegan leather back, 120Hz curved display.',
    specs: { 'Camera': '64MP Periscope OIS', 'Display': '6.7-inch Curved 120Hz OLED', 'Battery': '5000 mAh' },
    aliases: ['Realme 12 Pro Plus', 'Realme 12 Pro+']
  },
  {
    id: 'prod_mob_10',
    name: 'Motorola Edge 50 Pro 5G (12GB RAM, 256GB)',
    brand: 'Motorola',
    category: 'mobiles',
    modelNumber: 'PB0E0003IN',
    mrp: 35999,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80',
    description: 'World-first Pantone validated camera and display, IP68 underwater protection, 125W TurboPower charging.',
    specs: { 'Display': '6.7-inch 1.5K 144Hz pOLED', 'Charging': '125W Wired + 50W Wireless', 'Rating': 'IP68' },
    aliases: ['Moto Edge 50 Pro', 'Edge 50 Pro']
  },

  // 2. Laptops (10 items)
  {
    id: 'prod_lap_1',
    name: 'Apple MacBook Air 13" (M3, 8GB RAM, 256GB SSD)',
    brand: 'Apple',
    category: 'laptops',
    modelNumber: 'MRXN3HN/A',
    mrp: 114900,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    description: 'Super-portable design, blazing-fast M3 chip, up to 18 hours of battery life, Liquid Retina display.',
    specs: { 'Processor': 'Apple M3 (8-core CPU, 8-core GPU)', 'RAM': '8GB Unified', 'Storage': '256GB SSD', 'Weight': '1.24 kg' },
    aliases: ['MacBook Air M3', 'Apple M3 Air 13']
  },
  {
    id: 'prod_lap_2',
    name: 'Apple MacBook Pro 14" (M3 Pro, 18GB RAM, 512GB SSD)',
    brand: 'Apple',
    category: 'laptops',
    modelNumber: 'MRX33HN/A',
    mrp: 199900,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
    description: 'Liquid Retina XDR display, extreme pro performance with M3 Pro chip, up to 22 hours battery runtime.',
    specs: { 'Processor': 'Apple M3 Pro (11-core CPU, 14-core GPU)', 'RAM': '18GB', 'Display': '14.2-inch XDR 120Hz' },
    aliases: ['MacBook Pro M3 Pro', 'MacBook Pro 14']
  },
  {
    id: 'prod_lap_3',
    name: 'Dell XPS 15 9530 (13th Gen i7, 16GB, 1TB SSD, RTX 4050)',
    brand: 'Dell',
    category: 'laptops',
    modelNumber: 'XPS-9530-OLED',
    mrp: 189990,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80',
    description: 'Machined aluminum chassis, carbon fiber palm rest, 15.6" 3.5K OLED InfinityEdge touch screen.',
    specs: { 'CPU': 'Intel Core i7-13700H', 'GPU': 'NVIDIA RTX 4050 6GB', 'RAM': '16GB DDR5', 'Screen': '3.5K OLED Touch' },
    aliases: ['Dell XPS 15', 'XPS 15 9530']
  },
  {
    id: 'prod_lap_4',
    name: 'HP Pavilion 15 (AMD Ryzen 7 7730U, 16GB RAM, 512GB SSD)',
    brand: 'HP',
    category: 'laptops',
    modelNumber: '15-eh3047AU',
    mrp: 67990,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
    description: 'Everyday productivity powerhouse with micro-edge FHD screen, Audio by B&O, fast charge technology.',
    specs: { 'Processor': 'AMD Ryzen 7 7730U', 'RAM': '16GB DDR4', 'Display': '15.6-inch FHD Anti-glare' },
    aliases: ['HP Pavilion 15', 'Pavilion 15 Ryzen 7']
  },
  {
    id: 'prod_lap_5',
    name: 'Lenovo ThinkPad E14 Gen 5 (Intel Core i5 13th Gen, 16GB, 512GB)',
    brand: 'Lenovo',
    category: 'laptops',
    modelNumber: '21JKS01700',
    mrp: 69990,
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80',
    description: 'Mil-spec tested durability, iconic ThinkPad TrackPoint keyboard, hardware TPM 2.0 security encryption.',
    specs: { 'Processor': 'Intel Core i5-1335U', 'RAM': '16GB', 'Weight': '1.41 kg', 'OS': 'Windows 11 Pro' },
    aliases: ['Lenovo ThinkPad E14', 'ThinkPad E14']
  },
  {
    id: 'prod_lap_6',
    name: 'ASUS ROG Zephyrus G14 Gaming Laptop (Ryzen 9, RTX 4060, 16GB)',
    brand: 'ASUS',
    category: 'laptops',
    modelNumber: 'GA402XV-N2034W',
    mrp: 149990,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
    description: 'AniMe Matrix LED display lid, ROG Nebula 165Hz QHD+ screen, Vapor Chamber liquid metal cooling.',
    specs: { 'CPU': 'AMD Ryzen 9 7940HS', 'GPU': 'NVIDIA RTX 4060 8GB', 'Display': '14-inch QHD+ 165Hz' },
    aliases: ['ROG Zephyrus G14', 'Asus G14']
  },
  {
    id: 'prod_lap_7',
    name: 'Acer Swift Go 14 OLED (Intel Core Ultra 5 125H, 16GB, 512GB)',
    brand: 'Acer',
    category: 'laptops',
    modelNumber: 'SFG14-72',
    mrp: 84990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    description: 'Intel AI Boost NPU engine, gorgeous 2.8K 90Hz OLED display with 100% DCI-P3 color gamut, thin and light.',
    specs: { 'CPU': 'Intel Core Ultra 5 125H AI', 'Screen': '14-inch 2.8K OLED 90Hz', 'Weight': '1.32 kg' },
    aliases: ['Acer Swift Go 14', 'Swift Go OLED']
  },
  {
    id: 'prod_lap_8',
    name: 'Dell Inspiron 15 3520 (Intel Core i5 12th Gen, 16GB, 512GB)',
    brand: 'Dell',
    category: 'laptops',
    modelNumber: 'D560868WIN9B',
    mrp: 52990,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
    description: '120Hz smooth FHD display, ergonomic lift hinge, spacious keyboard with numeric keypad.',
    specs: { 'Processor': 'Intel Core i5-1235U', 'RAM': '16GB DDR4', 'Refresh Rate': '120 Hz' },
    aliases: ['Dell Inspiron 15', 'Inspiron 3520']
  },
  {
    id: 'prod_lap_9',
    name: 'HP Envy x360 2-in-1 Touch Laptop (Intel Core i7 13th Gen, 16GB)',
    brand: 'HP',
    category: 'laptops',
    modelNumber: '15-ew1047TU',
    mrp: 104990,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
    description: 'Convertible 360-degree hinge, 15.6" OLED touch display with stylus pen included, AI noise reduction.',
    specs: { 'Type': '2-in-1 Convertible', 'Display': '15.6-inch OLED Touch', 'RAM': '16GB LPDDR5' },
    aliases: ['HP Envy x360', 'Envy 2-in-1']
  },
  {
    id: 'prod_lap_10',
    name: 'Lenovo Legion 5 Pro Gaming Laptop (Ryzen 7, RTX 4070, 32GB)',
    brand: 'Lenovo',
    category: 'laptops',
    modelNumber: '16ARH7H',
    mrp: 174990,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
    description: 'Competitive eSports gaming rig with 16" WQXGA 240Hz screen, Legion Coldfront 5.0 vapor cooling.',
    specs: { 'CPU': 'AMD Ryzen 7 7745HX', 'GPU': 'NVIDIA RTX 4070 8GB (140W)', 'Display': '16-inch 240Hz 500 nits' },
    aliases: ['Legion 5 Pro', 'Lenovo Legion Gaming']
  },

  // 3. TVs (10 items)
  {
    id: 'prod_tv_1',
    name: 'Samsung 55" Crystal 4K Smart TV',
    brand: 'Samsung',
    category: 'tvs',
    modelNumber: 'UA55CUE60AKLXL',
    mrp: 54900,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    description: '55-inch Ultra HD 4K screen with PurColor, Crystal Processor 4K, HDR10+, OTS Lite and Motion Xcelerator.',
    specs: { 'Screen Size': '55 Inches', 'Resolution': '4K Ultra HD (3840 x 2160)', 'Refresh Rate': '60 Hz', 'OS': 'Tizen OS' },
    aliases: ['Samsung 55 inch TV', 'Samsung 55" 4K Smart Television', 'Samsung Crystal 55']
  },
  {
    id: 'prod_tv_2',
    name: 'LG 55" 4K OLED evo Smart TV',
    brand: 'LG',
    category: 'tvs',
    modelNumber: 'OLED55C3PSA',
    mrp: 149990,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
    description: 'OLED evo with Brightness Booster, α9 AI Processor Gen6, 120Hz refresh rate, Dolby Vision IQ & Dolby Atmos.',
    specs: { 'Screen Size': '55 Inches', 'Display Tech': 'Self-Lit OLED evo', 'Refresh Rate': '120 Hz', 'OS': 'webOS 23' },
    aliases: ['LG 55 OLED TV', 'LG C3 55 inch', 'LG 55 inch 4K OLED']
  },
  {
    id: 'prod_tv_3',
    name: 'Sony Bravia 55" 4K Ultra HD Google TV',
    brand: 'Sony',
    category: 'tvs',
    modelNumber: 'KD-55X74L',
    mrp: 69900,
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&q=80',
    description: 'X1 4K Processor, Live Color technology, Motionflow XR 100, Open Baffle Speaker with Dolby Audio.',
    specs: { 'Screen Size': '55 Inches', 'Resolution': '4K HDR', 'Sound': '20W Dolby Audio', 'OS': 'Google TV' },
    aliases: ['Sony Bravia 55', 'Sony 55 inch Google TV']
  },
  {
    id: 'prod_tv_4',
    name: 'Samsung 65" QLED 4K Smart TV',
    brand: 'Samsung',
    category: 'tvs',
    modelNumber: 'QA65Q60CAKLXL',
    mrp: 119900,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&q=80',
    description: '100% Color Volume with Quantum Dot, Quantum Processor Lite 4K, Dual LED contrast technology, AirSlim design.',
    specs: { 'Screen Size': '65 Inches', 'Panel': 'Quantum Dot QLED', 'Design': 'AirSlim 26mm' },
    aliases: ['Samsung 65 QLED', 'Samsung 65 inch TV']
  },
  {
    id: 'prod_tv_5',
    name: 'LG 65" 4K UHD Smart TV (UR7500)',
    brand: 'LG',
    category: 'tvs',
    modelNumber: '65UR7500PSC',
    mrp: 89990,
    image: 'https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=800&q=80',
    description: 'α5 AI Processor Gen6, 4K Upscaling, AI Sound with virtual 5.1 surround sound, Magic Remote control.',
    specs: { 'Screen Size': '65 Inches', 'Resolution': '4K UHD', 'Remote': 'Magic Remote Voice Control' },
    aliases: ['LG 65 inch TV', 'LG 65 UR7500']
  },
  {
    id: 'prod_tv_6',
    name: 'Sony Bravia 65" XR OLED 4K TV (A80L Series)',
    brand: 'Sony',
    category: 'tvs',
    modelNumber: 'XR-65A80L',
    mrp: 249900,
    image: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=800&q=80',
    description: 'Cognitive Processor XR, Acoustic Surface Audio+ where screen is the speaker, perfect for PlayStation 5.',
    specs: { 'Panel': 'Pure OLED', 'Processor': 'Cognitive Processor XR', 'Sound': 'Acoustic Surface Audio+' },
    aliases: ['Sony 65 OLED', 'Sony A80L']
  },
  {
    id: 'prod_tv_7',
    name: 'OnePlus 55" Q Series 4K QLED Smart TV',
    brand: 'OnePlus',
    category: 'tvs',
    modelNumber: '55Q2PRO',
    mrp: 59999,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    description: 'Quantum Dot QLED panel with 120Hz refresh rate, 70W Dynaudio soundbar integrated, Gamma Engine Ultra.',
    specs: { 'Screen Size': '55 Inches', 'Refresh Rate': '120 Hz', 'Soundbar': '70W Integrated Dynaudio' },
    aliases: ['OnePlus 55 TV', 'OnePlus Q2 Pro']
  },
  {
    id: 'prod_tv_8',
    name: 'Xiaomi Smart TV X 50" 4K Dolby Vision',
    brand: 'Xiaomi',
    category: 'tvs',
    modelNumber: 'L50M8-A2IN',
    mrp: 34999,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80',
    description: 'Metallic bezel-less design, 4K Dolby Vision, 30W speaker with Dolby Audio and PatchWall with Google TV.',
    specs: { 'Screen Size': '50 Inches', 'Resolution': '4K HDR10+', 'Sound': '30 Watts Dolby Audio' },
    aliases: ['Mi TV X 50', 'Xiaomi 50 inch 4K']
  },
  {
    id: 'prod_tv_9',
    name: 'TCL 55" 4K Ultra HD Metallic Smart Google TV',
    brand: 'TCL',
    category: 'tvs',
    modelNumber: '55P635',
    mrp: 38990,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80',
    description: 'Edgeless design, HDR 10 dynamic color enhancement, AIPQ 2.0 processor and hands-free voice control.',
    specs: { 'Screen Size': '55 Inches', 'Resolution': '4K Ultra HD', 'OS': 'Google TV' },
    aliases: ['TCL 55 inch TV', 'TCL 4K TV']
  },
  {
    id: 'prod_tv_10',
    name: 'Hisense 55" Tornado 4K QLED Series (102W Sound)',
    brand: 'Hisense',
    category: 'tvs',
    modelNumber: '55E7K PRO',
    mrp: 49990,
    image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=800&q=80',
    description: '144Hz Game Mode Pro, 102W powerful built-in JBL soundbar with subwoofer, Dolby Vision IQ.',
    specs: { 'Sound': '102W Built-in Subwoofer JBL', 'Refresh Rate': '144 Hz Gaming', 'Panel': 'QLED' },
    aliases: ['Hisense 55 QLED', 'Hisense Tornado TV']
  },

  // 4. Home Appliances (10 items)
  {
    id: 'prod_ha_1',
    name: 'LG 8 Kg 5-Star AI Direct Drive Front Load Washing Machine',
    brand: 'LG',
    category: 'home_appliances',
    modelNumber: 'FHP1208Z5W',
    mrp: 38990,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    description: 'Ideal for family of 4. AI DD intelligently detects fabric weight and softness, Steam Wash removes allergens.',
    specs: { 'Capacity': '8.0 Kg', 'Energy Rating': '5 Star BEE', 'Motor': 'Direct Drive (1200 RPM)' },
    aliases: ['LG front load washing machine', 'LG 8kg washing machine', 'washing machine for family of 4 under 30k']
  },
  {
    id: 'prod_ha_2',
    name: 'Samsung 253 L 3-Star Inverter Double Door Refrigerator',
    brand: 'Samsung',
    category: 'home_appliances',
    modelNumber: 'RT28C3053S8',
    mrp: 31990,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    description: 'Digital Inverter compressor with 20-year warranty, all-around cooling and stabilizer-free operation.',
    specs: { 'Capacity': '253 Litres', 'Rating': '3 Star', 'Cooling': 'All Around Multi-Air Flow' },
    aliases: ['Samsung Double Door Fridge', 'Samsung 253L Refrigerator']
  },
  {
    id: 'prod_ha_3',
    name: 'LG 7 Kg Smart Inverter 5-Star Top Load Washer',
    brand: 'LG',
    category: 'home_appliances',
    modelNumber: 'T70SKSF1Z',
    mrp: 23990,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
    description: 'Smart Inverter technology eliminates wasted operation, TurboDrum creates tough wash action.',
    specs: { 'Capacity': '7.0 Kg', 'Type': 'Top Load Automatic', 'Rating': '5 Star' },
    aliases: ['LG 7kg washing machine', 'LG Top Load Washer']
  },
  {
    id: 'prod_ha_4',
    name: 'Whirlpool 265 L 3-Star Frost-Free Double Door Refrigerator',
    brand: 'Whirlpool',
    category: 'home_appliances',
    modelNumber: 'IF INV CNV 278',
    mrp: 33990,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    description: 'IntelliSense Inverter Technology, 5-in-1 convertible freezer modes, Microblock technology.',
    specs: { 'Capacity': '265 Litres', 'Modes': '5-in-1 Convertible', 'Energy': '3 Star' },
    aliases: ['Whirlpool 265L Refrigerator', 'Whirlpool Double Door']
  },
  {
    id: 'prod_ha_5',
    name: 'Bosch 8 Kg 5-Star Inverter Touch Control Front Load Washer',
    brand: 'Bosch',
    category: 'home_appliances',
    modelNumber: 'WAJ2846SIN',
    mrp: 44990,
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    description: 'EcoSilence Drive brushless motor, Anti-Tangle function, AntiVibration side walls for ultra quiet operation.',
    specs: { 'Capacity': '8.0 Kg', 'Speed': '1400 RPM', 'Motor': 'EcoSilence Drive' },
    aliases: ['Bosch 8kg Washing Machine', 'Bosch Front Load']
  },
  {
    id: 'prod_ha_6',
    name: 'Voltas 1.5 Ton 5-Star Inverter Split AC',
    brand: 'Voltas',
    category: 'home_appliances',
    modelNumber: '185V Vectra Elegant',
    mrp: 47990,
    image: 'https://images.unsplash.com/photo-1614633833026-06204c34a26f?w=800&q=80',
    description: 'High ambient cooling up to 52°C, 4-in-1 adjustable cooling mode, 100% copper condenser coil.',
    specs: { 'Capacity': '1.5 Ton', 'Energy': '5 Star BEE', 'Cooling': '4-in-1 Convertible' },
    aliases: ['Voltas 1.5 Ton AC', 'Voltas 5 Star Inverter AC']
  },
  {
    id: 'prod_ha_7',
    name: 'Daikin 1.5 Ton 5-Star Inverter Split AC with PM 2.5 Filter',
    brand: 'Daikin',
    category: 'home_appliances',
    modelNumber: 'MTKM50U',
    mrp: 52990,
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&q=80',
    description: 'Dew clean technology self-cleans indoor coil, 3D airflow for uniform cooling, PM 2.5 air purifier filter.',
    specs: { 'Capacity': '1.5 Ton', 'Energy': '5 Star', 'Air Filter': 'PM 2.5 Trap' },
    aliases: ['Daikin 1.5 Ton AC', 'Daikin 5 Star AC']
  },
  {
    id: 'prod_ha_8',
    name: 'Samsung 8 Kg 5-Star AI EcoBubble Front Load Washer',
    brand: 'Samsung',
    category: 'home_appliances',
    modelNumber: 'WW80T504DAX1TL',
    mrp: 43990,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&q=80',
    description: 'EcoBubble generates cleansing bubbles that penetrate fabric 40x faster, Hygiene Steam kills 99.9% bacteria.',
    specs: { 'Capacity': '8 Kg', 'Speed': '1400 RPM', 'Feature': 'AI Control & SmartThings' },
    aliases: ['Samsung 8kg EcoBubble', 'Samsung Front Load Washer']
  },
  {
    id: 'prod_ha_9',
    name: 'IFB 8.5 Kg 5-Star Front Load Washing Machine',
    brand: 'IFB',
    category: 'home_appliances',
    modelNumber: 'SENATOR NEO MXS',
    mrp: 46990,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    description: 'Aqua Energie built-in device for hard water wash, 3D Warm Soak, 9 Swirl wash motions.',
    specs: { 'Capacity': '8.5 Kg', 'Hard Water': 'Aqua Energie Built-in', 'Speed': '1400 RPM' },
    aliases: ['IFB 8.5kg Washing Machine', 'IFB Senator Neo']
  },
  {
    id: 'prod_ha_10',
    name: 'Panasonic 338 L 3-Star Prime Convertible Double Door Fridge',
    brand: 'Panasonic',
    category: 'home_appliances',
    modelNumber: 'NR-MB341N',
    mrp: 42990,
    image: 'https://images.unsplash.com/photo-1536353284924-9240cebc4215?w=800&q=80',
    description: 'Prime Fresh -3°C soft freezing keeps fish & meat fresh for 7 days without defrosting, ECONAVI sensors.',
    specs: { 'Capacity': '338 Litres', 'Technology': 'Prime Fresh Soft Freezing', 'Sensors': 'ECONAVI Inverter' },
    aliases: ['Panasonic 338L Refrigerator', 'Panasonic Double Door']
  },

  // 5. Electrical Appliances (10 items)
  {
    id: 'prod_elec_1',
    name: 'Havells Festiva 1200mm Decorative Ceiling Fan',
    brand: 'Havells',
    category: 'electrical_appliances',
    modelNumber: 'FHVFSSTGLD48',
    mrp: 3450,
    image: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80',
    description: 'High-speed decorative ceiling fan with metallic paint finish and dust-resistant blades.',
    specs: { 'Sweep': '1200 mm', 'Speed': '390 RPM', 'Air Delivery': '238 CMM', 'Power': '74 Watts' },
    aliases: ['Havells Ceiling Fan', 'Havells 1200mm fan']
  },
  {
    id: 'prod_elec_2',
    name: 'Atomberg Renesa 1200mm BLDC Smart Ceiling Fan with Remote',
    brand: 'Atomberg',
    category: 'electrical_appliances',
    modelNumber: 'RENESA-1200-WHT',
    mrp: 4290,
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&q=80',
    description: 'Energy saving BLDC motor consumes only 28W at top speed, saves up to ₹1,500/year on electricity bills.',
    specs: { 'Motor': 'BLDC 28 Watts', 'Remote': 'Smart Remote with Timer', 'Speed': '360 RPM' },
    aliases: ['Atomberg Fan', 'Atomberg Renesa BLDC']
  },
  {
    id: 'prod_elec_3',
    name: 'Philips GC1905 1440W Steam Iron with Spray',
    brand: 'Philips',
    category: 'electrical_appliances',
    modelNumber: 'GC1905/21',
    mrp: 1895,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&q=80',
    description: 'Continuous steam output up to 17 g/min, super fast water filling and emptying, aluminium soleplate.',
    specs: { 'Power': '1440 Watts', 'Steam Boost': 'Continuous 17g/min', 'Tank': '180 ml' },
    aliases: ['Philips Steam Iron', 'Philips GC1905']
  },
  {
    id: 'prod_elec_4',
    name: 'Bajaj New Shakti Neo 15L Storage Water Heater (Geyser)',
    brand: 'Bajaj',
    category: 'electrical_appliances',
    modelNumber: 'SHAKTI-NEO-15L',
    mrp: 6999,
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800&q=80',
    description: 'Titanium Armour and swirl flow technology, suitable for high-rise buildings (8 bar pressure).',
    specs: { 'Capacity': '15 Litres', 'Pressure': '8 Bar (High Rise)', 'Rating': '4 Star BEE' },
    aliases: ['Bajaj 15L Geyser', 'Bajaj Water Heater']
  },
  {
    id: 'prod_elec_5',
    name: 'AO Smith SDS-15L Glass Lined Water Geyser',
    brand: 'AO Smith',
    category: 'electrical_appliances',
    modelNumber: 'SDS-15-WHT',
    mrp: 9400,
    image: 'https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=80',
    description: 'Blue Diamond glass-lined inner tank provides 2x corrosion resistance, custom alloy heating element.',
    specs: { 'Capacity': '15 Litres', 'Tank Coating': 'Blue Diamond Glass Lined', 'Rating': '5 Star' },
    aliases: ['AO Smith Geyser', 'AO Smith 15L']
  },
  {
    id: 'prod_elec_6',
    name: 'Crompton Ozone 75L Desert Air Cooler',
    brand: 'Crompton',
    category: 'electrical_appliances',
    modelNumber: 'ACGC-OZONE75',
    mrp: 11499,
    image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?w=800&q=80',
    description: 'High density honeycomb cooling pads, Everlast pump that handles hard water, 4-way air deflection.',
    specs: { 'Tank': '75 Litres', 'Air Delivery': '4200 m3/hr', 'Area': 'Up to 500 sq.ft.' },
    aliases: ['Crompton Air Cooler', 'Crompton Ozone 75']
  },
  {
    id: 'prod_elec_7',
    name: 'Luminous Zelio+ 1100 Pure Sine Wave Home Inverter',
    brand: 'Luminous',
    category: 'electrical_appliances',
    modelNumber: 'ZELIO-1100',
    mrp: 6999,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    description: 'Intelligent 32-bit DSP processor, LED display showing battery backup hours and load percentage.',
    specs: { 'Capacity': '900 VA / 756 Watts', 'Waveform': 'Pure Sine Wave', 'Display': 'Hours Backup' },
    aliases: ['Luminous Inverter', 'Luminous Zelio 1100']
  },
  {
    id: 'prod_elec_8',
    name: 'Microtek Luxe 1400 Pure Sinewave Inverter UPS',
    brand: 'Microtek',
    category: 'electrical_appliances',
    modelNumber: 'LUXE-1400',
    mrp: 7490,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    description: 'Micro-controller based intelligent control design, auto reset feature, battery gravity builder.',
    specs: { 'Capacity': '1100 VA', 'Rated Power': '925 Watts', 'Technology': 'Pure Sine Wave' },
    aliases: ['Microtek Inverter', 'Microtek Luxe 1400']
  },
  {
    id: 'prod_elec_9',
    name: 'Usha Armor 1100W Heavy Weight Dry Iron',
    brand: 'Usha',
    category: 'electrical_appliances',
    modelNumber: 'ARMOR-1100W',
    mrp: 1290,
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80',
    description: 'Heavyweight body delivers crisp creases on cotton and linen, Weilburger German non-stick soleplate.',
    specs: { 'Power': '1100 Watts', 'Weight': '1.6 kg Heavy Weight', 'Soleplate': 'German Non-stick' },
    aliases: ['Usha Heavy Iron', 'Usha Dry Iron']
  },
  {
    id: 'prod_elec_10',
    name: 'Orient Electric Wendy 1200mm Ceiling Fan (Metallic Finish)',
    brand: 'Orient',
    category: 'electrical_appliances',
    modelNumber: 'WENDY-1200-PEARL',
    mrp: 3690,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    description: 'Wide tip aerodynamically designed blades for maximum air delivery, full copper motor with double ball bearings.',
    specs: { 'Sweep': '1200 mm', 'Air Delivery': '230 CMM', 'Speed': '370 RPM' },
    aliases: ['Orient Ceiling Fan', 'Orient Wendy 1200']
  },

  // 6. Clothing (10 items)
  {
    id: 'prod_cloth_1',
    name: "Levi's Men's 511 Slim Fit Denim Jeans",
    brand: "Levi's",
    category: 'clothing',
    modelNumber: '04511-5369',
    mrp: 3999,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?w=800&q=80',
    description: 'Modern slim-fitting jeans with room to move, stretch denim crafted for daily comfort and durability.',
    specs: { 'Fit': 'Slim Fit', 'Material': '99% Cotton, 1% Elastane', 'Closure': 'Zip fly' },
    aliases: ['Levis 511 Jeans', 'Levis Mens Slim Jeans']
  },
  {
    id: 'prod_cloth_2',
    name: "Levi's Men's The Trucker Denim Jacket",
    brand: "Levi's",
    category: 'clothing',
    modelNumber: '72334-0136',
    mrp: 4999,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
    description: 'The original denim jacket since 1967. Point collar, front button placket and chest flap pockets.',
    specs: { 'Material': '100% Cotton Non-Stretch Denim', 'Fit': 'Regular Fit', 'Style': 'Classic Trucker' },
    aliases: ['Levis Denim Jacket', 'Trucker Jacket']
  },
  {
    id: 'prod_cloth_3',
    name: "Allen Solly Men's Slim Fit Cotton Formal Shirt",
    brand: 'Allen Solly',
    category: 'clothing',
    modelNumber: 'ASSRG02F00388',
    mrp: 2199,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    description: 'Crafted from breathable 100% combed cotton, semi-cutaway collar and curved hem for tucked-in sharp office look.',
    specs: { 'Fabric': '100% Cotton', 'Fit': 'Slim Fit', 'Occasion': 'Formal / Business' },
    aliases: ['Allen Solly Shirt', 'Formal White Shirt']
  },
  {
    id: 'prod_cloth_4',
    name: "Raymond Men's Premium Blend Poly-Viscose Suit Blazer",
    brand: 'Raymond',
    category: 'clothing',
    modelNumber: 'RMZ03492',
    mrp: 8999,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    description: 'Tailored single-breasted two-button blazer with notch lapels, flap pockets and double side vents.',
    specs: { 'Material': 'Poly-Viscose Wool Touch', 'Pattern': 'Solid Navy Blue', 'Fit': 'Custom Tailored' },
    aliases: ['Raymond Blazer', 'Mens Formal Suit Blazer']
  },
  {
    id: 'prod_cloth_5',
    name: "Zara Basic 100% Cotton Relaxed Poplin Shirt",
    brand: 'Zara',
    category: 'clothing',
    modelNumber: 'ZR-POPLIN-01',
    mrp: 2990,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    description: 'Relaxed fit collared shirt made of crisp poplin cotton with long sleeves and front button fastening.',
    specs: { 'Material': '100% Poplin Cotton', 'Fit': 'Relaxed Fit' },
    aliases: ['Zara Poplin Shirt', 'Zara Mens Shirt']
  },
  {
    id: 'prod_cloth_6',
    name: "Fabindia Men's Cotton Comfort Fit Short Kurta",
    brand: 'Fabindia',
    category: 'clothing',
    modelNumber: 'FAB-KURTA-102',
    mrp: 1690,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    description: 'Handwoven pure cotton short kurta with Chinese collar, roll-up sleeves and side pockets.',
    specs: { 'Fabric': 'Handloom Pure Cotton', 'Sleeve': 'Long with Roll-up Tab' },
    aliases: ['Fabindia Kurta', 'Cotton Short Kurta']
  },
  {
    id: 'prod_cloth_7',
    name: "Biba Women's Printed Cotton Anarkali Kurta Set",
    brand: 'Biba',
    category: 'clothing',
    modelNumber: 'SKD9478SS24',
    mrp: 4599,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
    description: 'Includes floral flared Anarkali kurta, matching tapered pants and sheer dupatta with gold foil borders.',
    specs: { 'Set Contents': 'Kurta, Pants, Dupatta (3 Pc)', 'Fabric': 'Pure Cambric Cotton' },
    aliases: ['Biba Kurta Set', 'Biba Anarkali']
  },
  {
    id: 'prod_cloth_8',
    name: "W for Woman Cotton Straight Fit Floral Kurta",
    brand: 'W for Woman',
    category: 'clothing',
    modelNumber: 'W-STRT-7721',
    mrp: 1999,
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
    description: 'Round neck ethnic festive straight kurta with side slits and three-quarter sleeves.',
    specs: { 'Length': 'Calf Length', 'Sleeve': '3/4th Sleeve', 'Fabric': '100% Cotton' },
    aliases: ['W Kurta', 'W for Woman Floral']
  },
  {
    id: 'prod_cloth_9',
    name: "U.S. Polo Assn. Men's Solid Cotton Pique Polo T-Shirt",
    brand: 'U.S. Polo Assn.',
    category: 'clothing',
    modelNumber: 'USTSO0890',
    mrp: 1899,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80',
    description: 'Classic double-horseman embroidered logo, ribbed collar and sleeve cuffs, breathable cotton pique knit.',
    specs: { 'Fabric': '100% Cotton Pique', 'Fit': 'Regular Fit', 'Neck': 'Ribbed Polo Collar' },
    aliases: ['US Polo T Shirt', 'USPA Polo']
  },
  {
    id: 'prod_cloth_10',
    name: "Van Heusen Men's Smart Athletic Fit Chino Trousers",
    brand: 'Van Heusen',
    category: 'clothing',
    modelNumber: 'VH-CHINO-78',
    mrp: 2499,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    description: 'Stretch-infused premium twill chino trousers designed for all-day office comfort and weekend smart casuals.',
    specs: { 'Material': '98% Cotton, 2% Spandex Twill', 'Fit': 'Athletic Slim Fit' },
    aliases: ['Van Heusen Chinos', 'Mens Chino Trousers']
  },

  // 7. Beauty Products (10 items)
  {
    id: 'prod_beauty_1',
    name: 'Maybelline New York Fit Me Matte + Poreless Foundation (30ml)',
    brand: 'Maybelline',
    category: 'beauty_products',
    modelNumber: 'MNY-FITME-128',
    mrp: 649,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    description: 'Lightweight foundation that mattifies and refines pores for a natural, seamless finish with SPF 22.',
    specs: { 'Volume': '30 ml', 'Finish': 'Matte Poreless', 'Skin Type': 'Normal to Oily' },
    aliases: ['Maybelline Fit Me', 'Fit Me Foundation 128']
  },
  {
    id: 'prod_beauty_2',
    name: 'Maybelline New York The Colossal Waterproof Mascara (10ml)',
    brand: 'Maybelline',
    category: 'beauty_products',
    modelNumber: 'MNY-COL-MASC',
    mrp: 449,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    description: 'Infused with collagen formula and mega brush for up to 9x colossal volume without clumps.',
    specs: { 'Volume': '10 ml', 'Waterproof': 'Yes (Up to 24H)', 'Color': 'Glam Black' },
    aliases: ['Colossal Mascara', 'Maybelline Mascara']
  },
  {
    id: 'prod_beauty_3',
    name: "L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Face Serum (30ml)",
    brand: "L'Oreal",
    category: 'beauty_products',
    modelNumber: 'LOR-REV-HA30',
    mrp: 999,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    description: 'Intensely plumps and hydrates skin, reduces fine lines by 60%, lightweight non-sticky formula.',
    specs: { 'Active': '1.5% Pure Hyaluronic Acid', 'Volume': '30 ml', 'Paraben Free': 'Yes' },
    aliases: ['Loreal Hyaluronic Acid', 'Revitalift Serum']
  },
  {
    id: 'prod_beauty_4',
    name: 'M.A.C Retro Matte Lipstick - Ruby Woo (3g)',
    brand: 'MAC',
    category: 'beauty_products',
    modelNumber: 'MAC-RWOO-3G',
    mrp: 2300,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80',
    description: 'The iconic vivid blue-red shade with long-wearing 8-hour completely matte finish.',
    specs: { 'Weight': '3 g', 'Shade': 'Ruby Woo (Matte Red)', 'Wear': '8 Hours' },
    aliases: ['MAC Ruby Woo', 'MAC Retro Matte Lipstick']
  },
  {
    id: 'prod_beauty_5',
    name: 'The Ordinary Niacinamide 10% + Zinc 1% High-Strength Serum (30ml)',
    brand: 'The Ordinary',
    category: 'beauty_products',
    modelNumber: 'ORD-NZ-30',
    mrp: 600,
    image: 'https://images.unsplash.com/photo-1608248597359-0097c2767073?w=800&q=80',
    description: 'Reduces the appearance of skin blemishes, congestion, and balances visible sebum activity.',
    specs: { 'Volume': '30 ml', 'Active': 'Niacinamide 10% + Zinc PCA 1%' },
    aliases: ['The Ordinary Niacinamide', 'Niacinamide Serum']
  },
  {
    id: 'prod_beauty_6',
    name: 'Minimalist 10% Vitamin C Face Serum for Glowing Skin (30ml)',
    brand: 'Minimalist',
    category: 'beauty_products',
    modelNumber: 'MIN-VITC-10',
    mrp: 699,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80',
    description: 'Formulated with stabilized Vitamin C derivative and Centella water for radiant, glowing skin.',
    specs: { 'Volume': '30 ml', 'Active': '10% Ethyl Ascorbic Acid + Centella Water' },
    aliases: ['Minimalist Vitamin C', 'Vitamin C Serum']
  },
  {
    id: 'prod_beauty_7',
    name: 'Lakme Absolute Skin Natural Mousse Foundation (25g)',
    brand: 'Lakme',
    category: 'beauty_products',
    modelNumber: 'LAK-MOUSSE-02',
    mrp: 850,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    description: 'Feather-light texture foundation with SPF 8 that blends effortlessly for a 16-hour natural matte look.',
    specs: { 'Weight': '25 g', 'Texture': 'Whipped Mousse', 'SPF': 'SPF 8' },
    aliases: ['Lakme Mousse', 'Lakme Absolute Foundation']
  },
  {
    id: 'prod_beauty_8',
    name: 'Clinique Moisture Surge 100H Auto-Replenishing Hydrator (50ml)',
    brand: 'Clinique',
    category: 'beauty_products',
    modelNumber: 'CLN-MS100-50',
    mrp: 2950,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    description: 'Refreshing oil-free gel-cream with aloe bio-ferment and hyaluronic acid provides 100 hours of stabilizing hydration.',
    specs: { 'Volume': '50 ml', 'Formula': 'Oil-Free Gel-Cream', 'Duration': '100 Hours' },
    aliases: ['Clinique Moisture Surge', 'Moisture Surge 100H']
  },
  {
    id: 'prod_beauty_9',
    name: 'Kama Ayurveda Pure Rose Water Facial Mist (200ml)',
    brand: 'Kama Ayurveda',
    category: 'beauty_products',
    modelNumber: 'KAMA-ROSE-200',
    mrp: 1495,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80',
    description: 'Steam distilled from Kannauj roses using ancient ayurvedic traditions to tone and refresh skin.',
    specs: { 'Volume': '200 ml', 'Source': 'Kannauj Roses', 'Type': '100% Pure Distillate' },
    aliases: ['Kama Ayurveda Rose Water', 'Pure Rose Mist']
  },
  {
    id: 'prod_beauty_10',
    name: 'Forest Essentials Soundarya Radiance Cream with 24K Gold (50g)',
    brand: 'Forest Essentials',
    category: 'beauty_products',
    modelNumber: 'FE-SOUND-50',
    mrp: 5400,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80',
    description: 'Infused with pure 24 Karat Gold Bhasma and saffron to tone and impart luminous radiance.',
    specs: { 'Weight': '50 g', 'Ingredients': '24K Gold Bhasma, Saffron, Ashwagandha' },
    aliases: ['Forest Essentials Soundarya', '24K Gold Radiance Cream']
  },

  // 8. Footwear (10 items)
  {
    id: 'prod_foot_1',
    name: 'Nike Air Max SC Running & Lifestyle Shoes',
    brand: 'Nike',
    category: 'footwear',
    modelNumber: 'CW4555-102',
    mrp: 5995,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description: 'Old-school track vibes with visible Air cushioning, leather, textile and mesh construction.',
    specs: { 'Sole': 'Rubber with flex grooves', 'Cushioning': 'Max Air unit', 'Color': 'White/Black' },
    aliases: ['Nike Air Max SC', 'Nike Air Max Sneaker']
  },
  {
    id: 'prod_foot_2',
    name: 'Nike Revolution 7 Road Running Shoes',
    brand: 'Nike',
    category: 'footwear',
    modelNumber: 'FB2207-001',
    mrp: 3695,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
    description: 'Soft foam midsole provides a smooth and stable ride, forefoot puff for extra toe comfort.',
    specs: { 'Closure': 'Lace-Up', 'Surface': 'Road Running', 'Material': 'Breathable Mesh' },
    aliases: ['Nike Revolution 7', 'Nike Running Shoes']
  },
  {
    id: 'prod_foot_3',
    name: 'Adidas Originals Stan Smith Classic White Sneakers',
    brand: 'Adidas',
    category: 'footwear',
    modelNumber: 'FX5502',
    mrp: 7999,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&q=80',
    description: 'Timeless court classic made with Primegreen high-performance recycled materials and green heel tab.',
    specs: { 'Upper': 'Vegan synthetic leather', 'Outsole': 'Recycled rubber cupsole' },
    aliases: ['Adidas Stan Smith', 'Stan Smith Sneakers']
  },
  {
    id: 'prod_foot_4',
    name: 'Adidas Ultraboost Light Running Shoes',
    brand: 'Adidas',
    category: 'footwear',
    modelNumber: 'HQ6351',
    mrp: 18999,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    description: 'Lightest Boost cushioning ever made, Continental Better Rubber outsole for superior grip in wet & dry.',
    specs: { 'Midsole': 'Light BOOST', 'Outsole': 'Continental Rubber', 'Upper': 'PRIMEKNIT+' },
    aliases: ['Adidas Ultraboost', 'Ultraboost Light']
  },
  {
    id: 'prod_foot_5',
    name: 'Puma Smash v2 Leather Casual Sneakers',
    brand: 'Puma',
    category: 'footwear',
    modelNumber: '36521501',
    mrp: 3999,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    description: 'Tennis-inspired silhouette with clean leather upper, stitched Puma formstrip and cushioned sockliner.',
    specs: { 'Material': 'Leather Upper', 'Sockliner': 'SoftFoam+ dual density', 'Sole': 'Rubber' },
    aliases: ['Puma Smash v2', 'Puma Leather Sneakers']
  },
  {
    id: 'prod_foot_6',
    name: "Woodland Men's Camel Leather Trekking & Outdoor Shoes",
    brand: 'Woodland',
    category: 'footwear',
    modelNumber: 'GC-1868115',
    mrp: 4495,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80',
    description: 'Nubuck genuine leather tough outdoor boots with rust-proof metal eyelets and deep grooved rubber soles.',
    specs: { 'Leather': 'Nubuck Oily Camel Leather', 'Sole': 'High Traction Thermoplastic Rubber' },
    aliases: ['Woodland Shoes', 'Woodland Trekking Shoes']
  },
  {
    id: 'prod_foot_7',
    name: "Clarks Men's Oliver Leather Oxford Dress Shoes",
    brand: 'Clarks',
    category: 'footwear',
    modelNumber: 'CLK-OLIV-BRN',
    mrp: 6999,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
    description: 'Hand-burnished dark tan leather upper with classic brogue punch detailing and OrthoLite footbed.',
    specs: { 'Style': 'Oxford Formal', 'Material': 'Hand-Finished Bovine Leather', 'Insole': 'OrthoLite' },
    aliases: ['Clarks Formal Shoes', 'Clarks Oxford']
  },
  {
    id: 'prod_foot_8',
    name: "Bata Men's Formal Derbys Black Dress Shoes",
    brand: 'Bata',
    category: 'footwear',
    modelNumber: 'BATA-DERBY-BLK',
    mrp: 1999,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    description: 'Polished leatherette finish, padded collar and lightweight TPR anti-skid sole for comfortable workdays.',
    specs: { 'Closure': 'Lace-Up', 'Color': 'Jet Black', 'Sole': 'TPR Anti-Slip' },
    aliases: ['Bata Formal Shoes', 'Bata Mens Derby']
  },
  {
    id: 'prod_foot_9',
    name: 'Crocs Classic Unisex Clogs - Navy Blue',
    brand: 'Crocs',
    category: 'footwear',
    modelNumber: '10001-410',
    mrp: 3295,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
    description: 'Incredibly light and fun to wear, water-friendly and buoyant, ventilation ports shed water and debris.',
    specs: { 'Material': 'Croslite Foam Resin', 'Pivoting Heel Strap': 'Yes' },
    aliases: ['Crocs Classic Clog', 'Crocs Navy']
  },
  {
    id: 'prod_foot_10',
    name: 'Asics Gel-Kayano 30 Stability Running Shoes',
    brand: 'Asics',
    category: 'footwear',
    modelNumber: '1011B548-001',
    mrp: 15999,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    description: '4D GUIDANCE SYSTEM provides adaptive stability, PureGEL technology delivers softer landings for marathons.',
    specs: { 'Cushioning': 'FF BLAST PLUS ECO & PureGEL', 'Drop': '10 mm', 'Weight': '303 g' },
    aliases: ['Asics Gel Kayano 30', 'Asics Running Shoes']
  },

  // 9. Furniture (10 items)
  {
    id: 'prod_furn_1',
    name: 'Wakefit Ergonomic High Back Office Desk Chair',
    brand: 'Wakefit',
    category: 'furniture',
    modelNumber: 'WF-OFFCHR-HB',
    mrp: 9999,
    image: 'https://images.unsplash.com/photo-1580481077190-7362a74c6d66?w=800&q=80',
    description: 'Breathable mesh back, adjustable 2D lumbar support, multi-lock synchro tilt mechanism and 3D armrests.',
    specs: { 'Dimensions': '65D x 65W x 120H cm', 'Material': 'High-density Molded Foam & Mesh', 'Warranty': '3 Years' },
    aliases: ['Wakefit Office Chair', 'Ergonomic Desk Chair']
  },
  {
    id: 'prod_furn_2',
    name: 'Green Soul Monster Ultimate Gaming & Office Chair',
    brand: 'Green Soul',
    category: 'furniture',
    modelNumber: 'GS-MONSTER-T-BLK',
    mrp: 18990,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80',
    description: 'Heavy duty metal frame, premium breathable spandex fabric, memory foam neck pillow and 180° recline.',
    specs: { 'Mechanism': 'Deer Mechanism with 180° Recline', 'Base': 'Heavy Metal 700mm' },
    aliases: ['Green Soul Gaming Chair', 'Monster Ultimate Chair']
  },
  {
    id: 'prod_furn_3',
    name: 'Solid Sheesham Wood 6-Seater Dining Table Set with Cushioned Chairs',
    brand: 'Royal Wood',
    category: 'furniture',
    modelNumber: 'RW-DIN-6S',
    mrp: 38999,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    description: 'Natural teak finish 100% solid Sheesham wood dining set with 6 ergonomically cushioned chairs.',
    specs: { 'Wood': '100% Seasoned Sheesham Wood', 'Seating': '6 Seater', 'Finish': 'Teak Matte' },
    aliases: ['Sheesham Dining Table', '6 Seater Dining Set']
  },
  {
    id: 'prod_furn_4',
    name: 'Modern Solid Teak Wood Round Coffee Table',
    brand: 'FurDeco',
    category: 'furniture',
    modelNumber: 'FD-COF-RND',
    mrp: 14500,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
    description: 'Minimalist Scandinavian four-legged tripod base with solid natural teak circular tabletop.',
    specs: { 'Diameter': '80 cm', 'Height': '45 cm', 'Wood': 'Solid Teak Wood' },
    aliases: ['Round Coffee Table', 'Teak Coffee Table']
  },
  {
    id: 'prod_furn_5',
    name: 'Amazon Solimo 3-Door Engineered Wood Wardrobe with Mirror',
    brand: 'Solimo',
    category: 'furniture',
    modelNumber: 'SOL-WRD-3D-WAL',
    mrp: 16999,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    description: 'Spacious hanging storage with 4 deep shelves, internal safety lock drawer and full-length dressing mirror.',
    specs: { 'Material': 'European Standard Particle Board', 'Dimensions': '183H x 115W x 45D cm' },
    aliases: ['3 Door Wardrobe', 'Solimo Wardrobe']
  },
  {
    id: 'prod_furn_6',
    name: 'Sleepyhead Kiki 3-Seater Fabric Sofa - Charcoal Grey',
    brand: 'Sleepyhead',
    category: 'furniture',
    modelNumber: 'SH-SOFA-3S-GRY',
    mrp: 19999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    description: 'Solid neem wood internal frame, high-resilience foam cushioning wrapped in soft anti-microbial fabric.',
    specs: { 'Seating': '3 Persons', 'Fabric': 'High GSM Poly-Cotton', 'Frame': 'Kiln-Dried Neem Wood' },
    aliases: ['Sleepyhead Sofa', '3 Seater Sofa']
  },
  {
    id: 'prod_furn_7',
    name: 'Urban Ladder Barnes Engineered Wood Study Computer Desk',
    brand: 'Urban Ladder',
    category: 'furniture',
    modelNumber: 'UL-DESK-BARNES',
    mrp: 8999,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    description: 'Minimal study table with cable grommet management, side utility drawers and scratch-resistant matte melamine surface.',
    specs: { 'Dimensions': '120W x 60D x 75H cm', 'Finish': 'American Walnut' },
    aliases: ['Urban Ladder Desk', 'Study Computer Table']
  },
  {
    id: 'prod_furn_8',
    name: 'Nilkamal Freedom Plastic Storage Cabinet with Shelves',
    brand: 'Nilkamal',
    category: 'furniture',
    modelNumber: 'FRDM-CAB-LRG',
    mrp: 7490,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
    description: 'Corrosion and termite-proof virgin polymer cabinet, lightweight modular assembly with adjustable shelf heights.',
    specs: { 'Material': 'Virgin Polypropylene', 'Shelves': '4 Compartments', 'Lockable': 'Yes' },
    aliases: ['Nilkamal Cabinet', 'Plastic Storage Cupboard']
  },
  {
    id: 'prod_furn_9',
    name: 'Pepperfry Woodsworth King Size Bed with Hydraulic Storage',
    brand: 'Pepperfry',
    category: 'furniture',
    modelNumber: 'WW-BED-KNG-HYD',
    mrp: 42999,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80',
    description: 'Effortless German gas-lift hydraulic storage mechanism, engineered wood headboard with warm LED backlight.',
    specs: { 'Size': 'King Size (78 x 72 Inches)', 'Storage': 'Easy Lift Hydraulic Storage' },
    aliases: ['King Size Bed', 'Hydraulic Storage Bed']
  },
  {
    id: 'prod_furn_10',
    name: 'Home Centre Glass Top 4-Seater Compact Dining Table Set',
    brand: 'Home Centre',
    category: 'furniture',
    modelNumber: 'HC-DIN-4S-GLS',
    mrp: 21990,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80',
    description: '8mm tempered glass top table with powder-coated metal legs and 4 faux-leather padded chairs.',
    specs: { 'Top': '8mm Toughened Glass', 'Chairs': '4 Upholstered Chairs', 'Frame': 'Carbon Steel' },
    aliases: ['4 Seater Dining Table', 'Glass Dining Table']
  },

  // 10. Kitchen Appliances (10 items)
  {
    id: 'prod_kit_1',
    name: 'Prestige Iris 750W Mixer Grinder with 4 Jars',
    brand: 'Prestige',
    category: 'kitchen_appliances',
    modelNumber: 'IRIS-750W',
    mrp: 4195,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80',
    description: 'Heavy-duty 750-watt motor, 3 stainless steel jars + 1 juicer jar with sharp multi-function blades.',
    specs: { 'Motor Power': '750 Watts', 'Jars': '4 Jars (1.5L wet, 1.0L dry, 300ml chutney, juicer)' },
    aliases: ['Prestige Iris Mixer', 'Prestige 750W Grinder']
  },
  {
    id: 'prod_kit_2',
    name: 'Sujata Powermatic Plus 900W Juicer Mixer Grinder',
    brand: 'Sujata',
    category: 'kitchen_appliances',
    modelNumber: 'JMG-900W',
    mrp: 6490,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80',
    description: 'The standard of Indian kitchens. 900W commercial motor with double ball bearings runs 90 mins non-stop.',
    specs: { 'Motor': '900 Watts Heavy Duty', 'RPM': '22000 RPM', 'Juicer': 'Honeycomb Mesh Filter' },
    aliases: ['Sujata Juicer Mixer', 'Sujata Powermatic 900W']
  },
  {
    id: 'prod_kit_3',
    name: 'Philips HD6975 25L Digital Oven Toaster Grill (OTG)',
    brand: 'Philips',
    category: 'kitchen_appliances',
    modelNumber: 'HD6975/00',
    mrp: 8995,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=800&q=80',
    description: 'Opti-Temp technology for uniform baking, 10 one-touch preset digital menus, motorized rotisserie.',
    specs: { 'Capacity': '25 Litres', 'Power': '1500 Watts', 'Rotisserie': 'Yes' },
    aliases: ['Philips OTG 25L', 'Philips Oven Toaster Grill']
  },
  {
    id: 'prod_kit_4',
    name: 'Pigeon Cruise 1800W Induction Cooktop with 7 Presets',
    brand: 'Pigeon',
    category: 'kitchen_appliances',
    modelNumber: 'CRUISE-1800W',
    mrp: 3195,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
    description: 'Crystal glass plate, dual heat sensor, 7 Indian cooking presets with automatic shut-off safety.',
    specs: { 'Power': '1800 Watts', 'Plate': 'Microcrystal Glass Plate', 'Timer': 'Yes' },
    aliases: ['Pigeon Induction', 'Pigeon Cooktop 1800W']
  },
  {
    id: 'prod_kit_5',
    name: 'Wonderchef Nutri-Blend 400W High Speed Smoothie Blender',
    brand: 'Wonderchef',
    category: 'kitchen_appliances',
    modelNumber: 'NUTRI-400W-BLK',
    mrp: 3499,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    description: '22,000 RPM surgical grade steel blades extract maximum nutrition from fruits, seeds and veggies in 30 seconds.',
    specs: { 'Speed': '22000 RPM', 'Jars': '2 Unbreakable Polycarbonate Jars', 'Power': '400 Watts' },
    aliases: ['Wonderchef Nutriblend', 'Nutri Blend Mixer']
  },
  {
    id: 'prod_kit_6',
    name: 'Kent Grand Plus RO + UV + UF 9L Water Purifier',
    brand: 'Kent',
    category: 'kitchen_appliances',
    modelNumber: 'KENT-GRAND-PLUS',
    mrp: 17490,
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800&q=80',
    description: 'Mineral RO technology retains essential natural minerals, Zero Water Wastage technology.',
    specs: { 'Purification': 'RO + UV + UF + Alkaline', 'Tank': '9 Litres', 'Capacity': '20 L/hr' },
    aliases: ['Kent RO Purifier', 'Kent Grand Plus']
  },
  {
    id: 'prod_kit_7',
    name: 'Aquaguard Aura 7L Active Copper Water Purifier',
    brand: 'Aquaguard',
    category: 'kitchen_appliances',
    modelNumber: 'AURA-RO-UV-COPPER',
    mrp: 16999,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80',
    description: 'Active Copper & Zinc Booster technology infuses vital copper and zinc ions into pure drinking water.',
    specs: { 'Storage': '7 Litres', 'Stages': '8 Stages of Purification', 'Technology': 'Active Copper & Zinc' },
    aliases: ['Aquaguard RO', 'Aquaguard Aura Copper']
  },
  {
    id: 'prod_kit_8',
    name: 'Bajaj Majesty 16L Electric Toaster Griller (OTG)',
    brand: 'Bajaj',
    category: 'kitchen_appliances',
    modelNumber: 'MAJESTY-1603-TSS',
    mrp: 4999,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    description: 'Powder coated stainless steel body with timer and temperature control dial up to 250°C.',
    specs: { 'Capacity': '16 Litres', 'Power': '1200 Watts', 'Thermostat': '100°C - 250°C' },
    aliases: ['Bajaj OTG 16L', 'Bajaj Toaster Griller']
  },
  {
    id: 'prod_kit_9',
    name: 'Morphy Richards 20L Solo Microwave Oven',
    brand: 'Morphy Richards',
    category: 'kitchen_appliances',
    modelNumber: '20-MS-BLACK',
    mrp: 6499,
    image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=800&q=80',
    description: '5 power levels for multi-stage cooking, defrost mechanism by weight/time, mirror glass door finish.',
    specs: { 'Capacity': '20 Litres', 'Power Output': '800 Watts', 'Turntable': '245 mm Glass' },
    aliases: ['Morphy Richards Microwave', '20L Microwave Oven']
  },
  {
    id: 'prod_kit_10',
    name: 'Havells Prolife Crystal 5L Digital Air Fryer (1500W)',
    brand: 'Havells',
    category: 'kitchen_appliances',
    modelNumber: 'GHWAFDAE150',
    mrp: 7990,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
    description: 'Aero Crisp 360° air circulation fries food with up to 85% less oil, 8 auto cooking presets.',
    specs: { 'Capacity': '5.0 Litres', 'Power': '1500 Watts', 'Display': 'Digital Touch Control' },
    aliases: ['Havells Air Fryer', 'Prolife Crystal Air Fryer']
  },

  // 11. Personal Care (10 items)
  {
    id: 'prod_pers_1',
    name: 'Philips All-in-One Series 3000 9-in-1 Trimmer',
    brand: 'Philips',
    category: 'personal_care',
    modelNumber: 'MG3721/77',
    mrp: 2195,
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
    description: 'Self-sharpening skin-friendly steel blades, up to 60 minutes cordless runtime per charge.',
    specs: { 'Attachments': '9 Tools for face and hair', 'Runtime': '60 Minutes', 'Blades': 'Self-sharpening steel' },
    aliases: ['Philips Trimmer 3000', 'Philips Beard Trimmer']
  },
  {
    id: 'prod_pers_2',
    name: 'Braun Series 9 Pro Electric Wet & Dry Shaver with SmartCare Center',
    brand: 'Braun',
    category: 'personal_care',
    modelNumber: '9465cc',
    mrp: 32990,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80',
    description: 'World’s most efficient electric shaver with 5 synchronized shaving elements and 40,000 sonic vibrations/min.',
    specs: { 'Made In': 'Germany', 'Vibrations': '40000 Cuts/min', 'SmartCare': 'Automatic Cleaning Center' },
    aliases: ['Braun Series 9 Pro', 'Braun Electric Shaver']
  },
  {
    id: 'prod_pers_3',
    name: 'Oral-B Pro 3 3000 CrossAction Electric Rechargeable Toothbrush',
    brand: 'Oral-B',
    category: 'personal_care',
    modelNumber: 'PRO-3-3000',
    mrp: 4999,
    image: 'https://images.unsplash.com/photo-1559591937-e10c1737e96b?w=800&q=80',
    description: 'Visible 360° gum pressure sensor protects gums, removes up to 100% more plaque than manual brush.',
    specs: { 'Battery': 'Lithium-Ion (2 Weeks Battery)', 'Sensor': 'Visible 360° Gum Pressure', 'Modes': '3 Modes' },
    aliases: ['Oral B Electric Toothbrush', 'Oral B Pro 3']
  },
  {
    id: 'prod_pers_4',
    name: 'Dyson Supersonic Hair Dryer (Iron & Fuchsia)',
    brand: 'Dyson',
    category: 'personal_care',
    modelNumber: 'HD08-FUCH',
    mrp: 39900,
    image: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=800&q=80',
    description: 'Intelligent heat control prevents extreme heat damage, Dyson V9 digital motor spins up to 110,000 RPM.',
    specs: { 'Motor': 'Dyson V9 Digital Motor', 'Attachments': '5 Magnetic Styling Attachments', 'Power': '1600W' },
    aliases: ['Dyson Hair Dryer', 'Dyson Supersonic HD08']
  },
  {
    id: 'prod_pers_5',
    name: 'Philips HP8100/46 1000W Compact Hair Dryer',
    brand: 'Philips',
    category: 'personal_care',
    modelNumber: 'HP8100/46',
    mrp: 995,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    description: 'Gentle drying with thermo-protect temperature setting, compact ergonomic design with storage hook.',
    specs: { 'Power': '1000 Watts', 'Speed Settings': '2 Flexible Speed Combinations' },
    aliases: ['Philips Hair Dryer 1000W', 'Philips HP8100']
  },
  {
    id: 'prod_pers_6',
    name: 'Havells HD3151 1200W Powerful Foldable Hair Dryer',
    brand: 'Havells',
    category: 'personal_care',
    modelNumber: 'HD3151-TURQ',
    mrp: 1495,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    description: 'Ionic flow neutralizes static for frizz-free shiny hair, foldable handle convenient for travel.',
    specs: { 'Power': '1200 Watts', 'Handle': 'Foldable Travel Handle', 'Cool Shot': 'Yes' },
    aliases: ['Havells Hair Dryer', 'Havells Foldable Dryer']
  },
  {
    id: 'prod_pers_7',
    name: 'Bombay Shaving Company Precision Safety Razor Metal Kit',
    brand: 'Bombay Shaving Co',
    category: 'personal_care',
    modelNumber: 'BSC-RAZ-KIT',
    mrp: 1999,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80',
    description: 'Engineered brass metal safety razor with gravity-assisted glide and 20 Japanese Feather blades.',
    specs: { 'Material': 'Solid Zinc Alloy Brass', 'Blades': 'Includes 20 Feather Blades' },
    aliases: ['Bombay Shaving Razor', 'Metal Safety Razor']
  },
  {
    id: 'prod_pers_8',
    name: 'Vega 3-in-1 Hair Styler (Straightener, Curler, Crimper)',
    brand: 'Vega',
    category: 'personal_care',
    modelNumber: 'VHSCC-01',
    mrp: 1999,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
    description: 'Ceramic coated plates with single styling switch to easily toggle between sleek straight, curls or crimps.',
    specs: { 'Coating': 'Ceramic Coated Plates', 'Features': '3-in-1 Multi-Styler', 'Cord': '360° Swivel' },
    aliases: ['Vega 3 in 1 Styler', 'Vega Hair Curler']
  },
  {
    id: 'prod_pers_9',
    name: 'Beardo Godfather Beard Oil & Wash Complete Grooming Combo',
    brand: 'Beardo',
    category: 'personal_care',
    modelNumber: 'BDO-GF-COMBO',
    mrp: 900,
    image: 'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=800&q=80',
    description: 'Mineral-free almond and argan oil blend nourishes coarse facial hair and eliminates beard itch.',
    specs: { 'Contents': 'Beard Oil (30ml) + Beard Wash (100ml)', 'Ingredients': 'Argan Oil, Almond Oil' },
    aliases: ['Beardo Godfather Combo', 'Beardo Beard Oil']
  },
  {
    id: 'prod_pers_10',
    name: 'Gillette Fusion5 ProGlide Men’s Shaving Razor with FlexBall',
    brand: 'Gillette',
    category: 'personal_care',
    modelNumber: 'FUS5-PROGLD-01',
    mrp: 899,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80',
    description: 'FlexBall technology responds to facial contours for virtually zero missed hairs, 5 anti-friction blades.',
    specs: { 'Blades': '5 Anti-Friction Nano Blades', 'Flexibility': 'FlexBall Pivot Technology' },
    aliases: ['Gillette Fusion5', 'Gillette ProGlide Razor']
  },

  // 12. Accessories (10 items)
  {
    id: 'prod_acc_1',
    name: 'American Tourister 32L Casual Travel Backpack',
    brand: 'American Tourister',
    category: 'accessories',
    modelNumber: 'AT-BP-VALEX-32',
    mrp: 2600,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    description: '3 spacious compartments with dedicated 15.6" laptop cradle, water-resistant polyester fabric.',
    specs: { 'Capacity': '32 Litres', 'Material': 'Durable 600D Polyester', 'Laptop Sleeve': 'Yes (up to 15.6")' },
    aliases: ['American Tourister Backpack', 'Laptop Backpack 32L']
  },
  {
    id: 'prod_acc_2',
    name: 'Wildcraft 45L Cargo Laptop Rucksack Trekking Bag',
    brand: 'Wildcraft',
    category: 'accessories',
    modelNumber: 'WLD-CARGO-45',
    mrp: 3999,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    description: 'Ergonomic air-mesh back support system with chest sternum strap and integrated rain cover.',
    specs: { 'Capacity': '45 Litres', 'Rain Cover': 'Included', 'Material': 'Nylon Ripstop' },
    aliases: ['Wildcraft Rucksack', 'Wildcraft 45L Backpack']
  },
  {
    id: 'prod_acc_3',
    name: 'Fastrack Aviator Metal Frame UV Protected Sunglasses',
    brand: 'Fastrack',
    category: 'accessories',
    modelNumber: 'M188GR1V',
    mrp: 1995,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    description: 'Classic teardrop aviator sunglasses with green polycarbonate lenses and lightweight metallic alloy frame.',
    specs: { 'Lens Protection': '100% UV400 Protection', 'Frame': 'Nickel Metal Alloy', 'Shape': 'Aviator' },
    aliases: ['Fastrack Aviator', 'Fastrack Sunglasses']
  },
  {
    id: 'prod_acc_4',
    name: 'Ray-Ban Classic Wayfarer Polarized Sunglasses',
    brand: 'Ray-Ban',
    category: 'accessories',
    modelNumber: 'RB2140-901/58',
    mrp: 11290,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    description: 'The most recognizable style in sunglasses history. Polished black acetate frame with green G-15 polarized crystal lenses.',
    specs: { 'Lens': 'Polarized G-15 Crystal', 'Frame': 'Acetate', 'Origin': 'Made in Italy' },
    aliases: ['Ray Ban Wayfarer', 'Ray-Ban RB2140']
  },
  {
    id: 'prod_acc_5',
    name: "Fossil Grant Chronograph Light Brown Leather Men's Watch",
    brand: 'Fossil',
    category: 'accessories',
    modelNumber: 'FS4735',
    mrp: 12495,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    description: 'Roman numeral markers with cream dial, stainless steel 44mm case and genuine interchangeable calfskin leather strap.',
    specs: { 'Case Size': '44 mm', 'Movement': 'Quartz Chronograph', 'Water Resistance': '5 ATM (50m)' },
    aliases: ['Fossil Grant Watch', 'Fossil Mens Chronograph']
  },
  {
    id: 'prod_acc_6',
    name: "Titan Neo Analog Black Dial Stainless Steel Men's Watch",
    brand: 'Titan',
    category: 'accessories',
    modelNumber: 'NN1733KM01',
    mrp: 4995,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Contemporary deep black textured dial with silver hands, mineral crystal glass and durable stainless steel chain link.',
    specs: { 'Dial Color': 'Black', 'Strap': 'Stainless Steel Link', 'Warranty': '2 Years Titan' },
    aliases: ['Titan Neo Watch', 'Titan Mens Analog Watch']
  },
  {
    id: 'prod_acc_7',
    name: 'WildHorn Genuine Top-Grain Leather Bi-Fold Wallet',
    brand: 'WildHorn',
    category: 'accessories',
    modelNumber: 'WH-WAL-CRB-BRN',
    mrp: 1499,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    description: 'Handcrafted from 100% genuine top-grain leather with built-in RFID blocking technology to prevent digital theft.',
    specs: { 'Material': '100% Genuine Bovine Leather', 'Security': 'RFID Blocking Shield', 'Slots': '8 Card Slots' },
    aliases: ['WildHorn Wallet', 'Leather Mens Wallet']
  },
  {
    id: 'prod_acc_8',
    name: "Tommy Hilfiger Men's Genuine Leather Reversible Belt",
    brand: 'Tommy Hilfiger',
    category: 'accessories',
    modelNumber: 'TH-BLT-REV-01',
    mrp: 3299,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
    description: 'Dual-sided reversible belt (Black on one side, Dark Brown on the other) with polished metallic swivel prong buckle.',
    specs: { 'Width': '35 mm', 'Type': 'Reversible (Black/Brown)', 'Material': 'Full-Grain Leather' },
    aliases: ['Tommy Hilfiger Belt', 'Reversible Leather Belt']
  },
  {
    id: 'prod_acc_9',
    name: 'Skybags Brat 30L Casual School & College Backpack',
    brand: 'Skybags',
    category: 'accessories',
    modelNumber: 'SKY-BRAT-30L',
    mrp: 1899,
    image: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=800&q=80',
    description: 'Funky graphic prints, padded shoulder straps, bottle holder pocket and 3 spacious main zippered compartments.',
    specs: { 'Capacity': '30 Litres', 'Compartments': '3 Full Size', 'Warranty': '1 Year' },
    aliases: ['Skybags Backpack', 'Skybags Brat 30L']
  },
  {
    id: 'prod_acc_10',
    name: 'VIP Aristocrat 55cm Hard-Sided Cabin Luggage Trolley Bag',
    brand: 'VIP',
    category: 'accessories',
    modelNumber: 'ARIS-TRL-55',
    mrp: 5490,
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80',
    description: 'Scratch-resistant polycarbonate hard shell, 360-degree silent spinner wheels and TSA number combination lock.',
    specs: { 'Size': '55 cm (Airline Cabin Approved)', 'Wheels': '4 Smooth Spinners', 'Lock': 'TSA Combination' },
    aliases: ['VIP Cabin Trolley', 'Aristocrat Luggage Bag']
  },

  // 13. Stationery (10 items)
  {
    id: 'prod_stat_1',
    name: 'Classmate Pulse 6-Subject Spiral Notebook (300 Pages)',
    brand: 'Classmate',
    category: 'stationery',
    modelNumber: 'PULSE-6SUB-300',
    mrp: 230,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80',
    description: 'Premium ozone-treated elemental chlorine-free paper with color-coded polypropylene divider sheets.',
    specs: { 'Pages': '300 Pages (Single Line)', 'Binding': 'Spiral Wiro', 'Paper': '70 GSM' },
    aliases: ['Classmate Spiral Book', 'Classmate Pulse 6 Subject']
  },
  {
    id: 'prod_stat_2',
    name: 'Parker Vector Stainless Steel Roller Ball Pen (Fine Nib)',
    brand: 'Parker',
    category: 'stationery',
    modelNumber: '9000017122',
    mrp: 450,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80',
    description: 'All-stainless steel barrel and cap with Parker arrow clip, ultra-smooth free ink technology for executive writing.',
    specs: { 'Nib': 'Fine 0.7mm', 'Ink Color': 'Blue', 'Body': 'Stainless Steel' },
    aliases: ['Parker Vector Pen', 'Parker Rollerball']
  },
  {
    id: 'prod_stat_3',
    name: 'Faber-Castell 24 Tri-Grip Colored Pencil Tin Pack',
    brand: 'Faber-Castell',
    category: 'stationery',
    modelNumber: 'FC-COL-24TIN',
    mrp: 350,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80',
    description: 'Triangular ergonomic grip, SV-bonded break-resistant lead and rich vibrant pigmentation for artists.',
    specs: { 'Count': '24 Colors', 'Shape': 'Triangular Ergonomic Grip', 'Lead': 'Bonded Break-Resistant' },
    aliases: ['Faber Castell Color Pencils', 'Tri Grip Colored Pencils']
  },
  {
    id: 'prod_stat_4',
    name: 'Pilot V7 Hi-Tecpoint 0.7mm Liquid Ink Roller Pen (Pack of 3)',
    brand: 'Pilot',
    category: 'stationery',
    modelNumber: 'PILOT-V7-3PK',
    mrp: 240,
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&q=80',
    description: 'Multi-dimple stainless steel rollerball tip delivers smooth non-skipping liquid ink flow with visible reservoir.',
    specs: { 'Tip Size': '0.7 mm', 'Pack': '3 Pens', 'Ink': 'Pure Liquid Ink' },
    aliases: ['Pilot V7 Pen', 'Pilot Hi Tecpoint']
  },
  {
    id: 'prod_stat_5',
    name: 'Casio FX-991CW Advanced ClassWiz Scientific Calculator',
    brand: 'Casio',
    category: 'stationery',
    modelNumber: 'FX-991CW',
    mrp: 1595,
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80',
    description: 'Features 540+ functions, high-definition 4-gradation natural textbook display, QR code equation generator.',
    specs: { 'Functions': '540+ Scientific Functions', 'Display': 'Natural Textbook High Res', 'Power': 'Two-way Solar & Battery' },
    aliases: ['Casio Scientific Calculator', 'Casio 991CW']
  },
  {
    id: 'prod_stat_6',
    name: 'Staedtler Mars Lumograph Drawing Sketch Pencils (Tin of 6)',
    brand: 'Staedtler',
    category: 'stationery',
    modelNumber: '100-G6',
    mrp: 590,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80',
    description: 'Premium German graphite sketch pencils (8B, 6B, 4B, 2B, B, HB) crafted from PEFC certified sustainable cedar wood.',
    specs: { 'Grades': '8B to HB', 'Pack': '6 Pencils in Metal Tin', 'Origin': 'Germany' },
    aliases: ['Staedtler Sketch Pencils', 'Lumograph Pencils']
  },
  {
    id: 'prod_stat_7',
    name: 'Kangaro HP-45 Heavy Duty Plier Stapler with 2000 Pins',
    brand: 'Kangaro',
    category: 'stationery',
    modelNumber: 'HP-45-KIT',
    mrp: 380,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    description: 'Full steel construction plier stapler with ergonomic grip, staples up to 30 sheets of 75 GSM paper.',
    specs: { 'Capacity': 'Up to 30 Sheets', 'Body': 'All-Metal Chrome Finish', 'Staple Type': '24/6, 26/6' },
    aliases: ['Kangaro Stapler', 'Plier Stapler HP 45']
  },
  {
    id: 'prod_stat_8',
    name: 'Post-it 3x3 Canary Yellow Self-Adhesive Sticky Notes (5 Pads)',
    brand: '3M Post-it',
    category: 'stationery',
    modelNumber: 'POST-3X3-5PK',
    mrp: 299,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    description: '100 sheets per pad, unique adhesive reliably sticks and resticks cleanly without damaging documents.',
    specs: { 'Size': '3 x 3 Inches (76 x 76 mm)', 'Sheets': '500 Sheets Total', 'Color': 'Canary Yellow' },
    aliases: ['Post it Sticky Notes', '3M Sticky Notes']
  },
  {
    id: 'prod_stat_9',
    name: 'Camlin Kokuyo Whiteboard Marker & Magnetic Duster Combo (4 Colors)',
    brand: 'Camlin',
    category: 'stationery',
    modelNumber: 'CAM-WBM-SET',
    mrp: 185,
    image: 'https://images.unsplash.com/photo-1569683795645-b62e50fbf103?w=800&q=80',
    description: 'Non-toxic alcohol-based bright ink, easily dry-erasable without leaving stains, magnetic eraser holder.',
    specs: { 'Colors': 'Black, Blue, Red, Green', 'Tip': 'Bullet Tip', 'Eraser': 'Magnetic Whiteboard Duster' },
    aliases: ['Camlin Whiteboard Marker', 'Marker and Duster Set']
  },
  {
    id: 'prod_stat_10',
    name: 'Deli Multi-Compartment Mesh Metal Desktop Organizer',
    brand: 'Deli',
    category: 'stationery',
    modelNumber: 'DELI-MESH-ORG',
    mrp: 599,
    image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=800&q=80',
    description: '6 compartments plus mini pull-out drawer for pens, notes, paperclips, staplers and phones.',
    specs: { 'Material': 'Epoxy Coated Wire Mesh Metal', 'Compartments': '6 + 1 Drawer' },
    aliases: ['Deli Desk Organizer', 'Pen Stand Organizer']
  },

  // 14. Hardware (10 items)
  {
    id: 'prod_hard_1',
    name: 'Bosch GSB 500W Professional Impact Drill Kit with 100 Accessories',
    brand: 'Bosch',
    category: 'hardware',
    modelNumber: 'GSB 500 RE KIT',
    mrp: 5200,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
    description: 'Robust 500W impact drill with forward/reverse rotation, variable speed dial, and rugged plastic carry case.',
    specs: { 'Power Input': '500 Watts', 'Chuck': '10 mm Keyed', 'Impact Rate': '41600 BPM' },
    aliases: ['Bosch Drill Machine', 'Bosch 500W Drill Kit']
  },
  {
    id: 'prod_hard_2',
    name: 'Stanley 42-Piece Home Maintenance Hand Tool Set with Case',
    brand: 'Stanley',
    category: 'hardware',
    modelNumber: 'STMT74101',
    mrp: 3290,
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80',
    description: 'Includes claw hammer, combination pliers, adjustable wrench, precision screwdrivers, utility cutter and tape measure.',
    specs: { 'Pieces': '42 Hand Tools', 'Case': 'Blow-Molded Hard Storage Box', 'Material': 'Chrome Vanadium Steel' },
    aliases: ['Stanley Tool Kit', 'Home Tool Box 42pc']
  },
  {
    id: 'prod_hard_3',
    name: 'Black+Decker 10.8V Cordless Lithium-Ion Drill Driver with 10 Bits',
    brand: 'Black+Decker',
    category: 'hardware',
    modelNumber: 'BDCD12-IN',
    mrp: 3699,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80',
    description: 'Lightweight cordless drill with 11-position clutch to prevent stripping screws, built-in LED worklight.',
    specs: { 'Battery': '10.8V 1.5Ah Lithium-Ion', 'Torque': '26 Nm (11 Clutch Settings)' },
    aliases: ['Black and Decker Drill', 'Cordless Screwdriver']
  },
  {
    id: 'prod_hard_4',
    name: 'Bosch GDC 120 Professional 1200W Tile and Marble Cutter',
    brand: 'Bosch',
    category: 'hardware',
    modelNumber: 'GDC-120-PROF',
    mrp: 3999,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
    description: 'Powerful 1200W motor for fast cutting in tiles, granite and bricks with optimized dust insulation.',
    specs: { 'Power': '1200 Watts', 'Blade Dia': '110 mm (4 Inch)', 'No Load Speed': '12000 RPM' },
    aliases: ['Bosch Marble Cutter', 'Tile Cutting Machine']
  },
  {
    id: 'prod_hard_5',
    name: 'Taparia 1171 Steel Adjustable Spanner Wrench (10-Inch)',
    brand: 'Taparia',
    category: 'hardware',
    modelNumber: '1171-10',
    mrp: 490,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=800&q=80',
    description: 'Drop forged from high grade carbon steel, heat treated with polished head and clear laser millimeter markings.',
    specs: { 'Size': '250 mm (10 Inches)', 'Jaw Opening': 'Up to 30 mm', 'Finish': 'Black Phosphate' },
    aliases: ['Taparia Spanner', 'Adjustable Wrench 10 inch']
  },
  {
    id: 'prod_hard_6',
    name: 'Asian Paints Apex Ultima Weatherproof Exterior Emulsion (10L)',
    brand: 'Asian Paints',
    category: 'hardware',
    modelNumber: 'AP-APEX-ULT-10L',
    mrp: 3850,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    description: 'Advanced anti-algal exterior wall paint with Colour Stay technology and 7-year performance warranty.',
    specs: { 'Volume': '10 Litres', 'Type': 'Exterior Acrylic Emulsion', 'Warranty': '7 Years Performance' },
    aliases: ['Asian Paints Apex', 'Exterior Emulsion 10L']
  },
  {
    id: 'prod_hard_7',
    name: 'Berger Silk Glamor Luxury Interior Emulsion (4L)',
    brand: 'Berger',
    category: 'hardware',
    modelNumber: 'BRG-SILK-4L',
    mrp: 1890,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
    description: 'Formulated with crystal reflective technology to give rich, glamorous sheen to interior living room walls.',
    specs: { 'Volume': '4 Litres', 'Sheen': 'High Luxury Silk Sheen', 'Washable': '100% Washable' },
    aliases: ['Berger Silk Paint', 'Interior Wall Paint 4L']
  },
  {
    id: 'prod_hard_8',
    name: 'Pidilite Fevicol Marine Waterproof Wood Adhesive (5kg)',
    brand: 'Fevicol',
    category: 'hardware',
    modelNumber: 'FEV-MAR-5KG',
    mrp: 1450,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
    description: 'Advanced waterproof wood adhesive withstands continuous water exposure and high boiling temperatures.',
    specs: { 'Net Weight': '5 Kg', 'Waterproof': 'European Standard D3 Water Resistance' },
    aliases: ['Fevicol Marine', 'Waterproof Wood Glue']
  },
  {
    id: 'prod_hard_9',
    name: 'Stanley 5-Meter Steel Metric Measuring Tape with Auto-Lock',
    brand: 'Stanley',
    category: 'hardware',
    modelNumber: 'STHT30135-8',
    mrp: 320,
    image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&q=80',
    description: 'Tylon coated blade for high readability, rubberized anti-slip grip casing with belt clip.',
    specs: { 'Length': '5 Meters / 16 Feet', 'Blade Width': '19 mm', 'Coating': 'Tylon Anti-Wear' },
    aliases: ['Stanley Measuring Tape', '5m Tape Measure']
  },
  {
    id: 'prod_hard_10',
    name: '3M Multi-Purpose Heavy Duty Waterproof Duct Tape (50m)',
    brand: '3M',
    category: 'hardware',
    modelNumber: '3M-DUCT-50M',
    mrp: 450,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80',
    description: 'Reinforced cloth scrim with natural rubber adhesive for heavy duty waterproof plumbing repairs and sealing.',
    specs: { 'Length': '50 Meters', 'Width': '48 mm', 'Waterproof': 'Yes' },
    aliases: ['3M Duct Tape', 'Heavy Duty Waterproof Tape']
  },

  // 15. Grocery (10 items)
  {
    id: 'prod_groc_1',
    name: 'Aashirvaad Shudh Chakki Atta 100% Whole Wheat (10 Kg)',
    brand: 'Aashirvaad',
    category: 'grocery',
    modelNumber: 'ASH-ATTA-10KG',
    mrp: 475,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    description: 'Ground from heavy golden grains, ensures soft rotis with dietary fiber retention.',
    specs: { 'Net Weight': '10 Kg', 'Grain': '100% Whole Wheat', 'Shelf Life': '3 Months' },
    aliases: ['Aashirvaad Atta 10kg', 'Wheat Flour 10kg']
  },
  {
    id: 'prod_groc_2',
    name: 'Fortune Sunlite Refined Sunflower Cooking Oil (5 Litre Can)',
    brand: 'Fortune',
    category: 'grocery',
    modelNumber: 'FTN-SUN-5L',
    mrp: 750,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    description: 'Enriched with Vitamin A and Vitamin D, light on digestion and ideal for daily Indian deep frying.',
    specs: { 'Volume': '5 Litres Can', 'Type': 'Refined Sunflower Oil', 'Vitamins': 'A & D Enriched' },
    aliases: ['Fortune Sunflower Oil', 'Cooking Oil 5L']
  },
  {
    id: 'prod_groc_3',
    name: 'Daawat Rozana Super Basmati Rice (5 Kg)',
    brand: 'Daawat',
    category: 'grocery',
    modelNumber: 'DWT-ROZ-5KG',
    mrp: 495,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
    description: 'Aged basmati rice grains that elongate to twice their length upon cooking with sweet natural aroma.',
    specs: { 'Weight': '5 Kg', 'Grain Length': 'Long Grain Aged Basmati', 'Aroma': 'Natural Aromatic' },
    aliases: ['Daawat Basmati Rice', 'Basmati Rice 5kg']
  },
  {
    id: 'prod_groc_4',
    name: 'Tata Salt Vacuum Evaporated Iodized Salt (1 Kg)',
    brand: 'Tata',
    category: 'grocery',
    modelNumber: 'TATA-SALT-1KG',
    mrp: 28,
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=800&q=80',
    description: 'Desh Ka Namak. Vacuum evaporated with guaranteed iodine nutrition for mental development.',
    specs: { 'Weight': '1 Kg', 'Type': 'Iodized Vacuum Evaporated Salt' },
    aliases: ['Tata Salt 1kg', 'Iodized Salt']
  },
  {
    id: 'prod_groc_5',
    name: 'Brooke Bond Red Label Strong Natural CTC Tea (1 Kg)',
    brand: 'Brooke Bond',
    category: 'grocery',
    modelNumber: 'BB-RED-1KG',
    mrp: 540,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80',
    description: 'Blended with finest Assam and Dooars tea leaves for rich red color and uncompromised morning taste.',
    specs: { 'Weight': '1 Kg', 'Type': 'CTC Granular Black Tea', 'Flavor': 'Strong Karak Chai' },
    aliases: ['Red Label Tea 1kg', 'Brooke Bond Tea']
  },
  {
    id: 'prod_groc_6',
    name: 'Nescafe Classic 100% Pure Instant Coffee Glass Jar (200g)',
    brand: 'Nescafe',
    category: 'grocery',
    modelNumber: 'NES-CLAS-200G',
    mrp: 680,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    description: 'Crafted with handpicked Robusta and Arabica coffee beans, slow roasted to signature perfection.',
    specs: { 'Weight': '200 g Jar', 'Blend': 'Robusta & Arabica', 'Type': 'Pure Instant Coffee' },
    aliases: ['Nescafe Coffee 200g', 'Nescafe Classic Jar']
  },
  {
    id: 'prod_groc_7',
    name: 'Maggi 2-Minute Masala Instant Noodles (Mega Pack of 12 x 70g)',
    brand: 'Maggi',
    category: 'grocery',
    modelNumber: 'MAG-MAS-12PK',
    mrp: 168,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80',
    description: 'Enriched with iron and roasted aromatic Indian spices, ready in just 2 minutes of boiling.',
    specs: { 'Quantity': '12 Packs (840g)', 'Fortified': 'Iron Fortified', 'Cooking Time': '2 Minutes' },
    aliases: ['Maggi Noodles Pack', 'Maggi Masala 12 Pack']
  },
  {
    id: 'prod_groc_8',
    name: 'Saffola Gold Pro Healthy Lifestyle Blended Edible Oil (5 Litre Can)',
    brand: 'Saffola',
    category: 'grocery',
    modelNumber: 'SAF-GOLD-5L',
    mrp: 890,
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800&q=80',
    description: 'Rice bran and sunflower oil blend with natural oryzanol helps manage cholesterol and absorbs less fat in food.',
    specs: { 'Volume': '5 Litres', 'Blend': '80% Rice Bran + 20% Sunflower Oil', 'Antioxidants': 'Oryzanol Enriched' },
    aliases: ['Saffola Gold Oil', 'Saffola 5 Litre']
  },
  {
    id: 'prod_groc_9',
    name: 'Catch Super Garam Masala Powder Fresh Spice Box (200g)',
    brand: 'Catch',
    category: 'grocery',
    modelNumber: 'CAT-GM-200G',
    mrp: 125,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    description: 'Low-temperature ground blend of cloves, cardamom, cinnamon and cumin for rich authentic royal aroma.',
    specs: { 'Weight': '200 g', 'Technology': 'Low Temperature Grinding (LTG)', 'Purity': '100% Natural Spices' },
    aliases: ['Catch Garam Masala', 'Garam Masala Powder']
  },
  {
    id: 'prod_groc_10',
    name: "Kellogg's Original Corn Flakes with Essential Vitamins Family Pack (1.2 Kg)",
    brand: "Kellogg's",
    category: 'grocery',
    modelNumber: 'KEL-CF-1200G',
    mrp: 410,
    image: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=800&q=80',
    description: 'Crispy sun-ripened corn flakes loaded with 8 essential vitamins and iron for a nutritious active breakfast.',
    specs: { 'Weight': '1.2 Kg Family Pack', 'Nutrition': 'Iron + Vitamins B1, B2, B3, B6, B12, C', 'Fat': 'Naturally Cholesterol Free' },
    aliases: ['Kelloggs Corn Flakes', 'Corn Flakes 1.2kg']
  },
  // 11th product additions for all 15 categories (Guaranteeing 10+ items per category)
  {
    id: 'prod_mob_11',
    name: 'Google Pixel 8 (128GB) - Hazel',
    brand: 'Google',
    category: 'mobiles',
    modelNumber: 'GA04834-US',
    mrp: 75999,
    image: 'https://images.unsplash.com/photo-1533228892044-885458925488?w=800&q=80',
    description: 'Next-gen Google Tensor G3 chip, Best Take photography, 50MP main sensor, and all-day battery.',
    specs: { 'Display': '6.2-inch Actua display 120Hz', 'Processor': 'Google Tensor G3', 'Storage': '128GB', 'Camera': '50MP Dual camera' },
    aliases: ['Google Pixel 8', 'Pixel 8 Hazel']
  },
  {
    id: 'prod_lap_11',
    name: 'Microsoft Surface Laptop 5 (Intel Core i7, 16GB, 512GB SSD)',
    brand: 'Microsoft',
    category: 'laptops',
    modelNumber: 'R8N-00001',
    mrp: 139999,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
    description: 'Sleek touchscreen laptop with PixelSense display, Thunderbolt 4, and premium typing comfort.',
    specs: { 'Display': '13.5-inch PixelSense Touchscreen', 'CPU': 'Intel Core i7 12th Gen', 'RAM / SSD': '16GB LPDDR5x / 512GB SSD', 'Weight': '1.29 kg' },
    aliases: ['Surface Laptop 5', 'Microsoft Surface Laptop']
  },
  {
    id: 'prod_tv_11',
    name: 'Xiaomi Smart TV X Pro 55 (4K Dolby Vision IQ)',
    brand: 'Xiaomi',
    category: 'tvs',
    modelNumber: 'L55M8-A2IN',
    mrp: 49999,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    description: '4K HDR Google TV with Dolby Vision IQ, vivid picture engine 2, and 40W stereo speakers.',
    specs: { 'Display': '55-inch 4K UHD HDR10+', 'Sound': '40W Dolby Audio DTS:X', 'OS': 'Google TV with PatchWall', 'Connectivity': '3x HDMI 2.1, eARC' },
    aliases: ['Mi TV X Pro 55', 'Xiaomi 55 inch TV']
  },
  {
    id: 'prod_ha_11',
    name: 'Philips Air Purifier Series 1000i with HEPA Filter',
    brand: 'Philips',
    category: 'home_appliances',
    modelNumber: 'AC1215/20',
    mrp: 14995,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    description: 'Purifies rooms up to 300 sq ft, removes 99.97% airborne particles down to 0.003 microns.',
    specs: { 'Coverage': 'Up to 300 sq ft', 'Filter': 'NanoProtect HEPA & Active Carbon', 'CADR': '270 m3/h', 'Quiet': 'Night sensing mode' },
    aliases: ['Philips Air Purifier', 'Philips 1000i Air Purifier']
  },
  {
    id: 'prod_ea_11',
    name: 'Havells Instanio 3-Litre Instant Water Heater Geyser',
    brand: 'Havells',
    category: 'electrical_appliances',
    modelNumber: 'GHWAIAPWH003',
    mrp: 5890,
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
    description: 'Color-changing LED indicator for water temperature, 0.65 MPa high-pressure rating for high-rise buildings.',
    specs: { 'Capacity': '3 Litres', 'Wattage': '3000 Watts', 'Tank': 'Rust-proof ultra-thick stainless steel 304', 'Safety': 'Fire-retardant power cord' },
    aliases: ['Havells Instanio Geyser', 'Havells 3L Instant Geyser']
  },
  {
    id: 'prod_cloth_11',
    name: 'Zara Classic Structured Linen Blazer - Natural Cream',
    brand: 'Zara',
    category: 'clothing',
    modelNumber: 'ZAR-BLZ-LIN-CRM',
    mrp: 6990,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    description: 'Tailored single-breasted blazer made from 100% European flax linen with notched lapels and horn buttons.',
    specs: { 'Material': '100% European Flax Linen', 'Fit': 'Regular Tailored Fit', 'Care': 'Dry Clean Recommended' },
    aliases: ['Zara Linen Blazer', 'Cream Linen Suit Jacket']
  },
  {
    id: 'prod_beauty_11',
    name: 'L’Oréal Paris Revitalift 1.5% Hyaluronic Acid Serum (30ml)',
    brand: "L'Oreal",
    category: 'beauty_products',
    modelNumber: 'LOR-REV-HA-30',
    mrp: 999,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80',
    description: 'Ultra-lightweight non-sticky face serum that plumps skin and reduces fine lines by 60%.',
    specs: { 'Volume': '30 ml', 'Active': '1.5% Pure Hyaluronic Acid', 'Skin Type': 'All skin types including sensitive' },
    aliases: ['Loreal Hyaluronic Acid Serum', 'Revitalift Serum']
  },
  {
    id: 'prod_foot_11',
    name: 'Clarks Men’s Bushacre 3 Leather Chukka Boots - Beeswax',
    brand: 'Clarks',
    category: 'footwear',
    modelNumber: 'CLK-BUSH-3-BWX',
    mrp: 8999,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    description: 'Iconic ankle-height chukka boots crafted in rich beeswax leather with cushioned Ortholite footbed.',
    specs: { 'Upper': 'Full Grain Beeswax Leather', 'Insole': 'Ortholite Removable Footbed', 'Outsole': 'Durable Rubber Crepe Sole' },
    aliases: ['Clarks Desert Boots', 'Clarks Chukka Boots']
  },
  {
    id: 'prod_furn_11',
    name: 'Urban Ladder Apollo Solid Teak Wood 4-Seater Dining Set',
    brand: 'Urban Ladder',
    category: 'furniture',
    modelNumber: 'UL-APO-DNG4',
    mrp: 38999,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80',
    description: 'Sturdy kiln-dried teak wood table with 4 ergonomically contoured chairs in natural walnut finish.',
    specs: { 'Material': 'Solid Teak Wood & Natural Oil Finish', 'Table Dimensions': '120 x 80 x 75 cm', 'Includes': '1 Dining Table + 4 Chairs' },
    aliases: ['Urban Ladder Dining Table', 'Teak Wood 4 Seater Dining']
  },
  {
    id: 'prod_kitch_11',
    name: 'Prestige Delight Electric Rice Cooker with Steamer (1.8L)',
    brand: 'Prestige',
    category: 'kitchen_appliances',
    modelNumber: 'PR-DREC-18L',
    mrp: 2695,
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?w=800&q=80',
    description: 'Automatic keep-warm function, graduated aluminium cooking pan, and detachable power cord.',
    specs: { 'Capacity': '1.8 Litres (Cooks up to 1 Kg rice)', 'Power': '700 Watts', 'Accessories': 'Steamer basket, measuring cup & scoop' },
    aliases: ['Prestige Electric Rice Cooker', 'Prestige Delight 1.8L']
  },
  {
    id: 'prod_pc_11',
    name: 'Oral-B Pro 1000 CrossAction Electric Toothbrush',
    brand: 'Oral-B',
    category: 'personal_care',
    modelNumber: 'OB-PRO-1000',
    mrp: 3999,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    description: 'Clinically proven 3D cleaning action oscillates, rotates, and pulsates to break up 300% more plaque.',
    specs: { 'Technology': '3D Oscillating & Pulsating', 'Timer': 'In-handle 2-minute timer', 'Battery': 'Rechargeable 10-day runtime' },
    aliases: ['Oral B Electric Toothbrush', 'Oral-B Pro 1000']
  },
  {
    id: 'prod_acc_11',
    name: 'Ray-Ban Classic Aviator Polarized Sunglasses - Gold/Green',
    brand: 'Ray-Ban',
    category: 'accessories',
    modelNumber: 'RB3025-001/58',
    mrp: 11490,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80',
    description: 'Timeless gold wire frame with signature G-15 green polarized mineral glass lenses providing 100% UV protection.',
    specs: { 'Lens Width': '58 mm', 'Lens Material': 'Polarized Crystal Glass G-15', 'Frame': 'Polished Arista Gold Metal' },
    aliases: ['Ray Ban Aviator Polarized', 'RayBan RB3025']
  },
  {
    id: 'prod_stat_11',
    name: 'Lamy Safari Fountain Pen - Charcoal Matte (Fine Nib)',
    brand: 'Lamy',
    category: 'stationery',
    modelNumber: 'LAM-SAF-017-F',
    mrp: 2980,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    description: 'World-renowned ergonomic fountain pen with rugged ABS plastic body, flexible metal clip, and black coated steel nib.',
    specs: { 'Nib Size': 'Fine (F)', 'Body': 'Tough ABS Plastic Charcoal Matte', 'Ink System': 'Cartridge / Z28 Converter Compatible' },
    aliases: ['Lamy Safari Fountain Pen', 'Lamy Charcoal Pen']
  },
  {
    id: 'prod_hard_11',
    name: 'Stanley 65-Piece Home Repair Mechanics Hand Tool Set',
    brand: 'Stanley',
    category: 'hardware',
    modelNumber: 'STMT73795',
    mrp: 4999,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80',
    description: 'Comprehensive chrome vanadium steel hand tool set including ratchet, sockets, screwdrivers, tape, and blow-molded case.',
    specs: { 'Piece Count': '65 Pieces', 'Material': 'Chrome Vanadium Steel', 'Case': 'Heavy-duty blow-molded travel kit' },
    aliases: ['Stanley Tool Set 65 Piece', 'Stanley Mechanics Toolbox']
  },
  {
    id: 'prod_groc_11',
    name: 'Tata Tea Gold Leaf Tea with Gentle Pressed Fragrant Leaves (1 Kg)',
    brand: 'Tata Tea',
    category: 'grocery',
    modelNumber: 'TAT-TG-1KG',
    mrp: 620,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80',
    description: 'Delicate blend of fine Assam CTC tea leaves gently combined with 15% long aroma-rich golden leaves.',
    specs: { 'Weight': '1 Kg Zipper Pack', 'Blend': 'Assam CTC + 15% Long orthodox leaves', 'Grade': 'Premium Black Tea' },
    aliases: ['Tata Tea Gold 1kg', 'Tata Gold Chai']
  }
];

// Seed shop prices for all catalog items across registered local shops
const now = Date.now();
const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const shopProducts = [];

// Helper to auto-generate multiple realistic shop prices for each product
products.forEach((p, idx) => {
  // Assign 2 to 4 nearby stores for each product
  const shopList = [
    { shopId: 'shop_1', distKm: 0.5, discountPct: 0.10, freshMins: 15 },
    { shopId: 'shop_2', distKm: 4.3, discountPct: 0.13, freshMins: 10 },
    { shopId: 'shop_3', distKm: 1.2, discountPct: 0.08, freshMins: 2880 }, // 2 days ago
    { shopId: 'shop_4', distKm: 1.8, discountPct: 0.14, freshMins: 35 },
    { shopId: 'shop_5', distKm: 2.9, discountPct: 0.11, freshMins: 60 },
    { shopId: 'shop_6', distKm: 2.1, discountPct: 0.09, freshMins: 25 },
    { shopId: 'shop_7', distKm: 3.5, discountPct: 0.12, freshMins: 120 }
  ];

  // Specific store affinities based on category
  let preferredShops = [];
  if (['tvs', 'laptops'].includes(p.category)) {
    preferredShops = [shopList[0], shopList[1], shopList[2]];
  } else if (['home_appliances', 'kitchen_appliances', 'electrical_appliances'].includes(p.category)) {
    preferredShops = [shopList[0], shopList[3], shopList[1]];
  } else if (p.category === 'mobiles') {
    preferredShops = [shopList[0], shopList[1], shopList[6]];
  } else if (p.category === 'hardware') {
    preferredShops = [shopList[4], shopList[0]];
  } else if (p.category === 'grocery') {
    preferredShops = [shopList[5], shopList[0]];
  } else {
    preferredShops = [shopList[0], shopList[1], shopList[3]];
  }

  preferredShops.forEach((pref, sIdx) => {
    const calculatedPrice = Math.round((p.mrp * (1 - pref.discountPct + (sIdx * 0.02))) / 10) * 10;
    const isFresh = pref.freshMins < 180;

    shopProducts.push({
      id: `sp_${p.id}_${pref.shopId}`,
      shopId: pref.shopId,
      productId: p.id,
      price: calculatedPrice,
      stockStatus: sIdx === 2 ? 'few_left' : 'in_stock',
      quantity: sIdx === 2 ? 2 : (idx % 8) + 4,
      lastVerifiedAt: new Date(now - pref.freshMins * MINUTE).toISOString(),
      lastPriceConfirmedByOwner: isFresh,
      verificationStatus: isFresh ? 'fresh' : 'moderate',
      viewsCount: 20 + (idx * 3),
      clicksCount: 5 + (idx * 2)
    });
  });
});

export const priceHistories = [
  {
    productId: 'prod_tv_1',
    shopId: 'shop_2',
    history: [
      { date: '30 days ago', price: 52000 },
      { date: '21 days ago', price: 50500 },
      { date: '14 days ago', price: 49000 },
      { date: '7 days ago', price: 48200 },
      { date: 'Today', price: 47500 }
    ],
    totalDropPercent: 8.6
  },
  {
    productId: 'prod_ha_1',
    shopId: 'shop_4',
    history: [
      { date: '30 days ago', price: 31500 },
      { date: '20 days ago', price: 29990 },
      { date: '10 days ago', price: 28500 },
      { date: 'Today', price: 27450 }
    ],
    totalDropPercent: 12.8
  },
  {
    productId: 'prod_mob_1',
    shopId: 'shop_2',
    history: [
      { date: '30 days ago', price: 74900 },
      { date: '15 days ago', price: 71999 },
      { date: 'Today', price: 68900 }
    ],
    totalDropPercent: 8.0
  }
];

export const reviews = [
  {
    id: 'rev_1',
    shopId: 'shop_1',
    customerId: 'usr_customer_1',
    customerName: 'Venkat Rao',
    rating: 5,
    priceWasAccurate: true,
    comment: 'Visited store for the Samsung 55" TV. The price was exactly ₹48,999 as displayed. Smooth transaction!',
    createdAt: new Date(now - 3 * DAY).toISOString()
  },
  {
    id: 'rev_2',
    shopId: 'shop_2',
    customerId: 'usr_customer_2',
    customerName: 'Priya Sundaram',
    rating: 5,
    priceWasAccurate: true,
    comment: 'Got the best deal in town here! Staff confirmed stock over WhatsApp before I drove down.',
    createdAt: new Date(now - 5 * DAY).toISOString()
  },
  {
    id: 'rev_3',
    shopId: 'shop_3',
    customerId: 'usr_customer_3',
    customerName: 'Rahul Verma',
    rating: 3,
    priceWasAccurate: false,
    comment: 'The TV was ₹500 higher than listed. Shopkeeper explained a fresh batch had arrived.',
    createdAt: new Date(now - 12 * DAY).toISOString()
  }
];

export const reports = [
  {
    id: 'rep_1',
    shopId: 'shop_3',
    productId: 'prod_mob_1',
    reportedBy: 'Karthik N',
    reason: 'wrong_price',
    details: 'Listed as ₹70,500 but offline store quoted ₹72,000.',
    status: 'pending',
    createdAt: new Date(now - 6 * HOUR).toISOString()
  }
];

export const productRequests = [
  {
    id: 'req_1',
    customerId: 'usr_customer_1',
    customerName: 'Venkat Rao',
    customerPhone: '+91 99887 76655',
    productName: 'Sony WH-1000XM6 Wireless Noise Cancelling Headphones',
    category: 'accessories',
    budget: 30000,
    radiusKm: 10,
    status: 'open',
    createdAt: new Date(now - 2 * HOUR).toISOString(),
    responses: [
      {
        id: 'resp_1',
        shopId: 'shop_2',
        shopName: 'Digital World Superstore',
        offeredPrice: 28999,
        stockStatus: 'in_stock',
        notes: 'Ready stock in Silver and Midnight Black. Can hold for 24 hours.',
        createdAt: new Date(now - 30 * MINUTE).toISOString()
      }
    ]
  }
];
