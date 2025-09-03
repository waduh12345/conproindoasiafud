"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  User,
  Camera,
  Image as ImageIcon,
  ChevronRight,
  Search,
  Eye,
  X,
  ChevronLeft,
} from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

// === Define Interfaces for Type Safety ===

// Interface for breadcrumb API response
interface BreadcrumbData {
  id: number;
  bahasa: string;
  judul: string;
  sub_judul: string;
  deskripsi: string;
  status: number;
}

interface BreadcrumbApiResponse {
  success: boolean;
  message: string;
  data: {
    items: BreadcrumbData[];
    total: number;
    pageTotal: number;
    currentPage: number;
  };
}

// Interface for category API response
interface CategoryData {
  id: number;
  bahasa: string;
  judul: string;
  status: number;
}

interface CategoryApiResponse {
  success: boolean;
  message: string;
  data: {
    items: CategoryData[];
    total: number;
    pageTotal: number;
    currentPage: number;
  };
}

// Interface for gallery content API response
interface GalleryContentData {
  id: number;
  judul: string;
  deskripsi: string;
  penulis: string;
  tanggal: string;
  views: number;
  image: string;
  image_2?: string;
  image_3?: string;
  image_4?: string;
  image_5?: string;
  image_6?: string;
  status: number;
}

interface GalleryContentApiResponse {
  success: boolean;
  message: string;
  data: {
    items: GalleryContentData[];
    total: number;
    pageTotal: number;
    currentPage: number;
  };
}

// Interface for processed gallery item
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  photographer: string;
  eventDate: string;
  featured: boolean;
  trending: boolean;
  tags: string[];
  views: number;
  totalPhotos: number;
  images: string[];
}

const ITEMS_PER_PAGE = 9;

// GalleryDetailModalProps interface
interface GalleryDetailModalProps {
  gallery: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: "id" | "en";
}

const GalleryDetailModal: React.FC<GalleryDetailModalProps> = ({
  gallery,
  isOpen,
  onClose,
  currentLanguage,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    if (gallery) {
      setSelectedImageIndex(0);
    }
  }, [gallery]);

  if (!gallery || !isOpen) return null;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % gallery.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + gallery.images.length) % gallery.images.length
    );
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          "relative bg-white rounded-3xl p-8 max-w-6xl w-full mx-4 shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300 z-10"
          aria-label={currentLanguage === "id" ? "Tutup modal" : "Close modal"}
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="bg-[#eaaf15] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                {gallery.category}
              </span>
              {gallery.trending && (
                <span className="bg-[#f8d851] text-[#414042] px-3 py-1 rounded-full text-xs font-bold">
                  {currentLanguage === "id" ? "Trending" : "Trending"}
                </span>
              )}
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#414042] leading-tight">
              {gallery.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[#414042]/80 flex-wrap">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#eaaf15]" />
                <span className="text-sm">{gallery.photographer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#eaaf15]" />
                <span className="text-sm">
                  {new Date(gallery.eventDate).toLocaleDateString(currentLanguage === "id" ? "id-ID" : "en-US")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-[#eaaf15]" />
                <span className="text-sm">
                  {gallery.views.toLocaleString()} {currentLanguage === "id" ? "Dilihat" : "Views"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon size={16} className="text-[#eaaf15]" />
                <span className="text-sm">
                  {gallery.totalPhotos} {currentLanguage === "id" ? "Foto" : "Photos"}
                </span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
              <Image
                src={gallery.images[selectedImageIndex]}
                alt={`${gallery.title} - ${selectedImageIndex + 1}`}
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
              />

              {gallery.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {gallery.images.length}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-[#414042]/80 leading-relaxed max-w-4xl mx-auto">
              {gallery.description}
            </p>
          </div>

          {gallery.images.length > 1 && (
            <div>
              <h3 className="text-xl font-bold text-[#414042] mb-4 text-center">
                {currentLanguage === "id" ? "Semua Foto" : "All Photos"}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {gallery.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={clsx(
                      "relative overflow-hidden rounded-lg aspect-square transition-all duration-300",
                      selectedImageIndex === index
                        ? "ring-4 ring-[#eaaf15] ring-offset-2"
                        : "hover:scale-105 hover:shadow-lg"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${gallery.title} - ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-[#eaaf15]/20"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 justify-center">
            {gallery.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#fdf6e3] text-[#414042] px-3 py-1 rounded-full text-sm font-medium border border-[#eaaf15]/30 shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const fetchBreadcrumbData = async (language: "id" | "en"): Promise<BreadcrumbData | null> => {
  try {
    const response = await fetch(
      `https://api-kampus-harmonis.naditechno.id/website/galeri/breadcrumb?bahasa=${language}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: BreadcrumbApiResponse = await response.json();
    return data.success && data.data.items.length > 0 ? data.data.items[0] : null;
  } catch (error) {
    console.error("Error fetching breadcrumb data:", error);
    return null;
  }
};

const fetchGalleryContent = async (language: "id" | "en"): Promise<GalleryContentData[]> => {
  try {
    const response = await fetch(
      `https://api-kampus-harmonis.naditechno.id/website/galeri/konten?bahasa=${language}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: GalleryContentApiResponse = await response.json();
    return data.success && data.data.items ? data.data.items.filter(item => item.status === 1) : [];
  } catch (error) {
    console.error("Error fetching gallery content:", error);
    return [];
  }
};

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  
  const [breadcrumbData, setBreadcrumbData] = useState<BreadcrumbData | null>(null);
  const [galleryContent, setGalleryContent] = useState<GalleryContentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hardcoded travel categories for frontend display
  const travelCategories = {
    id: ["Semua", "Umroh Ramadhan", "Haji Furoda", "Ziarah Turki", "Manasik & Persiapan", "Keberangkatan Jamaah"],
    en: ["All", "Ramadan Umrah", "Furoda Hajj", "Turkey Ziyarah", "Manasik & Preparation", "Pilgrim Departures"],
  };

  const useLanguage = (initialLanguage: "id" | "en" = "id") => {
    const [language, setLanguage] = useState<"id" | "en">(initialLanguage);
    useEffect(() => {
      const savedLanguage = localStorage.getItem("preferred-language");
      if (savedLanguage === "id" || savedLanguage === "en") setLanguage(savedLanguage);
    }, []);
    useEffect(() => {
      const handleLanguageChange = (event: CustomEvent<"id" | "en">) => {
        if (event.detail === "id" || event.detail === "en") setLanguage(event.detail);
      };
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "preferred-language" && (event.newValue === "id" || event.newValue === "en")) {
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
  };

  const { language: currentLanguage } = useLanguage("id");

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [breadcrumbResult, contentResult] = await Promise.all([
          fetchBreadcrumbData(currentLanguage),
          fetchGalleryContent(currentLanguage)
        ]);
        setBreadcrumbData(breadcrumbResult);
        setGalleryContent(contentResult);
        if (!contentResult.length) {
          setError(currentLanguage === "id" ? "Gagal memuat galeri perjalanan" : "Failed to load journey gallery");
        }
      } catch (err) {
        setError(currentLanguage === "id" ? "Gagal memuat galeri perjalanan" : "Failed to load journey gallery");
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [currentLanguage]);

  useEffect(() => {
    setSelectedCategory(travelCategories[currentLanguage][0]);
  }, [currentLanguage]);

  const processGalleryItems = (contentData: GalleryContentData[]): GalleryItem[] => {
    return contentData.map((item) => {
      const images: string[] = [];
      const imageBaseUrl = "https://api-kampus-harmonis.naditechno.id/media/";
      if (item.image) images.push(`${imageBaseUrl}${item.image}`);
      if (item.image_2) images.push(`${imageBaseUrl}${item.image_2}`);
      if (item.image_3) images.push(`${imageBaseUrl}${item.image_3}`);
      if (item.image_4) images.push(`${imageBaseUrl}${item.image_4}`);
      if (item.image_5) images.push(`${imageBaseUrl}${item.image_5}`);
      if (item.image_6) images.push(`${imageBaseUrl}${item.image_6}`);

      const currentTravelCategories = travelCategories[currentLanguage].slice(1);
      
      return {
        id: item.id,
        title: item.judul,
        description: item.deskripsi,
        coverImage: images[0] || "/images/placeholder.jpg",
        category: currentTravelCategories[item.id % currentTravelCategories.length],
        photographer: item.penulis,
        eventDate: item.tanggal,
        featured: Math.random() > 0.7,
        trending: Math.random() > 0.8,
        tags: item.judul.split(" ").slice(0, 3).map(word => word.toLowerCase().replace(/[^a-z0-9]/gi, '')),
        views: item.views,
        totalPhotos: images.length,
        images: images,
      };
    });
  };

  const galleryItems = processGalleryItems(galleryContent);
  const categoryOptions = travelCategories[currentLanguage];

  const filteredGalleries = galleryItems.filter((gallery: GalleryItem) => {
    const allText = travelCategories[currentLanguage][0];
    const matchCategory = selectedCategory === allText || gallery.category === selectedCategory;
    const matchSearch =
      gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gallery.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gallery.tags.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredGalleries.length / ITEMS_PER_PAGE);
  const paginatedGalleries = filteredGalleries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = (): void => { if (currentPage < totalPages) setCurrentPage(p => p + 1); };
  const handlePrevPage = (): void => { if (currentPage > 1) setCurrentPage(p => p - 1); };

  useEffect(() => { setCurrentPage(1); }, [selectedCategory, searchTerm]);
  useEffect(() => { const timer = setTimeout(() => setIsPageLoaded(true), 100); return () => clearTimeout(timer); }, []);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdf6e3] to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#eaaf15] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#414042] text-lg">
            {currentLanguage === "id" ? "Memuat galeri perjalanan..." : "Loading journey gallery..."}
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fdf6e3] to-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gradient-to-b from-[#fdf6e3] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#f8d851]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#eaaf15]/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-20 left-10 animate-pulse invisible md:visible">
        <div className="w-20 h-20 bg-gradient-to-r from-[#eaaf15]/20 to-[#f8d851]/20 rounded-full backdrop-blur-sm flex items-center justify-center shadow-md">
          <Camera className="text-[#eaaf15]" size={24} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className={clsx("text-center mb-16 transition-all duration-1000 ease-out", isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")}
        >
          <div className="inline-flex items-center gap-2 bg-[#eaaf15] text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
            <Camera size={16} />
            {currentLanguage === "id" ? "Galeri Perjalanan Ibadah" : "Pilgrimage Journey Gallery"}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#414042] mb-6 leading-tight">
            Galeri Haji & Umroh
            <span className="bg-gradient-to-r from-[#eaaf15] to-[#f8d851] bg-clip-text text-transparent">
              {" "}Momen Berkesan
            </span>
          </h1>
          <p className="text-xl text-[#414042]/80 leading-relaxed max-w-3xl mx-auto">
            Dokumentasi momen-momen istimewa dari perjalanan ibadah Haji dan Umroh bersama para jamaah setia kami.
          </p>
        </div>

        <div
          className={clsx("bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 mb-12 transition-all duration-1000 ease-out", isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex flex-wrap gap-2 flex-1">
              {categoryOptions.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={clsx("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm", selectedCategory === category ? "bg-[#eaaf15] text-white shadow-lg border border-[#d49d13]" : "bg-[#fdf6e3] text-[#414042] hover:bg-[#fcecc5] border border-gray-200")}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input type="text" placeholder={currentLanguage === "id" ? "Cari galeri Umroh, Haji, Ziarah..." : "Search Umrah, Hajj, Ziyarah gallery..."} value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#eaaf15] focus:border-transparent transition-all duration-300 shadow-sm" />
            </div>
          </div>
        </div>

        <div
          className={clsx("mb-16 transition-all duration-1000 ease-out", isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-2 mb-8">
            <ImageIcon className="text-[#eaaf15]" size={24} />
            <h2 className="text-2xl font-bold text-[#414042]">
              {currentLanguage === "id" ? "Momen Perjalanan Terbaru" : "Latest Journey Moments"}
            </h2>
          </div>

          {paginatedGalleries.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-medium text-[#414042] mb-2">
                {currentLanguage === "id" ? "Tidak ada galeri perjalanan ditemukan" : "No journey galleries found"}
              </h3>
              <p className="text-gray-500">{currentLanguage === "id" ? "Coba ubah kata kunci pencarian atau kategori" : "Try changing your search keywords or category"}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedGalleries.map((gallery: GalleryItem, index: number) => (
                <article
                  key={gallery.id}
                  className={clsx("bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl hover:shadow-[#f8d851]/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 cursor-pointer", isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                  onClick={() => setSelectedGallery(gallery)}
                >
                  <div className="relative overflow-hidden">
                    <Image src={gallery.coverImage} alt={gallery.title} width={400} height={250} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                    {gallery.trending && (<div className="absolute top-4 right-4"><span className="bg-[#f8d851] text-[#414042] px-2 py-1 rounded-full text-xs font-bold">HOT</span></div>)}
                    <div className="absolute bottom-4 right-4"><span className="bg-white/90 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center gap-1"><Eye size={12} />{gallery.views.toLocaleString()}</span></div>
                    <div className="absolute bottom-4 left-4"><span className="bg-white/90 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center gap-1"><ImageIcon size={12} />{gallery.totalPhotos}</span></div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="bg-[#fdf6e3] text-[#414042] px-2 py-1 rounded-full text-xs font-medium border border-[#eaaf15]/30">{gallery.category}</span>
                      <span className="text-xs">{new Date(gallery.eventDate).toLocaleDateString(currentLanguage === "id" ? "id-ID" : "en-US")}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#414042] group-hover:text-[#eaaf15] transition-colors duration-300 line-clamp-2">{gallery.title}</h3>
                    <p className="text-[#414042]/80 text-sm line-clamp-2 leading-relaxed">{gallery.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2"><User className="text-gray-500" size={12} /><span className="text-xs text-gray-600">{gallery.photographer}</span></div>
                      <div className="flex items-center gap-1 text-[#eaaf15] text-sm font-medium group-hover:gap-2 transition-all duration-300">
                        <span>{currentLanguage === "id" ? "Lihat Galeri" : "View Gallery"}</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className={clsx("flex justify-center items-center gap-4 transition-all duration-1000 ease-out", isPageLoaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0")} style={{ transitionDelay: "800ms" }}>
            <button disabled={currentPage === 1} onClick={handlePrevPage} className="bg-white/80 backdrop-blur-sm border border-[#eaaf15]/50 text-[#eaaf15] hover:bg-[#eaaf15] hover:text-white hover:shadow-lg hover:shadow-[#f8d851]/30 transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed">{currentLanguage === "id" ? "Sebelumnya" : "Previous"}</button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_: undefined, i: number) => (<button key={i} onClick={() => setCurrentPage(i + 1)} className={clsx(`w-10 h-10 rounded-full font-medium transition-all duration-300`, currentPage === i + 1 ? "bg-[#eaaf15] text-white shadow-lg shadow-[#f8d851]/40" : "bg-white/80 text-gray-700 hover:bg-[#fdf6e3] hover:text-[#414042] border border-gray-100")}>{i + 1}</button>))}
            </div>
            <button disabled={currentPage === totalPages} onClick={handleNextPage} className="bg-white/80 backdrop-blur-sm border border-[#eaaf15]/50 text-[#eaaf15] hover:bg-[#eaaf15] hover:text-white hover:shadow-lg hover:shadow-[#f8d851]/30 transform hover:scale-105 transition-all duration-300 rounded-full px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed">{currentLanguage === "id" ? "Selanjutnya" : "Next"}</button>
          </div>
        )}
      </div>

      <GalleryDetailModal gallery={selectedGallery} isOpen={!!selectedGallery} onClose={() => setSelectedGallery(null)} currentLanguage={currentLanguage} />
    </section>
  );
}