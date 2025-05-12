import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative font-sans min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
        <button onClick={() => setMenuOpen(true)} className="text-2xl">
          ☰
        </button>
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      {/* DRAWER MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 px-6">
          <a href="#" className="hover:text-blue-500">Beranda</a>
          <a href="#" className="hover:text-blue-500">Profil</a>
          <a href="#" className="hover:text-blue-500">Kontak</a>
        </nav>
      </div>

      {/* SHORTCUT */}
      <div className="flex justify-around my-6 px-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => alert("Ke Obat")}>Obat</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => alert("Ke Transaksi")}>Transaksi</button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded" onClick={() => alert("Ke Laporan")}>Laporan</button>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-x-auto whitespace-nowrap px-4">
        <div className="inline-flex gap-4">
          <img src="/images/img1.jpg" alt="Gambar 1" className="w-64 h-40 object-cover rounded" />
          <img src="/images/img2.jpg" alt="Gambar 2" className="w-64 h-40 object-cover rounded" />
          <img src="/images/img3.jpg" alt="Gambar 3" className="w-64 h-40 object-cover rounded" />
        </div>
      </div>

    </div>
  );
}
