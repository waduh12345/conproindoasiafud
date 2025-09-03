"use client";

import { useState, useEffect } from "react";
import { JSX } from "react";
import clsx from "clsx";
import React from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
  Heart,
  Star,
  Instagram,
  Facebook,
  Users,
  CheckCircle,
  ShoppingCart,
  Coffee,
  Package,
  Utensils,
  Store,
  Handshake,
  Building,
  Globe,
} from "lucide-react";

// === 1. Define Interfaces for Type Safety ===

// Interface for translation content for a single language
interface TranslationContent {
  clientsPartners: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  partnershipOpportunity: string;
  whatsapp: string;
  whatsappDescription: string;
  businessGrowth: string;
  businessGrowthDesc: string;
  marketExpansion: string;
  marketExpansionDesc: string;
  communitySupport: string;
  communitySupportDesc: string;
  contactWhatsApp: string;
  promoText: string;
  contactInfo: string;
  phone: string;
  phoneDesc: string;
  email: string;
  emailDesc: string;
  address: string;
  addressContent: string;
  addressDesc: string;
  operatingHours: string;
  monday: string;
  mondayTime: string;
  saturday: string;
  saturdayTime: string;
  sunday: string;
  sundayTime: string;
  followUs: string;
  followers: string;
  partnershipForm: string;
  formDescription: string;
  messageSent: string;
  thankYou: string;
  companyName: string;
  companyNamePlaceholder: string;
  contactPerson: string;
  contactPersonPlaceholder: string;
  emailPlaceholder: string;
  businessType: string;
  businessTypePlaceholder: string;
  partnershipType: string;
  partnershipTypePlaceholder: string;
  message: string;
  messagePlaceholder: string;
  sending: string;
  sendBtn: string;
  required: string;
  whatsappMessage: string;
}

// Interface for the entire translations object
interface Translations {
  pl: TranslationContent;
  en: TranslationContent;
  id: TranslationContent;
}

// Interface for Contact Info Card data
interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  content: string;
  description: string;
}

// Interface for Operating Hours data
interface OperationalHour {
  day: string;
  time: string;
  isOpen: boolean;
}

// Interface for Social Link data
interface SocialLink {
  icon: JSX.Element;
  name: string;
  handle: string;
  url: string;
  color: string;
  hoverShadow?: string;
  followers: string;
}

// Translations object - UPDATED FOR CLIENTS & PARTNERS
const translations: Translations = {
  en: {
    clientsPartners: "Clients & Partners",
    heroTitle: "Join Our Network of",
    heroTitleHighlight: " Success Partners",
    heroDescription:
      "Partner with Asian Grocery to expand your business reach. We work with restaurants, retailers, community organizations, and distributors across Poland to bring authentic Asian flavors to every corner of the country.",
    partnershipOpportunity: "Partnership Opportunities via",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Discover partnership opportunities with Asian Grocery. From wholesale distribution to community collaborations, we offer various partnership models to grow together in the Asian food market.",
    businessGrowth: "Business Growth",
    businessGrowthDesc:
      "Scale your business with our extensive Asian product portfolio and market expertise.",
    marketExpansion: "Market Expansion",
    marketExpansionDesc:
      "Access new markets and customer segments through our established distribution network.",
    communitySupport: "Community Support",
    communitySupportDesc:
      "Build stronger community connections through authentic Asian food culture programs.",
    contactWhatsApp: "Discuss Partnership via WhatsApp",
    promoText:
      "✨ Partnership consultation • 🤝 Business opportunities • 📈 Market expansion",
    contactInfo: "Partnership Information",
    phone: "Phone",
    phoneDesc: "Business Development (Monday-Saturday)",
    email: "Email",
    emailDesc: "Partnership inquiries within 24 hours",
    address: "Address",
    addressContent: "Mława, Masovian Voivodeship",
    addressDesc: "Poland",
    operatingHours: "Business Hours",
    monday: "Monday - Friday",
    mondayTime: "08:00 AM - 08:00 PM",
    saturday: "Saturday",
    saturdayTime: "08:00 AM - 06:00 PM",
    sunday: "Sunday",
    sundayTime: "10:00 AM - 04:00 PM",
    followUs: "Follow Us",
    followers: "followers",
    partnershipForm: "Partnership Inquiry Form",
    formDescription:
      "Fill out the form below to explore partnership opportunities. We'll connect you with our business development team within 24 hours.",
    messageSent: "Partnership Inquiry Sent!",
    thankYou: "Thank you for your interest. We'll contact you soon to discuss opportunities.",
    companyName: "Company/Organization Name",
    companyNamePlaceholder: "Your Company Name",
    contactPerson: "Contact Person",
    contactPersonPlaceholder: "Your Full Name",
    emailPlaceholder: "business@company.com",
    businessType: "Business Type",
    businessTypePlaceholder: "Restaurant, Retailer, Distributor, etc.",
    partnershipType: "Partnership Interest",
    partnershipTypePlaceholder: "Wholesale, Distribution, Community Partnership, etc.",
    message: "Message",
    messagePlaceholder:
      "Tell us about your business, partnership goals, target markets, and how you'd like to collaborate with Asian Grocery...",
    sending: "Sending...",
    sendBtn: "Submit Partnership Inquiry",
    required: "*",
    whatsappMessage:
      "Hello! I'm interested in exploring partnership opportunities with Asian Grocery. I'd like to discuss potential collaboration for our business.",
  },
  pl: {
    clientsPartners: "Klienci i Partnerzy",
    heroTitle: "Dołącz do Naszej Sieci",
    heroTitleHighlight: " Partnerów Sukcesu",
    heroDescription:
      "Nawiąż partnerstwo z Asian Grocery, aby rozszerzyć zasięg swojej działalności. Współpracujemy z restauracjami, detalistami, organizacjami społecznymi i dystrybutorami w całej Polsce, aby dostarczyć autentyczne azjatyckie smaki do każdego zakątka kraju.",
    partnershipOpportunity: "Możliwości Partnerstwa przez",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Odkryj możliwości partnerstwa z Asian Grocery. Od dystrybucji hurtowej po współpracę społeczną, oferujemy różne modele partnerstwa, aby razem rozwijać się na rynku żywności azjatyckiej.",
    businessGrowth: "Rozwój Biznesu",
    businessGrowthDesc:
      "Skaluj swój biznes dzięki naszemu szerokiemu portfolio produktów azjatyckich i wiedzy rynkowej.",
    marketExpansion: "Ekspansja Rynkowa",
    marketExpansionDesc:
      "Uzyskaj dostęp do nowych rynków i segmentów klientów przez naszą ustaloną sieć dystrybucyjną.",
    communitySupport: "Wsparcie Społeczności",
    communitySupportDesc:
      "Buduj silniejsze połączenia społeczne przez autentyczne programy kultury żywności azjatyckiej.",
    contactWhatsApp: "Omów Partnerstwo przez WhatsApp",
    promoText:
      "✨ Konsultacja partnerska • 🤝 Możliwości biznesowe • 📈 Ekspansja rynkowa",
    contactInfo: "Informacje o Partnerstwie",
    phone: "Telefon",
    phoneDesc: "Rozwój Biznesu (Poniedziałek-Sobota)",
    email: "Email",
    emailDesc: "Zapytania partnerskie w ciągu 24 godzin",
    address: "Adres",
    addressContent: "Mława, Województwo mazowieckie",
    addressDesc: "Polska",
    operatingHours: "Godziny Biznesowe",
    monday: "Poniedziałek - Piątek",
    mondayTime: "08:00 - 20:00",
    saturday: "Sobota",
    saturdayTime: "08:00 - 18:00",
    sunday: "Niedziela",
    sundayTime: "10:00 - 16:00",
    followUs: "Śledź Nas",
    followers: "obserwujących",
    partnershipForm: "Formularz Zapytania o Partnerstwo",
    formDescription:
      "Wypełnij formularz poniżej, aby poznać możliwości partnerstwa. Połączymy Cię z naszym zespołem rozwoju biznesu w ciągu 24 godzin.",
    messageSent: "Zapytanie o Partnerstwo Wysłane!",
    thankYou: "Dziękujemy za zainteresowanie. Skontaktujemy się wkrótce, aby omówić możliwości.",
    companyName: "Nazwa Firmy/Organizacji",
    companyNamePlaceholder: "Nazwa Twojej Firmy",
    contactPerson: "Osoba Kontaktowa",
    contactPersonPlaceholder: "Twoje Imię i Nazwisko",
    emailPlaceholder: "firma@przykład.pl",
    businessType: "Rodzaj Działalności",
    businessTypePlaceholder: "Restauracja, Sklep, Dystrybutor, itp.",
    partnershipType: "Zainteresowanie Partnerstwem",
    partnershipTypePlaceholder: "Hurt, Dystrybucja, Partnerstwo Społeczne, itp.",
    message: "Wiadomość",
    messagePlaceholder:
      "Opowiedz nam o swojej firmie, celach partnerstwa, rynkach docelowych i o tym, jak chciałbyś współpracować z Asian Grocery...",
    sending: "Wysyłanie...",
    sendBtn: "Wyślij Zapytanie o Partnerstwo",
    required: "*",
    whatsappMessage:
      "Dzień dobry! Jestem zainteresowany/a poznaniem możliwości partnerstwa z Asian Grocery. Chciałbym/chciałabym omówić potencjalną współpracę dla naszej firmy.",
  },
  id: {
    clientsPartners: "Klien & Mitra",
    heroTitle: "Bergabunglah dengan Jaringan",
    heroTitleHighlight: " Mitra Sukses Kami",
    heroDescription:
      "Bermitra dengan Asian Grocery untuk memperluas jangkauan bisnis Anda. Kami bekerja sama dengan restoran, retailer, organisasi komunitas, dan distributor di seluruh Polandia untuk menghadirkan cita rasa Asia yang autentik ke setiap sudut negara.",
    partnershipOpportunity: "Peluang Kemitraan melalui",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Temukan peluang kemitraan dengan Asian Grocery. Dari distribusi grosir hingga kolaborasi komunitas, kami menawarkan berbagai model kemitraan untuk berkembang bersama di pasar makanan Asia.",
    businessGrowth: "Pertumbuhan Bisnis",
    businessGrowthDesc:
      "Kembangkan bisnis Anda dengan portofolio produk Asia yang luas dan keahlian pasar kami.",
    marketExpansion: "Ekspansi Pasar",
    marketExpansionDesc:
      "Akses pasar baru dan segmen pelanggan melalui jaringan distribusi kami yang mapan.",
    communitySupport: "Dukungan Komunitas",
    communitySupportDesc:
      "Bangun koneksi komunitas yang lebih kuat melalui program budaya makanan Asia yang autentik.",
    contactWhatsApp: "Diskusikan Kemitraan via WhatsApp",
    promoText:
      "✨ Konsultasi kemitraan • 🤝 Peluang bisnis • 📈 Ekspansi pasar",
    contactInfo: "Informasi Kemitraan",
    phone: "Telepon",
    phoneDesc: "Pengembangan Bisnis (Senin-Sabtu)",
    email: "Email",
    emailDesc: "Pertanyaan kemitraan dalam 24 jam",
    address: "Alamat",
    addressContent: "Mława, Masovian Voivodeship",
    addressDesc: "Polandia",
    operatingHours: "Jam Bisnis",
    monday: "Senin - Jumat",
    mondayTime: "08:00 - 20:00",
    saturday: "Sabtu",
    saturdayTime: "08:00 - 18:00",
    sunday: "Minggu",
    sundayTime: "10:00 - 16:00",
    followUs: "Ikuti Kami",
    followers: "pengikut",
    partnershipForm: "Formulir Pertanyaan Kemitraan",
    formDescription:
      "Isi formulir di bawah ini untuk menjelajahi peluang kemitraan. Kami akan menghubungkan Anda dengan tim pengembangan bisnis kami dalam 24 jam.",
    messageSent: "Pertanyaan Kemitraan Terkirim!",
    thankYou: "Terima kasih atas minat Anda. Kami akan segera menghubungi untuk membahas peluang.",
    companyName: "Nama Perusahaan/Organisasi",
    companyNamePlaceholder: "Nama Perusahaan Anda",
    contactPerson: "Orang yang Dapat Dihubungi",
    contactPersonPlaceholder: "Nama Lengkap Anda",
    emailPlaceholder: "bisnis@perusahaan.com",
    businessType: "Jenis Bisnis",
    businessTypePlaceholder: "Restoran, Retailer, Distributor, dll.",
    partnershipType: "Minat Kemitraan",
    partnershipTypePlaceholder: "Grosir, Distribusi, Kemitraan Komunitas, dll.",
    message: "Pesan",
    messagePlaceholder:
      "Ceritakan tentang bisnis Anda, tujuan kemitraan, target pasar, dan bagaimana Anda ingin berkolaborasi dengan Asian Grocery...",
    sending: "Mengirim...",
    sendBtn: "Kirim Pertanyaan Kemitraan",
    required: "*",
    whatsappMessage:
      "Halo! Saya tertarik untuk mengeksplorasi peluang kemitraan dengan Asian Grocery. Saya ingin mendiskusikan potensi kolaborasi untuk bisnis kami.",
  },
};

export default function ClientsPartnersPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    businessType: "",
    partnershipType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Inline useLanguage hook
  const useLanguage = (initialLanguage: "en" | "id" | "pl" = "en") => {
    const [language, setLanguage] = useState<"en" | "id" | "pl">(initialLanguage);

    useEffect(() => {
      const savedLanguage = localStorage.getItem("preferred-language");
      if (savedLanguage === "en" || savedLanguage === "id" || savedLanguage === "pl") {
        setLanguage(savedLanguage);
      }
    }, []);

    useEffect(() => {
      const handleLanguageChange = (event: CustomEvent<"en" | "id" | "pl">) => {
        if (event.detail === "en" || event.detail === "id" || event.detail === "pl") {
          setLanguage(event.detail);
        }
      };

      const handleStorageChange = (event: StorageEvent) => {
        if (
          event.key === "preferred-language" &&
          (event.newValue === "en" || event.newValue === "id" || event.newValue === "pl")
        ) {
          setLanguage(event.newValue);
        }
      };

      window.addEventListener(
        "languageChanged",
        handleLanguageChange as EventListener
      );
      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener(
          "languageChanged",
          handleLanguageChange as EventListener
        );
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

    return { language };
  };

  const { language: currentLanguage } = useLanguage("en");
  const t = translations[currentLanguage];

  useEffect(() => {
    const element = document.querySelector("#partnership-hero");
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Format form data for WhatsApp message
    const formattedMessage = `
🤝 *Asian Grocery - Partnership Inquiry*

🏢 *Company:* ${formData.companyName}
👤 *Contact Person:* ${formData.contactPerson}
📧 *Email:* ${formData.email}
🏪 *Business Type:* ${formData.businessType}
🤝 *Partnership Interest:* ${formData.partnershipType}

💬 *Details:*
${formData.message}

---
Partnership inquiry submitted via Asian Grocery website
    `.trim();

    // Create WhatsApp URL with form data
    const whatsappNumber = "48123456789";
    const whatsappFormUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappFormUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ 
      companyName: "", 
      contactPerson: "", 
      email: "", 
      businessType: "", 
      partnershipType: "", 
      message: "" 
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const whatsappNumber = "48123456789";
  const whatsappMessage = t.whatsappMessage;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Phone className="text-red-600" size={24} />,
      title: t.phone,
      content: "+48 123 456 789",
      description: t.phoneDesc,
    },
    {
      icon: <Mail className="text-red-600" size={24} />,
      title: t.email,
      content: "partnerships@asiangrocery.pl",
      description: t.emailDesc,
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: t.address,
      content: t.addressContent,
      description: t.addressDesc,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      {/* Floating Elements Container */}
      <div
        className={clsx(
          "fixed inset-0 pointer-events-none z-0 invisible md:visible transition-opacity duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Handshake className="text-red-600 animate-pulse" size={28} />
          </div>
        </div>
        <div className="absolute top-40 right-16 animate-float-delayed">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Building className="text-red-600 animate-spin-slow" size={24} />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-gentle">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Globe className="text-red-600 animate-twinkle" size={20} />
          </div>
        </div>
        <div className="absolute top-60 right-40 animate-pulse-gentle">
          <div className="w-32 h-32 bg-gradient-to-r from-red-500/15 to-red-600/15 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float-up-down">
          <div className="w-18 h-18 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Users className="text-red-600 animate-sway" size={22} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="partnership-hero" className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-red-600/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur-2xl animate-pulse-slower"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 animate-float-up-down">
            <div className="w-4 h-4 bg-red-600 rounded-full opacity-60 animate-twinkle"></div>
          </div>
          <div className="absolute top-20 right-1/3 animate-float-up-down-delayed">
            <div className="w-3 h-3 bg-red-500 rounded-full opacity-70 animate-twinkle-delayed"></div>
          </div>
          <div className="absolute bottom-32 left-1/3 animate-float-up-down">
            <div className="w-5 h-5 bg-red-600 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              className={clsx(
                `inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-8 transform transition-all duration-1000 shadow-md`,
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
            >
              <Handshake size={16} className="animate-bounce" />
              {t.clientsPartners}
            </div>

            <h1
              className={clsx(
                `text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight transform transition-all duration-1000 delay-300`,
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
            >
              {t.heroTitle}
              <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent animate-gradient-shift">
                {t.heroTitleHighlight}
              </span>
            </h1>

            <p
              className={clsx(
                `text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-500`,
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
            >
              {t.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Partnership Information */}
            <div className="space-y-8">
              <div className="relative">
                <div className="container mx-auto px-6 relative z-20">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500 group">
                      <div className="mb-6">
                        <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-500 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                          <MessageCircle
                            className="text-white animate-bounce"
                            size={40}
                          />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                          {t.partnershipOpportunity}
                          <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                            {t.whatsapp}
                          </span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {t.whatsappDescription}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/50 rounded-2xl p-4 border border-red-600/30 shadow-sm">
                          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                            <Building className="text-white" size={20} />
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">
                            {t.businessGrowth}
                          </h3>
                        </div>

                        <div className="bg-white/50 rounded-2xl p-4 border border-red-600/30 shadow-sm">
                          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                            <Globe className="text-white" size={20} />
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">
                            {t.marketExpansion}
                          </h3>
                        </div>

                        <div className="bg-white/50 rounded-2xl p-4 border border-red-600/30 shadow-sm">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                            <Users className="text-white" size={20} />
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">
                            {t.communitySupport}
                          </h3>
                        </div>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-red-500/40 transform hover:scale-110 transition-all duration-300 group shadow-lg"
                      >
                        <MessageCircle
                          size={24}
                          className="group-hover:rotate-12 transition-transform duration-300"
                        />
                        <span>{t.contactWhatsApp}</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </a>

                      <p className="text-sm text-gray-600 mt-4">{t.promoText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-red-500/20 to-transparent rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                    <Handshake className="text-white" size={16} />
                  </div>
                  {t.partnershipForm}
                </h2>

                <p className="text-gray-700 mb-6">{t.formDescription}</p>

                {isSubmitted && (
                  <div className="bg-red-50 border border-red-600/30 rounded-2xl p-4 mb-6 flex items-center gap-3 animate-fade-in shadow-md">
                    <CheckCircle className="text-red-600" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {t.messageSent}
                      </h4>
                      <p className="text-gray-700 text-sm">{t.thankYou}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.companyName} {t.required}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                        placeholder={t.companyNamePlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contactPerson} {t.required}
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                        placeholder={t.contactPersonPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email {t.required}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.businessType}
                      </label>
                      <input
                        type="text"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                        placeholder={t.businessTypePlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.partnershipType}
                      </label>
                      <input
                        type="text"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                        placeholder={t.partnershipTypePlaceholder}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.message} {t.required}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 resize-none group-hover:border-red-600 shadow-sm"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-4 rounded-2xl hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t.sendBtn}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(8deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-8deg);
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float-up-down {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-35px);
          }
        }

        @keyframes float-up-down-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          33% {
            transform: translateY(-25px);
          }
          66% {
            transform: translateY(-45px);
          }
        }

        @keyframes gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes twinkle-delayed {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          25% {
            opacity: 0.8;
            transform: scale(1.2);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 4s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }

        .animate-float-up-down {
          animation: float-up-down 7s ease-in-out infinite;
        }

        .animate-float-up-down-delayed {
          animation: float-up-down-delayed 9s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle-delayed 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}