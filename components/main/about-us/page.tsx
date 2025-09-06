"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, Award, Shield, Star, Phone, Mail, 
  Calendar, Building, Target, Eye, Heart,
  ChevronRight, CheckCircle, Globe, ShoppingCart,
  Package,
} from 'lucide-react';
// Remove the import since we'll use a string path

// Language type
type Language = 'id' | 'en' | 'pl';

// Translations
const translations = {
  id: {
    // Header
    connectingText: "Menghubungkan Asia ke Polandia",
    aboutUs: "Tentang Kami",
    heroDescription: "Kami adalah perusahaan yang bergerak di bidang pemasaran Asian Grocery serta penjualan makanan khas Indonesia di Polandia, hadir untuk menjembatani kebutuhan komunitas Asia dan masyarakat Polandia yang menggemari produk kuliner Asia.",
    
    // Navigation
    company: "Tentang Kami",
    vision: "Visi & Misi",
    legal: "Sertifikasi",
    
    // Stats
    loyalCustomers: "Pelanggan Setia",
    yearsOperating: "Tahun Beroperasi",
    productsAvailable: "Produk Tersedia",
    satisfactionRating: "Rating Kepuasan",
    asianBrands: "Brand Asia",
    halalProducts: "Produk Halal",
    
    // Company Values
    qualityAssured: "Kualitas Terjamin",
    qualityDesc: "Semua produk dipilih langsung dari supplier terpercaya dengan standar kualitas tinggi",
    halalSafe: "Halal & Aman",
    halalDesc: "Produk bersertifikat halal dan memenuhi standar keamanan pangan Uni Eropa",
    community: "Komunitas",
    communityDesc: "Membangun jembatan budaya antara Asia dan Polandia melalui kuliner",
    authentic: "Autentik",
    authenticDesc: "Menjaga keaslian rasa dan resep tradisional Asia dalam setiap produk",
    
    // Company Profile
    companyTitle: "Asian Grocery & Indonesian Food",
    companyDesc1: "INDOASIAFOOD dibawah naungan perusahaan MMI CORPORATION SPOKA Z OGRANICZONA ODPOWIEDZIALNOSCIA hadir untuk menjembatani kebutuhan komunitas Asia—khususnya Indonesia—dan masyarakat Polandia yang semakin menggemari produk dan kuliner Asia. Berlokasi strategis di Mława, kami melayani wilayah seluruh Polandia.",
    companyDesc2: "Dengan semangat \"Connecting Asia to Poland\", kami menghadirkan beragam produk berkualitas, halal, dan autentik, mulai dari bahan kebutuhan dapur, snack, hingga hidangan Nusantara yang siap dinikmati.",
    companyDesc3: "Tim kami terdiri dari profesional yang memahami selera komunitas Asia di Polandia, serta berpengalaman dalam menjaga kualitas dan keaslian rasa produk-produk Asia yang kami sediakan.",
    asianProducts: "Produk Asia",
    
    // Vision & Mission
    visionTitle: "Visi",
    missionTitle: "Misi",
    visionText: "Menjadi perusahaan terdepan dalam pemasaran Asian Grocery dan promosi kuliner Indonesia di Polandia serta Eropa Tengah",
    mission1: "Menyediakan produk grocery Asia yang beragam dan terjamin kualitasnya",
    mission2: "Memasarkan makanan khas Indonesia agar semakin dikenal oleh masyarakat Polandia",
    mission3: "Menjadi mitra terpercaya bagi retail, restoran, dan komunitas di Polandia",
    mission4: "Berkontribusi dalam memperkenalkan budaya Asia—khususnya Indonesia—melalui kuliner",
        
    // Certifications
    certTitle: "Sertifikasi & Legalitas",
    certDesc: "Semua sertifikat dan izin usaha kami telah terdaftar resmi sesuai dengan regulasi Uni Eropa dan Polandia",
    euFoodSafety: "Keamanan Pangan UE",
    euFoodDesc: "Standar Keamanan Pangan Uni Eropa",
    halalCert: "Sertifikat Halal",
    halalCertDesc: "Sertifikat Halal untuk Semua Produk",
    businessLicense: "Izin Usaha",
    businessDesc: "Izin Usaha Resmi Republik Polandia",
    importLicense: "Izin Import",
    importDesc: "Izin Import Produk Makanan Asia",
    legalDocs: "Dokumen Legal",
    partnerships: "Kemitraan",
    
    // CTA
    ctaTitle: "Siap Merasakan Cita Rasa Asia?",
    ctaDesc: "Kunjungi toko kami di Mława atau hubungi untuk pemesanan online dan delivery ke seluruh Polandia",
    callNow: "Hubungi Sekarang",
    emailUs: "Email Kami"
  },
  en: {
    // Header
    connectingText: "Connecting Asia to Poland",
    aboutUs: "About Us",
    heroDescription: "We are a company engaged in Asian Grocery marketing and Indonesian food sales in Poland, present to bridge the needs of the Asian community and Polish people who love Asian culinary products.",
    
    // Navigation
    company: "About Us",
    vision: "Vision & Mission",
    legal: "Certifications",
    
    // Stats
    loyalCustomers: "Loyal Customers",
    yearsOperating: "Years Operating",
    productsAvailable: "Products Available",
    satisfactionRating: "Satisfaction Rating",
    asianBrands: "Asian Brands",
    halalProducts: "Halal Products",
    
    // Company Values
    qualityAssured: "Quality Assured",
    qualityDesc: "All products are selected directly from trusted suppliers with high quality standards",
    halalSafe: "Halal & Safe",
    halalDesc: "Halal certified products meeting European Union food safety standards",
    community: "Community",
    communityDesc: "Building cultural bridges between Asia and Poland through cuisine",
    authentic: "Authentic",
    authenticDesc: "Maintaining the authenticity of taste and traditional Asian recipes in every product",
    
    // Company Profile
    companyTitle: "Asian Grocery & Indonesian Food",
    companyDesc1: "Our company is here to bridge the needs of the Asian community—especially Indonesia—and Polish people who increasingly love Asian products and cuisine. Strategically located in Mława, we serve the entire Poland region.",
    companyDesc2: "With the spirit of \"Connecting Asia to Poland\", we present a variety of quality, halal, and authentic products, from kitchen necessities, snacks, to Nusantara dishes ready to be enjoyed.",
    companyDesc3: "Our team consists of professionals who understand the taste of the Asian community in Poland, and are experienced in maintaining the quality and authenticity of the Asian products we provide.",
    asianProducts: "Asian Products",
    
    // Vision & Mission
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText: "To become the leading company in Asian Grocery marketing and Indonesian culinary promotion in Poland and Central Europe",
    mission1: "Providing diverse and quality-assured Asian grocery products",
    mission2: "Marketing Indonesian specialties to be increasingly known by Polish people",
    mission3: "Being a trusted partner for retail, restaurants, and communities in Poland",
    mission4: "Contributing to introducing Asian culture—especially Indonesian—through cuisine",
    
    // Certifications
    certTitle: "Certifications & Legality",
    certDesc: "All our certificates and business permits have been officially registered in accordance with European Union and Polish regulations",
    euFoodSafety: "EU Food Safety",
    euFoodDesc: "European Union Food Safety Standards",
    halalCert: "Halal Certificate",
    halalCertDesc: "Halal Certificate for All Products",
    businessLicense: "Business License",
    businessDesc: "Official Business License Republic of Poland",
    importLicense: "Import License",
    importDesc: "Asian Food Product Import License",
    legalDocs: "Legal Documents",
    partnerships: "Partnerships",
    
    // CTA
    ctaTitle: "Ready to Taste Asian Flavors?",
    ctaDesc: "Visit our store in Mława or contact us for online orders and delivery throughout Poland",
    callNow: "Call Now",
    emailUs: "Email Us"
  },
  pl: {
    // Header
    connectingText: "Łączymy Azję z Polską",
    aboutUs: "O Nas",
    heroDescription: "Jesteśmy firmą zajmującą się marketingiem Asian Grocery oraz sprzedażą indonezyjskiego jedzenia w Polsce, obecni, aby połączyć potrzeby społeczności azjatyckiej i Polaków, którzy kochają azjatyckie produkty kulinarne.",
    
    // Navigation
    company: "O Nas",
    vision: "Wizja i Misja",
    legal: "Certyfikaty",
    
    // Stats
    loyalCustomers: "Lojalni Klienci",
    yearsOperating: "Lat Działalności",
    productsAvailable: "Dostępne Produkty",
    satisfactionRating: "Ocena Satysfakcji",
    asianBrands: "Marki Azjatyckie",
    halalProducts: "Produkty Halal",
    
    // Company Values
    qualityAssured: "Gwarantowana Jakość",
    qualityDesc: "Wszystkie produkty są wybierane bezpośrednio od zaufanych dostawców o wysokich standardach jakości",
    halalSafe: "Halal i Bezpieczne",
    halalDesc: "Certyfikowane produkty halal spełniające standardy bezpieczeństwa żywności Unii Europejskiej",
    community: "Społeczność",
    communityDesc: "Budowanie mostów kulturowych między Azją a Polską poprzez kuchnię",
    authentic: "Autentyczne",
    authenticDesc: "Zachowanie autentyczności smaku i tradycyjnych azjatyckich przepisów w każdym produkcie",
    
    // Company Profile
    companyTitle: "Asian Grocery & Indonesian Food",
    companyDesc1: "Nasza firma jest tutaj, aby połączyć potrzeby społeczności azjatyckiej—szczególnie Indonezji—i Polaków, którzy coraz bardziej kochają azjatyckie produkty i kuchnię. Strategicznie zlokalizowani w Mławie, obsługujemy cały region Polski.",
    companyDesc2: "W duchu \"Connecting Asia to Poland\", prezentujemy różnorodne produkty wysokiej jakości, halal i autentyczne, od artykułów kuchennych, przekąsek, po dania Nusantara gotowe do spożycia.",
    companyDesc3: "Nasz zespół składa się z profesjonalistów, którzy rozumieją gust społeczności azjatyckiej w Polsce i mają doświadczenie w utrzymaniu jakości i autentyczności produktów azjatyckich, które dostarczamy.",
    asianProducts: "Produkty Azjatyckie",
    
    // Vision & Mission
    visionTitle: "Wizja",
    missionTitle: "Misja",
    visionText: "Stać się wiodącą firmą w marketingu Asian Grocery i promocji kuchni indonezyjskiej w Polsce i Europie Środkowej",
    mission1: "Dostarczanie różnorodnych i wysokiej jakości produktów spożywczych azjatyckich",
    mission2: "Marketing indonezyjskich specjałów, aby były coraz bardziej znane przez Polaków",
    mission3: "Bycie zaufanym partnerem dla handlu detalicznego, restauracji i społeczności w Polsce",
    mission4: "Przyczynianie się do wprowadzania kultury azjatyckiej—szczególnie indonezyjskiej—poprzez kuchnię",
    
    
    // Certifications
    certTitle: "Certyfikaty i Legalność",
    certDesc: "Wszystkie nasze certyfikaty i pozwolenia biznesowe zostały oficjalnie zarejestrowane zgodnie z przepisami Unii Europejskiej i Polski",
    euFoodSafety: "Bezpieczeństwo Żywności UE",
    euFoodDesc: "Standardy Bezpieczeństwa Żywności Unii Europejskiej",
    halalCert: "Certyfikat Halal",
    halalCertDesc: "Certyfikat Halal dla Wszystkich Produktów",
    businessLicense: "Licencja Biznesowa",
    businessDesc: "Oficjalna Licencja Biznesowa Rzeczpospolitej Polskiej",
    importLicense: "Licencja Importowa",
    importDesc: "Licencja Importu Produktów Spożywczych Azjatyckich",
    legalDocs: "Dokumenty Prawne",
    partnerships: "Partnerstwa",
    
    // CTA
    ctaTitle: "Gotowy na Azjatyckie Smaki?",
    ctaDesc: "Odwiedź nasz sklep w Mławie lub skontaktuj się z nami w sprawie zamówień online i dostawy w całej Polsce",
    callNow: "Zadzwoń Teraz",
    emailUs: "Napisz do Nas"
  }
};



export default function AboutUsPage() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('company');
  const [language, setLanguage] = useState<Language>('id');

  const t = translations[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sync language with global preference/storage and header events
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = window.localStorage.getItem('preferred-language');
      if (saved === 'en' || saved === 'id' || saved === 'pl') {
        setLanguage(saved as Language);
      }
    } catch {
      // ignore storage errors
    }

    const onLanguageChanged = (e: Event) => {
      const detail = (e as CustomEvent).detail as Language | undefined;
      if (detail === 'en' || detail === 'id' || detail === 'pl') {
        setLanguage(detail);
      }
    };
    window.addEventListener('languageChanged', onLanguageChanged as EventListener);
    return () => window.removeEventListener('languageChanged', onLanguageChanged as EventListener);
  }, []);

  const sections = [
    { id: 'company', label: t.company, icon: Building },
    { id: 'vision', label: t.vision, icon: Target },
    { id: 'legal', label: t.legal, icon: Shield }
  ];

  // Company values data with translations
  const companyValues = [
    {
      icon: Heart,
      title: t.qualityAssured,
      description: t.qualityDesc
    },
    {
      icon: Shield,
      title: t.halalSafe,
      description: t.halalDesc
    },
    {
      icon: Users,
      title: t.community,
      description: t.communityDesc
    },
    {
      icon: Award,
      title: t.authentic,
      description: t.authenticDesc
    }
  ];

  // Achievement stats with translations
  const achievements = [
    { number: "2,500+", label: t.loyalCustomers, icon: Users },
    { number: "4+", label: t.yearsOperating, icon: Calendar },
    { number: "500+", label: t.productsAvailable, icon: Package },
    { number: "4.8/5", label: t.satisfactionRating, icon: Star },
    { number: "50+", label: t.asianBrands, icon: Globe },
    { number: "100%", label: t.halalProducts, icon: Shield }
  ];

  // Business certifications with translations
  const certifications = [
    {
      title: t.euFoodSafety,
      icon: Shield,
      color: "bg-red-600"
    },
    {
      title: t.halalCert,
      icon: Award,
      color: "bg-red-600"
    },
    {
      title: t.businessLicense,
      icon: Globe,
      color: "bg-red-600"
    },
    {
      title: t.importLicense,
      icon: Package,
      color: "bg-red-600"
    }
  ];

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-2xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
        <div className="w-20 h-20 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <ShoppingCart className="text-white" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
            <ShoppingCart size={16} />
            {t.connectingText}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {t.aboutUs.split(' ')[0]}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {" " + t.aboutUs.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {t.heroDescription}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="card rounded-2xl p-2 shadow-xl">
            <div className="flex gap-2 flex-wrap justify-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-red-400 hover:bg-red-500/10'
                  }`}
                >
                  <section.icon size={18} />
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          {achievements.map((stat, idx) => (
            <div key={idx} className="card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full mb-3">
                <stat.icon size={20} />
              </div>
              <div className="text-2xl font-bold text-red-400 mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* Company Profile */}
          {activeSection === 'company' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold text-white mb-6">{t.companyTitle}</h2>
                  <div className="space-y-4 text-gray-200">
                    <p>{t.companyDesc1}</p>
                    <p>{t.companyDesc2}</p>
                    <p>{t.companyDesc3}</p>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <img 
                    src="/images/about-us/tentang-kami.webp"
                    alt="Asian Grocery Store"
                    className="w-full md:h-140 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 card p-6 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">500+</div>
                        <div className="text-sm text-gray-300">{t.asianProducts}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyValues.map((value, idx) => (
                  <div key={idx} className="card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vision & Mission */}
          {activeSection === 'vision' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="visi-misi-section">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                      <Eye className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.visionTitle}</h3>
                  </div>
                  <div className="rounded-2xl p-6">
                    <p className="text-lg text-center leading-relaxed">
                      {t.visionText}
                    </p>
                  </div>
                </div>
                
                <div className="visi-misi-section">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                      <Target className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold">{t.missionTitle}</h3>
                  </div>
                  <div className="space-y-4">
                    {[t.mission1, t.mission2, t.mission3, t.mission4].map((mission, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p>{mission}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Legal & Certifications */}
          {activeSection === 'legal' && (
            <div className={`transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">{t.certTitle}</h2>
                <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                  {t.certDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.color} rounded-full mb-4`}>
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  </div>
                ))}
              </div>

              <div className="sertifikasi-section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t.legalDocs}</h4>
                    <div className="space-y-3">
                      {["Business Registration Poland", "VAT", "Import License untuk Produk Asia", "Food Safety Certificate"].map((doc, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-red-400" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4">{t.partnerships}</h4>
                    <div className="space-y-3">
                      {["Supplier Resmi Produk Indonesia", "Partner Asian Food Distributors", "Member Polish Business Association", "Halal Certification Partner"].map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-red-400" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl transition-all duration-1000 ease-out ${isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+48123456789" className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
              <Phone size={20} />
              {t.callNow}
            </a>
            <a href="mailto:info@asiangrocery.pl" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
              <Mail size={20} />
              {t.emailUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}