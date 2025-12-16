'use client'

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicy() {
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
            <Shield className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            NOOR ASLIANI berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-amber-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di NOOR ASLIANI. Kami sangat menghargai kepercayaan Anda dalam menggunakan layanan kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda mengunjungi website kami atau menggunakan layanan kerajinan tangan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan website NOOR ASLIANI, Anda setuju dengan praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-amber-600" />
                <span>Informasi yang Kami Kumpulkan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Informasi Pribadi</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Informasi Teknis</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Sistem operasi</li>
                    <li>Data penggunaan website</li>
                    <li>Cookies dan teknologi pelacakan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-amber-600" />
                <span>Cara Kami Menggunakan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-gray-700">
                  Kami menggunakan informasi yang dikumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Memproses dan menyelesaikan transaksi pembelian produk kerajinan</li>
                  <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                  <li>Mengirimkan informasi produk dan penawaran khusus</li>
                  <li>Mempersonalisasi pengalaman berbelanja Anda</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Melindungi dari aktivitas penipuan dan penyalahgunaan</li>
                  <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-amber-600" />
                <span>Keamanan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                NOOR ASLIANI mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>System monitoring keamanan 24/7</li>
                <li>Update keamanan berkala</li>
                <li>Training staf tentang keamanan data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman.
              </p>
            </CardContent>
          </Card>

          {/* Third Party Sharing */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-amber-600" />
                <span>Pembagian Informasi dengan Pihak Ketiga</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga untuk keperluan pemasaran tanpa persetujuan Anda. 
                Kami hanya akan membagikan informasi dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Dengan penyedia layanan pembayaran untuk memproses transaksi</li>
                <li>Dengan jasa pengiriman untuk mengirimkan produk Anda</li>
                <li>Dengan mitra bisnis yang membantu kami menyediakan layanan</li>
                <li>Untuk mematuhi hukum atau perintah pengadilan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan NOOR ASLIANI atau pelanggan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-amber-600" />
                <span>Hak Anda</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mengakses dan memperbarui informasi pribadi Anda</li>
                <li>Minta penghapusan data pribadi Anda</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi yang kami simpan</li>
                <li>Mengelola preferensi cookie Anda</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang tersedia.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-amber-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, 
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
                  Email: privacy@noorasliani.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. 
            Perubahan akan diposting di halaman ini dengan tanggal terakhir diperbarui.
          </p>
        </div>
      </div>
    </div>
  )
}