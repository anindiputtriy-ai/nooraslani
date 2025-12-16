'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, ChevronRight, Star, Award, Palette, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="NOOR ASLIANI Logo" className="w-10 h-10" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                  NOOR ASLIANI
                </h1>
                <p className="text-xs text-amber-600 font-medium">Kerajinan Tangan</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Produk</a>
              <a href="/privacy" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Terms</a>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium">Tentang</a>
              <a href="#produk" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium">Produk</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md font-medium">Terms</a>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 mt-2">
                Hubungi Kami
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    NOOR ASLIANI
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                  Kerajinan Tangan Premium
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Menghadirkan keindahan dan keunikan kerajinan tangan tradisional Kalimantan Selatan dengan sentuhan modern yang elegan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3">
                  Lihat Koleksi
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
                  Hubungi Kami
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">100+</div>
                  <div className="text-sm text-gray-600">Produk Unik</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">50+</div>
                  <div className="text-sm text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                      <Wrench className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-amber-700">NOOR ASLIANI</p>
                    <p className="text-gray-600">Kerajinan Tangan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NOOR ASLIANI adalah usaha kerajinan tangan yang berdedikasi untuk melestarikan seni tradisional Kalimantan Selatan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Wrench className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Kerajinan Autentik</h3>
                <p className="text-gray-600">
                  Setiap produk dibuat dengan tangan oleh pengrajin berpengalaman dengan teknik tradisional yang diwariskan secara turun-temurun.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Kualitas Premium</h3>
                <p className="text-gray-600">
                  Menggunakan bahan-bahan pilihan berkualitas tinggi dengan kontrol kualitas yang ketat untuk setiap produk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Desain Unik</h3>
                <p className="text-gray-600">
                  Kombinasi antara motif tradisional Kalimantan Selatan dengan sentuhan modern yang menciptakan produk yang unik dan menarik.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi kerajinan tangan pilihan dengan kualitas terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tas Anyaman", category: "Fashion", rating: 4.8 },
              { name: "Lukisan Kalimantan", category: "Art", rating: 4.9 },
              { name: "Perhiasan Tradisional", category: "Aksesoris", rating: 4.7 },
              { name: "Hiasan Dinding", category: "Dekorasi", rating: 4.8 }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50">
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">
              Temukan produk kerajinan tangan terbaik untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    JL. SUNGAI BARU NO. 15<br />
                    Kel. Sungai Baru, Kec. Banjarmasin Tengah<br />
                    Kota Banjarmasin, Provinsi Kalimantan Selatan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Telepon</h3>
                  <p className="text-gray-600">085353876138</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@noorasliani.com</p>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Kirim Pesan</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Pesan Anda..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                    Kirim Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">NOOR ASLIANI</h3>
                  <p className="text-amber-200 text-sm">Kerajinan Tangan</p>
                </div>
              </div>
              <p className="text-amber-100">
                Menghadirkan keindahan kerajinan tangan tradisional Kalimantan Selatan dengan kualitas premium.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Navigasi</h4>
              <ul className="space-y-2 text-amber-100">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#produk" className="hover:text-white transition-colors">Produk</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-amber-100">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 NOOR ASLIANI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}