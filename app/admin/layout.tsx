"use client";
import React, { useState, useEffect } from "react";
import {
  User,
  GraduationCap,
  Phone,
  ImageIcon,
  HelpCircle,
  BookText,
  HomeIcon,
} from "lucide-react";
import Header from "@/components/admin-components/header";
import Sidebar from "@/components/admin-components/sidebar";
import { AdminLayoutProps, MenuItem } from "@/types";

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems: MenuItem[] = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon className="h-5 w-5" />,
      href: "/admin/home",
      children: [
        { id: "hero", label: "Hero", href: "/admin/home/hero" },
        { id: "slider", label: "Slider", href: "/admin/home/slider" },
        { id: "tentang", label: "Tentang", href: "/admin/home/tentang" },
        { id: "cara", label: "Cara", href: "/admin/home/cara" },
        { id: "mengapa", label: "Mengapa", href: "/admin/home/mengapa" },
        { id: "cta", label: "CTA", href: "/admin/home/cta" },
      ],
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="h-5 w-5" />,
      href: "/admin/profile/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/profile/breadcrumb",
        },
        { id: "tentang", label: "Tentang", href: "/admin/profile/tentang" },
        { id: "mengapa", label: "Mengapa", href: "/admin/profile/mengapa" },
        {
          id: "tenaga-pendidik-informasi",
          label: "Tenaga Pendidik Informasi",
          href: "/admin/profile/tenaga-pendidik-informasi",
        },
        {
          id: "tenaga-pendidik-konten",
          label: "Tenaga Pendidik Konten",
          href: "/admin/profile/tenaga-pendidik-konten",
        },
        {
          id: "alumni-informasi",
          label: "Alumni Informasi",
          href: "/admin/profile/alumni-informasi",
        },
        {
          id: "alumni-konten",
          label: "Alumni Konten",
          href: "/admin/profile/alumni-konten",
        },
      ],
    },
    {
      id: "berita",
      label: "Berita",
      icon: <BookText className="h-5 w-5" />,
      href: "/admin/berita/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/berita/breadcrumb",
        },
        { id: "kategori", label: "Kategori", href: "/admin/berita/kategori" },
        { id: "konten", label: "Konten", href: "/admin/berita/konten" },
      ],
    },
    {
      id: "faq",
      label: "FAQ",
      icon: <HelpCircle className="h-5 w-5" />,
      href: "/admin/faq/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/faq/breadcrumb",
        },
        { id: "kategori", label: "Kategori", href: "/admin/faq/kategori" },
        { id: "konten", label: "Konten", href: "/admin/faq/konten" },
      ],
    },
    {
      id: "umroh",
      label: "Paket Umroh",
      icon: <ImageIcon className="h-5 w-5" />,
      href: "/admin/umroh/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/umroh/breadcrumb",
        },
        { id: "kategori", label: "Kategori", href: "/admin/umroh/kategori" },
        { id: "informasi", label: "Informasi", href: "/admin/umroh/informasi" },
        { id: "paket", label: "Paket", href: "/admin/umroh/paket" },
      ],
    },
    {
      id: "paket-haji",
      label: "Paket Haji",
      icon: <ImageIcon className="h-5 w-5" />,
      href: "/admin/haji/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/haji/breadcrumb",
        },
        { id: "kategori", label: "Kategori", href: "/admin/haji/kategori" },
        { id: "informasi", label: "Informasi", href: "/admin/haji/informasi" },
        { id: "paket", label: "Paket", href: "/admin/haji/paket" },
      ],
    },
    {
      id: "galeri",
      label: "Galeri",
      icon: <ImageIcon className="h-5 w-5" />,
      href: "/admin/galeri/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/galeri/breadcrumb",
        },
        { id: "kategori", label: "Kategori", href: "/admin/galeri/kategori" },
        { id: "konten", label: "Konten", href: "/admin/galeri/konten" },
      ],
    },
    {
      id: "hubungi-kami",
      label: "Hubungi Kami",
      icon: <Phone className="h-5 w-5" />,
      href: "/admin/hubungi-kami/breadcrumb",
      children: [
        {
          id: "breadcrumb",
          label: "Breadcrumb",
          href: "/admin/hubungi-kami/breadcrumb",
        },
        {
          id: "information",
          label: "Information",
          href: "/admin/hubungi-kami/information",
        },
      ],
    },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        menuItems={menuItems}
      />

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} title={title} />

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
