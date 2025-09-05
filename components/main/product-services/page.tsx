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
    headerTitle1: 'Produk &',
    headerTitle2: 'Layanan',
    headerSubtitle:
      'Lima keunggulan utama yang menjadikan Asian Grocery pilihan #1 untuk kebutuhan kuliner Asia di Polandia.',
    location: 'Mława, Polandia',
    advantages: [
      {
        title: 'Asian Grocery Terlengkap',
        subtitle: 'One-Stop Shopping Experience',
        description:
          'Menyediakan lebih dari 2000+ produk Asia authentic dari Indonesia, Thailand, Korea, Jepang, dan Vietnam. Dari bumbu dapur hingga snack favorit, semua tersedia di satu tempat.',
        features: [
          'Bumbu dapur Asia (Indonesia, Thailand, Vietnam, Korea, Jepang)',
          'Produk instan & kebutuhan pokok (mie instan, saus, kecap, sambal)',
          'Snack Asia populer dan jajanan khas Indonesia',
        ],
        statsLabel: 'Asian Products',
        icon: '🏪',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        number: '2000+',
      },
      {
        title: 'Indonesian Food',
        subtitle: 'Obat kangen masakan emak !!!',
        description:
          'Nikmati kelezatan masakan Nusantara yang autentik di Polandia. Dari rendang yang kaya rempah, mie instan favorit, hingga cendol yang memanjakan lidah— semua dihadirkan dengan autentik seperti di tanah air. Restoran kami bukan sekadar makanan, tapi juga menghadirkan kembali kenangan dan kehangatan rumah.',
        features: [
          'Restoran khas Indonesia di Mława, Polandia',
          'Makanan beku & hidangan siap saji Nusantara yang praktis',
          'Layanan katering untuk komunitas, perusahaan, hingga acara budaya',
        ],
        statsLabel: 'Indonesian Products',
        icon: '🇮🇩',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
        number: '500+',
      },
      {
        title: 'Distribusi & Pemasaran',
        subtitle: 'Best Value for Money Guarantee',
        description:
          'Komitmen memberikan harga terbaik tanpa mengorbankan kualitas. Sistem supply chain efisien memungkinkan kami menawarkan harga kompetitif untuk produk premium.',
        features: [
          'Supplier untuk toko Asia & supermarket lokal di Polandia',
          'Penjualan retail & online',
          'Promosi produk melalui festival kuliner & event komunitas',
        ],
        statsLabel: 'Average Savings',
        icon: '💰',
        color: 'green',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
        number: '25%',
      },
    ],
    faqCategories: ['all', 'Keunggulan', 'Kualitas', 'Harga', 'Komunitas', 'Bisnis'],
    faqs: [
      {
        question: 'Apa yang membuat Asian Grocery berbeda dari toko Asia lainnya?',
        answer:
          'Fokus pada kualitas dan keaslian, terutama untuk produk Indonesia. Dengan 2000+ produk dan dukungan komunitas yang kuat, kami bukan hanya toko, tetapi ekosistem lengkap di Polandia.',
        category: 'Keunggulan',
      },
      {
        question: 'Bagaimana cara memastikan produk Indonesia yang dijual authentic?',
        answer:
          'Impor langsung dari distributor resmi dan quality control yang ketat. Setiap produk melalui tasting test dan approval komunitas Indonesia. Garansi authentic atau uang kembali.',
        category: 'Kualitas',
      },
      {
        question: 'Apakah harga di Asian Grocery kompetitif?',
        answer:
          'Price match guarantee dan rata-rata 25% lebih murah. Member program hingga 15% diskon. Pembelian besar dapat harga grosir.',
        category: 'Harga',
      },
      {
        question: 'Bagaimana cara bergabung dengan komunitas Asian Grocery?',
        answer:
          'Daftar member gratis, gabung Facebook group 5000+, follow Instagram, dan hadir di community gathering bulanan.',
        category: 'Komunitas',
      },
      {
        question: 'Apakah melayani wholesale/grosir?',
        answer:
          'Ya. Supplier utama untuk 50+ restoran/toko Asia. Minimum order 1000 PLN, harga grosir khusus, credit terms, dan account manager.',
        category: 'Bisnis',
      },
    ],
    testimonials: [
      {
        name: 'Sari Wijaya',
        role: 'Community Leader',
        company: 'Komunitas Indonesia Warszawa',
        content:
          'Asian Grocery adalah lifesaver bagi kami yang rindu makanan Indonesia. Produknya autentik dan harganya wajar. Timnya juga support event komunitas.',
        rating: 5.0,
        category: 'Community',
      },
      {
        name: 'Anna Kowalski',
        role: 'Food Blogger',
        company: 'Warsaw Food Scene',
        content:
          'Sebagai pecinta kuliner Asia, Asian Grocery adalah tempat favorit. Pilihan produk autentik dan layanan sangat membantu. Highly recommended!',
        rating: 4.9,
        category: 'Local Customer',
      },
      {
        name: 'Chef Budi Santoso',
        role: 'Executive Chef',
        company: 'Nusantara Restaurant',
        content:
          'Sebagai chef, saya bergantung pada bahan berkualitas dari Asian Grocery. Selalu konsisten dan pengiriman tepat waktu.',
        rating: 5.0,
        category: 'Business Partner',
      },
      {
        name: 'Maria Santos',
        role: 'Expat',
        company: 'Filipino Community',
        content:
          'Tinggal di Polandia, mencari bahan Asia itu sulit—hingga menemukan Asian Grocery. Semua ada!',
        rating: 4.8,
        category: 'Community',
      },
    ],
    ctaTitle: 'Rasakan Keunggulan Kami Sekarang',
    ctaDesc:
      'Bergabunglah dengan ribuan customer yang telah merasakan excellence of Asian Grocery experience',
    ctaShop: '🛒 Mulai Belanja Sekarang',
    ctaContact: '📞 Hubungi Kami',
  },
  en: {
    headerTitle1: 'Products &',
    headerTitle2: 'Services',
    headerSubtitle:
      'Five key advantages that make Asian Grocery the #1 choice for Asian culinary needs in Poland.',
    location: 'Mława, Poland',
    advantages: [
      {
        title: 'Complete Asian Grocery',
        subtitle: 'One-Stop Shopping Experience',
        description:
          'Offering 2000+ authentic Asian products from Indonesia, Thailand, Korea, Japan, and Vietnam. From pantry spices to favorite snacks—all in one place.',
        features: [
          'Asian pantry spices (Indonesia, Thailand, Vietnam, Korea, Japan)',
          'Instant products & staples (instant noodles, sauces, soy sauce, chili)',
          'Popular Asian snacks and Indonesian specialties',
        ],
        statsLabel: 'Asian Products',
        icon: '🏪',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        number: '2000+',
      },
      {
        title: 'Indonesian Food',
        subtitle: "Cures homesickness for mom's cooking!!!",
        description:
          'Enjoy authentic Indonesian cuisine in Poland—from rich rendang and favorite instant noodles to refreshing cendol—served just like back home. More than food, it brings back warmth and memories.',
        features: [
          'Authentic Indonesian restaurant in Mława, Poland',
          'Practical frozen foods and ready-to-eat Nusantara dishes',
          'Catering for communities, companies, and cultural events',
        ],
        statsLabel: 'Indonesian Products',
        icon: '🇮🇩',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
        number: '500+',
      },
      {
        title: 'Distribution & Marketing',
        subtitle: 'Best Value for Money Guarantee',
        description:
          'Committed to the best prices without compromising quality. Efficient supply chain enables competitive pricing for premium products.',
        features: [
          'Supplier for Asian stores and local supermarkets in Poland',
          'Retail and online sales',
          'Product promotions via food festivals and community events',
        ],
        statsLabel: 'Average Savings',
        icon: '💰',
        color: 'green',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
        number: '25%',
      },
    ],
    faqCategories: ['all', 'Advantages', 'Quality', 'Price', 'Community', 'Business'],
    faqs: [
      {
        question: 'What makes Asian Grocery different from other Asian stores?',
        answer:
          'Strong focus on quality and authenticity, especially Indonesian products. 2000+ items, strong community engagement, and a cultural-bridge mission make us a complete ecosystem in Poland.',
        category: 'Advantages',
      },
      {
        question: 'How do you ensure Indonesian products are authentic?',
        answer:
          'Direct import from official distributors with strict quality control. Tasting tests and approvals by the Indonesian community. Authenticity guaranteed or money back.',
        category: 'Quality',
      },
      {
        question: 'Are your prices competitive?',
        answer:
          'Price match guarantee and on average 25% savings. Member program up to 15% extra discounts; wholesale pricing for bulk purchases.',
        category: 'Price',
      },
      {
        question: 'How can I join the Asian Grocery community?',
        answer:
          'Sign up for free membership in-store or online, join our 5000+ member Facebook group, follow Instagram, and attend monthly gatherings.',
        category: 'Community',
      },
      {
        question: 'Do you serve wholesale?',
        answer:
          'Yes. We are a primary supplier for 50+ restaurants and Asian stores. Minimum order 1000 PLN, special wholesale pricing, credit terms, and a dedicated account manager.',
        category: 'Business',
      },
    ],
    testimonials: [
      {
        name: 'Sari Wijaya',
        role: 'Community Leader',
        company: 'Indonesian Community Warsaw',
        content:
          'Asian Grocery is a lifesaver for those missing Indonesian food. Authentic products, fair prices, and a team that supports community events.',
        rating: 5.0,
        category: 'Community',
      },
      {
        name: 'Anna Kowalski',
        role: 'Food Blogger',
        company: 'Warsaw Food Scene',
        content:
          'As an Asian cuisine lover, Asian Grocery is my go-to. Huge selection of authentic products and very helpful service. Highly recommended!',
        rating: 4.9,
        category: 'Local Customer',
      },
      {
        name: 'Chef Budi Santoso',
        role: 'Executive Chef',
        company: 'Nusantara Restaurant',
        content:
          'As a chef, I rely on Asian Grocery for quality ingredients. Always consistent and on-time delivery.',
        rating: 5.0,
        category: 'Business Partner',
      },
      {
        name: 'Maria Santos',
        role: 'Expat',
        company: 'Filipino Community',
        content:
          'Living in Poland, finding Asian ingredients was hard until I found Asian Grocery. They have everything I need!',
        rating: 4.8,
        category: 'Community',
      },
    ],
    ctaTitle: 'Experience Our Advantages Today',
    ctaDesc:
      'Join thousands of customers who already enjoy the Asian Grocery experience',
    ctaShop: '🛒 Start Shopping Now',
    ctaContact: '📞 Contact Us',
  },
  pl: {
    headerTitle1: 'Produkty i',
    headerTitle2: 'Usługi',
    headerSubtitle:
      'Pięć kluczowych atutów, które sprawiają, że Asian Grocery to wybór nr 1 w Polsce.',
    location: 'Mława, Polska',
    advantages: [
      {
        title: 'Kompletny Sklep Azjatycki',
        subtitle: 'One-Stop Shopping Experience',
        description:
          'Ponad 2000 autentycznych produktów z Indonezji, Tajlandii, Korei, Japonii i Wietnamu. Od przypraw po ulubione przekąski — wszystko w jednym miejscu.',
        features: [
          'Przyprawy kuchni azjatyckiej (Indonezja, Tajlandia, Wietnam, Korea, Japonia)',
          'Produkty instant i podstawowe (zupki, sosy, sos sojowy, chili)',
          'Popularne azjatyckie przekąski i indonezyjskie specjały',
        ],
        statsLabel: 'Produkty Azjatyckie',
        icon: '🏪',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
        number: '2000+',
      },
      {
        title: 'Kuchnia Indonezyjska',
        subtitle: 'Lek na tęsknotę za domową kuchnią!',
        description:
          'Autentyczne dania indonezyjskie w Polsce — od aromatycznego rendangu i ulubionych zupek po orzeźwiający cendol — jak w domu. Nie tylko jedzenie, ale i wspomnienia oraz ciepło.',
        features: [
          'Autentyczna restauracja indonezyjska w Mławie',
          'Praktyczne mrożonki i dania gotowe Nusantary',
          'Catering dla społeczności, firm i wydarzeń kulturalnych',
        ],
        statsLabel: 'Produkty Indonezyjskie',
        icon: '🇮🇩',
        color: 'red',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
        number: '500+',
      },
      {
        title: 'Dystrybucja i Marketing',
        subtitle: 'Gwarancja Najlepszej Wartości',
        description:
          'Zapewniamy najlepsze ceny bez kompromisów jakościowych. Wydajny łańcuch dostaw pozwala na konkurencyjne ceny produktów premium.',
        features: [
          'Dostawca dla sklepów azjatyckich i lokalnych marketów w Polsce',
          'Sprzedaż detaliczna i online',
          'Promocja produktów przez festiwale kulinarne i wydarzenia społeczności',
        ],
        statsLabel: 'Średnie Oszczędności',
        icon: '💰',
        color: 'green',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
        number: '25%',
      },
    ],
    faqCategories: ['all', 'Zalety', 'Jakość', 'Cena', 'Społeczność', 'Biznes'],
    faqs: [
      {
        question: 'Czym Asian Grocery różni się od innych sklepów azjatyckich?',
        answer:
          'Silny nacisk na jakość i autentyczność, szczególnie produktów indonezyjskich. 2000+ pozycji, zaangażowanie społeczności i misja kulturowa czynią nas pełnym ekosystemem w Polsce.',
        category: 'Zalety',
      },
      {
        question: 'Jak zapewniacie autentyczność produktów indonezyjskich?',
        answer:
          'Bezpośredni import od oficjalnych dystrybutorów oraz rygorystyczna kontrola jakości. Testy smakowe i akceptacja społeczności. Gwarancja autentyczności lub zwrot pieniędzy.',
        category: 'Jakość',
      },
      {
        question: 'Czy ceny są konkurencyjne?',
        answer:
          'Gwarancja dopasowania ceny i średnio 25% oszczędności. Program członkowski z dodatkowymi rabatami do 15%; ceny hurtowe przy większych zamówieniach.',
        category: 'Cena',
      },
      {
        question: 'Jak dołączyć do społeczności Asian Grocery?',
        answer:
          'Zarejestruj darmowe członkostwo w sklepie lub online, dołącz do grupy FB 5000+, obserwuj Instagram i bierz udział w comiesięcznych spotkaniach.',
        category: 'Społeczność',
      },
      {
        question: 'Czy obsługujecie hurt?',
        answer:
          'Tak. Główny dostawca dla 50+ restauracji i sklepów. Minimum 1000 PLN, specjalne ceny hurtowe, warunki kredytowe i dedykowany opiekun.',
        category: 'Biznes',
      },
    ],
    testimonials: [
      {
        name: 'Sari Wijaya',
        role: 'Lider Społeczności',
        company: 'Indonezyjska Społeczność w Warszawie',
        content:
          'Asian Grocery to ratunek dla tęskniących za indonezyjskim jedzeniem. Autentyczne produkty, rozsądne ceny i wsparcie naszych wydarzeń.',
        rating: 5.0,
        category: 'Społeczność',
      },
      {
        name: 'Anna Kowalski',
        role: 'Blogerka Kulinarna',
        company: 'Warsaw Food Scene',
        content:
          'Jako miłośniczka kuchni azjatyckiej, to moje ulubione miejsce. Ogromny wybór autentycznych produktów i bardzo pomocna obsługa. Polecam!',
        rating: 4.9,
        category: 'Klient Lokalny',
      },
      {
        name: 'Chef Budi Santoso',
        role: 'Szef Kuchni',
        company: 'Nusantara Restaurant',
        content:
          'Jako szef kuchni polegam na Asian Grocery w kwestii jakości składników. Zawsze konsekwentni i punktualni.',
        rating: 5.0,
        category: 'Partner Biznesowy',
      },
      {
        name: 'Maria Santos',
        role: 'Ekspat',
        company: 'Filipińska Społeczność',
        content:
          'Mieszkając w Polsce, trudno było znaleźć składniki azjatyckie, dopóki nie znalazłam Asian Grocery. Mają wszystko, czego potrzebuję!',
        rating: 4.8,
        category: 'Społeczność',
      },
    ],
    ctaTitle: 'Poczuj Nasze Atuty Już Dziś',
    ctaDesc:
      'Dołącz do tysięcy klientów korzystających z doświadczenia Asian Grocery',
    ctaShop: '🛒 Zacznij Zakupy Teraz',
    ctaContact: '📞 Skontaktuj się z Nami',
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


export default function AdvantagesPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [language, setLanguage] = useState<Language>('id');

  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
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
        <div className="w-20 h-20 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <Crown className="text-white" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.headerTitle1}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              {" "}{t.headerTitle2}
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t.headerSubtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-red-400">
            <Award size={20} />
            <span className="font-medium">{t.location}</span>
          </div>
        </div>

        {/* Brand Logos Section */}
        <div className="mb-20">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'id' ? 'Brand Terpercaya' : language === 'en' ? 'Trusted Brands' : 'Zaufane Marki'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {language === 'id' 
                ? 'Produk berkualitas dari brand-brand terkemuka Asia yang telah dipercaya jutaan konsumen di seluruh dunia' 
                : language === 'en' 
                ? 'Quality products from leading Asian brands trusted by millions of consumers worldwide'
                : 'Produkty wysokiej jakości od wiodących marek azjatyckich zaufanych przez miliony konsumentów na całym świecie'
              }
            </p>
          </div>

          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            {[
              { name: 'Indofood', image: '/images/product-services/indofood.jpeg' },
              { name: 'Indomie', image: '/images/product-services/indomie.jpeg' },
              { name: 'Bamboe', image: '/images/product-services/bamboe.jpeg' },
              { name: 'Aroy-D', image: '/images/product-services/aroy.jpeg' },
              { name: 'TRS', image: '/images/product-services/trs.jpeg' },
              { name: 'Long Life', image: '/images/product-services/llb.jpeg' },
              { name: 'ABC', image: '/images/product-services/abc.jpeg' },
              { name: 'Cock Brand', image: '/images/product-services/cock.jpeg' },
            ].map((brand, idx) => (
              <div 
                key={brand.name}
                className="group cursor-pointer"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="card rounded-3xl p-8 md:p-10 h-48 md:h-56 flex items-center justify-center md:hover:shadow-2xl md:hover:shadow-red-500/30 transition-all duration-500 md:hover:-translate-y-3 md:group-hover:scale-105 border-2 border-transparent md:group-hover:border-red-400/20">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-20 md:max-h-24 max-w-full object-contain filter  md:group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <p className="text-center text-gray-300 md:text-gray-400 text-base md:text-lg mt-4 md:group-hover:text-white transition-colors duration-300 font-medium">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
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