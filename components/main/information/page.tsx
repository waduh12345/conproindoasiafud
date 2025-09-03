"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingCart, Utensils, Truck, Star,
  ChevronDown, ChevronRight, MapPin, User, Tag,
  Download, Eye, Clock, CheckCircle, AlertCircle,
  Play, Heart, Share2, Filter, ArrowRight, Package
} from 'lucide-react';

// Interface for Product
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  origin: string;
  inStock: boolean;
  rating: number;
  tags: string[];
}

// Interface for Service
interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
  location?: string;
}

// Interface for FAQ Item
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Sample products data
const products: Product[] = [
  {
    id: 1,
    name: "Rendang Instant Bumbu",
    description: "Bumbu rendang authentic dari Padang, siap pakai untuk masakan rumahan yang lezat dan praktis.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600",
    category: "Bumbu Dapur",
    price: "25 PLN",
    origin: "Indonesia",
    inStock: true,
    rating: 4.8,
    tags: ["rendang", "bumbu", "instant", "halal"]
  },
  {
    id: 2,
    name: "Mie Indomie Goreng Special",
    description: "Mie instan goreng terpopuler dari Indonesia dengan rasa yang authentic dan menggugah selera.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    category: "Produk Instan",
    price: "3.50 PLN",
    origin: "Indonesia",
    inStock: true,
    rating: 4.9,
    tags: ["mie", "indomie", "instant", "goreng"]
  },
  {
    id: 3,
    name: "Kimchi Premium",
    description: "Kimchi segar berkualitas tinggi dengan rasa asam pedas yang authentic dari Korea Selatan.",
    image: "https://images.unsplash.com/photo-1582107947319-cf2a4bc5b7eb?w=600",
    category: "Produk Segar",
    price: "18 PLN",
    origin: "Korea",
    inStock: true,
    rating: 4.7,
    tags: ["kimchi", "korea", "fermented", "spicy"]
  },
  {
    id: 4,
    name: "Thai Green Curry Paste",
    description: "Pasta kari hijau Thailand authentic untuk membuat kari Thailand yang pedas dan aromatik.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600",
    category: "Bumbu Dapur",
    price: "12 PLN",
    origin: "Thailand",
    inStock: false,
    rating: 4.6,
    tags: ["thai", "curry", "paste", "spicy"]
  },
  {
    id: 5,
    name: "Pocky Chocolate Sticks",
    description: "Snack stick cokelat populer dari Jepang, perfect untuk cemilan atau hadiah.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    category: "Snack Asia",
    price: "8 PLN",
    origin: "Jepang",
    inStock: true,
    rating: 4.5,
    tags: ["pocky", "chocolate", "snack", "japan"]
  },
  {
    id: 6,
    name: "Kerupuk Udang",
    description: "Kerupuk udang crispy dan gurih, perfect sebagai pelengkap makanan Indonesia.",
    image: "https://images.unsplash.com/photo-1601314002957-84c44dc92ce6?w=600",
    category: "Snack Asia",
    price: "15 PLN",
    origin: "Indonesia",
    inStock: true,
    rating: 4.4,
    tags: ["kerupuk", "udang", "crispy", "indonesia"]
  }
];

// Sample services data
const services: Service[] = [
  {
    id: 1,
    title: "Restoran Indonesia Authentic",
    description: "Restoran dengan menu lengkap masakan Indonesia authentic di jantung kota Mława",
    icon: "🍽️",
    category: "Indonesian Food",
    location: "Mława, Polandia",
    features: [
      "Menu lengkap masakan Nusantara",
      "Chef berpengalaman dari Indonesia",
      "Suasana traditional Indonesia",
      "Halal certified",
      "Catering untuk event khusus"
    ]
  },
  {
    id: 2,
    title: "Frozen Food Indonesia",
    description: "Berbagai pilihan frozen food khas Indonesia siap saji untuk kemudahan memasak di rumah",
    icon: "🧊",
    category: "Indonesian Food", 
    features: [
      "Sate ayam/kambing frozen",
      "Lumpia dan risoles frozen",
      "Rendang dan gudeg siap saji",
      "Bakso dan pentol frozen",
      "Delivery ke seluruh Polandia"
    ]
  },
  {
    id: 3,
    title: "Catering Event & Komunitas",
    description: "Layanan catering untuk event perusahaan, komunitas Indonesia, dan acara budaya",
    icon: "🎉",
    category: "Indonesian Food",
    features: [
      "Menu buffet Indonesia lengkap",
      "Paket untuk 50-500 orang",
      "Dekorasi traditional Indonesia",
      "Live cooking station",
      "Event planning consultation"
    ]
  },
  {
    id: 4,
    title: "Supplier Toko Asia",
    description: "Distributor wholesale untuk toko Asia dan supermarket lokal di seluruh Polandia",
    icon: "🏪",
    category: "Distribusi & Pemasaran",
    features: [
      "Produk berkualitas dengan harga competitive",
      "Minimum order fleksibel", 
      "Regular delivery schedule",
      "Marketing support untuk retailer",
      "Product training untuk staff"
    ]
  },
  {
    id: 5,
    title: "Penjualan Online & Retail",
    description: "Platform online dan toko fisik untuk kemudahan berbelanja produk Asia favorit Anda",
    icon: "🛒",
    category: "Distribusi & Pemasaran",
    features: [
      "Website e-commerce user-friendly",
      "Mobile app untuk Android & iOS",
      "Same day delivery untuk area lokal",
      "Loyalty program dengan rewards",
      "Customer service 24/7"
    ]
  },
  {
    id: 6,
    title: "Festival Kuliner & Event",
    description: "Partisipasi dan penyelenggaraan festival kuliner untuk promosi budaya Asia",
    icon: "🎪",
    category: "Distribusi & Pemasaran",
    features: [
      "Food truck untuk festival outdoor",
      "Booth setup untuk trade fair",
      "Cooking demonstration",
      "Cultural performance collaboration",
      "Brand activation campaign"
    ]
  }
];

// Sample FAQ data
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Apakah semua produk dijamin halal?",
    answer: "Ya, kami memastikan semua produk makanan yang kami jual telah bersertifikat halal atau berasal dari supplier terpercaya dengan jaminan halal. Untuk produk dari Indonesia, sebagian besar sudah bersertifikat MUI.",
    category: "Produk"
  },
  {
    id: 2,
    question: "Bagaimana cara memesan catering untuk event?",
    answer: "Untuk pemesanan catering, silakan hubungi kami minimal 1 minggu sebelum acara. Kami akan membantu merencanakan menu sesuai budget dan jumlah tamu. Konsultasi menu dan site visit bisa dilakukan tanpa biaya tambahan.",
    category: "Layanan"
  },
  {
    id: 3,
    question: "Apakah tersedia layanan delivery?",
    answer: "Ya, kami menyediakan layanan delivery untuk area Mława dan sekitarnya dengan minimal pembelian 50 PLN. Untuk area lain di Polandia, kami bekerja sama dengan kurir terpercaya dengan biaya sesuai jarak.",
    category: "Pengiriman"
  },
  {
    id: 4,
    question: "Bagaimana cara menjadi supplier/distributor?",
    answer: "Untuk menjadi bagian dari jaringan distributor kami, silakan ajukan aplikasi melalui email atau datang langsung ke toko. Kami akan melakukan evaluasi lokasi, kapasitas, dan komitmen bisnis sebelum menjalin kerjasama.",
    category: "Partnership"
  },
  {
    id: 5,
    question: "Apakah ada program loyalty atau member?",
    answer: "Ya, kami memiliki program loyalty member dengan berbagai keuntungan seperti diskon khusus, poin reward, early access untuk produk baru, dan undangan ke event eksklusif. Daftar gratis di toko atau melalui aplikasi mobile kami.",
    category: "Member"
  }
];

export default function ProductsServicesPage() {
  const [activeSection, setActiveSection] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'products', label: 'Produk Kami', icon: Package },
    { id: 'services', label: 'Layanan', icon: Utensils },
    { id: 'faq', label: 'FAQ', icon: AlertCircle }
  ];

  const productCategories = ['all', 'Bumbu Dapur', 'Produk Instan', 'Snack Asia', 'Produk Segar'];
  const serviceCategories = ['all', 'Indonesian Food', 'Distribusi & Pemasaran'];
  const faqCategories = ['all', 'Produk', 'Layanan', 'Pengiriman', 'Partnership', 'Member'];

  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const filteredServices = services.filter(service => {
    const matchSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const filteredFAQs = faqItems.filter(faq => {
    const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-2xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
        <div className="w-20 h-20 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <ShoppingCart className="text-red-600" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            Asian
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              {" "}Grocery
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Toko Asia terlengkap di Polandia. Bumbu dapur authentic, makanan instant, 
            snack favorit, dan layanan kuliner Indonesia terbaik.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-red-600">
            <MapPin size={20} />
            <span className="font-medium">Mława, Polandia</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : `text-gray-600 hover:text-red-600 hover:bg-red-50`
                  }`}
                >
                  <section.icon size={18} />
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {(activeSection === 'products' || activeSection === 'services' || activeSection === 'faq') && (
          <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder={
                      activeSection === 'products' ? 'Cari produk...' : 
                      activeSection === 'services' ? 'Cari layanan...' : 'Cari pertanyaan...'
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                  >
                    {(activeSection === 'products' ? productCategories : 
                      activeSection === 'services' ? serviceCategories : faqCategories).map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'Semua Kategori' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* Products Section */}
          {activeSection === 'products' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Pilihan Kami</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Koleksi lengkap produk Asia berkualitas tinggi dari berbagai negara
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <Package className="mx-auto text-gray-400 mb-4" size={64} />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Produk tidak ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, idx) => (
                    <div
                      key={product.id}
                      className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group ${
                        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + idx * 100}ms` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {product.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.inStock 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {product.inStock ? 'In Stock' : 'Habis'}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                            {product.origin}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                          {product.name}
                        </h3>

                        <p className="text-gray-700 mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span key={tagIdx} className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-red-600">
                            {product.price}
                          </div>
                          
                          <button 
                            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                              product.inStock
                                ? 'bg-red-600 hover:bg-red-700 text-white'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                          >
                            <ShoppingCart size={16} className="inline mr-2" />
                            {product.inStock ? 'Add to Cart' : 'Sold Out'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Services Section */}
          {activeSection === 'services' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Berbagai layanan kuliner dan distribusi untuk memenuhi kebutuhan komunitas Asia
                </p>
              </div>

              {filteredServices.length === 0 ? (
                <div className="text-center py-16">
                  <Utensils className="mx-auto text-gray-400 mb-4" size={64} />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Layanan tidak ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredServices.map((service, idx) => (
                    <div 
                      key={service.id}
                      className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + idx * 100}ms` }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {service.category}
                            </span>
                            {service.location && (
                              <span className="text-gray-600 text-sm flex items-center gap-1">
                                <MapPin size={12} />
                                {service.location}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 mb-4">{service.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                        Pelajari Lebih Lanjut
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* FAQ */}
          {activeSection === 'faq' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Temukan jawaban atas pertanyaan yang sering diajukan tentang produk dan layanan kami
                </p>
              </div>

              {filteredFAQs.length === 0 ? (
                <div className="text-center py-16">
                  <AlertCircle className="mx-auto text-gray-400 mb-4" size={64} />
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Pertanyaan tidak ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kata kunci pencarian atau kategori</p>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto space-y-4">
                  {filteredFAQs.map((faq, idx) => (
                    <div 
                      key={faq.id}
                      className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${
                        isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                      }`}
                      style={{ transitionDelay: `${800 + idx * 50}ms` }}
                    >
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                        className="w-full px-8 py-6 flex items-center justify-between hover:bg-red-50 transition-colors text-left"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            expandedFAQ === faq.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedFAQ === faq.id && (
                        <div className="px-8 pb-6">
                          <div className="ml-12 bg-gray-50 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="text-center mt-12">
                <p className="text-gray-700 mb-4">Masih ada pertanyaan lain?</p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                  Hubungi Customer Service
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Siap Berbelanja?</h2>
            <p className="text-xl mb-8 text-red-100">
              Kunjungi toko kami atau pesan online untuk pengalaman belanja Asia terbaik di Polandia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold hover:bg-red-50 transition-all">
                📍 Kunjungi Toko
              </button>
              <button className="bg-red-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-800 transition-all">
                🛒 Belanja Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}