"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, Star, Shield, TrendingDown, Users, Globe,
  ChevronDown, ChevronRight, MapPin, Heart, Award,
  Download, Eye, Clock, CheckCircle, AlertCircle,
  Play, ShoppingBag, Share2, Filter, ArrowRight, Package,
  Utensils, Target, Handshake, Gift, Coffee, Crown
} from 'lucide-react';

// Language support
type Language = 'id' | 'en' | 'pl';

const translations = {
  id: {
    headerTitle1: 'Klien',
    headerTitle2: '& Mitra',
    headerSubtitle: 'Lima keunggulan utama yang menjadikan Asian Grocery pilihan #1 untuk kebutuhan kuliner Asia di Polandia.',
    excellenceNote: 'Excellence in Asian Grocery Since 2019',
    learnMore: 'Pelajari Lebih Detail',
    ctaTitle: 'Rasakan Keunggulan Kami Sekarang',
    ctaDesc: 'Bergabunglah dengan ribuan customer yang telah merasakan excellence of Asian Grocery experience',
    ctaShop: '🛒 Mulai Belanja Sekarang',
    ctaContact: '📞 Hubungi Kami',
    advantages: [
      {
        title: 'LOJANESIA',
        description: 'LojaNesia Poland adalah perusahaan ritel yang berfokus pada pemasaran dan distribusi produk-produk Asia di Polandia. Kami menghadirkan berbagai bahan makanan, bumbu, camilan, minuman, serta produk kebutuhan sehari-hari yang autentik dari berbagai negara Asia, dengan penekanan khusus pada produk Indonesia.Tujuan utama kami adalah menjadi penghubung antara masyarakat Asia yang tinggal di Polandia dengan cita rasa asli dari tanah kelahiran mereka, sekaligus memperkenalkan kekayaan kuliner dan budaya Asia kepada konsumen lokal.Dengan komitmen terhadap kualitas, keaslian, dan pelayanan yang profesional, LojaNesia Poland bertekad untuk menjadi salah satu pusat belanja produk Asia terpercaya di Polandia.',
        statsNumber: '2000+',
        statsLabel: 'Asian Products',
        icon: '🏪',
        color: 'red',
        image: '/images/client-partners/loja.jpeg',
      },
      {
        title: 'Dapur Omah Mława',
        description: 'Dapur Omah Mława adalah restoran yang menghadirkan cita rasa otentik masakan Indonesia di kota Mława, Polandia. Kami menyajikan berbagai hidangan tradisional khas nusantara yang kaya akan rempah dan rasa, mulai dari makanan jalanan populer hingga masakan rumahan yang autentik. Dengan konsep yang menggabungkan kehangatan budaya Indonesia dan kenyamanan suasana modern, Dapur Omah Mława tidak hanya menjadi tempat makan, tetapi juga ruang pertemuan bagi masyarakat lokal maupun diaspora Indonesia untuk menikmati pengalaman kuliner yang berbeda. Komitmen kami adalah memberikan pelayanan terbaik dengan menjaga kualitas bahan baku, keaslian rasa, serta menghadirkan nuansa Indonesia di setiap hidangan.',
        statsNumber: '500+',
        statsLabel: 'Indonesian Products',
        icon: '🇮🇩',
        color: 'red',
        image: '/images/client-partners/omah.jpeg',
      },
    ],
  },
  en: {
    headerTitle1: 'Clients',
    headerTitle2: '& Partners',
    headerSubtitle: 'Five key advantages that make Asian Grocery the #1 choice for Asian culinary needs in Poland.',
    excellenceNote: 'Excellence in Asian Grocery Since 2019',
    learnMore: 'Learn More',
    ctaTitle: 'Experience Our Advantages Now',
    ctaDesc: 'Join thousands of customers who have experienced the excellence of Asian Grocery experience',
    ctaShop: '🛒 Start Shopping Now',
    ctaContact: '📞 Contact Us',
    advantages: [
      {
        title: 'LOJANESIA',
        description: 'LojaNesia Poland is a retail company focused on marketing and distributing Asian products in Poland. We bring various food ingredients, spices, snacks, beverages, and daily necessities that are authentic from various Asian countries, with special emphasis on Indonesian products. Our main goal is to be a bridge between Asian communities living in Poland and the authentic flavors from their homeland, while introducing the richness of Asian culinary and culture to local consumers. With commitment to quality, authenticity, and professional service, LojaNesia Poland is determined to become one of the trusted Asian product shopping centers in Poland.',
        statsNumber: '2000+',
        statsLabel: 'Asian Products',
        icon: '🏪',
        color: 'red',
        image: '/images/client-partners/loja.jpeg',
      },
      {
        title: 'Dapur Omah Mława',
        description: 'Dapur Omah Mława is a restaurant that brings authentic Indonesian cuisine flavors to the city of Mława, Poland. We serve various traditional Nusantara dishes rich in spices and flavors, from popular street food to authentic home cooking. With a concept that combines the warmth of Indonesian culture and the comfort of a modern atmosphere, Dapur Omah Mława is not only a place to eat, but also a meeting space for local communities and Indonesian diaspora to enjoy a different culinary experience. Our commitment is to provide the best service by maintaining the quality of raw materials, authenticity of taste, and bringing Indonesian nuances to every dish.',
        statsNumber: '500+',
        statsLabel: 'Indonesian Products',
        icon: '🇮🇩',
        color: 'red',
        image: '/images/client-partners/omah.jpeg',
      },
    ],
  },
  pl: {
    headerTitle1: 'Klienci',
    headerTitle2: '& Partnerzy',
    headerSubtitle: 'Pięć kluczowych atutów, które sprawiają, że Asian Grocery to wybór nr 1 w Polsce.',
    excellenceNote: 'Doskonali w Asian Grocery od 2019',
    learnMore: 'Dowiedz się więcej',
    ctaTitle: 'Poczuj Nasze Atuty Już Teraz',
    ctaDesc: 'Dołącz do tysięcy klientów, którzy doświadczyli doskonałości Asian Grocery',
    ctaShop: '🛒 Zacznij Zakupy Teraz',
    ctaContact: '📞 Skontaktuj się z Nami',
    advantages: [
      {
        title: 'LOJANESIA',
        description: 'LojaNesia Poland to firma detaliczna skupiona na marketingu i dystrybucji produktów azjatyckich w Polsce. Dostarczamy różnorodne składniki spożywcze, przyprawy, przekąski, napoje oraz artykuły codziennego użytku autentyczne z różnych krajów azjatyckich, ze szczególnym naciskiem na produkty indonezyjskie. Naszym głównym celem jest bycie mostem między społecznościami azjatyckimi mieszkającymi w Polsce a autentycznymi smakami z ich ojczyzny, jednocześnie wprowadzając bogactwo azjatyckiej kuchni i kultury do lokalnych konsumentów. Z zaangażowaniem w jakość, autentyczność i profesjonalną obsługę, LojaNesia Poland dąży do zostania jednym z zaufanych centrów zakupowych produktów azjatyckich w Polsce.',
        statsNumber: '2000+',
        statsLabel: 'Produkty Azjatyckie',
        icon: '🏪',
        color: 'red',
        image: '/images/client-partners/loja.jpeg',
      },
      {
        title: 'Dapur Omah Mława',
        description: 'Dapur Omah Mława to restauracja, która przywozi autentyczne smaki kuchni indonezyjskiej do miasta Mława w Polsce. Serwujemy różnorodne tradycyjne dania Nusantara bogate w przyprawy i smaki, od popularnych dań ulicznych po autentyczne domowe gotowanie. Z koncepcją łączącą ciepło kultury indonezyjskiej i komfort nowoczesnej atmosfery, Dapur Omah Mława to nie tylko miejsce do jedzenia, ale także przestrzeń spotkań dla lokalnych społeczności i indonezyjskiej diaspory, aby cieszyć się innym doświadczeniem kulinarnym. Naszym zaangażowaniem jest zapewnienie najlepszej obsługi poprzez utrzymanie jakości surowców, autentyczności smaku i wprowadzanie indonezyjskich niuansów do każdego dania.',
        statsNumber: '500+',
        statsLabel: 'Produkty Indonezyjskie',
        icon: '🇮🇩',
        color: 'red',
        image: '/images/client-partners/omah.jpeg',
      },
    ],
  },
} as const;

// Interface for Advantage
interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  stats: {
    number: string;
    label: string;
  };
  image: string;
}

// Interface for Testimonial
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  category: string;
}

// Interface for FAQ Item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// advantages will be built from translations

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sari Wijaya",
    role: "Community Leader",
    company: "Komunitas Indonesia Warszawa",
    content: "Asian Grocery adalah lifesaver bagi kami yang rindu makanan Indonesia. Produknya authentic dan harga sangat reasonable. Tim mereka juga selalu support event komunitas kami.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b67d6b99?w=150",
    rating: 5.0,
    category: "Community"
  },
  {
    id: 2,
    name: "Anna Kowalski",
    role: "Food Blogger",
    company: "Warsaw Food Scene",
    content: "Jako miłośniczka kuchni azjatyckiej, Asian Grocery to moje ulubione miejsce. Ogromny wybór autentycznych produktów i bardzo pomocna obsługa. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 4.9,
    category: "Local Customer"
  },
  {
    id: 3,
    name: "Chef Budi Santoso",
    role: "Executive Chef",
    company: "Nusantara Restaurant",
    content: "Sebagai chef restaurant Indonesia, saya sangat bergantung pada Asian Grocery untuk supply bahan-bahan berkualitas. Mereka selalu konsisten dan delivery tepat waktu.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5.0,
    category: "Business Partner"
  },
  {
    id: 4,
    name: "Maria Santos",
    role: "Expat",
    company: "Filipino Community",
    content: "Living in Poland as a Filipino, finding Asian ingredients was challenging until I found Asian Grocery. They have everything I need for authentic Filipino cooking!",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150",
    rating: 4.8,
    category: "Community"
  }
];

// Sample FAQ data
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Apa yang membuat Asian Grocery berbeda dari toko Asia lainnya?",
    answer: "Kami memiliki fokus khusus pada kualitas dan authenticity, terutama untuk produk Indonesia. Dengan 2000+ produk, community engagement yang kuat, dan misi cultural bridge, kami bukan hanya toko biasa tapi ecosystem lengkap untuk komunitas Asia di Polandia.",
    category: "Keunggulan"
  },
  {
    id: 2,
    question: "Bagaimana cara memastikan produk Indonesia yang dijual authentic?",
    answer: "Kami import langsung dari distributor resmi di Indonesia dan memiliki quality control team yang ketat. Setiap produk melewati tasting test dan approval dari Indonesian community leaders sebelum dijual. Garansi authentic atau uang kembali.",
    category: "Kualitas"
  },
  {
    id: 3,
    question: "Apakah harga di Asian Grocery competitive dibanding supermarket besar?",
    answer: "Ya, kami memiliki price match guarantee dan rata-rata 25% lebih murah dari kompetitor untuk produk yang sama. Dengan member program, customer bisa dapat additional discount hingga 15%. Volume purchase juga dapat harga grosir.",
    category: "Harga"
  },
  {
    id: 4,
    question: "Bagaimana cara bergabung dengan komunitas Asian Grocery?",
    answer: "Sangat mudah! Daftar menjadi member gratis di toko atau online, join Facebook group kami dengan 5000+ members, ikuti Instagram untuk update event, dan attend community gathering yang rutin diadakan setiap bulan.",
    category: "Komunitas"
  },
  {
    id: 5,
    question: "Apakah Asian Grocery juga melayani wholesale/grosir?",
    answer: "Absolutely! Kami adalah supplier utama untuk 50+ restaurant dan toko Asia di Polandia. Minimum order 1000 PLN dengan special wholesale pricing, credit terms, dan dedicated account manager untuk business customers.",
    category: "Bisnis"
  }
];

export default function AdvantagesPage() {
  const [activeAdvantage, setActiveAdvantage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [language, setLanguage] = useState<Language>('id');

  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, []);

  // Sync language from storage and header events
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem('preferred-language');
      if (saved === 'en' || saved === 'id' || saved === 'pl') setLanguage(saved);
    } catch {}
    const onLanguageChanged = (e: Event) => {
      const detail = (e as CustomEvent).detail as Language | undefined;
      if (detail === 'en' || detail === 'id' || detail === 'pl') setLanguage(detail);
    };
    window.addEventListener('languageChanged', onLanguageChanged as EventListener);
    return () => window.removeEventListener('languageChanged', onLanguageChanged as EventListener);
  }, []);

  // Build localized advantages
  const advantages: Advantage[] = t.advantages.map((a, idx) => ({
    id: idx + 1,
    title: a.title,
    description: a.description,
    icon: a.icon,
    color: a.color,
    stats: { number: a.statsNumber, label: a.statsLabel },
    image: a.image,
  }));

  const faqCategories = ['all', 'Keunggulan', 'Kualitas', 'Harga', 'Komunitas', 'Bisnis'];

  const filteredFAQs = faqItems.filter(faq => {
    const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      red: 'from-red-800 to-red-700',
      green: 'from-green-600 to-green-500',
      blue: 'from-blue-600 to-blue-500',
      purple: 'from-purple-600 to-purple-500'
    };
    return colors[color] || colors.red;
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-2xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
        <div className="w-20 h-20 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <Crown className="text-white" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.headerTitle1}
            <span className="bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">
              {" "}{t.headerTitle2}
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t.headerSubtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-200">
            <Award size={20} className="text-red-300" />
            <span className="font-medium">{t.excellenceNote}</span>
          </div>
        </div>

        {/* Main Advantages */}
        <div className="space-y-16 mb-20">
          {advantages.map((advantage, idx) => (
            <div 
              key={advantage.id}
              className={`transition-all duration-1000 ease-out ${
                isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${400 + idx * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${getColorClasses(advantage.color)} rounded-3xl p-1 shadow-2xl`}>
                <div className="card rounded-3xl p-8 md:p-12">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{advantage.icon}</div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {advantage.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>

                    <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative flex justify-center">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                          <img 
                            src={advantage.image}
                            alt={advantage.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 card rounded-full p-3 sm:p-4 shadow-xl border-2 border-red-200/30 bg-red-200/30">
                          <div className="text-center">
                            <div className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${getColorClasses(advantage.color)} bg-clip-text`}>
                              {advantage.stats.number}
                            </div>
                            <div className="text-gray-200 text-xs font-medium">{advantage.stats.label}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-xl mb-8 text-red-100">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 transition-all">
                {t.ctaShop}
              </button>
              <button className="bg-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-800 transition-all">
                {t.ctaContact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}