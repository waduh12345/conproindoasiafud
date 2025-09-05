"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, Award, Shield, Star, MapPin, Phone, Mail, 
  Calendar, Clock, Plane, ChevronRight, Play, Check,
  Eye, Heart, ArrowRight, Search, DollarSign, Globe,
  ShoppingCart, Package,
  Link
} from 'lucide-react';

// Interface for Product
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  weight: string;
  availability: string;
  image: string;
  category: 'grocery' | 'food' | 'snack';
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

// Interface for Testimonial
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  text: string;
  product: string;
}

// Translation content for page copy
interface HomeTranslationContent {
  heroBadge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  viewBestProducts: string;
  viewRestaurant: string;
  satisfiedCustomers: string;

  statsCustomers: string;
  statsProducts: string;
  statsRating: string;
  statsHalal: string;

  whyChooseHeading: string;
  whyChooseSubtitle: string;
  reason1Title: string;
  reason1Desc: string;
  reason2Title: string;
  reason2Desc: string;
  reason3Title: string;
  reason3Desc: string;

  featuredHeading: string;
  featuredSubtitle: string;
  popularBadge: string;

  testimonialsHeading: string;
  testimonialsSubtitle: string;

  ctaHeading: string;
  ctaSubtitle: string;
  ctaWhatsApp: string;
  ctaSeeLocation: string;
}

type LanguageKey = 'en' | 'id' | 'pl';

const translations: Record<LanguageKey, HomeTranslationContent> = {
  id: {
    heroBadge: 'Terpercaya di Polandia',
    heroTitleLine1: 'Asian Grocery &',
    heroTitleLine2: 'Indonesian Food',
    heroDescription:
      'IndoAsiaFood menghadirkan cita rasa Asia langsung ke Polandia. Menyediakan lebih dari 500 produk autentik dari berbagai negara Asia, mulai dari bumbu dapur, camilan, hingga kebutuhan sehari-hari. Lengkap dengan restoran khas Indonesia yang menyajikan hidangan autentik Nusantara',
    viewBestProducts: 'Lihat Produk Terbaik',
    viewRestaurant: 'Lihat Restoran',
    satisfiedCustomers: 'Pelanggan Puas',

    statsCustomers: 'Pelanggan Terlayani',
    statsProducts: 'Produk Tersedia',
    statsRating: 'Rating Kepuasan',
    statsHalal: 'Produk Halal',

    whyChooseHeading: 'Mengapa Memilih Kami?',
    whyChooseSubtitle:
      'Keunggulan layanan yang membuat berbelanja produk Asia di Polandia jadi mudah dan nyaman',
    reason1Title: 'Melayani Komunitas Asia & Pecinta Cita Rasa Asia',
    reason1Desc:
      'Kami memahami kebutuhan komunitas Asia di Polandia sekaligus menghadirkan pengalaman kuliner untuk siapa pun yang mencintai cita rasa Asia. Dengan staf berpengalaman yang dapat berkomunikasi dalam berbagai bahasa, kami siap melayani Anda dengan hangat.',
    reason2Title: 'Lokasi Strategis & Pengiriman',
    reason2Desc:
      'Berlokasi di Mława dengan layanan pengiriman ke seluruh Polandia. Mudah diakses dan tersedia layanan online shopping.',
    reason3Title: 'Rasa Autentik Indonesia',
    reason3Desc:
      'Menghadirkan cita rasa asli Nusantara dengan resep tradisional dan bahan-bahan import langsung dari Indonesia.',

    featuredHeading: 'Produk Unggulan',
    featuredSubtitle:
      'Pilihan produk terbaik dari Asia dengan kualitas terjamin dan rasa autentik',
    popularBadge: 'Populer',

    testimonialsHeading: 'Testimoni Pelanggan',
    testimonialsSubtitle:
      'Dengarkan pengalaman mereka yang telah merasakan produk berkualitas dan pelayanan terbaik kami',

    ctaHeading: 'Siap Merasakan Cita Rasa Asia?',
    ctaSubtitle:
      'Kunjungi toko kami di Mława atau hubungi untuk pemesanan online dan delivery ke seluruh Polandia',
    ctaWhatsApp: 'WhatsApp Order',
    ctaSeeLocation: 'Lihat Lokasi Toko',
  },
  en: {
    heroBadge: 'Trusted in Poland',
    heroTitleLine1: 'Asian Grocery &',
    heroTitleLine2: 'Indonesian Food',
    heroDescription:
      'IndoAsiaFood brings authentic Asian flavors straight to Poland. We offer 500+ genuine products from across Asia, from pantry spices and snacks to daily essentials. Complete with an Indonesian restaurant serving traditional Nusantara dishes.',
    viewBestProducts: 'Browse Top Products',
    viewRestaurant: 'View Restaurant',
    satisfiedCustomers: 'Satisfied Customers',

    statsCustomers: 'Customers Served',
    statsProducts: 'Products Available',
    statsRating: 'Satisfaction Rating',
    statsHalal: 'Halal Products',

    whyChooseHeading: 'Why Choose Us?',
    whyChooseSubtitle:
      'Service advantages that make shopping for Asian products in Poland easy and convenient',
    reason1Title: 'Serving Asian Communities & Flavor Lovers',
    reason1Desc:
      'We understand the needs of Asian communities in Poland while welcoming anyone who loves Asian cuisine. Our experienced, multilingual staff is ready to serve you with warmth.',
    reason2Title: 'Strategic Location & Delivery',
    reason2Desc:
      'Based in Mława with delivery across Poland. Easy to reach and online shopping available.',
    reason3Title: 'Authentic Indonesian Taste',
    reason3Desc:
      'Bringing true Nusantara flavors with traditional recipes and ingredients imported directly from Indonesia.',

    featuredHeading: 'Featured Products',
    featuredSubtitle:
      'Top selections from Asia with guaranteed quality and authentic taste',
    popularBadge: 'Popular',

    testimonialsHeading: 'Customer Testimonials',
    testimonialsSubtitle:
      'Hear from customers who have enjoyed our quality products and excellent service',

    ctaHeading: 'Ready to Taste Asia?',
    ctaSubtitle:
      'Visit our store in Mława or contact us for online orders and delivery throughout Poland',
    ctaWhatsApp: 'WhatsApp Order',
    ctaSeeLocation: 'See Store Location',
  },
  pl: {
    heroBadge: 'Zaufany w Polsce',
    heroTitleLine1: 'Sklep Azjatycki &',
    heroTitleLine2: 'Kuchnia Indonezyjska',
    heroDescription:
      'IndoAsiaFood sprowadza autentyczne smaki Azji prosto do Polski. Oferujemy ponad 500 oryginalnych produktów z całej Azji: przyprawy, przekąski i codzienne artykuły. Do tego restauracja z tradycyjnymi daniami kuchni indonezyjskiej.',
    viewBestProducts: 'Zobacz Najlepsze Produkty',
    viewRestaurant: 'Zobacz Restaurację',
    satisfiedCustomers: 'Zadowoleni Klienci',

    statsCustomers: 'Obsłużonych Klientów',
    statsProducts: 'Dostępnych Produktów',
    statsRating: 'Ocena Satysfakcji',
    statsHalal: 'Produkty Halal',

    whyChooseHeading: 'Dlaczego My?',
    whyChooseSubtitle:
      'Atuty naszej obsługi sprawiają, że zakupy produktów azjatyckich w Polsce są proste i wygodne',
    reason1Title: 'Dla społeczności azjatyckiej i miłośników smaków',
    reason1Desc:
      'Rozumiemy potrzeby społeczności azjatyckiej w Polsce i zapraszamy wszystkich, którzy kochają kuchnię azjatycką. Nasz doświadczony, wielojęzyczny zespół obsługuje z uśmiechem.',
    reason2Title: 'Lokalizacja i dostawa',
    reason2Desc:
      'Siedziba w Mławie z dostawą na terenie całej Polski. Łatwy dojazd i zakupy online dostępne.',
    reason3Title: 'Autentyczny smak Indonezji',
    reason3Desc:
      'Prawdziwe smaki Nusantary dzięki tradycyjnym przepisom i składnikom importowanym bezpośrednio z Indonezji.',

    featuredHeading: 'Polecane Produkty',
    featuredSubtitle:
      'Najlepszy wybór z Azji: gwarantowana jakość i autentyczny smak',
    popularBadge: 'Popularne',

    testimonialsHeading: 'Opinie Klientów',
    testimonialsSubtitle:
      'Poznaj opinie osób, które cenią nasze produkty i obsługę',

    ctaHeading: 'Gotowi na smaki Azji?',
    ctaSubtitle:
      'Odwiedź nasz sklep w Mławie lub skontaktuj się w sprawie zamówień online i dostawy w całej Polsce',
    ctaWhatsApp: 'Zamów przez WhatsApp',
    ctaSeeLocation: 'Zobacz Lokalizację Sklepu',
  },
};

// Sample products data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Paket Bumbu Nusantara Premium",
    price: 89,
    originalPrice: 99,
    weight: "2.5 kg",
    availability: "Ready Stock",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
    category: 'grocery',
    features: ["15 Jenis Bumbu", "Kemasan Vacuum Sealed", "Import Langsung", "Halal Certified"],
    badge: "Best Seller",
    isPopular: true
  },
  {
    id: 2,
    name: "Nasi Gudeg Jogja Ready to Eat",
    price: 12,
    weight: "350g",
    availability: "Limited",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600",
    category: 'food',
    features: ["Autentik Jogja", "Microwave Ready", "Frozen Food", "Tanpa Pengawet"],
    badge: "Signature Dish"
  },
  {
    id: 3,
    name: "Asian Snack Box Variety",
    price: 25,
    weight: "1 kg",
    availability: "Ready Stock",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
    category: 'snack',
    features: ["10+ Snack Varieties", "Indonesia & Asia Mix", "Perfect for Sharing"],
    isPopular: true
  }
];

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sari Dewi",
    location: "Warszawa",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    text: "Akhirnya bisa masak rendang yang authentic di Polandia! Bumbu-bumbunya lengkap dan rasanya persis seperti di kampung halaman.",
    product: "Paket Bumbu Nusantara"
  },
  {
    id: 2,
    name: "Piotr Kowalski",
    location: "Kraków",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    text: "Amazing Indonesian food! The gudeg and rendang taste so authentic. My Polish friends love it too. Great quality and service!",
    product: "Indonesian Ready Meals"
  },
  {
    id: 3,
    name: "Keluarga Budi",
    location: "Mława",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400",
    text: "Toko ini jadi penyelamat keluarga Indonesia di Polandia. Produk lengkap, harga wajar, dan pelayanan ramah. Terima kasih!",
    product: "Asian Grocery Shopping"
  }
];

// Why choose us reasons and achievement stats will be created inside the component

export default function HomePage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState<LanguageKey>('en');
  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sync language from localStorage and header events
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem('preferred-language');
      if (saved === 'en' || saved === 'id' || saved === 'pl') {
        setLanguage(saved);
      }
    } catch {
      // ignore
    }

    const onLanguageChanged = (e: Event) => {
      const detail = (e as CustomEvent).detail as LanguageKey | undefined;
      if (detail === 'en' || detail === 'id' || detail === 'pl') {
        setLanguage(detail);
      }
    };
    window.addEventListener('languageChanged', onLanguageChanged as EventListener);
    return () => window.removeEventListener('languageChanged', onLanguageChanged as EventListener);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  const getBadgeColor = (category: string) => {
    switch(category) {
      case 'grocery': return 'bg-red-600';
      case 'food': return 'bg-red-500'; 
      case 'snack': return 'bg-red-700';
      default: return 'bg-red-600';
    }
  };

  // Build dynamic reasons and stats using translations
  const whyChooseUs = [
    { icon: Users, title: t.reason1Title, description: t.reason1Desc, color: 'bg-red-600' },
    { icon: MapPin, title: t.reason2Title, description: t.reason2Desc, color: 'bg-red-600' },
    { icon: DollarSign, title: t.reason3Title, description: t.reason3Desc, color: 'bg-red-600' },
  ];

  const stats = [
    { number: '2,500+', label: t.statsCustomers, icon: Users },
    { number: '500+', label: t.statsProducts, icon: Package },
    { number: '4.8/5', label: t.statsRating, icon: Star },
    { number: '100%', label: t.statsHalal, icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
          <div className="w-20 h-20 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <ShoppingCart className="text-red-600" size={24} />
          </div>
        </div>
        
        <div className="absolute top-40 right-20 animate-bounce invisible md:visible">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Package className="text-red-500" size={20} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-full mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  <span className="text-sm font-semibold">{t.heroBadge}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  {t.heroTitleLine1}
                  <span className="block bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                    {t.heroTitleLine2}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {t.heroDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="btn-primary px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                    {t.viewBestProducts}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="btn-secondary px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center shadow-lg">
                    <Play className="mr-2 w-5 h-5" />
                    {t.viewRestaurant}
                  </button>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className={`relative transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
                <div className="relative">
                  <img 
                    src="/images/hero-indoasiafood.webp"
                    alt="Asian Grocery & Indonesian Food"
                    className="w-full h-140 rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 card p-6 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">2,500+</div>
                        <div className="text-gray-300 text-sm">{t.satisfiedCustomers}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 card p-4 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-white">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4 group-hover:bg-red-700 transition-all duration-300">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">{t.whyChooseHeading}</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t.whyChooseSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx} 
                className={`card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                  isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white mb-4">{t.featuredHeading}</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t.featuredSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div 
                key={product.id}
                className={`card rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {product.isPopular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {t.popularBadge}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100 hidden">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t.testimonialsHeading}</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.testimonialsSubtitle}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="text-center mb-8">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-lg ring-2 ring-red-600 ring-offset-2"
                />
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-800 italic mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                <div className="text-lg font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-700">
                  {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].product}
                </div>
              </div>
              
              <div className="flex justify-center gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === idx ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.ctaHeading}
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/48123456789" className="btn-primary px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                <Phone size={20} />
                {t.ctaWhatsApp}
              </a>
              <button className="btn-secondary px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                <MapPin size={20} />
                {t.ctaSeeLocation}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}