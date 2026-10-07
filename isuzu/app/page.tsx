"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Phone,
  Tag,
  CreditCard,
  ShieldCheck,
  MapPin,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Camera,
  CalendarDays,
  Mail,
  Menu,
  X,
  UserRound,
  BadgeCheck,
  Sun,
  Moon,
  Globe,
  CheckCircle2,
  SlidersHorizontal,
  Gift,
  Wrench,
  Truck,
  Headphones,
} from "lucide-react";

/* =========================================================
   ISUZU BALI — PERSONAL MARKETING WEBSITE
   Sales Consultant: Aris Setyawan
   ========================================================= */

const MARKETING_WA = "6281337680343";
const MARKETING_PHONE = "081337680343";
const MARKETING_EMAIL = "arisetyawan449@gmail.com";
const MARKETING_NAME = "Aris Setyawan";
const OFFICE_NAME = "Astra Isuzu Denpasar";
const OFFICE_ADDRESS = "Jl. Cokroaminoto No. 52 Denpasar";

const PROFILE_IMAGE = "/assets/profil/aris-setyawan.jpeg";

/* =========================================================
   Kamus Bahasa (ID & EN)
   ========================================================= */
const t = {
  id: {
    brandSubtitle: "Sales Consultant Isuzu Bali",
    heroTitle1: "KENDARAAN NIAGA",
    heroTitle2: "UNTUK BISNIS YANG",
    heroTitle3: "TERUS BERGERAK.",
    heroDesc: "Saya <strong>Aris Setyawan</strong>, siap membantu Anda memilih kendaraan Isuzu yang sesuai kebutuhan usaha, simulasi kredit, hingga proses pembelian dan serah terima unit.",
    viewProducts: "Lihat Produk",
    viewPromo: "Lihat Promo",
    officialDealer: "Dealer Resmi",
    freeConsult: "Konsultasi Gratis",
    creditLeasing: "Kredit & Leasing",
    whyTag: "KEUNGGULAN KAMI",
    whyTitle: "Kenapa Harus Isuzu?",
    whyDesc: "Alasan utama mengapa kendaraan Isuzu menjadi pilihan terbaik untuk menunjang mobilitas dan pertumbuhan bisnis Anda.",
    productTag: "PRODUK ISUZU",
    productTitle: "Pilih Sesuai Kebutuhan Bisnis",
    productDesc: "Klik pada produk untuk melihat spesifikasi lengkap, keunggulan, dan simulasi pemesanan.",
    all: "Semua",
    lightCommercial: "Niaga Ringan",
    truck: "Truk",
    suv: "SUV",
    consult: "Konsultasi",
    showLess: "Tampilkan 5 Unit",
    showMore: "Lihat Semua Produk",
    promoTag: "PROMO & PROGRAM ISUZU",
    promoTitle: "Penawaran yang Sedang Berjalan",
    promoDesc: "Promo dapat diperbarui kapan saja. Semua materi promo diambil dari folder assets/promosi.",
    viewPromoBtn: "Lihat Promo",
    ask: "Tanya",
    galleryTag: "GALERI / AKTIVITAS",
    galleryTitle1: "Momen Bersama",
    galleryTitle2: "Pelanggan Saya",
    galleryDesc: "Dokumentasi penyerahan unit, unit terjual, aktivitas marketing, dan momen bersama pelanggan Isuzu Bali.",
    stepWithIsuzu: "Bersama Isuzu",
    stepFarther: "MELANGKAH LEBIH JAUH",
    marketingDoc: "Dokumentasi Marketing",
    aboutTag: "TENTANG SAYA",
    aboutTitle1: "Bantu Anda Menemukan",
    aboutTitle2: "Isuzu yang Tepat.",
    aboutDesc: "Saya membantu pelanggan di Bali menemukan kendaraan Isuzu yang sesuai dengan kebutuhan bisnis, mulai dari kendaraan niaga ringan, truk, hingga kendaraan penumpang.",
    service1Title: "Konsultasi",
    service1Desc: "Menentukan unit sesuai jenis usaha dan kebutuhan operasional.",
    service2Title: "Simulasi",
    service2Desc: "Membantu menghitung pilihan kredit, leasing, dan promo.",
    service3Title: "Pendampingan",
    service3Desc: "Mendampingi proses hingga kendaraan diterima pelanggan.",
    formTag: "MINTA PENAWARAN",
    formTitle: "Ceritakan Kebutuhan Anda",
    formNote: "Isi singkat saja. Pesan akan langsung diteruskan ke WhatsApp Aris Setyawan.",
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    whatsappLabel: "WhatsApp",
    vehicleLabel: "Kendaraan yang diminati",
    needLabel: "Kebutuhan / pertanyaan",
    needPlaceholder: "Contoh: butuh kendaraan untuk usaha distribusi...",
    submitBtn: "Kirim Permintaan ke WhatsApp",
    navHome: "Beranda",
    navWhy: "Kenapa Isuzu",
    navProduct: "Produk",
    navPromo: "Promo",
    navGallery: "Galeri",
    navAbout: "Tentang Saya",
    navContact: "Kontak",
    chatWa: "Chat WhatsApp",
    allRights: "All rights reserved.",
    close: "Tutup",
    askPromoWa: "Tanya Promo via WhatsApp",
    detailPromo: "PROMO ISUZU",
    specTitle: "Spesifikasi & Keunggulan Utama",
    engineBadge: "Mesin & Performa",
    capacityBadge: "Kapasitas & Dimensi",
    advantageBadge: "Keunggulan Bisnis",
    askUnitWa: "Tanya Penawaran Unit Ini",
    viewDetails: "Lihat Detail",
  },
  en: {
    brandSubtitle: "Isuzu Bali Sales Consultant",
    heroTitle1: "COMMERCIAL VEHICLES",
    heroTitle2: "FOR A BUSINESS THAT",
    heroTitle3: "KEEPS MOVING.",
    heroDesc: "I am <strong>Aris Setyawan</strong>, ready to help you choose the right Isuzu vehicle for your business needs, credit simulations, to purchase and unit handover processes.",
    viewProducts: "View Products",
    viewPromo: "View Promos",
    officialDealer: "Official Dealer",
    freeConsult: "Free Consultation",
    creditLeasing: "Credit & Leasing",
    whyTag: "OUR ADVANTAGES",
    whyTitle: "Why Choose Isuzu?",
    whyDesc: "Main reasons why Isuzu vehicles are the best choice to support your business mobility and growth.",
    productTag: "ISUZU PRODUCTS",
    productTitle: "Choose According to Business Needs",
    productDesc: "Click on any product to view full specifications, advantages, and inquiry options.",
    all: "All",
    lightCommercial: "Light Commercial",
    truck: "Truck",
    suv: "SUV",
    consult: "Consultation",
    showLess: "Show 5 Units",
    showMore: "View All Products",
    promoTag: "ISUZU PROMOS & PROGRAMS",
    promoTitle: "Ongoing Offers",
    promoDesc: "Promos can be updated anytime. All promo materials are sourced from the assets/promosi folder.",
    viewPromoBtn: "View Promo",
    ask: "Inquire",
    galleryTag: "GALLERY / ACTIVITIES",
    galleryTitle1: "Moments With",
    galleryTitle2: "My Customers",
    galleryDesc: "Documentation of unit handovers, sold units, marketing activities, and moments with Isuzu Bali customers.",
    stepWithIsuzu: "With Isuzu",
    stepFarther: "GOING FURTHER",
    marketingDoc: "Marketing Documentation",
    aboutTag: "ABOUT ME",
    aboutTitle1: "Helping You Find",
    aboutTitle2: "The Right Isuzu.",
    aboutDesc: "I help customers in Bali find Isuzu vehicles tailored to their business needs, ranging from light commercial vehicles, trucks, to passenger vehicles.",
    service1Title: "Consultation",
    service1Desc: "Determining units according to business type and operational needs.",
    service2Title: "Simulation",
    service2Desc: "Helping calculate credit choices, leasing, and promotions.",
    service3Title: "Assistance",
    service3Desc: "Accompanying the process until the vehicle is received by the customer.",
    formTag: "REQUEST A QUOTE",
    formTitle: "Tell Us Your Needs",
    formNote: "Fill it out briefly. The message will be forwarded directly to Aris Setyawan's WhatsApp.",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    whatsappLabel: "WhatsApp",
    vehicleLabel: "Interested Vehicle",
    needLabel: "Needs / Questions",
    needPlaceholder: "Example: need a vehicle for distribution business...",
    submitBtn: "Send Request via WhatsApp",
    navHome: "Home",
    navWhy: "Why Isuzu",
    navProduct: "Products",
    navPromo: "Promos",
    navGallery: "Gallery",
    navAbout: "About Me",
    navContact: "Contact",
    chatWa: "Chat WhatsApp",
    allRights: "All rights reserved.",
    close: "Close",
    askPromoWa: "Inquire Promo via WhatsApp",
    detailPromo: "ISUZU PROMO",
    specTitle: "Specifications & Key Advantages",
    engineBadge: "Engine & Performance",
    capacityBadge: "Capacity & Dimensions",
    advantageBadge: "Business Advantages",
    askUnitWa: "Inquire About This Unit",
    viewDetails: "View Details",
  },
};

/* =========================================================
   PROMO
   ========================================================= */

const promoItems = [
  {
    id: "membership",
    title: "Isuzu Membership Program",
    description: "Program membership dan benefit pelanggan Isuzu. Hubungi saya untuk detail program yang sedang berlaku.",
    base: "/assets/promosi/membership",
  },
  {
    id: "pemasangan",
    title: "Program Pemasangan",
    description: "Informasi program pemasangan dan penawaran Isuzu yang tersedia untuk pelanggan.",
    base: "/assets/promosi/program-pemasangan",
  },
  {
    id: "smartember",
    title: "Smartember",
    description: "Program Smartember dengan berbagai penawaran menarik. Konsultasikan detailnya dengan saya.",
    base: "/assets/promosi/smartember",
  },
];

/* =========================================================
   PRODUCTS
   ========================================================= */

const allProducts = [
  {
    id: "traga",
    name: "TRAGA",
    category: "Niaga Ringan",
    categoryEn: "Light Commercial",
    desc: "Kendaraan niaga hemat bahan bakar untuk berbagai kebutuhan usaha.",
    image: "/assets/products/traga.png",
    engine: "4JA1-CR, Common Rail, Direct Injection dengan VGS Turbo Intercooler (2,499 cc)",
    capacity: "Luas kargo 2.81 x 1.62 meter (Kapasitas muatan hingga 2 ton lebih)",
    advantages: [
      "Kabin lega & ergonomis dilengkapi pengatur arah angin AC",
      "Radius putar lincah 4.5 meter, sangat handal untuk jalanan sempit di Bali",
      "Konsumsi bahan bakar sangat efisien dan bertenaga di tanjakan",
      "Cocok untuk ekspedisi, kurir, box, hingga pick-up terbuka"
    ]
  },
  {
    id: "elf-microbus",
    name: "ELF MICROBUS",
    category: "Niaga Ringan",
    categoryEn: "Light Commercial",
    desc: "Armada transportasi penumpang yang nyaman dan efisien.",
    image: "/assets/products/elf-microbus.png",
    engine: "4JB1-TC / 4HK1-TCC berstandar Euro 4 dengan tenaga handal",
    capacity: "Kapasitas penumpang fleksibel mulai 16 hingga 20 seat",
    advantages: [
      "Pilihan utama armada pariwisata dan travel di Bali",
      "Kabin senyap dengan suspensi empuk kenyamanan maksimal penumpang",
      "Suku cadang mudah didapat dan jaringan bengkel luas",
      "Nilai jual kembali (resale value) sangat tinggi di kelasnya"
    ]
  },
  {
    id: "elf-nlr",
    name: "ELF NLR",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk engkel 4 roda untuk pengiriman dalam kota yang cepat.",
    image: "/assets/products/elf-nlr.png",
    engine: "4JH1-TC Hi-Power Euro 4 (120 PS), responsif dan bertenaga",
    capacity: "GVW (Gross Vehicle Weight) hingga 5.1 ton (4 Ban)",
    advantages: [
      "Dimensi compact sangat lincah bermanuver di area perkotaan",
      "Dilengkapi Exhaust Brake untuk pengereman lebih optimal di turunan",
      "Sistem transmisi baru dengan rasio gigi yang pas untuk tanjakan",
      "Sasis kokoh tahan lama untuk muatan berat"
    ]
  },
  {
    id: "elf-nmr",
    name: "ELF NMR",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk 6 roda tangguh dengan daya angkut ekstra.",
    image: "/assets/products/elf-nmr.png",
    engine: "4HK1-TCC Euro 4 (150 PS) Common Rail direct injection",
    capacity: "GVW hingga 7.5 ton (6 Ban, truk medium duty ringan)",
    advantages: [
      "Tenaga mesin besar tangguh membawa muatan berat lintas kabupaten",
      "Gardan kuat dan tahan banting untuk berbagai kondisi jalan",
      "Kabin lebar memberikan pandangan luas bagi pengemudi",
      "Dilengkapi PTO (Power Take Off) opsional untuk aplikasi dump truck"
    ]
  },
  {
    id: "elf-nps",
    name: "ELF NPS",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk ringan 4x4 untuk medan berat dan perkebunan.",
    image: "/assets/products/elf-nps.png",
    engine: "4HK1-TCC 4WD berstandar Euro 4",
    capacity: "Sistem gerak 4x4 penuh untuk daya cengkeram optimal",
    advantages: [
      "Dirancang khusus untuk medan off-road, proyek konstruksi, & perkebunan",
      "Sistem penggerak 4 roda aktif untuk mengatasi jalan berlumpur/licin",
      "Konstruksi sasis ekstra tebal dan tangguh",
      "Keandalan tinggi di area pertambangan dan daerah terpencil"
    ]
  },
  {
    id: "elf-nqr",
    name: "ELF NQR",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Chassis bus medium untuk angkutan umum dan pariwisata.",
    image: "/assets/products/elf-nqr.png",
    engine: "4HK1-TCC Euro 4 (150 PS) bertenaga & halus",
    capacity: "Medium Bus chassis dengan kapasitas hingga 35 penumpang",
    advantages: [
      "Sasis panjang yang stabil untuk karoseri bus pariwisata modern",
      "Kenyamanan berkendara jarak jauh yang teruji",
      "Mesin common rail efisien solar namun bertenaga di tol/jalur antarkota",
      "Mudah dalam perawatan dan suku cadang terjamin"
    ]
  },
  {
    id: "giga-frr",
    name: "GIGA FRR",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk medium duty efisien untuk kebutuhan logistik.",
    image: "/assets/products/giga-frr.png",
    engine: "4HK1-TCL Euro 4 (190 PS) Heavy Duty Common Rail",
    capacity: "Medium truck 4x2 dengan volume kargo luas",
    advantages: [
      "Efisiensi bahan bakar luar biasa di kelas truk medium",
      "Kabin modern dilengkapi sleeper space untuk kenyamanan pengemudi",
      "Pengereman full air brake sistem angin yang pakem dan aman",
      "Sangat ideal untuk ekspedisi logistik antarkota"
    ]
  },
  {
    id: "giga-ftr",
    name: "GIGA FTR",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk 4x2 bertenaga untuk operasional logistik.",
    image: "/assets/products/giga-ftr.png",
    engine: "6HK1-TCN Euro 4 (210 PS) 6 silinder segaris",
    capacity: "GVW hingga 16 ton dengan performa superior",
    advantages: [
      "Mesin 6 silinder tangguh untuk beban berat dan jarak jauh",
      "Torsi besar pada putaran rendah membuat tarikan awal lebih mantap",
      "Chassis rigid dan kokoh untuk berbagai tipe bodi (wingbox, bak, tangki)",
      "Fitur keselamatan lengkap standar industri logistik modern"
    ]
  },
  {
    id: "giga-fvm",
    name: "GIGA FVM",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk 6x2 dengan volume kargo maksimum.",
    image: "/assets/products/giga-fvm.png",
    engine: "6HK1-TCC Euro 4 (245 PS) Common Rail",
    capacity: "Konfigurasi roda 6x2 dengan GVW hingga 26 ton",
    advantages: [
      "Daya angkut masif dengan ban tambahan (tag axle) yang stabil",
      "Efisiensi tinggi untuk mengangkut muatan berat volume besar",
      "Kenyamanan kabin pengemudi kelas atas mengurangi kelelahan perjalanan",
      "Didukung layanan purna jual Astra Isuzu terpercaya di Bali"
    ]
  },
  {
    id: "giga-fvz",
    name: "GIGA FVZ",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Truk 6x4 tugas berat untuk pertambangan dan konstruksi.",
    image: "/assets/products/giga-fvz.png",
    engine: "6HK1-TCH Euro 4 (285 PS) Heavy Duty",
    capacity: "Konfigurasi 6x4 penggerak ganda khusus medan berat",
    advantages: [
      "Tenaga besar 285 PS siap melibas medan berat quarry & konstruksi",
      "Gardan ganda (double axle) memberikan traksi maksimal di jalan tanah",
      "Struktur sasis dan suspensi dirancang khusus tahan guncangan ekstrem",
      "Pilihan utama kontraktor dan proyek infrastruktur besar"
    ]
  },
  {
    id: "giga-tractor",
    name: "GIGA TRACTOR HEAD",
    category: "Truk",
    categoryEn: "Truck",
    desc: "Tractor head tangguh untuk peti kemas dan kontainer.",
    image: "/assets/products/giga-tractor.png",
    engine: "6HK1 / 6WG1 Common Rail Euro 4 tenaga super besar",
    capacity: "Tarik beban trailer / kontainer berat kapasitas tinggi",
    advantages: [
      "Torsi optimal untuk menarik beban kontainer pelabuhan dan logistik berat",
      "Sistem pengereman handal dengan ABS untuk keamanan optimal",
      "Kabin aerodinamis mengurangi hambatan angin dan hemat BBM",
      "Durabilitas tinggi beroperasi 24 jam nonstop"
    ]
  },
  {
    id: "dmax",
    name: "D-MAX",
    category: "SUV",
    categoryEn: "SUV",
    desc: "Double cabin tangguh untuk segala medan dan aktivitas berat.",
    image: "/assets/products/d-max.png",
    engine: "RZ4E-TC 1,900 cc Common Rail VGS Turbo Euro 4",
    capacity: "Double cabin 5 penumpang dengan bak belakang luas",
    advantages: [
      "Tampilan maskulin, modern, dan tangguh di jalan raya maupun off-road",
      "Kemampuan 4x4 Shift-on-the-Fly yang mudah dipindahkan saat berjalan",
      "Fitur keselamatan aktif dan pasif lengkap (SRS Airbag, ABS, EBD, ESC)",
      "Kenyamanan interior setara SUV premium untuk perjalanan jauh"
    ]
  },
  {
    id: "mux",
    name: "MU-X",
    category: "SUV",
    categoryEn: "SUV",
    desc: "SUV premium serbaguna dengan kenyamanan dan performa terbaik.",
    image: "/assets/products/mux.png",
    engine: "RZ4E-TC 1.9L / 3.0L Turbo Diesel Common Rail Euro 4",
    capacity: "Kabin 3 baris mewah berkapasitas 7 penumpang",
    advantages: [
      "Desain eksterior elegan dan interior mewah berbalut kulit premium",
      "Suspensi empuk dan kedap suara untuk kenyamanan keluarga di Bali",
      "Fitur keselamatan canggih ADAS (Advanced Driver Assistance Systems)",
      "Mesin diesel tangguh namun tetap hemat bahan bakar"
    ]
  },
];

/* =========================================================
   GALLERY
   ========================================================= */

const galleryItems = [
  { file: "penyerahan-unit-kepada-bapak-putu-sudarma-18-september-2026", category: "Penyerahan Unit", title: "Bapak Putu Sudarma", desc: "Penyerahan unit kepada Bapak Putu Sudarma — 18 September 2026." },
  { file: "penyerahan-unit-kepada-bapak-i-dewa-gede-alit-triwisuningrat-31-mei-2026", category: "Penyerahan Unit", title: "Bapak I Dewa Gede Alit Triwisuningrat", desc: "Penyerahan unit kepada Bapak I Dewa Gede Alit Triwisuningrat — 31 Mei 2026." },
  { file: "penyerahan-unit-kepada-bapak-i-gusti-ngurah-bagus-sentana-6-mei-2026", category: "Penyerahan Unit", title: "Bapak I Gusti Ngurah Bagus Sentana", desc: "Penyerahan unit kepada Bapak I Gusti Ngurah Bagus Sentana — 6 Mei 2026." },
  { file: "penyerahan-unit-kepada-bapak-made-suweta-14-agustus-2026", category: "Penyerahan Unit", title: "Bapak Made Suweta", desc: "Penyerahan unit kepada Bapak Made Suweta — 14 Agustus 2026." },
  { file: "penyerahan-unit-kepada-bapak-nanang-fauzi-3-agustus-2026", category: "Penyerahan Unit", title: "Bapak Nanang Fauzi", desc: "Penyerahan unit kepada Bapak Nanang Fauzi — 3 Agustus 2026." },
  { file: "penyerahan-unit-kepada-bapak-putu-agus-wiraguna-15-september-2026", category: "Penyerahan Unit", title: "Bapak Putu Agus Wiraguna", desc: "Penyerahan unit kepada Bapak Putu Agus Wiraguna — 15 September 2026." },
  { file: "penyerahan-unit-kepada-bapak-putu-sudarma-29-juni-2026", category: "Penyerahan Unit", title: "Bapak Putu Sudarma", desc: "Penyerahan unit kepada Bapak Putu Sudarma — 29 Juni 2026." },
  { file: "penyerahan-unit-kepada-bapak-winariyo-8-juni-2026", category: "Penyerahan Unit", title: "Bapak Winariyo", desc: "Penyerahan unit kepada Bapak Winariyo — 8 Juni 2026." },
  { file: "penyerahan-unit-kepada-cv-mitra-karya-bahagia-22-mei-2026", category: "Penyerahan Unit", title: "CV Mitra Karya Bahagia", desc: "Penyerahan unit kepada CV Mitra Karya Bahagia — 22 Mei 2026." },
  { file: "penyerahan-unit-kepada-i-gst-ngurah-sura-adnyana-14-september-2026", category: "Penyerahan Unit", title: "I GST Ngura Sura Adnyana", desc: "Penyerahan unit kepada I GST Ngura Sura Adnyana — 14 September 2026." },
  { file: "penyerahan-unit-kepada-kadek-rama-suta-29-juni-2026", category: "Penyerahan Unit", title: "Kadek Rama Suta", desc: "Penyerahan unit kepada Kadek Rama Suta — 29 Juni 2026." },
  { file: "penyerahan-unit-kepada-wayan-surya-wirawan-13-juni-2026", category: "Penyerahan Unit", title: "Wayan Surya Wirawan", desc: "Penyerahan unit kepada Wayan Surya Wirawan — 13 Juni 2026." },
];

/* =========================================================
   KOMPONEN PEMISAH SECTION
   ========================================================= */
function SectionDivider({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`relative w-full h-12 flex items-center justify-center my-2 select-none overflow-hidden ${darkMode ? "bg-slate-950" : "bg-white"}`}>
      <div className={`absolute inset-x-0 h-[1px] ${darkMode ? "bg-gradient-to-r from-transparent via-red-600/40 to-transparent" : "bg-gradient-to-r from-transparent via-red-500/30 to-transparent"}`} />
      <div className={`relative z-10 px-4 py-1 rounded-full border text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 shadow-sm ${
        darkMode 
          ? "bg-slate-900 border-slate-800 text-red-400" 
          : "bg-slate-50 border-slate-200 text-red-600"
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
        <span>ISUZU BALI</span>
        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
   ========================================================= */

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // State Bahasa & Tema
  const [lang, setLang] = useState<"id" | "en">("id");
  const [darkMode, setDarkMode] = useState(false);

  const dict = t[lang];

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryPaused, setGalleryPaused] = useState(false);

  const [promoOpen, setPromoOpen] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(0);
  const [promoImageFailed, setPromoImageFailed] = useState(false);

  const [profileImageFailed, setProfileImageFailed] = useState(false);

  // State untuk Modal Detail Produk
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);

  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    kendaraan: "TRAGA",
    kebutuhan: "",
  });

  // Diperbaiki agar aman dari error prerender Next.js
  const [currentYear, setCurrentYear] = useState<number>(2026);
  useEffect(() => {
    const currentYear = 2026;
  }, []);

  const currentPromo = promoItems[selectedPromo];

  const benefitsList = [
    {
      icon: <Tag className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Harga Spesial & Diskon Menarik" : "Special Price & Attractive Discount",
      description: lang === "id" 
        ? "Dapatkan penawaran harga terbaik dan diskon menarik dalam setiap pembelian unit Isuzu. Kami selalu memberikan promo yang sesuai dengan budget Anda." 
        : "Get the best price offers and attractive discounts on every Isuzu unit purchase. We always provide promos that fit your budget."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Proses Kredit Mudah dan Cepat" : "Easy & Fast Credit Process",
      description: lang === "id" 
        ? "Kami menawarkan kredit yang cepat dengan persyaratan yang mudah. Anda bisa memilih berbagai pilihan tenor sesuai kemampuan finansial serta didukung leasing / bank pembiayaan terpercaya." 
        : "We offer fast credit with easy requirements. You can choose various tenor options according to your financial capability, supported by trusted leasing/banks."
    },
    {
      icon: <Gift className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Hadiah Aksesoris dan Hadiah Langsung" : "Accessories & Direct Gifts",
      description: lang === "id" 
        ? "Nikmati berbagai jenis Aksesoris seperti Karpet, Talang Air, Kaca Film dan lainnya, juga ada Hadiah langsung Menarik yang bisa Anda bawa pulang saat pembelian." 
        : "Enjoy various accessories like carpets, door visors, window films, and attractive direct gifts upon purchase."
    },
    {
      icon: <Wrench className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Layanan After Sales Terjamin" : "Guaranteed After Sales Service",
      description: lang === "id" 
        ? "Anda akan mendapatkan layanan purnajual yang optimal seperti Servise Berkala, Klaim Asuransi atau Perawatan Kendaraan Lainnya." 
        : "You will receive optimal after-sales services such as periodic maintenance, insurance claims, or other vehicle care."
    },
    {
      icon: <Truck className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Prioritas Pengiriman Unit" : "Priority Unit Delivery",
      description: lang === "id" 
        ? "Sebagai Prioritas Pelanggan, Kami memastikan bahwa Unit Pesanan Anda akan segera di kirim bahkan lebih singkat dibandingkan Pembelian biasa." 
        : "As a priority customer, we ensure your ordered unit is delivered promptly, even faster than standard purchases."
    },
    {
      icon: <Headphones className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />,
      title: lang === "id" ? "Konsultasi dan Test Drive Gratis" : "Free Consultation & Test Drive",
      description: lang === "id" 
        ? "Kami menyediakan layanan konsultasi Gratis mengenai Type dan Model mobil yang Cocok dengan kebutuhan Anda juga bisa mencoba Unit Pilihan melalui Test Drive." 
        : "We provide free consultation regarding the type and model suitable for your needs, and you can test drive your chosen unit."
    }
  ];

  const filteredProducts =
    activeCategory === "Semua"
      ? allProducts
      : allProducts.filter((p) =>
          lang === "en" ? p.categoryEn === activeCategory : p.category === activeCategory
        );

  const displayedProducts =
    !showAllProducts && activeCategory === "Semua"
      ? filteredProducts.slice(0, 5)
      : filteredProducts;

  const visibleGallery = useMemo(
    () =>
      [0, 1, 2, 3, 4].map(
        (offset) => galleryItems[(galleryIndex + offset) % galleryItems.length]
      ),
    [galleryIndex]
  );

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${MARKETING_WA}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openPromo = (index: number) => {
    setSelectedPromo(index);
    setPromoImageFailed(false);
    setPromoOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Halo Pak ${MARKETING_NAME}, saya ${formData.nama}.\nNomor WhatsApp: ${formData.whatsapp}\nSaya berminat dengan unit: ${formData.kendaraan}.\nKebutuhan: ${formData.kebutuhan || "Belum ditentukan"}`
    );
  };

  useEffect(() => {
    if (galleryPaused) return;
    const timer = window.setInterval(() => {
      setGalleryIndex((current) => (current + 1) % galleryItems.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [galleryPaused]);

  return (
    <div className={`min-h-screen font-sans selection:bg-red-600 selection:text-white transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-[#f8fafc] text-slate-800"}`}>

      {/* =====================================================
          ORNAMENT
          ===================================================== */}
      <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className={`absolute inset-0 opacity-[0.05] mix-blend-multiply ${darkMode ? "invert opacity-[0.08]" : ""}`}
          style={{
            backgroundImage: "url('/assets/ornament/ukiran-bali.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px",
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
          ===================================================== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/92 border-slate-200/80 shadow-sm"}`}>
        <div className="max-w-7xl mx-auto h-[70px] px-5 lg:px-8 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-2 shrink-0">
            <img src="/assets/logo/logo-isuzu.png" alt="Isuzu" className="h-8 md:h-9 w-auto object-contain" />
            <span className={`font-black text-red-600 tracking-[0.18em] text-lg border-l pl-2 ${darkMode ? "border-slate-700" : "border-slate-300"}`}>BALI</span>
          </a>

          <div className={`hidden lg:flex items-center gap-6 text-[12px] font-bold ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            <a href="#beranda" className="hover:text-red-600 transition">{dict.navHome}</a>
            <a href="#keunggulan" className="hover:text-red-600 transition">{dict.navWhy}</a>
            <a href="#produk" className="hover:text-red-600 transition">{dict.navProduct}</a>
            <a href="#promo" className="hover:text-red-600 transition">{dict.navPromo}</a>
            <a href="#galeri" className="hover:text-red-600 transition">{dict.navGallery}</a>
            <a href="#tentang" className="hover:text-red-600 transition">{dict.navAbout}</a>
            <a href="#kontak" className="hover:text-red-600 transition">{dict.navContact}</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition ${darkMode ? "border-slate-700 bg-slate-800 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-700"}`}
              title="Ganti Bahasa / Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-red-600" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition ${darkMode ? "border-slate-700 bg-slate-800 text-yellow-400" : "border-slate-200 bg-slate-50 text-slate-700"}`}
              title="Ganti Tema"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => openWhatsApp(`Halo Pak ${MARKETING_NAME}, saya ingin konsultasi mengenai kendaraan Isuzu.`)}
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2.5 rounded-full shadow-lg shadow-red-600/20 transition"
            >
              <Phone className="w-4 h-4" />
              {dict.chatWa}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`lg:hidden w-10 h-10 rounded-xl border flex items-center justify-center ${darkMode ? "border-slate-700 bg-slate-800 text-slate-200" : "border-slate-200 bg-white text-slate-800"}`}
            >
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className={`lg:hidden border-t px-5 py-4 space-y-1 shadow-xl transition-colors ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}>
            {[
              [dict.navHome, "#beranda"],
              [dict.navWhy, "#keunggulan"],
              [dict.navProduct, "#produk"],
              [dict.navPromo, "#promo"],
              [dict.navGallery, "#galeri"],
              [dict.navAbout, "#tentang"],
              [dict.navContact, "#kontak"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenu(false)}
                className={`block py-3 text-sm font-bold transition ${darkMode ? "text-slate-200 hover:text-red-500" : "text-slate-700 hover:text-red-600"}`}
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
      <section id="beranda" className="relative min-h-[660px] lg:min-h-[710px] pt-[70px] overflow-hidden bg-[#071827] text-white">
        <img
          src="/assets/home/foto-home.png"
          alt="Isuzu Bali"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.src = "/assets/home/foto-home.jpg"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06131f]/95 via-[#06131f]/72 to-[#06131f]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/85 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 min-h-[590px] flex items-center">
          <div className="max-w-[670px] pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[10px] font-black tracking-[0.18em] uppercase">{dict.brandSubtitle}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black leading-[0.98] tracking-tight">
              {dict.heroTitle1}
              <br />
              {dict.heroTitle2}
              <br />
              <span className="text-red-500">{dict.heroTitle3}</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm md:text-base leading-7 text-slate-200" dangerouslySetInnerHTML={{ __html: dict.heroDesc }} />

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#produk" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3.5 rounded-xl text-sm font-black shadow-xl shadow-red-600/30 transition">
                {dict.viewProducts} <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#promo" className="inline-flex items-center gap-2 border border-white/35 bg-white/10 hover:bg-white/15 backdrop-blur-md px-6 py-3.5 rounded-xl text-sm font-bold transition">
                <Tag className="w-4 h-4" /> {dict.viewPromo}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-9 text-xs text-slate-300">
              <span className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-red-400" /> {dict.officialDealer}</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-red-400" /> {dict.freeConsult}</span>
              <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-red-400" /> {dict.creditLeasing}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PEMISAH SECTION */}
      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          KENAPA HARUS ISUZU? (6 KOLOM KE SAMPING)
          ===================================================== */}
      <section id="keunggulan" className={`py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors ${darkMode ? "bg-slate-900/40" : "bg-gray-50"}`}>
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">{dict.whyTag}</span>
            <h2 className={`text-3xl md:text-4xl font-black mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
              {dict.whyTitle}
            </h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mx-auto mt-3"></div>
            <p className={`text-sm mt-3 ${darkMode ? "text-slate-400" : "text-gray-600"}`}>
              {dict.whyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {benefitsList.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-red-600 flex flex-col justify-between group ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"}`}
              >
                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className={`text-base font-bold mb-2.5 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-gray-600"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PEMISAH SECTION */}
      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          PRODUCTS
          ===================================================== */}
      <section id="produk" className={`py-20 lg:py-24 px-5 lg:px-8 relative z-10 transition-colors ${darkMode ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.18em]">{dict.productTag}</span>
              <h2 className={`text-3xl md:text-4xl font-black mt-1 ${darkMode ? "text-white" : "text-[#12345b]"}`}>{dict.productTitle}</h2>
              <p className={`text-sm mt-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{dict.productDesc}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                ["Semua", dict.all],
                ["Niaga Ringan", dict.lightCommercial],
                ["Truk", dict.truck],
                ["SUV", dict.suv],
              ].map(([catKey, catLabel]) => (
                <button
                  key={catKey}
                  onClick={() => { setActiveCategory(catKey); setShowAllProducts(false); }}
                  className={`px-5 py-2.5 rounded-full text-xs font-black border transition ${
                    activeCategory === catKey
                      ? "bg-red-600 border-red-600 text-white shadow-md shadow-red-600/20"
                      : darkMode
                      ? "border-slate-800 bg-slate-900 text-slate-300 hover:border-red-500 hover:text-red-400"
                      : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:text-red-600"
                  }`}
                >
                  {catLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {displayedProducts.map((product) => (
              <article 
                key={product.id} 
                onClick={() => setSelectedProduct(product)}
                className={`group cursor-pointer relative rounded-2xl border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"}`}
              >
                <div className={`relative h-48 overflow-hidden flex items-center justify-center ${darkMode ? "bg-slate-900/50" : "bg-white"}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 w-full h-full object-contain p-1 drop-shadow-[0_16px_14px_rgba(15,23,42,0.18)] group-hover:scale-[1.12] group-hover:-translate-y-2 transition-all duration-700 ease-out"
                    onError={(e) => { e.currentTarget.src = "/assets/logo/logo-isuzu.png"; }}
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`inline-flex items-center text-[9px] font-black px-2.5 py-1.5 rounded-full border shadow-sm ${darkMode ? "bg-slate-800 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-[#12345b]"}`}>
                      {lang === "en" ? product.categoryEn : product.category}
                    </span>
                  </div>
                </div>

                <div className={`px-4 pb-4 pt-3 ${darkMode ? "bg-slate-900" : "bg-white"}`}>
                  <h3 className={`text-base font-black tracking-tight group-hover:text-red-500 transition-colors ${darkMode ? "text-white" : "text-[#12345b]"}`}>
                    {product.name}
                  </h3>
                  <p className={`text-[11px] mt-1.5 leading-5 min-h-[40px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {product.desc}
                  </p>
                  <div className={`flex items-center justify-between mt-3 pt-3 border-t ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Klik Detail</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-red-600 hover:text-red-700 transition">
                      {dict.viewDetails} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {activeCategory === "Semua" && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className={`px-6 py-3 rounded-xl border text-xs font-black transition ${
                  darkMode ? "border-slate-800 text-slate-300 hover:border-red-500 hover:text-red-400 bg-slate-900" : "border-slate-300 text-slate-700 hover:border-red-500 hover:text-red-600 bg-white"
                }`}
              >
                {showAllProducts ? dict.showLess : `${dict.showMore} (${allProducts.length})`}
                <ChevronRight className="inline w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PEMISAH SECTION */}
      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          PROMO
          ===================================================== */}
      <section id="promo" className={`py-20 lg:py-24 px-5 lg:px-8 relative z-10 transition-colors ${darkMode ? "bg-slate-900/50" : "bg-[#f4f7fa]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">{dict.promoTag}</span>
            <h2 className={`text-3xl md:text-4xl font-black mt-2 ${darkMode ? "text-white" : "text-[#12345b]"}`}>{dict.promoTitle}</h2>
            <p className={`text-sm mt-2 max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{dict.promoDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {promoItems.map((promo, index) => (
              <article key={promo.id} className={`group rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  <img
                    src={`${promo.base}.jpg`}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.src.endsWith(".jpeg")) {
                        img.src = `${promo.base}.jpeg`;
                      }
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white rounded-full px-3 py-1.5 text-[10px] font-black shadow-lg">PROMO</div>
                </div>

                <div className="p-5">
                  <h3 className={`text-lg font-black ${darkMode ? "text-white" : "text-[#12345b]"}`}>{promo.title}</h3>
                  <p className={`text-xs mt-2 leading-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{promo.description}</p>
                  <div className="flex gap-2 mt-5">
                    <button onClick={() => openPromo(index)} className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3 text-xs font-black transition">
                      {dict.viewPromoBtn}
                    </button>
                    <button onClick={() => openWhatsApp(`Halo Pak ${MARKETING_NAME}, saya melihat promo ${promo.title}. Mohon informasi detail dan syarat promonya.`)} className={`px-4 border rounded-xl text-xs font-black transition ${darkMode ? "border-slate-700 text-slate-300 hover:border-red-500 hover:text-red-400" : "border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600"}`}>
                      {dict.ask}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PEMISAH SECTION */}
      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          GALLERY
          ===================================================== */}
      <section id="galeri" className={`relative overflow-hidden py-20 lg:py-24 px-5 lg:px-8 z-10 transition-colors ${darkMode ? "bg-slate-950" : "bg-[#f7fafc]"}`} onMouseEnter={() => setGalleryPaused(true)} onMouseLeave={() => setGalleryPaused(false)}>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-5 mb-9">
            <div className="max-w-3xl">
              <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em]">{dict.galleryTag}</span>
              <h2 className={`text-3xl md:text-5xl font-black tracking-tight mt-2 ${darkMode ? "text-white" : "text-[#12345b]"}`}>
                {dict.galleryTitle1} <span className="text-red-600">{dict.galleryTitle2}</span>
              </h2>
              <p className={`text-sm md:text-base mt-3 leading-7 max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{dict.galleryDesc}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right mr-2">
                <p className="text-red-600 font-black text-lg italic">{dict.stepWithIsuzu}</p>
                <p className={`font-black text-xs tracking-wider ${darkMode ? "text-slate-300" : "text-[#12345b]"}`}>{dict.stepFarther}</p>
              </div>
              <button onClick={() => openWhatsApp(`Halo Pak ${MARKETING_NAME}, saya ingin melihat informasi unit dan aktivitas terbaru.`)} className="flex items-center gap-2 border-2 border-red-500 text-red-600 hover:bg-red-600 hover:text-white px-5 py-3 rounded-full text-xs font-black transition">
                <Camera className="w-4 h-4" /> {dict.consult}
              </button>
            </div>
          </div>

          <div className="relative">
            <button aria-label="Galeri sebelumnya" onClick={() => setGalleryIndex((galleryIndex - 1 + galleryItems.length) % galleryItems.length)} className={`absolute z-20 left-[-7px] md:left-[-20px] top-[38%] -translate-y-1/2 w-11 h-11 rounded-full shadow-xl border flex items-center justify-center transition ${darkMode ? "bg-slate-900 border-slate-700 text-red-400 hover:bg-red-600 hover:text-white" : "bg-white border-slate-200 text-red-600 hover:bg-red-600 hover:text-white"}`}>
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {visibleGallery.map((item, i) => (
                <article key={`${item.file}-${i}`} className={`group rounded-2xl overflow-hidden border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                  <div className={`relative h-52 overflow-hidden ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
                    <img
                      src={`/assets/gallery/${item.file}.jpeg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.src.endsWith(".jpg")) {
                          img.src = `/assets/gallery/${item.file}.jpg`;
                        } else if (!img.src.endsWith(".JPG")) {
                          img.src = `/assets/gallery/${item.file}.JPG`;
                        } else {
                          img.src = "/assets/home/foto-home.png";
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-red-600 text-white rounded-full px-3 py-1.5 text-[9px] font-black flex items-center gap-1.5 shadow-lg">
                      <Camera className="w-3 h-3" /> {item.category}
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-[10px] font-bold flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" /> {dict.marketingDoc}
                    </span>
                  </div>

                  <div className="p-4 min-h-[132px]">
                    <h3 className={`font-black text-sm leading-5 group-hover:text-red-500 transition ${darkMode ? "text-white" : "text-[#12345b]"}`}>{item.title}</h3>
                    <p className={`text-[10px] mt-2 leading-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <button aria-label="Galeri berikutnya" onClick={() => setGalleryIndex((galleryIndex + 1) % galleryItems.length)} className={`absolute z-20 right-[-7px] md:right-[-20px] top-[38%] -translate-y-1/2 w-11 h-11 rounded-full shadow-xl border flex items-center justify-center transition ${darkMode ? "bg-slate-900 border-slate-700 text-red-400 hover:bg-red-600 hover:text-white" : "bg-white border-slate-200 text-red-600 hover:bg-red-600 hover:text-white"}`}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 mt-7">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Buka galeri ${i + 1}`}
                onClick={() => setGalleryIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === galleryIndex ? "w-8 bg-red-600" : darkMode ? "w-2 bg-slate-700 hover:bg-slate-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PEMISAH SECTION */}
      <SectionDivider darkMode={darkMode} />

      {/* =====================================================
          TENTANG SAYA + FORM
          ===================================================== */}
      <section id="tentang" className={`py-16 lg:py-20 px-5 lg:px-8 relative z-10 overflow-hidden transition-colors ${darkMode ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl mb-10">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.18em]">{dict.aboutTag}</span>
            <h2 className={`text-3xl md:text-5xl font-black mt-2 leading-tight ${darkMode ? "text-white" : "text-[#12345b]"}`}>
              {dict.aboutTitle1} <span className="text-red-600">{dict.aboutTitle2}</span>
            </h2>
            <p className={`text-sm md:text-base mt-4 leading-7 max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{dict.aboutDesc}</p>
          </div>

          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-10 items-start">
            {/* PROFILE CARD */}
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div className={`relative rounded-[1.8rem] overflow-hidden border shadow-2xl transition-all duration-300 ${darkMode ? "bg-slate-950 border-slate-800" : "bg-gradient-to-b from-[#071b2d] to-[#04101b] border-slate-800"}`}>
                
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

                <div className={`aspect-[4/4.6] relative overflow-hidden ${darkMode ? "bg-slate-900" : "bg-slate-900/50"}`}>
                  {!profileImageFailed ? (
                    <img
                      src={PROFILE_IMAGE}
                      alt={`${MARKETING_NAME} - Sales Consultant Isuzu Bali`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      onError={() => setProfileImageFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                      <UserRound className="w-24 h-24 text-slate-300" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-x-4 bottom-4 backdrop-blur-xl rounded-2xl p-4 shadow-2xl bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          <p className="text-red-400 text-[9px] font-black uppercase tracking-widest">Sales Consultant</p>
                        </div>
                        <p className="text-xl font-black text-white tracking-tight">{MARKETING_NAME}</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                        <BadgeCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                      <span>Astra Isuzu Denpasar</span>
                      <span className="font-bold text-red-400">Isuzu Bali</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-black/20">
                  <div className="grid grid-cols-2 gap-2.5">
                    <a href={`https://wa.me/${MARKETING_WA}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3 py-3 hover:bg-white/10 hover:border-green-500/40 transition group">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[8px] text-slate-400 uppercase tracking-wider">WhatsApp</span>
                        <span className="block text-[10px] font-bold truncate text-white">{MARKETING_PHONE}</span>
                      </span>
                    </a>

                    <a href={`mailto:${MARKETING_EMAIL}`} className="flex items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3 py-3 hover:bg-white/10 hover:border-red-500/40 transition group">
                      <span className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[8px] text-slate-400 uppercase tracking-wider">Email</span>
                        <span className="block text-[10px] font-bold truncate text-white">{MARKETING_EMAIL}</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICES & FORM */}
            <div>
              <div className="grid sm:grid-cols-3 gap-3 mb-7">
                {[
                  ["01", dict.service1Title, dict.service1Desc],
                  ["02", dict.service2Title, dict.service2Desc],
                  ["03", dict.service3Title, dict.service3Desc],
                ].map(([num, title, desc]) => (
                  <div key={num} className={`rounded-2xl border p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`}>
                    <span className="text-red-600 font-black text-lg">{num}</span>
                    <h3 className={`text-sm font-black mt-2 ${darkMode ? "text-white" : "text-[#12345b]"}`}>{title}</h3>
                    <p className={`text-[10px] mt-1.5 leading-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{desc}</p>
                  </div>
                ))}
              </div>

              <div id="kontak" className={`rounded-[1.7rem] border p-5 sm:p-6 lg:p-7 shadow-sm transition-colors ${darkMode ? "bg-slate-950 border-slate-800" : "bg-[#f8fafc] border-slate-200"}`}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                  <div>
                    <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.18em]">{dict.formTag}</span>
                    <h3 className={`font-black text-xl md:text-2xl mt-1 ${darkMode ? "text-white" : "text-[#12345b]"}`}>{dict.formTitle}</h3>
                  </div>
                  <p className={`text-[10px] sm:max-w-xs sm:text-right leading-5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{dict.formNote}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-[10px] font-black mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{dict.nameLabel}</label>
                      <input
                        required
                        value={formData.nama}
                        onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        placeholder={dict.namePlaceholder}
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${darkMode ? "bg-slate-900 border-slate-800 text-white focus:border-red-500" : "bg-white border-slate-200 text-slate-800 focus:border-red-500"}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-[10px] font-black mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{dict.whatsappLabel}</label>
                      <input
                        required
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${darkMode ? "bg-slate-900 border-slate-800 text-white focus:border-red-500" : "bg-white border-slate-200 text-slate-800 focus:border-red-500"}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-black mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{dict.vehicleLabel}</label>
                    <select
                      value={formData.kendaraan}
                      onChange={(e) => setFormData({ ...formData, kendaraan: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition ${darkMode ? "bg-slate-900 border-slate-800 text-white focus:border-red-500" : "bg-white border-slate-200 text-slate-800 focus:border-red-500"}`}
                    >
                      {allProducts.map((p) => (
                        <option key={p.id} value={p.name} className={darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-800"}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-black mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{dict.needLabel}</label>
                    <textarea
                      value={formData.kebutuhan}
                      onChange={(e) => setFormData({ ...formData, kebutuhan: e.target.value })}
                      placeholder={dict.needPlaceholder}
                      rows={3}
                      className={`w-full resize-none border rounded-xl px-4 py-3 text-sm outline-none transition ${darkMode ? "bg-slate-900 border-slate-800 text-white focus:border-red-500" : "bg-white border-slate-200 text-slate-800 focus:border-red-500"}`}
                    />
                  </div>

                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-black text-sm shadow-lg shadow-red-600/20 transition flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {dict.submitBtn}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer className={`py-10 px-5 lg:px-8 relative z-10 overflow-hidden transition-colors ${darkMode ? "bg-slate-950 text-slate-400 border-t border-slate-800" : "bg-[#061521] text-slate-400"}`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-8 pb-8 border-b border-white/10">
            <div>
              <img src="/assets/logo/logo-isuzu.png" alt="Isuzu Bali" className="h-8 w-auto object-contain brightness-0 invert" />
              <p className="text-xs text-slate-500 mt-3">REAL PARTNER, REAL JOURNEY.</p>
              <p className="text-sm text-slate-300 mt-4 font-bold">{MARKETING_NAME}</p>
              <p className="text-xs mt-1">Sales Consultant Isuzu Bali</p>
            </div>

            <div>
              <p className="text-white font-black text-xs uppercase tracking-widest mb-4">Navigasi</p>
              <div className="grid grid-cols-2 gap-y-3 text-xs">
                <a href="#beranda" className="hover:text-white">{dict.navHome}</a>
                <a href="#keunggulan" className="hover:text-white">{dict.navWhy}</a>
                <a href="#produk" className="hover:text-white">{dict.navProduct}</a>
                <a href="#promo" className="hover:text-white">{dict.navPromo}</a>
                <a href="#galeri" className="hover:text-white">{dict.navGallery}</a>
                <a href="#tentang" className="hover:text-white">{dict.navAbout}</a>
                <a href="#kontak" className="hover:text-white">{dict.navContact}</a>
              </div>
            </div>

            <div>
              <p className="text-white font-black text-xs uppercase tracking-widest mb-4">Kontak</p>
              <a href={`https://wa.me/${MARKETING_WA}`} target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-white transition">WhatsApp · {MARKETING_PHONE}</a>
              <a href={`mailto:${MARKETING_EMAIL}`} className="block text-xs mt-2 break-all hover:text-white transition">{MARKETING_EMAIL}</a>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="w-4 h-4 mt-0.5 text-red-500 shrink-0" />
                <p className="text-xs leading-5">
                  <strong className="text-slate-300">{OFFICE_NAME}</strong>
                  <br />
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 text-[10px]">
            <span>© {currentYear} {MARKETING_NAME}. {dict.allRights}</span>
            <span>Personal Marketing Isuzu Bali · Astra Isuzu Denpasar</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          PROMO MODAL
          ===================================================== */}
      {promoOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950/75 backdrop-blur-sm p-4 flex items-center justify-center" onClick={() => setPromoOpen(false)}>
          <div className={`w-full max-w-5xl max-h-[94vh] overflow-auto rounded-3xl shadow-2xl ${darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-800"}`} onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-slate-100">
              <img
                src={promoImageFailed ? `${currentPromo.base}.jpeg` : `${currentPromo.base}.jpg`}
                alt={currentPromo.title}
                className="w-full max-h-[72vh] object-contain"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.endsWith(".jpg")) {
                    img.src = `${currentPromo.base}.jpeg`;
                  } else {
                    setPromoImageFailed(true);
                  }
                }}
              />
              <button onClick={() => setPromoOpen(false)} aria-label={dict.close} className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-slate-700 hover:text-red-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">{dict.detailPromo} {currentYear}</span>
                  <h3 className={`text-2xl md:text-3xl font-black mt-2 ${darkMode ? "text-white" : "text-[#12345b]"}`}>{currentPromo.title}</h3>
                </div>

                <div className="flex gap-2">
                  {promoItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => { setSelectedPromo(index); setPromoImageFailed(false); }}
                      className={`w-3 h-3 rounded-full transition ${selectedPromo === index ? "bg-red-600 scale-125" : "bg-slate-300"}`}
                      aria-label={`Promo ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <p className={`text-sm mt-3 leading-6 max-w-3xl ${darkMode ? "text-slate-300" : "text-slate-500"}`}>{currentPromo.description}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button onClick={() => openWhatsApp(`Halo Pak ${MARKETING_NAME}, saya tertarik dengan ${currentPromo.title}. Mohon informasi detail dan syarat promonya.`)} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-xs font-black">
                  {dict.askPromoWa}
                </button>
                <button onClick={() => setPromoOpen(false)} className={`border px-6 py-3 rounded-xl text-xs font-black ${darkMode ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-200 text-slate-700 hover:bg-slate-100"}`}>
                  {dict.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PRODUCT DETAIL MODAL
          ===================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center overflow-y-auto" onClick={() => setSelectedProduct(null)}>
          <div className={`w-full max-w-3xl my-8 rounded-3xl shadow-2xl overflow-hidden border ${darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`} onClick={(e) => e.stopPropagation()}>
            
            <div className={`p-6 border-b flex items-center justify-between ${darkMode ? "bg-slate-950/50 border-slate-800" : "bg-slate-50 border-slate-100"}`}>
              <div>
                <span className="inline-block bg-red-600 text-white rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider mb-1">
                  {lang === "en" ? selectedProduct.categoryEn : selectedProduct.category}
                </span>
                <h3 className="text-2xl font-black">{selectedProduct.name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${darkMode ? "border-slate-700 hover:bg-slate-800 text-slate-300" : "border-slate-200 hover:bg-slate-100 text-slate-700"}`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className={`aspect-[4/3] rounded-2xl flex items-center justify-center p-4 border ${darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">{dict.engineBadge}</h4>
                    <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{selectedProduct.engine}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-1">{dict.capacityBadge}</h4>
                    <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{selectedProduct.capacity}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black text-red-600 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-4 h-4" /> {dict.advantageBadge}
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedProduct.advantages.map((adv, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border flex items-start gap-2.5 ${darkMode ? "bg-slate-950/40 border-slate-800" : "bg-slate-50 border-slate-200/60"}`}>
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className={`text-xs ${darkMode ? "text-slate-300" : "text-slate-700"}`}>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-5 border-t flex flex-col sm:flex-row gap-3 ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
              <button
                onClick={() => {
                  openWhatsApp(`Halo Pak ${MARKETING_NAME}, saya ingin menanyakan penawaran harga, simulasi kredit, dan ketersediaan unit ${selectedProduct.name}.`);
                  setSelectedProduct(null);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-black text-xs shadow-lg shadow-red-600/20 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {dict.askUnitWa}
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className={`px-6 py-3.5 rounded-xl text-xs font-black border transition ${darkMode ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`}
              >
                {dict.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}