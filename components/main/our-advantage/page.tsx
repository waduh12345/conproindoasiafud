"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, Star, Shield, TrendingDown, Users, Globe,
  ChevronDown, ChevronRight, MapPin, Heart, Award,
  Download, Eye, Clock, CheckCircle, AlertCircle,
  Play, ShoppingBag, Share2, Filter, ArrowRight, Package,
  Utensils, Target, Handshake, Gift, Coffee, Crown
} from 'lucide-react';

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

// Sample advantages data
const advantages: Advantage[] = [
  {
    id: 1,
    title: "Asian Grocery Terlengkap",
    subtitle: "One-Stop Shopping Experience",
    description: "Menyediakan lebih dari 2000+ produk Asia authentic dari Indonesia, Thailand, Korea, Jepang, dan Vietnam. Dari bumbu dapur hingga snack favorit, semua tersedia di satu tempat.",
    icon: "🏪",
    color: "red",
    features: [
      "2000+ produk dari 10+ negara Asia",
      "Weekly restock dengan produk fresh",
      "Import langsung dari distributor resmi",
      "Kategori lengkap: bumbu, instant, frozen, snack",
      "Produk halal bersertifikat",
      "Exclusive brands tidak tersedia di tempat lain"
    ],
    stats: {
      number: "2000+",
      label: "Asian Products"
    },
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600"
  },
  {
    id: 2,
    title: "Makanan Indonesia Authentic",
    subtitle: "Taste of Home, Rasa Kampung Halaman",
    description: "Spesialisasi dalam makanan dan bumbu Indonesia authentic. Dari rendang instant hingga kerupuk tradisional, kami memastikan rasa yang sama persis seperti di Indonesia.",
    icon: "🇮🇩",
    color: "red",
    features: [
      "Bumbu rendang, gudeg, rawon authentic",
      "Mie instant semua brand terkenal Indonesia",
      "Kerupuk dan cemilan tradisional",
      "Sambal dan saus asli Indonesia",
      "Frozen food ready-to-eat Indonesian",
      "Import direct dari produsen terpercaya"
    ],
    stats: {
      number: "500+",
      label: "Indonesian Products"
    },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600"
  },
  {
    id: 3,
    title: "Harga Bersaing & Kualitas Premium",
    subtitle: "Best Value for Money Guarantee",
    description: "Komitmen memberikan harga terbaik tanpa mengorbankan kualitas. Sistem supply chain efisien memungkinkan kami menawarkan harga competitive untuk produk premium.",
    icon: "💰",
    color: "green",
    features: [
      "Price match guarantee dengan kompetitor",
      "Bulk discount untuk pembelian grosir",
      "Member loyalty program dengan cashback",
      "Quality control ketat sebelum display",
      "Garansi kepuasan atau uang kembali",
      "Weekly promotion dan special offers"
    ],
    stats: {
      number: "25%",
      label: "Average Savings"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
  },
  {
    id: 4,
    title: "Connected Community Hub",
    subtitle: "Pusat Komunitas Asia di Polandia",
    description: "Lebih dari sekedar toko, kami adalah meeting point komunitas Asia. Menghubungkan diaspora Asia dengan local food enthusiasts melalui berbagai aktivitas dan event.",
    icon: "🤝",
    color: "blue",
    features: [
      "Regular community gathering & potluck",
      "Cooking workshop dengan chef Indonesia",
      "Cultural festival collaboration",
      "Online community dengan 5000+ members",
      "Event catering untuk komunitas",
      "Partnership dengan organisasi Asia"
    ],
    stats: {
      number: "5000+",
      label: "Community Members"
    },
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600"
  },
  {
    id: 5,
    title: "Misi Budaya & Bisnis",
    subtitle: "Cultural Bridge Through Food",
    description: "Misi ganda sebagai bisnis profitable sekaligus cultural ambassador. Memperkenalkan kekayaan kuliner Asia kepada masyarakat Polandia sambil mempertahankan authenticity.",
    icon: "🌏",
    color: "purple",
    features: [
      "Educational content tentang Asian cuisine",
      "Recipe sharing dan cooking tips",
      "Cultural storytelling behind setiap produk",
      "Kolaborasi dengan chef dan food blogger",
      "Sponsorship event budaya internasional",
      "Media coverage untuk promosi Asian food"
    ],
    stats: {
      number: "50+",
      label: "Cultural Events"
    },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600"
  }
];

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
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-2xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
        <div className="w-20 h-20 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <Crown className="text-red-600" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Keunggulan
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {" "}Kami
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Lima keunggulan utama yang menjadikan Asian Grocery pilihan #1 
            untuk kebutuhan kuliner Asia di Polandia.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-red-600">
            <Award size={20} />
            <span className="font-medium">Excellence in Asian Grocery Since 2019</span>
          </div>
        </div>

        {/* Key Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {advantages.map((advantage, idx) => (
            <div key={advantage.id} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-2">{advantage.icon}</div>
              <div className="text-2xl font-bold text-red-600 mb-1">{advantage.stats.number}</div>
              <div className="text-gray-700 font-medium text-sm">{advantage.stats.label}</div>
            </div>
          ))}
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
                <div className="bg-white rounded-3xl p-8 md:p-12">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{advantage.icon}</div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            {advantage.title}
                          </h2>
                          <p className="text-red-600 font-semibold text-lg">{advantage.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {advantage.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {advantage.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => setActiveAdvantage(activeAdvantage === advantage.id ? null : advantage.id)}
                        className={`bg-gradient-to-r ${getColorClasses(advantage.color)} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                      >
                        Pelajari Lebih Detail
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <img 
                          src={advantage.image}
                          alt={advantage.title}
                          className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                          <div className="text-center">
                            <div className={`text-2xl font-bold bg-gradient-to-r ${getColorClasses(advantage.color)} bg-clip-text text-transparent`}>
                              {advantage.stats.number}
                            </div>
                            <div className="text-gray-600 text-xs font-medium">{advantage.stats.label}</div>
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
            <h2 className="text-3xl font-bold mb-4">Rasakan Keunggulan Kami Sekarang</h2>
            <p className="text-xl mb-8 text-red-100">
              Bergabunglah dengan ribuan customer yang telah merasakan 
              excellence of Asian Grocery experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 transition-all">
                🛒 Mulai Belanja Sekarang
              </button>
              <button className="bg-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-800 transition-all">
                📞 Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}