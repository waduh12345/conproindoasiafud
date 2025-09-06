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
    headerTitle1: "Keunggulan",
    headerTitle2: "Kami",
    headerSubtitle:
      "Lima keunggulan utama yang menjadikan Asian Grocery pilihan #1 untuk kebutuhan kuliner Asia di Polandia.",
    excellenceNote: "Excellence in Asian Grocery Since 2019",
    learnMore: "Pelajari Lebih Detail",
    ctaTitle: "Rasakan Keunggulan Kami Sekarang",
    ctaDesc:
      "Bergabunglah dengan ribuan customer yang telah merasakan excellence of Asian Grocery experience",
    ctaShop: "🛒 Mulai Belanja Sekarang",
    ctaContact: "📞 Hubungi Kami",
    advantages: [
      {
        title: "Asian Grocery Terlengkap",
        subtitle: "One-Stop Shopping Experience",
        description:
          "Menyediakan lebih dari 2000+ produk Asia authentic dari Indonesia, Thailand, Korea, Jepang, dan Vietnam. Dari bumbu dapur hingga snack favorit, semua tersedia di satu tempat.",
        features: [
          "2000+ produk dari 10+ negara Asia",
          "Weekly restock dengan produk fresh",
          "Import langsung dari distributor resmi",
          "Kategori lengkap: bumbu, instant, frozen, snack",
          "Produk halal bersertifikat",
          "Exclusive brands tidak tersedia di tempat lain",
        ],
        statsNumber: "2000+",
        statsLabel: "Asian Products",
        icon: "🏪",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6br3dolmIvqG0vxAcqKaPJYCgsByn1O8k7RzhXS",
      },
      {
        title: "Makanan Indonesia Authentic",
        subtitle: "Taste of Home, Rasa Kampung Halaman",
        description:
          "Spesialisasi dalam makanan dan bumbu Indonesia authentic. Dari rendang instant hingga kerupuk tradisional, kami memastikan rasa yang sama persis seperti di Indonesia.",
        features: [
          "Bumbu rendang, gudeg, rawon authentic",
          "Mie instant semua brand terkenal Indonesia",
          "Kerupuk dan cemilan tradisional",
          "Sambal dan saus asli Indonesia",
          "Frozen food ready-to-eat Indonesian",
          "Import direct dari produsen terpercaya",
        ],
        statsNumber: "500+",
        statsLabel: "Indonesian Products",
        icon: "🇮🇩",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6brXRhPWxwTaA8EN0CxFq6WOT5nflRYQDwXBpdz",
      },
      {
        title: "Harga Bersaing & Kualitas Premium",
        subtitle: "Best Value for Money Guarantee",
        description:
          "Komitmen memberikan harga terbaik tanpa mengorbankan kualitas. Sistem supply chain efisien memungkinkan kami menawarkan harga competitive untuk produk premium.",
        features: [
          "Price match guarantee dengan kompetitor",
          "Bulk discount untuk pembelian grosir",
          "Member loyalty program dengan cashback",
          "Quality control ketat sebelum display",
          "Garansi kepuasan atau uang kembali",
          "Weekly promotion dan special offers",
        ],
        statsNumber: "25%",
        statsLabel: "Average Savings",
        icon: "💰",
        color: "green",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      },
      {
        title: "Connected Community Hub",
        subtitle: "Pusat Komunitas Asia di Polandia",
        description:
          "Lebih dari sekedar toko, kami adalah meeting point komunitas Asia. Menghubungkan diaspora Asia dengan local food enthusiasts melalui berbagai aktivitas dan event.",
        features: [
          "Regular community gathering & potluck",
          "Cooking workshop dengan chef Indonesia",
          "Cultural festival collaboration",
          "Online community dengan 5000+ members",
          "Event catering untuk komunitas",
          "Partnership dengan organisasi Asia",
        ],
        statsNumber: "5000+",
        statsLabel: "Community Members",
        icon: "🤝",
        color: "blue",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
      },
      {
        title: "Misi Budaya & Bisnis",
        subtitle: "Cultural Bridge Through Food",
        description:
          "Misi ganda sebagai bisnis profitable sekaligus cultural ambassador. Memperkenalkan kekayaan kuliner Asia kepada masyarakat Polandia sambil mempertahankan authenticity.",
        features: [
          "Educational content tentang Asian cuisine",
          "Recipe sharing dan cooking tips",
          "Cultural storytelling behind setiap produk",
          "Kolaborasi dengan chef dan food blogger",
          "Sponsorship event budaya internasional",
          "Media coverage untuk promosi Asian food",
        ],
        statsNumber: "50+",
        statsLabel: "Cultural Events",
        icon: "🌏",
        color: "purple",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      },
    ],
  },
  en: {
    headerTitle1: "Our",
    headerTitle2: "Advantages",
    headerSubtitle:
      "Five key advantages that make Asian Grocery the #1 choice for Asian culinary needs in Poland.",
    excellenceNote: "Excellence in Asian Grocery Since 2019",
    learnMore: "Learn More",
    ctaTitle: "Experience Our Advantages Today",
    ctaDesc:
      "Join thousands of customers who already enjoy the Asian Grocery experience",
    ctaShop: "🛒 Start Shopping Now",
    ctaContact: "📞 Contact Us",
    advantages: [
      {
        title: "Complete Asian Grocery",
        subtitle: "One-Stop Shopping Experience",
        description:
          "We offer 2000+ authentic Asian products from Indonesia, Thailand, Korea, Japan, and Vietnam. From pantry spices to favorite snacks—all in one place.",
        features: [
          "2000+ products from 10+ Asian countries",
          "Weekly restock with fresh products",
          "Direct import from official distributors",
          "Complete categories: spices, instant, frozen, snacks",
          "Halal certified products",
          "Exclusive brands not available elsewhere",
        ],
        statsNumber: "2000+",
        statsLabel: "Asian Products",
        icon: "🏪",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6br3dolmIvqG0vxAcqKaPJYCgsByn1O8k7RzhXS",
      },
      {
        title: "Authentic Indonesian Food",
        subtitle: "Taste of Home",
        description:
          "Specializing in authentic Indonesian food and spices. From instant rendang to traditional crackers, we preserve the same taste as in Indonesia.",
        features: [
          "Authentic rendang, gudeg, rawon spices",
          "Instant noodles from famous Indonesian brands",
          "Traditional crackers and snacks",
          "Original Indonesian sambal and sauces",
          "Ready-to-eat Indonesian frozen foods",
          "Direct import from trusted producers",
        ],
        statsNumber: "500+",
        statsLabel: "Indonesian Products",
        icon: "🇮🇩",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6brXRhPWxwTaA8EN0CxFq6WOT5nflRYQDwXBpdz",
      },
      {
        title: "Competitive Price & Premium Quality",
        subtitle: "Best Value for Money Guarantee",
        description:
          "Committed to the best prices without sacrificing quality. Efficient supply chain allows competitive pricing for premium products.",
        features: [
          "Price match guarantee with competitors",
          "Bulk discounts for wholesale purchases",
          "Member loyalty program with cashback",
          "Strict quality control before display",
          "Satisfaction guarantee or money back",
          "Weekly promotions and special offers",
        ],
        statsNumber: "25%",
        statsLabel: "Average Savings",
        icon: "💰",
        color: "green",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      },
      {
        title: "Connected Community Hub",
        subtitle: "Asia Community Center in Poland",
        description:
          "More than a store, we are a meeting point for Asian communities, connecting diaspora with local food enthusiasts through activities and events.",
        features: [
          "Regular community gatherings & potlucks",
          "Cooking workshops with Indonesian chefs",
          "Cultural festival collaborations",
          "Online community with 5000+ members",
          "Event catering for communities",
          "Partnerships with Asian organizations",
        ],
        statsNumber: "5000+",
        statsLabel: "Community Members",
        icon: "🤝",
        color: "blue",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
      },
      {
        title: "Cultural and Business Mission",
        subtitle: "Cultural Bridge Through Food",
        description:
          "A dual mission as a profitable business and cultural ambassador. Introducing Asian culinary richness to Polish society while maintaining authenticity.",
        features: [
          "Educational content about Asian cuisine",
          "Recipe sharing and cooking tips",
          "Cultural storytelling behind each product",
          "Collaborations with chefs and food bloggers",
          "Sponsorship of international cultural events",
          "Media coverage promoting Asian food",
        ],
        statsNumber: "50+",
        statsLabel: "Cultural Events",
        icon: "🌏",
        color: "purple",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      },
    ],
  },
  pl: {
    headerTitle1: "Nasze",
    headerTitle2: "Atuty",
    headerSubtitle:
      "Pięć kluczowych atutów, które sprawiają, że Asian Grocery to wybór nr 1 w Polsce.",
    excellenceNote: "Doskonali w Asian Grocery od 2019",
    learnMore: "Dowiedz się więcej",
    ctaTitle: "Poczuj Nasze Atuty Już Dziś",
    ctaDesc:
      "Dołącz do tysięcy klientów korzystających z doświadczenia Asian Grocery",
    ctaShop: "🛒 Zacznij Zakupy Teraz",
    ctaContact: "📞 Skontaktuj się z Nami",
    advantages: [
      {
        title: "Kompletny Sklep Azjatycki",
        subtitle: "One-Stop Shopping Experience",
        description:
          "Ponad 2000 autentycznych produktów z Indonezji, Tajlandii, Korei, Japonii i Wietnamu. Od przypraw po ulubione przekąski — wszystko w jednym miejscu.",
        features: [
          "2000+ produktów z 10+ krajów Azji",
          "Cotygodniowe dostawy świeżych produktów",
          "Bezpośredni import od oficjalnych dystrybutorów",
          "Pełne kategorie: przyprawy, instant, mrożonki, przekąski",
          "Produkty halal z certyfikatem",
          "Ekskluzywne marki niedostępne gdzie indziej",
        ],
        statsNumber: "2000+",
        statsLabel: "Produkty Azjatyckie",
        icon: "🏪",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6br3dolmIvqG0vxAcqKaPJYCgsByn1O8k7RzhXS",
      },
      {
        title: "Autentyczna Kuchnia Indonezyjska",
        subtitle: "Smak Domu",
        description:
          "Specjalizujemy się w autentycznych daniach i przyprawach indonezyjskich. Od instant rendang po tradycyjne krakersy — zachowujemy smak jak w Indonezji.",
        features: [
          "Autentyczne przyprawy do rendangu, gudegu, rawonu",
          "Instant zupki znanych indonezyjskich marek",
          "Tradycyjne krakersy i przekąski",
          "Oryginalne indonezyjskie sosy i sambale",
          "Mrożone dania gotowe do spożycia",
          "Bezpośredni import od zaufanych producentów",
        ],
        statsNumber: "500+",
        statsLabel: "Produkty Indonezyjskie",
        icon: "🇮🇩",
        color: "red",
        image:
          "https://8nc5ppykod.ufs.sh/f/H265ZJJzf6brXRhPWxwTaA8EN0CxFq6WOT5nflRYQDwXBpdz",
      },
      {
        title: "Konkurencyjna Cena i Wysoka Jakość",
        subtitle: "Gwarancja Najlepszej Wartości",
        description:
          "Zapewniamy najlepsze ceny bez kompromisów jakościowych. Wydajny łańcuch dostaw pozwala na konkurencyjne ceny produktów premium.",
        features: [
          "Gwarancja dopasowania ceny",
          "Zniżki hurtowe przy większych zakupach",
          "Program lojalnościowy z cashbackiem",
          "Rygorystyczna kontrola jakości przed wystawieniem",
          "Gwarancja satysfakcji lub zwrot pieniędzy",
          "Tygodniowe promocje i oferty specjalne",
        ],
        statsNumber: "25%",
        statsLabel: "Średnie Oszczędności",
        icon: "💰",
        color: "green",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      },
      {
        title: "Połączone Centrum Społeczności",
        subtitle: "Centrum Społeczności Azjatyckiej w Polsce",
        description:
          "To więcej niż sklep — punkt spotkań społeczności azjatyckiej. Łączymy diasporę z lokalnymi miłośnikami jedzenia poprzez wydarzenia i aktywności.",
        features: [
          "Regularne spotkania społeczności i potlucki",
          "Warsztaty kulinarne z indonezyjskimi szefami",
          "Współpraca przy festiwalach kulturowych",
          "Społeczność online 5000+ członków",
          "Catering wydarzeń dla społeczności",
          "Partnerstwa z organizacjami azjatyckimi",
        ],
        statsNumber: "5000+",
        statsLabel: "Członkowie Społeczności",
        icon: "🤝",
        color: "blue",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600",
      },
      {
        title: "Misja Kulturowa i Biznesowa",
        subtitle: "Most Kulturowy przez Jedzenie",
        description:
          "Podwójna misja — rentowny biznes i ambasador kultury. Wprowadzanie bogactwa kuchni azjatyckiej do polskiego społeczeństwa przy zachowaniu autentyczności.",
        features: [
          "Edukacyjne treści o kuchni azjatyckiej",
          "Wymiana przepisów i wskazówki kulinarne",
          "Opowieści kulturowe stojące za produktami",
          "Współpraca z szefami kuchni i blogerami",
          "Sponsoring wydarzeń kulturalnych",
          "Publikacje medialne promujące azjatycką kuchnię",
        ],
        statsNumber: "50+",
        statsLabel: "Wydarzenia Kulturalne",
        icon: "🌏",
        color: "purple",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
      },
    ],
  },
} as const;

// Interface for Advantage
interface Advantage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
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
    subtitle: a.subtitle,
    description: a.description,
    icon: a.icon,
    color: a.color,
    features: [...a.features],
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
      red: 'from-red-600 to-red-500',
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
        <div className="w-20 h-20 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <Crown className="text-red-600" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.headerTitle1}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {" "}
              {t.headerTitle2}
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">{t.headerSubtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-red-600">
            <Award size={20} />
            <span className="font-medium">{t.excellenceNote}</span>
          </div>
        </div>

        {/* Key Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 transition-all duration-1000 ease-out ${
            isPageLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {advantages.map((advantage, idx) => (
            <div
              key={advantage.id}
              className="text-center card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-2">{advantage.icon}</div>
              <div className="text-2xl font-bold text-red-400 mb-1">
                {advantage.stats.number}
              </div>
              <div className="text-gray-300 font-medium text-sm">
                {advantage.stats.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Advantages */}
        <div className="space-y-16 mb-20">
          {advantages.map((advantage, idx) => (
            <div
              key={advantage.id}
              className={`transition-all duration-1000 ease-out ${
                isPageLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + idx * 200}ms` }}
            >
              <div
                className={`rounded-3xl p-1 shadow-2xl`}
              >
                <div className="card rounded-3xl p-8 md:p-12">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{advantage.icon}</div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {advantage.title}
                          </h2>
                          <p className="text-red-400 font-semibold text-lg">
                            {advantage.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {advantage.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {advantage.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-200">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() =>
                          setActiveAdvantage(
                            activeAdvantage === advantage.id
                              ? null
                              : advantage.id
                          )
                        }
                        className={`bg-gradient-to-r ${getColorClasses(
                          advantage.color
                        )} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                      >
                        {t.learnMore}
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative">
                        <img
                          src={advantage.image}
                          alt={advantage.title}
                          className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute -top-4 -right-4 card rounded-full p-4 shadow-lg">
                          <div className="text-center">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${getColorClasses(
                                advantage.color
                              )} bg-clip-text text-transparent`}
                            >
                              {advantage.stats.number}
                            </div>
                            <div className="text-gray-300 text-xs font-medium">
                              {advantage.stats.label}
                            </div>
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