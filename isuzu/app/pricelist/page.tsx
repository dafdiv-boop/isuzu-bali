"use client";

import { Phone, ArrowLeft } from "lucide-react";

export default function PricelistPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header Pricelist */}
      <header className="bg-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </a>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              DAFTAR HARGA ISUZU 2026
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              Pricelist Resmi On The Road (OTR) Isuzu Bali
            </p>
          </div>

          <a
            href="https://wa.me/6281337680343?text=Halo%20Pak%20Aris,%20saya%20ingin%20konsultasi%20mengenai%20pricelist%20terbaru."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg flex items-center gap-2 text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            Tanya Penawaran via WA
          </a>
        </div>
      </header>

      {/* Konten Tabel Pricelist */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* 1. TRAGA */}
        <PriceSection title="PRICELIST ISUZU TRAGA EURO 4">
          <PriceRow name="Traga Pick Up FD" price="Rp 308.000.000,-" />
          <PriceRow name="Traga PICK UP BLACK PREMIUM" price="Rp 310.000.000,-" />
          <PriceRow name="Traga BOX SEMI ALMUNIUM" price="Rp 350.000.000,-" />
          <PriceRow name="Traga BOX BUS" price="Rp 522.000.000,-" />
          <PriceRow name="Traga Pick Up FD AC" price="Rp 317.000.000,-" />
          <PriceRow name="Traga PICK UP BLACK PREMIUM AC" price="Rp 319.000.000,-" />
        </PriceSection>

        {/* 2. ELF 4 RODA */}
        <PriceSection title="PRICELIST ISUZU ELF (N SERIES) 4 RODA (EURO 4)">
          <PriceRow name="NLR" price="Rp 448.000.000,-" />
          <PriceRow name="NLR L" price="Rp 466.000.000,-" />
          <PriceRow name="NLR B" price="Rp 458.000.000,-" />
          <PriceRow name="NLR B L" price="Rp 473.000.000,-" />
          <PriceRow name="NQR B" price="Rp 543.000.000,-" />
          <PriceRow name="NLR B MICROBUS AC NA" price="Rp 622.000.000,-" />
          <PriceRow name="NLR B L MICROBUS NA" price="Rp 668.000.000,-" />
        </PriceSection>

        {/* 3. ELF 6 RODA */}
        <PriceSection title="PRICELIST ISUZU ELF (N SERIES) 6 RODA (EURO 4)">
          <PriceRow name="NMR" price="Rp 535.000.000,-" />
          <PriceRow name="NMR L" price="Rp 543.000.000,-" />
          <PriceRow name="NMR HD 5.8" price="Rp 549.000.000,-" />
          <PriceRow name="NMR HD 6.5" price="Rp 561.000.000,-" />
          <PriceRow name="NPS 4 X 4 (OFF THE ROAD)" price="Rp 919.000.000,-" />
        </PriceSection>

        {/* 4. GIGA */}
        <PriceSection title="ISUZU GIGA F SERIES EURO 4">
          <PriceRow name="FRR Q" price="Rp 636.000.000,-" />
          <PriceRow name="FTR P" price="Rp 708.000.000,-" />
          <PriceRow name="FTR S" price="Rp 712.000.000,-" />
          <PriceRow name="FTR T" price="Rp 720.000.000,-" />
          <PriceRow name="FVR L D" price="Rp 789.000.000,-" />
          <PriceRow name="FVR P" price="Rp 795.000.000,-" />
          <PriceRow name="FVR Q" price="Rp 806.000.000,-" />
          <PriceRow name="FVR S" price="Rp 805.000.000,-" />
          <PriceRow name="FVR U" price="Rp 816.000.000,-" />
          <PriceRow name="FVM N" price="Rp 930.000.000,-" />
          <PriceRow name="FVM U" price="Rp 943.000.000,-" />
          <PriceRow name="FVM U HP" price="Rp 996.000.000,-" />
          <PriceRow name="FVM U HP ABS" price="Rp 1.012.000.000,-" />
        </PriceSection>

        {/* 5. TRAKTOR HEAD & MU-X */}
        <PriceSection title="PRICELIST ISUZU TRAKTOR HEAD & MU-X">
          <PriceRow name="GVR J" price="Rp 835.000.000,-" />
          <PriceRow name="GVR J HP ABS" price="Rp 905.000.000,-" />
          <PriceRow name="GVZ K HP ABS" price="Rp 1.200.000.000,-" />
          <PriceRow name="GXZ K ABS" price="Rp 1.348.000.000,-" />
          <PriceRow name="All New Mu-X (4x4) 1.9 AT" price="Rp 665.700.000,-" highlight />
        </PriceSection>

        {/* 6. D-MAX */}
        <PriceSection title="PRICELIST D-MAX 4X4">
          <PriceRow name="All New D-Max SC 1.9 MT" price="Rp 437.100.000,-" />
          <PriceRow name="All New D-Max DC RODEO MT" price="Rp 551.900.000,-" />
          <p className="text-xs text-slate-400 mt-4">
            *Harga akan di update tanpa pemberitahuan terlebih dahulu.
          </p>
        </PriceSection>

      </main>
    </div>
  );
}

function PriceSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 sm:p-8">
      <h2 className="text-xl font-bold text-red-600 mb-4 border-b pb-2">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-slate-50 text-slate-700 text-sm">
              <th className="py-3 px-4 font-semibold">Type</th>
              <th className="py-3 px-4 font-semibold text-right">
                Harga On The Road
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-sm">
            {children}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PriceRow({
  name,
  price,
  highlight = false,
}: {
  name: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <tr>
      <td
        className={`py-3 px-4 ${
          highlight ? "font-bold text-slate-900" : ""
        }`}
      >
        {name}
      </td>

      <td
        className={`py-3 px-4 text-right ${
          highlight ? "font-bold text-red-600" : "font-medium"
        }`}
      >
        {price}
      </td>
    </tr>
  );
}
