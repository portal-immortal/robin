// Structured sample content for the site. Swap with real pesantren data
// before launch — the shape is what matters for the components.

export const PROGRAMS = [
  {
    icon: 'ph:book-open-text-fill',
    title: 'Tahfizh Al-Qur\u2019an',
    description:
      'Program menghafal Al-Qur\u2019an 30 juz dengan metode talaqqi dan target hafalan terukur setiap semester.',
  },
  {
    icon: 'ph:chalkboard-teacher-fill',
    title: 'Pendidikan Diniyah',
    description:
      'Kajian kitab kuning, fiqih, akidah, dan bahasa Arab yang membentuk pemahaman agama yang kokoh.',
  },
  {
    icon: 'ph:graduation-cap-fill',
    title: 'Pendidikan Formal',
    description:
      'Jenjang MTs dan MA berkurikulum nasional terintegrasi, mempersiapkan santri melanjutkan ke jenjang lebih tinggi.',
  },
  {
    icon: 'ph:users-three-fill',
    title: 'Pembinaan Akhlak',
    description:
      'Pembiasaan akhlak islami dalam keseharian asrama, dari adab hingga kemandirian dan kepemimpinan.',
  },
  {
    icon: 'ph:translate',
    title: 'Bahasa Arab & Inggris',
    description:
      'Program pengembangan bahasa asing melalui lingkungan berbahasa (bi\u2019ah lughawiyah) sehari-hari.',
  },
  {
    icon: 'ph:trophy-fill',
    title: 'Ekstrakurikuler & Bakat',
    description:
      'Pengembangan minat bakat melalui pramuka, olahraga, seni kaligrafi, hadroh, dan pidato tiga bahasa.',
  },
] as const;

export const FACILITIES = [
  {
    icon: 'ph:mosque-fill',
    title: 'Masjid Pesantren',
    description: 'Pusat ibadah dan kajian dengan kapasitas lebih dari 1.000 jamaah.',
  },
  {
    icon: 'ph:bed-fill',
    title: 'Asrama Santri',
    description: 'Asrama putra dan putri terpisah, nyaman, dan diawasi pembina 24 jam.',
  },
  {
    icon: 'ph:books',
    title: 'Perpustakaan',
    description: 'Koleksi kitab, buku pelajaran, dan ruang baca yang tenang.',
  },
  {
    icon: 'ph:flask-fill',
    title: 'Laboratorium',
    description: 'Laboratorium IPA dan komputer untuk menunjang pendidikan formal.',
  },
  {
    icon: 'ph:first-aid-kit-fill',
    title: 'Klinik Kesehatan',
    description: 'Layanan kesehatan santri dengan tenaga medis yang siaga.',
  },
  {
    icon: 'ph:soccer-ball-fill',
    title: 'Lapangan Olahraga',
    description: 'Fasilitas olahraga futsal, voli, dan bulu tangkis untuk santri.',
  },
  {
    icon: 'ph:fork-knife-fill',
    title: 'Dapur & Kantin Sehat',
    description: 'Penyediaan makanan bergizi seimbang tiga kali sehari.',
  },
  {
    icon: 'ph:drop-fill',
    title: 'Sarana Air Bersih',
    description: 'Instalasi air bersih memadai untuk kebutuhan ibadah dan sehari-hari.',
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: 'Juara 1 MTQ Cabang Tilawah',
    level: 'Tingkat Provinsi',
    year: '2026',
    category: 'Keagamaan',
  },
  {
    title: 'Juara 2 Olimpiade Sains Madrasah',
    level: 'Tingkat Kabupaten',
    year: '2026',
    category: 'Akademik',
  },
  {
    title: 'Juara 1 Lomba Kaligrafi Islam',
    level: 'Tingkat Provinsi',
    year: '2025',
    category: 'Seni',
  },
  {
    title: 'Juara 1 Futsal Antar Pesantren',
    level: 'Tingkat Kabupaten',
    year: '2025',
    category: 'Olahraga',
  },
] as const;

export const HISTORY = [
  {
    year: '2019',
    title: 'Pendirian Pesantren',
    description:
      'Roudhotuttholibin didirikan sebagai majelis taklim kecil oleh para pendiri yang peduli pendidikan agama di lingkungan sekitar.',
  },
  {
    year: '2021',
    title: 'Wisude Santri lulusan Kitab Kuning klasik pertama',
    description:
      'Wisuda santri pertama yang berhasil menyelesaikan program pendidikan kitab-kitab agama Islam klasik.',
  },
  {
    year: '2026',
    title: 'Peluncuran Website Resmi',
    description:
      'Roudhotuttholibin meluncurkan platform digital untuk memudahkan akses informasi bagi calon santri dan wali santri.',
  },
] as const;

export const STATS = [
  { value: 850, suffix: '+', label: 'Santri Aktif' },
  { value: 62, suffix: '', label: 'Ustadz & Ustadzah' },
  { value: 27, suffix: '', label: 'Tahun Mengabdi' },
  { value: 120, suffix: '+', label: 'Penghafal Al-Quran' },
] as const;

import pengasuhImage1 from '@/assets/images/teachers/pengasuh ustadz Johan Aliansyah.jpeg';
import pengasuhImage2 from '@/assets/images/teachers/pengasuh ustadzah Siti Zakiyah.jpeg';

export const TEACHERS = [
  {
    name: 'Ustadz Johan Aliansyah',
    role: 'Pengasuh Pesantren Santri Laki-laki',
    subject: 'Ustadz & Pembimbing Santri',
    image: pengasuhImage1,
  },
  {
    name: 'Ustadzah Siti Zakiyah',
    role: 'Pengasuh Pesantren Santri Perempuan',
    subject: 'Ustadzah & Pembimbing Santriwati',
    image: pengasuhImage2,
  },
];

export const GALLERY_CAPTIONS = [
  'Majlis Ta\'lim Santri',
  'Bersama  AL-MARHUM AL-MAGHFURLLAH MAHA GURU Pendiri Pondok Pesantren Roudhotuttholibin Syaikhuna KH. MUHYIDDIN BIN H. INDI ROSYIDI ',
  'Kajian Kitab Kuning',
  'Motivasi belajar mengaji',
  'Wisuda Santri Kitab Kuning',
  'Pengajian bersama KH GUSWAN SEGO (Presdir PT MMS Travel Umroh & Pengasuh Pondok Pesantren Arroyaan)',
  'Wisuda Santriwati berprestasi bersama kedua orang tua',
  'Pengajian kajian Santri dan Umum',
  'Peringatan Hari Besar Islam',
  'Kajian kitab kuning bersama',
  'Suasana mengajar Santri',
  'Kegiatan makan bersama Santri',
];

export const PPDB_STEPS = [
  {
    title: 'Isi Formulir Pendaftaran',
    description:
      'Lengkapi formulir pendaftaran online melalui tautan yang tersedia pada halaman PPDB.',
  },
  {
    title: 'Unggah Berkas Persyaratan',
    description:
      'Siapkan dan unggah dokumen seperti akta kelahiran, kartu keluarga, dan ijazah/rapor terakhir.',
  },
  {
    title: 'Verifikasi Berkas',
    description: 'Panitia akan memverifikasi kelengkapan berkas dalam waktu 1\u20133 hari kerja.',
  },
  {
    title: 'Tes Seleksi Masuk',
    description:
      'Calon santri mengikuti tes baca Al-Qur\u2019an, akademik dasar, dan wawancara bersama wali santri.',
  },
  {
    title: 'Pengumuman Kelulusan',
    description:
      'Hasil seleksi diumumkan melalui website dan dihubungi langsung oleh panitia PPDB.',
  },
  {
    title: 'Daftar Ulang',
    description: 'Santri yang dinyatakan lulus melakukan daftar ulang dan pelunasan administrasi.',
  },
] as const;

export const PPDB_REQUIREMENTS = [
  'Fotokopi Akta Kelahiran',
  'Fotokopi Kartu Keluarga',
  'Fotokopi Ijazah/Rapor terakhir yang telah dilegalisir',
  'Pas foto berwarna terbaru ukuran 3x4 (4 lembar)',
  'Surat keterangan sehat dari dokter/puskesmas',
  'Mengisi surat pernyataan kesanggupan mengikuti tata tertib pesantren',
] as const;

export const DONATION_CHANNELS = [
  {
    bank: 'Bank Syariah Indonesia (BSI)',
    account: '7123456789',
    holder: 'Yayasan Roudhotuttholibin',
  },
  { bank: 'Bank Mandiri', account: '1234007890123', holder: 'Yayasan Roudhotuttholibin' },
] as const;

export const FAQ_PPDB = [
  {
    q: 'Kapan jadwal pendaftaran Pondok Pesantren dibuka?',
    a: 'Pendaftaran dibuka setiap tahun, informasi jadwal terbaru selalu diumumkan pada halaman Berita.',
  },
  {
    q: 'Apakah tersedia program beasiswa?',
    a: 'Ya, tersedia program keringanan biaya bagi santri tahfizh berprestasi dan yatim/dhuafa. Informasi lebih lanjut dapat ditanyakan ke Pengasuh Pondok.',
  },
  {
    q: 'Apa saja jenjang yang tersedia?',
    a: 'Pesantren menerima santri baru untuk jenjang MTs (setingkat SMP) dan MA (setingkat SMA), program reguler maupun kitab kuning.',
  },
] as const;
