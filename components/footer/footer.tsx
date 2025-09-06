"use client";

import { useState, useEffect } from "react";
import { JSX } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import Image from "next/image";

// === 1. Define Interfaces for Type Safety ===

// Interface for a single quick link item
interface QuickLinkItem {
  name: string;
  href: string;
}

// Interface for the translation content for a single language
interface TranslationContent {
  brandSubtitle: string;
  brandDescription: string;
  quickLinks: string;
  quickLinksItems: QuickLinkItem[];
  productLinks: string;
  productLinksItems: QuickLinkItem[];
  contactUs: string;
  address: string;
  phone: string;
  email: string;
  copyright: string;
}

// Interface for the entire translations object
interface Translations {
  en: TranslationContent;
  pl: TranslationContent;
}

// Translations data
const translations: Translations = {
  pl: {
    brandSubtitle: "Najlepsze produkty azjatyckie w Polsce",
    brandDescription:
      "Odkryj autentyczne smaki Azji w Asian Grocery. Oferujemy najświeższe produkty z Indonezji, Korei, Japonii, Tajlandii i wielu innych krajów azjatyckich.",
    quickLinks: "Nawigacja",
    quickLinksItems: [
      { name: "Strona Główna", href: "/" },
      { name: "O Nas", href: "/o-nas" },
      { name: "Nasze Produkty", href: "/produkty" },
      { name: "Galeria", href: "/galeria" },
    ],
    productLinks: "Kategorie Produktów",
    productLinksItems: [
      { name: "Produkty Indonezyjskie", href: "/produkty/indonesia" },
      { name: "Przyprawy Azjatyckie", href: "/produkty/przyprawy" },
      { name: "Makaron i Ryż", href: "/produkty/makaron-ryz" },
      { name: "Słodycze i Snacki", href: "/produkty/slodycze" },
      { name: "Produkty Mrożone", href: "/produkty/mrozone" },
    ],
    contactUs: "Kontakt",
    address: "Mława, Województwo mazowieckie, Polska",
    phone: "+48 732 962 624",
    email: "lojanesia.official@yahoo.com",
    copyright: "Wszelkie prawa zastrzeżone.",
  },
  en: {
    brandSubtitle: "Best Asian Products in Poland",
    brandDescription:
      "Discover authentic flavors of Asia at Asian Grocery. We offer the freshest products from Indonesia, Korea, Japan, Thailand and many other Asian countries.",
    quickLinks: "Navigation",
    quickLinksItems: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Our Products", href: "/products" },
      { name: "Gallery", href: "/gallery" },
    ],
    productLinks: "Product Categories",
    productLinksItems: [
      { name: "Indonesian Products", href: "/products/indonesia" },
      { name: "Asian Spices", href: "/products/spices" },
      { name: "Noodles & Rice", href: "/products/noodles-rice" },
      { name: "Sweets & Snacks", href: "/products/sweets" },
      { name: "Frozen Products", href: "/products/frozen" },
    ],
    contactUs: "Contact",
    address: "Franciszka Żwirki 26D, 06-500 Mława, Polandia",
    phone: "+48 732 962 624",
    email: "lojanesia.official@yahoo.com",
    copyright: "All rights reserved.",
  },
};

// Language hook
function useLanguage(initialLanguage: "pl" | "en" = "pl") {
  const [language, setLanguage] = useState<"pl" | "en">(initialLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language");
    if (savedLanguage === "pl" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // Effect to listen for language changes from other components
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<"pl" | "en">) => {
      if (event.detail === "pl" || event.detail === "en") {
        setLanguage(event.detail);
      }
    };
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key === "preferred-language" &&
        (event.newValue === "pl" || event.newValue === "en")
      ) {
        setLanguage(event.newValue);
      }
    };
    window.addEventListener("languageChanged", handleLanguageChange as EventListener);
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("languageChanged", handleLanguageChange as EventListener);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { language };
}

export default function AsianGroceryFooter() {
  const { language: currentLanguage } = useLanguage("en");
  const t = translations[currentLanguage];

  const InstagramIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" /> </svg> );
  const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> </svg> );
  const YoutubeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M2.5 17.5V6.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2z" /> <path d="m10 10 5 2-5 2z" /> </svg> );
  const WhatsappIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" /> </svg> );

  return (
    <footer className="relative bg-white backdrop-blur-sm to-black text-black font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600/5 to-red-500/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-red-500/5 to-red-600/5 rounded-full blur-2xl opacity-50"></div>

      <div className="relative z-10 pt-20 pb-8 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={56} height={56} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    INDOASIAFOOD
                  </h3>
                </div>
              </div>
              <p className="text-black-300 mb-4 text-sm leading-relaxed">
                {t.brandDescription}
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: <InstagramIcon />, href: "https://instagram.com/asiangrocerypoland" },
                  { icon: <FacebookIcon />, href: "https://facebook.com/asiangrocerypoland" },
                  { icon: <YoutubeIcon />, href: "#" },
                  { icon: <WhatsappIcon />, href: "https://wa.me/48123456789" },
                ].map((social: { icon: JSX.Element; href: string }, index: number) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transform hover:scale-110 transition-all duration-300" >
                      {social.icon}
                    </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-500">
                {t.quickLinks}
              </h4>
              <div className="space-y-3">
                {t.quickLinksItems.map((link: QuickLinkItem, index: number) => (
                  <a key={index} href={link.href} className="text-black-300 hover:text-red-500 transition-all duration-300 flex items-center gap-3 group text-sm" >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Product Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-500">
                {t.productLinks}
              </h4>
              <div className="space-y-3">
                {t.productLinksItems.map((link: QuickLinkItem, index: number) => (
                  <a key={index} href={link.href} className="text-black-300 hover:text-red-500 transition-all duration-300 flex items-center gap-3 group text-sm" >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-red-500">
                {t.contactUs}
              </h4>
              <div className="space-y-4">
                 <div className="flex items-start gap-3 text-black-300">
                  <MapPin size={18} className="text-red-500 flex-shrink-0 mt-1" />
                  <a href="#" className="text-sm leading-relaxed hover:text-red-500 transition-colors">{t.address}</a>
                </div>
                 <div className="flex items-center gap-3 text-black-300">
                  <Phone size={18} className="text-red-500 flex-shrink-0" />
                  <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="text-sm hover:text-red-500 transition-colors">{t.phone}</a>
                </div>
                 <div className="flex items-center gap-3 text-black-300">
                  <Mail size={18} className="text-red-500 flex-shrink-0" />
                  <a href={`mailto:${t.email}`} className="text-sm hover:text-red-500 transition-colors">{t.email}</a>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-black-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} INDOASIAFOOD. {t.copyright}
              </p>
              <div className="flex items-center gap-4 text-sm text-black-400">
                <a href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}