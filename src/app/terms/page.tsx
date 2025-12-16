'use client'

import { ArrowLeft, FileText, ShoppingBag, CreditCard, Package, AlertTriangle, Users, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsAndConditions() {
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

            <a href="/" className="inline-flex">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selamat datang di NOOR ASLIANI. Syarat dan ketentuan ini mengatur penggunaan layanan kami
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-amber-600" />
                <span>Penerimaan Syarat</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Dengan mengakses dan menggunakan website NOOR ASLIANI, Anda menyetujui dan terikat oleh 
                Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                NOOR ASLIANI berhak untuk mengubah syarat dan ketentuan ini kapan saja. 
                Perubahan akan efektif segera setelah diposting di website.
              </p>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-amber-600" />
                <span>Produk dan Layanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-gray-700">
                  NOOR ASLIANI menyediakan berbagai produk kerajinan tangan:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Tas anyaman tradisional</li>
                  <li>Lukisan khas Kalimantan Selatan</li>
                  <li>Perhiasan tradisional</li>
                  <li>Hiasan dinding kerajinan</li>
                  <li>Souvenir dan cenderamata</li>
                </ul>
                <p className="text-gray-700">
                  Kami berusaha untuk menyajikan produk dengan akurasi tinggi, namun karena sifat handmade dari produk kami,
                  variasi kecil dalam warna, ukuran, dan tekstur mungkin terjadi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
                <span>Pemesanan dan Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Proses Pemesanan</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Pilih produk yang diinginkan dan tambahkan ke keranjang</li>
                  <li>Lengkapi informasi pengiriman dengan benar</li>
                  <li>Pilih metode pembayaran yang tersedia</li>
                  <li>Konfirmasi pesanan dan selesaikan pembayaran</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Metode Pembayaran</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                  <li>E-Wallet (GoPay, OVO, DANA)</li>
                  <li>Pembayaran tunai (untuk pickup langsung)</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Konfirmasi Pembayaran</h4>
                <p className="text-gray-700">
                  Pembayaran harus dikonfirmasi maksimal 2x24 jam setelah pemesanan. 
                  Pesanan akan dibatalkan otomatis jika pembayaran tidak dilakukan dalam waktu yang ditentukan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping and Delivery */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-amber-600" />
                <span>Pengiriman dan Pengantaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Waktu Proses</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Produk ready stock: 1-2 hari kerja</li>
                  <li>Produk pre-order: 5-7 hari kerja</li>
                  <li>Produk custom: 10-14 hari kerja</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Opsi Pengiriman</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>JNE, J&T, TIKI, SiCepat (regular dan express)</li>
                  <li>GoSend / GrabExpress (untuk area Banjarmasin)</li>
                  <li>Pickup langsung di alamat kami</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Biaya Pengiriman</h4>
                <p className="text-gray-700">
                  Biaya pengiriman dihitung berdasarkan berat produk dan lokasi pengiriman. 
                  Estimasi biaya akan ditampilkan saat checkout.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-amber-600" />
                <span>Pengembalian dan Pengembalian Dana</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Kebijakan Pengembalian</h4>
                <p className="text-gray-700">
                  Pengembalian diterima dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Produk cacat atau rusak saat diterima</li>
                  <li>Produk tidak sesuai dengan deskripsi</li>
                  <li>Kesalahan pengiriman dari pihak kami</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Prosedur Pengembalian</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Hubungi kami dalam 3 hari setelah penerimaan produk</li>
                  <li>Sertakan foto/video produk yang bermasalah</li>
                  <li>Kami akan memproses pengembalian setelah verifikasi</li>
                </ul>
                
                <h4 className="font-semibold text-gray-800 mt-4">Pengembalian Dana</h4>
                <p className="text-gray-700">
                  Dana akan dikembalikan ke metode pembayaran yang sama dalam 5-7 hari kerja 
                  setelah pengembalian diterima dan diverifikasi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua konten di website NOOR ASLIANI, termasuk namun tidak terbatas pada teks, gambar, 
                logo, desain produk, dan grafis, dilindungi oleh hak cipta dan hukum kekayaan intelektual lainnya.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tidak ada bagian dari website ini yang boleh direproduksi, didistribusikan, atau digunakan 
                tanpa izin tertulis dari NOOR ASLIANI.
              </p>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span>Tanggung Jawab Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Tidak menggunakan website untuk tujuan ilegal</li>
                <li>Tidak mengganggu operasional website</li>
                <li>Memperlakukan staf dan pengguna lain dengan hormat</li>
                <li>Mematuhi semua syarat dan ketentuan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <span>Pembatasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                NOOR ASLIANI tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang 
                timbul dari penggunaan website atau pembelian produk, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                <li>Kerusakan produk selama pengiriman</li>
                <li>Kegagalan sistem atau downtime website</li>
                <li>Kehilangan data atau informasi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-800">
                  <strong>NOOR ASLIANI</strong><br />
                  JL. SUNGAI BARU NO. 15<br />
                  Kel. Sungai Baru, Kec. Banjarmasin Tengah<br />
                  Kota Banjarmasin, Provinsi Kalimantan Selatan<br />
                  <br />
                  Telepon: 085353876138<br />
                  Email: info@noorasliani.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Dengan menggunakan layanan NOOR ASLIANI, Anda mengakui telah membaca, 
            memahami, dan menyetujui Syarat dan Ketentuan ini.
          </p>
        </div>
      </div>
    </div>
  )
}