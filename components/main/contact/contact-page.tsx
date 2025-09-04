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
} from "lucide-react";

// === 1. Define Interfaces for Type Safety ===

// Interface for translation content for a single language
interface TranslationContent {
  contactUs: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDescription: string;
  freeConsultation: string;
  whatsapp: string;
  whatsappDescription: string;
  quickResponse: string;
  quickResponseDesc: string;
  productInfo: string;
  productInfoDesc: string;
  orderAssistance: string;
  orderAssistanceDesc: string;
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
  sendMessage: string;
  formDescription: string;
  messageSent: string;
  thankYou: string;
  fullName: string;
  fullNamePlaceholder: string;
  emailPlaceholder: string;
  subject: string;
  subjectPlaceholder: string;
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

// Translations object - UPDATED FOR ASIAN GROCERY
const translations: Translations = {
  pl: {
    contactUs: "Skontaktuj się z nami",
    heroTitle: "Odkryj Smaki Azji w Sercu",
    heroTitleHighlight: " Polski",
    heroDescription:
      "Nasz zespół jest gotowy pomóc Ci znaleźć autentyczne produkty azjatyckie. Uzyskaj bezpłatną konsultację dotyczącą naszego asortymentu, świeżych produktów i wszystkich informacji, których potrzebujesz dla swojej kuchni azjatyckiej.",
    freeConsultation: "Bezpłatna konsultacja przez",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Uzyskaj pełne informacje o naszym asortymencie produktów azjatyckich, świeżych warzywach, przyprawach, oraz cenach. Nasz zespół jest dostępny 24/7 z szybką odpowiedzią i dokładnymi informacjami.",
    quickResponse: "Szybka Odpowiedź",
    quickResponseDesc:
      "Nasz zespół obsługi klienta zawsze jest gotowy pomóc z jasnymi informacjami.",
    productInfo: "Informacje o Produktach",
    productInfoDesc:
      "Szczegółowe konsultacje dotyczące dostępności, świeżości i pochodzenia produktów azjatyckich.",
    orderAssistance: "Pomoc w Zamawianiu",
    orderAssistanceDesc:
      "Kompletny przewodnik po procesie zamawiania i dostawie produktów.",
    contactWhatsApp: "Skontaktuj się z nami przez WhatsApp",
    promoText:
      "✨ Bezpłatna konsultacja • 🥢 Info o produktach azjatyckich • 🚚 Przewodnik zamawiania",
    contactInfo: "Informacje Kontaktowe",
    phone: "Telefon",
    phoneDesc: "Sklep (Poniedziałek-Sobota)",
    email: "Email",
    emailDesc: "Odpowiedź w ciągu 2-4 godzin roboczych",
    address: "Adres",
    addressContent: "Mława, Województwo mazowieckie",
    addressDesc: "Polska",
    operatingHours: "Godziny Otwarcia",
    monday: "Poniedziałek - Piątek",
    mondayTime: "08:00 - 20:00",
    saturday: "Sobota",
    saturdayTime: "08:00 - 18:00",
    sunday: "Niedziela",
    sundayTime: "10:00 - 16:00",
    followUs: "Śledź Nas",
    followers: "obserwujących",
    sendMessage: "Wyślij Wiadomość",
    formDescription:
      "Lub wyślij wiadomość przez formularz poniżej. Odpowiemy w ciągu 2-4 godzin roboczych.",
    messageSent: "Wiadomość Wysłana!",
    thankYou: "Dziękujemy, skontaktujemy się z Tobą wkrótce.",
    fullName: "Imię i Nazwisko",
    fullNamePlaceholder: "Twoje Imię",
    emailPlaceholder: "email@example.com",
    subject: "Temat",
    subjectPlaceholder: "Zapytanie o produkty azjatyckie",
    message: "Wiadomość",
    messagePlaceholder:
      "Zapytaj o cokolwiek dotyczące naszych produktów azjatyckich, dostępności, dostaw lub innych informacji o Asian Grocery...",
    sending: "Wysyłanie...",
    sendBtn: "Wyślij Wiadomość",
    required: "*",
    whatsappMessage:
      "Dzień dobry! Jestem zainteresowany/a produktami Asian Grocery i chciałbym/chciałabym uzyskać więcej informacji o dostępnym asortymencie.",
  },
  en: {
    contactUs: "Contact Us",
    heroTitle: "Discover Asian Flavors in the Heart of",
    heroTitleHighlight: " Poland",
    heroDescription:
      "Our team is ready to help you find authentic Asian products. Get a free consultation regarding our assortment, fresh products, and all the information you need for your Asian kitchen.",
    freeConsultation: "Free Consultation via",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Get complete information about our Asian product assortment, fresh vegetables, spices, and prices. Our team is available 24/7 with quick response and accurate information.",
    quickResponse: "Quick Response",
    quickResponseDesc:
      "Our customer service team is always ready to help with clear information.",
    productInfo: "Product Information",
    productInfoDesc:
      "Detailed consultations regarding availability, freshness, and origin of Asian products.",
    orderAssistance: "Order Assistance",
    orderAssistanceDesc:
      "Complete guide to the ordering process and product delivery.",
    contactWhatsApp: "Contact Us via WhatsApp",
    promoText:
      "✨ Free consultation • 🥢 Asian product info • 🚚 Ordering guide",
    contactInfo: "Contact Information",
    phone: "Phone",
    phoneDesc: "Store (Monday-Saturday)",
    email: "Email",
    emailDesc: "Response within 2-4 working hours",
    address: "Address",
    addressContent: "Mława, Masovian Voivodeship",
    addressDesc: "Poland",
    operatingHours: "Operating Hours",
    monday: "Monday - Friday",
    mondayTime: "08:00 AM - 08:00 PM",
    saturday: "Saturday",
    saturdayTime: "08:00 AM - 06:00 PM",
    sunday: "Sunday",
    sundayTime: "10:00 AM - 04:00 PM",
    followUs: "Follow Us",
    followers: "followers",
    sendMessage: "Send Message",
    formDescription:
      "Or send a message through the form below. We will respond within 2-4 working hours.",
    messageSent: "Message Sent!",
    thankYou: "Thank you, we will contact you soon.",
    fullName: "Full Name",
    fullNamePlaceholder: "Your Name",
    emailPlaceholder: "email@example.com",
    subject: "Subject",
    subjectPlaceholder: "Asian Products Inquiry",
    message: "Message",
    messagePlaceholder:
      "Ask us anything about our Asian products, availability, delivery, or other information about Asian Grocery...",
    sending: "Sending...",
    sendBtn: "Send Message",
    required: "*",
    whatsappMessage:
      "Hello! I am interested in Asian Grocery products and would like to get more information about the available assortment.",
  },
  id: {
    contactUs: "Hubungi Kami",
    heroTitle: "Temukan Cita Rasa Asia di Jantung",
    heroTitleHighlight: " Polandia",
    heroDescription:
      "Tim kami siap membantu Anda menemukan produk Asia autentik. Dapatkan konsultasi gratis mengenai koleksi produk kami, ketersediaan bahan segar, dan semua informasi yang Anda butuhkan untuk dapur Asia Anda.",
    freeConsultation: "Konsultasi Gratis via",
    whatsapp: " WhatsApp",
    whatsappDescription:
      "Dapatkan informasi lengkap tentang koleksi produk Asia kami, sayuran segar, bumbu, serta harga. Tim kami tersedia 24/7 dengan respons cepat dan informasi akurat.",
    quickResponse: "Respon Cepat",
    quickResponseDesc:
      "Tim layanan pelanggan kami selalu siap membantu dengan informasi yang jelas.",
    productInfo: "Informasi Produk",
    productInfoDesc:
      "Konsultasi detail terkait ketersediaan, kesegaran, dan asal produk Asia.",
    orderAssistance: "Bantuan Pemesanan",
    orderAssistanceDesc:
      "Panduan lengkap proses pemesanan dan pengiriman produk.",
    contactWhatsApp: "Hubungi via WhatsApp",
    promoText:
      "✨ Konsultasi gratis • 🥢 Info produk Asia • 🚚 Panduan pemesanan",
    contactInfo: "Informasi Kontak",
    phone: "Telepon",
    phoneDesc: "Toko (Senin-Sabtu)",
    email: "Email",
    emailDesc: "Respon dalam 2-4 jam kerja",
    address: "Alamat",
    addressContent: "Mława, Provinsi Mazowieckie",
    addressDesc: "Polandia",
    operatingHours: "Jam Operasional",
    monday: "Senin - Jumat",
    mondayTime: "08:00 - 20:00",
    saturday: "Sabtu",
    saturdayTime: "08:00 - 18:00",
    sunday: "Minggu",
    sundayTime: "10:00 - 16:00",
    followUs: "Ikuti Kami",
    followers: "pengikut",
    sendMessage: "Kirim Pesan",
    formDescription:
      "Atau kirim pesan melalui formulir di bawah ini. Kami akan membalas dalam 2-4 jam kerja.",
    messageSent: "Pesan Terkirim!",
    thankYou: "Terima kasih, kami akan segera menghubungi Anda.",
    fullName: "Nama Lengkap",
    fullNamePlaceholder: "Nama Anda",
    emailPlaceholder: "email@contoh.com",
    subject: "Subjek",
    subjectPlaceholder: "Pertanyaan Produk Asia",
    message: "Pesan",
    messagePlaceholder:
      "Tanyakan apa pun tentang produk Asia kami, ketersediaan, pengiriman, atau informasi lain tentang Asian Grocery...",
    sending: "Mengirim...",
    sendBtn: "Kirim Pesan",
    required: "*",
    whatsappMessage:
      "Halo! Saya tertarik dengan produk Asian Grocery dan ingin mendapatkan informasi lebih lanjut tentang koleksi yang tersedia.",
  },
};

export default function AsianGroceryContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Inline useLanguage hook
  const useLanguage = (initialLanguage: "pl" | "en" | "id" = "pl") => {
    const [language, setLanguage] = useState<"pl" | "en" | "id">(initialLanguage);

    useEffect(() => {
      const savedLanguage = localStorage.getItem("preferred-language");
      if (savedLanguage === "pl" || savedLanguage === "en" || savedLanguage === "id") {
        setLanguage(savedLanguage);
      }
    }, []);

    useEffect(() => {
      const handleLanguageChange = (event: CustomEvent<"pl" | "en" | "id">) => {
        if (event.detail === "pl" || event.detail === "en" || event.detail === "id") {
          setLanguage(event.detail);
        }
      };

      const handleStorageChange = (event: StorageEvent) => {
        if (
          event.key === "preferred-language" &&
          (event.newValue === "pl" || event.newValue === "en" || event.newValue === "id")
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
    const element = document.querySelector("#contact-hero");
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const whatsappNumber = "48123456789"; // Asian Grocery WhatsApp number
  const whatsappMessage = t.whatsappMessage;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const operationalHours: OperationalHour[] = [
    { day: t.monday, time: t.mondayTime, isOpen: true },
    { day: t.saturday, time: t.saturdayTime, isOpen: true },
    { day: t.sunday, time: t.sundayTime, isOpen: true },
  ];

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
      content: "info@asiangrocery.pl",
      description: t.emailDesc,
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: t.address,
      content: t.addressContent,
      description: t.addressDesc,
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram className="text-white" size={20} />,
      name: "Instagram",
      handle: "@asiangrocerypoland",
      url: "https://instagram.com/asiangrocerypoland",
      color: "from-red-600 to-red-500",
      hoverShadow: "hover:shadow-red-500/30",
      followers: "12.5K",
    },
    {
      icon: <Facebook className="text-white" size={20} />,
      name: "Facebook",
      handle: "Asian Grocery Poland",
      url: "https://facebook.com/asiangrocerypoland",
      color: "from-gray-800 to-gray-900",
      hoverShadow: "hover:shadow-gray-400/50",
      followers: "8.2K",
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
            <ShoppingCart className="text-red-600 animate-pulse" size={28} />
          </div>
        </div>
        <div className="absolute top-40 right-16 animate-float-delayed">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Coffee className="text-red-600 animate-spin-slow" size={24} />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce-gentle">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Package className="text-red-600 animate-twinkle" size={20} />
          </div>
        </div>
        <div className="absolute top-60 right-40 animate-pulse-gentle">
          <div className="w-32 h-32 bg-gradient-to-r from-red-500/15 to-red-600/15 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-20 animate-float-up-down">
          <div className="w-18 h-18 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
            <Utensils className="text-red-600 animate-sway" size={22} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="contact-hero" className="relative py-20 overflow-hidden">
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
              <MessageCircle size={16} className="animate-bounce" />
              {t.contactUs}
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

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-red-50 relative overflow-hidden">
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
                  {t.freeConsultation}
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
                    <Clock className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {t.quickResponse}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {t.quickResponseDesc}
                  </p>
                </div>

                <div className="bg-white/50 rounded-2xl p-4 border border-red-600/30 shadow-sm">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                    <Store className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {t.productInfo}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {t.productInfoDesc}
                  </p>
                </div>

                <div className="bg-white/50 rounded-2xl p-4 border border-red-600/30 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                    <Users className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {t.orderAssistance}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {t.orderAssistanceDesc}
                  </p>
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
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                    <Phone className="text-white" size={16} />
                  </div>
                  {t.contactInfo}
                </h2>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info: ContactInfoItem, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-500 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-50 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-red-600/30">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-lg text-gray-800 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-700">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-600/30 shadow-md">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-xl">
                  <Clock className="text-red-600" size={24} />
                  {t.operatingHours}
                </h3>
                <div className="space-y-3">
                  {operationalHours.map(
                    (schedule: OperationalHour, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-700 font-medium">
                          {schedule.day}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={clsx(
                              "font-medium",
                              schedule.isOpen
                                ? "text-red-600"
                                : "text-red-500"
                            )}
                          >
                            {schedule.time}
                          </span>
                          <div
                            className={clsx(
                              "w-2 h-2 rounded-full",
                              schedule.isOpen
                                ? "bg-red-600 animate-pulse"
                                : "bg-red-500"
                            )}
                          ></div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-xl">
                  <Instagram className="text-red-600" size={24} />
                  {t.followUs}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social: SocialLink, index: number) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        `bg-gradient-to-r ${social.color} rounded-2xl p-4 text-white hover:shadow-lg ${social.hoverShadow} hover:scale-105 transition-all duration-300 group shadow-md`
                      )}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <div>
                          <h4 className="font-bold">{social.name}</h4>
                          <p className="text-sm opacity-90">{social.handle}</p>
                        </div>
                      </div>
                      <div className="text-sm opacity-90">
                        {social.followers} {t.followers}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Form background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-red-500/20 to-transparent rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                    <Mail className="text-white" size={16} />
                  </div>
                  {t.sendMessage}
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
                        {t.fullName} {t.required}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                        placeholder={t.fullNamePlaceholder}
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.email} {t.required}
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
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 group-hover:border-red-600 shadow-sm"
                      placeholder={t.subjectPlaceholder}
                    />
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