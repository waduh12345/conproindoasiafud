"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define a type for your translation structure
interface TranslationContent {
  home: string;
  aboutUs: string;
  productServices: string;
  ourAdvantage: string;
  clientPartners: string;
  contact: string;
  tagline: string;
}

// Define the shape of your translations object
interface Translations {
  en: TranslationContent;
  id: TranslationContent;
  pl: TranslationContent;
}

export default function MultilingualTopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "id" | "pl">("en");
  const [isClient, setIsClient] = useState(false);

  // Konfigurasi teks untuk tiga bahasa
  const translations: Translations = {
    en: {
      home: "Home",
      aboutUs: "About Us",
      productServices: "Products & Services",
      ourAdvantage: "Our Advantage",
      clientPartners: "Clients & Partners",
      contact: "Contact Us",
      tagline: "Authentic Asian Flavors in Poland",
    },
    id: {
      home: "Beranda",
      aboutUs: "Tentang Kami",
      productServices: "Produk & Layanan",
      ourAdvantage: "Keunggulan Kami",
      clientPartners: "Klien & Mitra",
      contact: "Hubungi Kami",
      tagline: "Cita Rasa Asia Autentik di Polandia",
    },
    pl: {
      home: "Strona główna",
      aboutUs: "O nas",
      productServices: "Produkty i usługi",
      ourAdvantage: "Nasze zalety",
      clientPartners: "Klienci i partnerzy",
      contact: "Skontaktuj się z nami",
      tagline: "Autentyczne smaki Azji w Polsce",
    },
  };

  const t = translations[language];

  const menuItems = [
    { name: t.home, href: "/" },
    { name: t.aboutUs, href: "/about-us" },
    { name: t.productServices, href: "/product-services" },
    { name: t.clientPartners, href: "/client-partners" },
    { name: t.ourAdvantage, href: "/our-advantage" },
    { name: t.contact, href: "/contact" },
  ];

  // Language options with proper labels
  const languageOptions = {
    en: { code: "EN", label: "English", flag: "🇺🇸" },
    id: { code: "ID", label: "Indonesia", flag: "🇮🇩" },
    pl: { code: "PL", label: "Polski", flag: "🇵🇱" },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cycleLanguage = () => {
    const languages: ("en" | "id" | "pl")[] = ["en", "id", "pl"];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLang = languages[nextIndex];
    
    setLanguage(newLang);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("preferred-language", newLang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: newLang,
          })
        );
      } catch (error) {
        console.warn("Failed to save language preference:", error);
      }
    }
  };

  const setSpecificLanguage = (lang: "en" | "id" | "pl") => {
    setLanguage(lang);

    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("preferred-language", lang);
        window.dispatchEvent(
          new CustomEvent("languageChanged", {
            detail: lang,
          })
        );
      } catch (error) {
        console.warn("Failed to save language preference:", error);
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      try {
        const savedLanguage = localStorage.getItem("preferred-language");
        if (savedLanguage === "en" || savedLanguage === "id" || savedLanguage === "pl") {
          setLanguage(savedLanguage);
        }
      } catch (error) {
        console.warn("Failed to load language preference:", error);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      `}</style>

      <nav className="w-full bg-white backdrop-blur-sm shadow-md px-4 md:px-6 py-3 sticky top-0 z-50 border-b-2 border-red-100">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={56} height={56} />
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors">
                INDOASIAFOOD
              </h1>
              <p className="text-sm text-gray-600 font-medium">{t.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 relative group py-2 px-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Language Dropdown */}
            <div className="hidden lg:block relative dropdown">
              <button
                onClick={cycleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300 transition-all duration-300 hover:scale-105 shadow-sm"
                title="Change Language / Ganti Bahasa / Zmień język"
              >
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
                <span className="text-sm font-medium">
                  {languageOptions[language].flag} {languageOptions[language].code}
                </span>
                <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {(Object.keys(languageOptions) as Array<keyof typeof languageOptions>).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSpecificLanguage(lang)}
                    className={`w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center gap-3 ${
                      language === lang ? 'bg-red-50 text-red-700' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{languageOptions[lang].flag}</span>
                    <div>
                      <div className="font-medium">{languageOptions[lang].label}</div>
                      <div className="text-xs text-gray-500">{languageOptions[lang].code}</div>
                    </div>
                    {language === lang && (
                      <div className="ml-auto w-2 h-2 bg-red-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg border-2 border-red-200 bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all duration-300 hover:scale-105 shadow-sm"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed top-0 right-0 w-[90%] max-w-sm h-full shadow-2xl z-50 transform transition-transform duration-300 bg-white ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Mobile */}
          <div className="p-6 border-b-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-red-600">Asian Grocery</p>
                  <p className="text-xs text-gray-600">{t.tagline}</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-red-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-2 flex-1 overflow-y-auto bg-white">
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`flex items-center gap-4 p-4 rounded-2xl w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300 group border border-transparent hover:border-red-200 shadow-sm hover:shadow-md ${
                    isMobileMenuOpen ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="flex-1">{item.name}</span>
                  <div className="w-0 group-hover:w-2 h-0.5 bg-red-600 transition-all duration-300 rounded-full"></div>
                </Link>
              </div>
            ))}

            {/* Language Selection in Mobile Menu */}
            <div className="mt-6 pt-6 border-t border-red-100">
              <p className="text-sm font-medium text-gray-600 mb-3 px-4">
                {language === "en" ? "Language" : language === "id" ? "Bahasa" : "Język"}
              </p>
              <div className="space-y-2">
                {(Object.keys(languageOptions) as Array<keyof typeof languageOptions>).map((lang, index) => (
                  <button
                    key={lang}
                    onClick={() => setSpecificLanguage(lang)}
                    className={`flex items-center gap-4 p-4 w-full rounded-2xl text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300 group border border-transparent hover:border-red-200 shadow-sm hover:shadow-md ${
                      language === lang ? "bg-red-50 text-red-600 border-red-200" : ""
                    } ${isMobileMenuOpen ? "animate-fade-in-up" : ""}`}
                    style={{ animationDelay: `${(menuItems.length + index + 1) * 100}ms` }}
                  >
                    <span className="text-xl">{languageOptions[lang].flag}</span>
                    <div className="flex-1 text-left">
                      <div className="font-medium">{languageOptions[lang].label}</div>
                      <div className="text-xs text-gray-500">{languageOptions[lang].code}</div>
                    </div>
                    {language === lang && (
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Mobile Menu */}
          <div className="p-6 border-t-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
            <div className="text-center">
              <p className="text-xs text-gray-600 font-medium">
                © 2024 Asian Grocery
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Mława, Poland
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}