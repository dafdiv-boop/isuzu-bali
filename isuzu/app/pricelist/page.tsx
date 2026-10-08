"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  ChevronRight,
  Globe,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Search,
  Sun,
  Tag,
  X,
} from "lucide-react";

/* =========================================================
   ISUZU BALI — PRICE LIST 2026
   Selaras dengan tampilan halaman beranda
   ========================================================= */

const MARKETING_WA = "6281337680343";
const MARKETING_PHONE = "081337680343";
const MARKETING_EMAIL = "arisetyawan449@gmail.com";
const MARKETING_NAME = "Ari Setyawan";
const OFFICE_NAME = "Astra Isuzu Denpasar";
const OFFICE_ADDRESS = "Jl. Cokroaminoto No. 52 Denpasar";

type Lang = "id" | "en";

type PriceItem = {
  type: string;
  price: number;
  image: string;
  note?: string;
};

type PriceSection = {
  id: string;
  title: string;
  titleEn: string;
  shortTitle: string;
  shortTitleEn: string;
  items: PriceItem[];
};

const copy = {
  id: {
    navHome: "Beranda",
    navWhy: "Kenapa Isuzu",
    navProduct: "Produk",
    navPromo: "Promo",
    navPrice: "Daftar Harga",
    navGallery: "Galeri",
    navAbout: "Tentang Saya",
    navContact: "Kontak",
    chatWa: "Chat WhatsApp",
    heroTag: "DAFTAR HARGA ISUZU BALI",
    heroTitle1: "DAFTAR HARGA",
    heroTitle2: "ISUZU 2026",
    heroDesc:
      "Pilih kendaraan Isuzu sesuai kebutuhan Anda. Setiap harga dilengkapi gambar unit dan tombol konsultasi langsung ke WhatsApp.",
    searchPlaceholder:
      "Cari tipe unit, contoh: NLR, NMR, FVM, TRAGA, D-MAX...",
    all: "Semua",
    priceLabel: "Harga OTR",
    askUnit: "Tanya Unit",
    variants: "Varian",
    noResultTitle: "Tipe kendaraan tidak ditemukan",
    noResultDesc: "Coba gunakan kata pencarian atau kategori lain.",
    priceNoteTitle: "Catatan Harga",
    priceNote:
      "Harga merupakan referensi Price List Isuzu 2026 dan dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Harga final, promo, stok, warna, karoseri, serta skema kredit silakan dikonfirmasi langsung kepada Sales Consultant.",
    ctaTag: "BUTUH PENAWARAN?",
    ctaTitle: "Konsultasikan unit yang Anda butuhkan.",
    ctaDesc:
      "Saya bantu cek harga terbaru, promo, stok, simulasi kredit, serta pilihan unit yang sesuai kebutuhan usaha Anda.",
    ctaButton: "Konsultasi via WhatsApp",
    navigation: "Navigasi",
    contact: "Kontak",
    rights: "All rights reserved.",
  },
  en: {
    navHome: "Home",
    navWhy: "Why Isuzu",
    navProduct: "Products",
    navPromo: "Promos",
    navPrice: "Price List",
    navGallery: "Gallery",
    navAbout: "About Me",
    navContact: "Contact",
    chatWa: "Chat WhatsApp",
    heroTag: "ISUZU BALI PRICE LIST",
    heroTitle1: "ISUZU",
    heroTitle2: "PRICE LIST 2026",
    heroDesc:
      "Choose the right Isuzu vehicle for your needs. Each price includes a unit image and direct WhatsApp consultation.",
    searchPlaceholder:
      "Search unit type, e.g. NLR, NMR, FVM, TRAGA, D-MAX...",
    all: "All",
    priceLabel: "OTR Price",
    askUnit: "Ask Unit",
    variants: "Variants",
    noResultTitle: "Vehicle type not found",
    noResultDesc: "Try another keyword or category.",
    priceNoteTitle: "Price Note",
    priceNote:
      "Prices are references from the 2026 Isuzu Price List and may change without prior notice. Final price, promotions, stock, color, body application, and financing scheme should be confirmed directly with the Sales Consultant.",
    ctaTag: "NEED AN OFFER?",
    ctaTitle: "Consult the unit you need.",
    ctaDesc:
      "I can help check the latest price, promotion, stock, financing simulation, and the best unit for your business needs.",
    ctaButton: "Consult via WhatsApp",
    navigation: "Navigation",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

const priceSections: PriceSection[] = [
  {
    id: "elf-4-roda",
    title: "PRICELIST ISUZU ELF (N SERIES) 4 RODA (EURO 4)",
    titleEn: "ISUZU ELF (N SERIES) 4 WHEEL PRICE LIST (EURO 4)",
    shortTitle: "ELF 4 Roda",
    shortTitleEn: "ELF 4 Wheel",
    items: [
      { type: "NLR", price: 448_000_000, image: "/assets/products/elf-nlr.png" },
      { type: "NLR L", price: 466_000_000, image: "/assets/products/elf-nlr.png" },
      { type: "NLR B", price: 458_000_000, image: "/assets/products/elf-nlr.png" },
      { type: "NLR B L", price: 473_000_000, image: "/assets/products/elf-nlr.png" },
      { type: "NQR B", price: 543_000_000, image: "/assets/products/elf-nqr.png" },
      {
        type: "NLR B MICROBUS AC NA",
        price: 622_000_000,
        image: "/assets/products/elf-microbus.png",
      },
      {
        type: "NLR B L MICROBUS NA",
        price: 668_000_000,
        image: "/assets/products/elf-microbus.png",
      },
    ],
  },
  {
    id: "elf-6-roda",
    title: "PRICELIST ISUZU ELF (N SERIES) 6 RODA (EURO 4)",
    titleEn: "ISUZU ELF (N SERIES) 6 WHEEL PRICE LIST (EURO 4)",
    shortTitle: "ELF 6 Roda",
    shortTitleEn: "ELF 6 Wheel",
    items: [
      { type: "NMR", price: 535_000_000, image: "/assets/products/elf-nmr.png" },
      { type: "NMR L", price: 543_000_000, image: "/assets/products/elf-nmr.png" },
      { type: "NMR HD 5.8", price: 549_000_000, image: "/assets/products/elf-nmr.png" },
      { type: "NMR HD 6.5", price: 561_000_000, image: "/assets/products/elf-nmr.png" },
      {
        type: "NPS 4 X 4",
        price: 919_000_000,
        image: "/assets/products/elf-nps.png",
        note: "OFF THE ROAD",
      },
    ],
  },
  {
    id: "giga-f-series",
    title: "ISUZU GIGA F SERIES EURO 4",
    titleEn: "ISUZU GIGA F SERIES EURO 4",
    shortTitle: "GIGA F Series",
    shortTitleEn: "GIGA F Series",
    items: [
      { type: "FRR Q", price: 636_000_000, image: "/assets/products/giga-frr.png" },
      { type: "FTR P", price: 708_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FTR S", price: 712_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FTR T", price: 720_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVR L D", price: 789_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVR P", price: 795_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVR Q", price: 806_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVR S", price: 805_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVR U", price: 816_000_000, image: "/assets/products/giga-ftr.png" },
      { type: "FVM N", price: 930_000_000, image: "/assets/products/giga-fvm.png" },
      { type: "FVM U", price: 943_000_000, image: "/assets/products/giga-fvm.png" },
      { type: "FVM U HP", price: 996_000_000, image: "/assets/products/giga-fvm.png" },
      { type: "FVM U HP ABS", price: 1_012_000_000, image: "/assets/products/giga-fvm.png" },
    ],
  },
  {
    id: "tractor-head",
    title: "PRICELIST ISUZU TRAKTOR HEAD (EURO 4)",
    titleEn: "ISUZU TRACTOR HEAD PRICE LIST (EURO 4)",
    shortTitle: "Tractor Head",
    shortTitleEn: "Tractor Head",
    items: [
      { type: "GVR J", price: 835_000_000, image: "/assets/products/giga-tractor.png" },
      { type: "GVR J HP ABS", price: 905_000_000, image: "/assets/products/giga-tractor.png" },
      { type: "GVZ K HP ABS", price: 1_200_000_000, image: "/assets/products/giga-tractor.png" },
      { type: "GXZ K ABS", price: 1_348_000_000, image: "/assets/products/giga-tractor.png" },
    ],
  },
  {
    id: "mu-x",
    title: "PRICELIST ISUZU MU-X",
    titleEn: "ISUZU MU-X PRICE LIST",
    shortTitle: "MU-X",
    shortTitleEn: "MU-X",
    items: [
      {
        type: "All New Mu-X (4X4) 1.9 AT",
        price: 665_700_000,
        image: "/assets/products/mux.png",
      },
    ],
  },
  {
    id: "d-max",
    title:
      "PRICELIST D-MAX 4×4 : POWER STEERING – MANUAL TRANSMISSION / AUTOMATIC",
    titleEn:
      "D-MAX 4×4 PRICE LIST : POWER STEERING – MANUAL / AUTOMATIC TRANSMISSION",
    shortTitle: "D-MAX",
    shortTitleEn: "D-MAX",
    items: [
      {
        type: "All New D-Max SC 1.9 MT",
        price: 437_100_000,
        image: "/assets/products/d-max.png",
      },
      {
        type: "All New D-Max DC RODEO MT",
        price: 551_900_000,
        image: "/assets/products/d-max.png",
      },
    ],
  },
  {
    id: "traga",
    title: "PRICELIST ISUZU TRAGA EURO 4",
    titleEn: "ISUZU TRAGA EURO 4 PRICE LIST",
    shortTitle: "TRAGA",
    shortTitleEn: "TRAGA",
    items: [
      {
        type: "Traga Pick Up FD",
        price: 308_000_000,
        image: "/assets/products/traga.png",
      },
      {
        type: "Traga PICK UP BLACK PREMIUM",
        price: 310_000_000,
        image: "/assets/products/traga.png",
      },
      {
        type: "Traga BOX SEMI ALMUNIUM",
        price: 350_000_000,
        image: "/assets/products/traga.png",
      },
      {
        type: "Traga BOX BUS",
        price: 522_000_000,
        image: "/assets/products/traga.png",
      },
      {
        type: "Traga Pick Up FD AC",
        price: 317_000_000,
        image: "/assets/products/traga.png",
      },
      {
        type: "Traga PICK UP BLACK PREMIUM AC",
        price: 319_000_000,
        image: "/assets/products/traga.png",
      },
    ],
  },
  {
    id: "new-f-series",
    title: "PRICELIST NEW F-SERIES ISUZU EURO 4",
    titleEn: "NEW ISUZU F-SERIES EURO 4 PRICE LIST",
    shortTitle: "New F-Series",
    shortTitleEn: "New F-Series",
    items: [
      {
        type: "FVZ 34 N HP 61 N",
        price: 1_166_000_000,
        image: "/assets/products/giga-fvz.png",
      },
      {
        type: "FVZ U HP MX",
        price: 1_161_000_000,
        image: "/assets/products/giga-fvz.png",
      },
      {
        type: "FVZ U HP",
        price: 1_187_000_000,
        image: "/assets/products/giga-fvz.png",
      },
    ],
  },
];

const formatRupiah = (value: number) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;

function SectionDivider({ darkMode }: { darkMode: boolean }) {
  return (
    <div
      className={`relative flex h-12 w-full select-none items-center justify-center overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div
        className={`absolute inset-x-0 h-[1px] ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-red-600/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
        }`}
      />
      <div
        className={`relative z-10 flex items-center gap-2 rounded-full border px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm ${
          darkMode
            ? "border-slate-800 bg-slate-900 text-red-400"
            : "border-slate-200 bg-slate-50 text-red-600"
        }`}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600" />
        <span>ISUZU BALI</span>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600" />
      </div>
    </div>
  );
}

export default function PriceListPage() {
  const [lang, setLang] = useState<Lang>("id");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");

  const dict = copy[lang];

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${MARKETING_WA}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const visibleSections = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return priceSections
      .filter((section) =>
        activeCategory === "semua" ? true : section.id === activeCategory
      )
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          if (!keyword) return true;

          return (
            item.type.toLowerCase().includes(keyword) ||
            section.title.toLowerCase().includes(keyword) ||
            section.titleEn.toLowerCase().includes(keyword)
          );
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, search]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-[#f8fafc] text-slate-800"
      }`}
    >
      {/* =====================================================
          NAVBAR — diselaraskan dengan homepage
          ===================================================== */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
          darkMode
            ? "border-slate-800 bg-slate-900/90"
            : "border-slate-200/80 bg-white/95 shadow-sm"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/#beranda" className="flex shrink-0 items-center gap-2">
            <img
              src="/assets/logo/logo-isuzu.png"
              alt="Isuzu"
              className="h-16 w-auto object-contain md:h-20"
            />
            <span
              className={`border-l pl-2 text-lg font-black tracking-[0.18em] text-red-600 ${
                darkMode ? "border-slate-700" : "border-slate-300"
              }`}
            >
              BALI
            </span>
          </a>

          <div
            className={`hidden items-center gap-6 text-[12px] font-bold lg:flex ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <a href="/#beranda" className="transition hover:text-red-600">
              {dict.navHome}
            </a>
            <a href="/#keunggulan" className="transition hover:text-red-600">
              {dict.navWhy}
            </a>
            <a href="/#produk" className="transition hover:text-red-600">
              {dict.navProduct}
            </a>
            <a href="/#promo" className="transition hover:text-red-600">
              {dict.navPromo}
            </a>
            <a
              href="/pricelist"
              className={`font-extrabold transition ${
                darkMode
                  ? "text-red-400 hover:text-red-300"
                  : "text-red-600 hover:text-red-700"
              }`}
            >
              {dict.navPrice}
            </a>
            <a href="/#galeri" className="transition hover:text-red-600">
              {dict.navGallery}
            </a>
            <a href="/#tentang" className="transition hover:text-red-600">
              {dict.navAbout}
            </a>
            <a href="/#kontak" className="transition hover:text-red-600">
              {dict.navContact}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                darkMode
                  ? "border-slate-700 bg-slate-800 text-slate-200"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
              title="Ganti Bahasa / Change Language"
            >
              <Globe className="h-3.5 w-3.5 text-red-600" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition ${
                darkMode
                  ? "border-slate-700 bg-slate-800 text-yellow-400"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
              title="Ganti Tema"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() =>
                openWhatsApp(
                  `Halo Pak ${MARKETING_NAME}, saya ingin konsultasi mengenai kendaraan Isuzu.`
                )
              }
              className="hidden items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-xs font-black text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 sm:flex"
            >
              <Phone className="h-4 w-4" />
              {dict.chatWa}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden ${
                darkMode
                  ? "border-slate-700 bg-slate-800 text-slate-200"
                  : "border-slate-200 bg-white text-slate-800"
              }`}
              aria-label="Menu"
            >
              {mobileMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div
            className={`space-y-1 border-t px-5 py-4 shadow-xl transition-colors lg:hidden ${
              darkMode
                ? "border-slate-800 bg-slate-900"
                : "border-slate-100 bg-white"
            }`}
          >
            {[
              [dict.navHome, "/#beranda"],
              [dict.navWhy, "/#keunggulan"],
              [dict.navProduct, "/#produk"],
              [dict.navPromo, "/#promo"],
              [dict.navPrice, "/pricelist"],
              [dict.navGallery, "/#galeri"],
              [dict.navAbout, "/#tentang"],
              [dict.navContact, "/#kontak"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenu(false)}
                className={`block py-3 text-sm font-bold transition ${
                  href === "/pricelist"
                    ? darkMode
                      ? "text-red-400"
                      : "text-red-600"
                    : darkMode
                    ? "text-slate-200 hover:text-red-500"
                    : "text-slate-700 hover:text-red-600"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="relative overflow-hidden bg-[#071827] pt-[70px] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#071827]/90 to-[#12345b]/70" />
        <div className="absolute -right-20 -top-16 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <Tag className="h-3.5 w-3.5 text-red-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.18em]">
                {dict.heroTag}
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-[58px]">
              {dict.heroTitle1}
              <br />
              <span className="text-red-500">{dict.heroTitle2}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              {dict.heroDesc}
            </p>

            <button
              onClick={() =>
                openWhatsApp(
                  `Halo Pak ${MARKETING_NAME}, saya ingin konsultasi mengenai Price List Isuzu 2026.`
                )
              }
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-red-600/30 transition hover:bg-red-700"
            >
              <MessageSquare className="h-4 w-4" />
              {dict.ctaButton}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          FILTER
          ===================================================== */}
      <section
        className={`sticky top-[70px] z-40 border-b py-4 backdrop-blur-xl ${
          darkMode
            ? "border-slate-800 bg-slate-950/95"
            : "border-slate-200 bg-[#f8fafc]/95"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
            <div
              className={`relative min-w-0 flex-1 rounded-xl border ${
                darkMode
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={dict.searchPlaceholder}
                className={`w-full bg-transparent py-3.5 pl-11 pr-4 text-sm outline-none ${
                  darkMode
                    ? "text-white placeholder:text-slate-500"
                    : "text-slate-800 placeholder:text-slate-400"
                }`}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 xl:pb-0">
              <button
                type="button"
                onClick={() => setActiveCategory("semua")}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-black transition ${
                  activeCategory === "semua"
                    ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20"
                    : darkMode
                    ? "border-slate-800 bg-slate-900 text-slate-300 hover:border-red-500 hover:text-red-400"
                    : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:text-red-600"
                }`}
              >
                {dict.all}
              </button>

              {priceSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveCategory(section.id)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-black transition ${
                    activeCategory === section.id
                      ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-600/20"
                      : darkMode
                      ? "border-slate-800 bg-slate-900 text-slate-300 hover:border-red-500 hover:text-red-400"
                      : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:text-red-600"
                  }`}
                >
                  {lang === "en" ? section.shortTitleEn : section.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICE CARDS — mirip product cards homepage
          ===================================================== */}
      <section
        className={`relative z-10 px-5 py-14 lg:px-8 lg:py-20 ${
          darkMode ? "bg-slate-950" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-14">
          {visibleSections.map((section) => (
            <div key={section.id} id={section.id}>
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                    PRICE LIST 2026
                  </span>
                  <h2
                    className={`mt-1 text-2xl font-black leading-tight md:text-3xl ${
                      darkMode ? "text-white" : "text-[#12345b]"
                    }`}
                  >
                    {lang === "en" ? section.titleEn : section.title}
                  </h2>
                </div>

                <span
                  className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black ${
                    darkMode
                      ? "border-slate-700 bg-slate-900 text-slate-300"
                      : "border-slate-200 bg-slate-50 text-slate-500"
                  }`}
                >
                  <BadgeCheck className="h-3.5 w-3.5 text-red-500" />
                  {section.items.length} {dict.variants}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.items.map((item) => (
                  <article
                    key={`${section.id}-${item.type}`}
                    className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      darkMode
                        ? "border-slate-800 bg-slate-900"
                        : "border-slate-200/80 bg-white"
                    }`}
                  >
                    <div
                      className={`relative flex h-48 items-center justify-center overflow-hidden ${
                        darkMode ? "bg-slate-900/50" : "bg-white"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.type}
                        className="relative z-10 h-full w-full object-contain p-2 drop-shadow-[0_16px_14px_rgba(15,23,42,0.18)] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.10]"
                        onError={(event) => {
                          event.currentTarget.src =
                            "/assets/logo/logo-isuzu.png";
                        }}
                      />

                      <div className="absolute left-3 top-3 z-20">
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1.5 text-[9px] font-black shadow-sm ${
                            darkMode
                              ? "border-slate-700 bg-slate-800 text-slate-200"
                              : "border-slate-200 bg-white/95 text-[#12345b]"
                          }`}
                        >
                          {lang === "en"
                            ? section.shortTitleEn
                            : section.shortTitle}
                        </span>
                      </div>

                      {item.note && (
                        <div className="absolute right-3 top-3 z-20">
                          <span className="inline-flex rounded-full bg-amber-500 px-2.5 py-1.5 text-[9px] font-black text-white shadow-sm">
                            {item.note}
                          </span>
                        </div>
                      )}
                    </div>

                    <div
                      className={`px-4 pb-4 pt-4 ${
                        darkMode ? "bg-slate-900" : "bg-white"
                      }`}
                    >
                      <h3
                        className={`min-h-[42px] text-base font-black leading-5 tracking-tight transition-colors group-hover:text-red-500 ${
                          darkMode ? "text-white" : "text-[#12345b]"
                        }`}
                      >
                        {item.type}
                      </h3>

                      <div className="mt-4">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          {dict.priceLabel}
                        </p>
                        <p
                          className={`mt-1 text-lg font-black ${
                            darkMode ? "text-white" : "text-slate-800"
                          }`}
                        >
                          {formatRupiah(item.price)}
                        </p>
                      </div>

                      <div
                        className={`mt-4 border-t pt-3 ${
                          darkMode ? "border-slate-800" : "border-slate-100"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            openWhatsApp(
                              `Halo Pak ${MARKETING_NAME}, saya melihat Price List Isuzu 2026 dan tertarik dengan ${item.type} dengan harga referensi ${formatRupiah(
                                item.price
                              )}. Mohon informasi harga terbaru, promo, stok unit, dan simulasi kreditnya.`
                            )
                          }
                          className="flex w-full items-center justify-between rounded-xl bg-red-600 px-4 py-3 text-xs font-black text-white shadow-md shadow-red-600/20 transition hover:bg-red-700"
                        >
                          <span className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            {dict.askUnit}
                          </span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {visibleSections.length === 0 && (
            <div
              className={`rounded-3xl border p-12 text-center ${
                darkMode
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <Search className="mx-auto h-8 w-8 text-slate-400" />
              <h3 className="mt-4 text-lg font-black">
                {dict.noResultTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {dict.noResultDesc}
              </p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          NOTE + CTA
          ===================================================== */}
      <section
        className={`px-5 py-14 lg:px-8 ${
          darkMode ? "bg-slate-900/40" : "bg-[#f4f7fa]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={`rounded-3xl border p-5 md:p-7 ${
              darkMode
                ? "border-slate-800 bg-slate-900"
                : "border-amber-200 bg-amber-50/70"
            }`}
          >
            <div className="flex items-start gap-3">
              <Tag className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
              <div>
                <h3
                  className={`font-black ${
                    darkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {dict.priceNoteTitle}
                </h3>
                <p
                  className={`mt-1 text-xs leading-6 md:text-sm ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {dict.priceNote}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#071827] px-6 py-8 text-white md:px-10 md:py-10">
            <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
                  {dict.ctaTag}
                </span>
                <h2 className="mt-2 text-2xl font-black md:text-3xl">
                  {dict.ctaTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-300">
                  {dict.ctaDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    `Halo Pak ${MARKETING_NAME}, saya sudah melihat Price List Isuzu 2026. Saya ingin konsultasi unit dan mendapatkan penawaran terbaik.`
                  )
                }
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm font-black shadow-xl shadow-red-600/20 transition hover:bg-red-700"
              >
                <MessageSquare className="h-4 w-4" />
                {dict.ctaButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER — diselaraskan dengan homepage
          ===================================================== */}
      <footer
        className={`relative z-10 overflow-hidden px-5 py-10 transition-colors lg:px-8 ${
          darkMode
            ? "border-t border-slate-800 bg-slate-950 text-slate-400"
            : "bg-[#061521] text-slate-400"
        }`}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <img
                src="/assets/logo/logo-isuzu.png"
                alt="Isuzu Bali"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <p className="mt-3 text-xs text-slate-500">
                REAL PARTNER, REAL JOURNEY.
              </p>
              <p className="mt-4 text-sm font-bold text-slate-300">
                {MARKETING_NAME}
              </p>
              <p className="mt-1 text-xs">Sales Consultant Isuzu Bali</p>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">
                {dict.navigation}
              </p>
              <div className="grid grid-cols-2 gap-y-3 text-xs">
                <a href="/#beranda" className="hover:text-white">
                  {dict.navHome}
                </a>
                <a href="/#keunggulan" className="hover:text-white">
                  {dict.navWhy}
                </a>
                <a href="/#produk" className="hover:text-white">
                  {dict.navProduct}
                </a>
                <a href="/#promo" className="hover:text-white">
                  {dict.navPromo}
                </a>
                <a
                  href="/pricelist"
                  className="font-bold text-red-400 hover:text-red-300"
                >
                  {dict.navPrice}
                </a>
                <a href="/#galeri" className="hover:text-white">
                  {dict.navGallery}
                </a>
                <a href="/#tentang" className="hover:text-white">
                  {dict.navAbout}
                </a>
                <a href="/#kontak" className="hover:text-white">
                  {dict.navContact}
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-white">
                {dict.contact}
              </p>
              <a
                href={`https://wa.me/${MARKETING_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs transition hover:text-white"
              >
                WhatsApp · {MARKETING_PHONE}
              </a>
              <a
                href={`mailto:${MARKETING_EMAIL}`}
                className="mt-2 block break-all text-xs transition hover:text-white"
              >
                {MARKETING_EMAIL}
              </a>

              <div className="mt-4 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                <p className="text-xs leading-5">
                  <strong className="text-slate-300">{OFFICE_NAME}</strong>
                  <br />
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] sm:flex-row">
            <span>
              © 2026 {MARKETING_NAME}. {dict.rights}
            </span>
            <span>Personal Marketing Isuzu Bali · Astra Isuzu Denpasar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
