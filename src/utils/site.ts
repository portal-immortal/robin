// Central place for site-wide constants so copy & links aren't duplicated
// across components. Update once here, it propagates everywhere.

export const SITE = {
  name: 'Pondok Pesantren Roudhotuttholibin',
  shortName: 'PP Roudhotuttholibin',
  url: 'https://robin.ponpes.id',
  locale: 'id-ID',
  description:
    'Website resmi Pondok Pesantren Roudhotuttholibin — membentuk generasi Qur\u2019ani, berakhlak mulia, berilmu, berprestasi, dan siap mengabdi.',
  address: 'Gintung 001/001, RT.001/RW.001, Gintung, Kec. Sukadiri, Kabupaten Tangerang, Banten 15330',
  phone: '+62 858-9001-0574',
  whatsapp: '6285890010574',
  email: 'info@robin.ponpes.id',
  socials: {
    instagram: 'https://instagram.com/ppn.roudhotuttholibin',
    facebook: 'https://facebook.com/ppn.roudhotuttholibin',
    youtube: 'https://youtube.com/@ppn.roudhotuttholibin',
  },
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1113.27449353715!2d106.54955288374248!3d-6.095733757124846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a015dc5e52399%3A0xd053fdba41ec68a5!2sPondok%20Pesantren%20Roudhotuttholibin!5e0!3m2!1sid!2sid!4v1784716522865!5m2!1sid!2sid',
  mapsLink: 'https://maps.app.goo.gl/Nsr2rGhaMUFFbGSq5',
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Visi & Misi', href: '/visi-misi' },
  { label: 'Program', href: '/program' },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Ustadz & Ustadzah', href: '/pengajar' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
];

export const FOOTER_LINKS = {
  pesantren: [
    { label: 'Tentang Kami', href: '/tentang' },
    { label: 'Visi & Misi', href: '/visi-misi' },
    { label: 'Program Pendidikan', href: '/program' },
    { label: 'Fasilitas', href: '/fasilitas' },
  ],
  informasi: [
    { label: 'Berita & Kegiatan', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
  ],
  lainnya: [{ label: 'Kontak', href: '/kontak' }],
};
