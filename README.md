# Roudhotuttholibin — Website Resmi Pondok Pesantren

Website resmi **Pondok Pesantren Roudhotuttholibin**, dibangun sebagai situs statis (SSG) dengan [Astro](https://astro.build), TypeScript, dan Tailwind CSS. Tanpa backend, tanpa database — cepat, ringan, dan mudah di-deploy ke GitHub Pages.

**Live:** [robin.ponpes.id](https://robin.ponpes.id)

## Tech Stack

- **[Astro 7](https://astro.build)** — static site generation, komponen `.astro` murni (tanpa React/Vue/Svelte)
- **TypeScript** — mode `strict`
- **Tailwind CSS v4** — konfigurasi CSS-first di `src/styles/global.css` (lihat `@theme`)
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** — ikon dari set Phosphor (`ph:`) dan Material Design Icons (`mdi:`)
- **[astro-seo](https://github.com/jonasmerlin/astro-seo)** — meta tag, Open Graph, Twitter Card
- **[astro-compress](https://github.com/PlayForm/Compress)** — minifikasi HTML/CSS/JS/SVG saat build
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — `sitemap-index.xml` otomatis
- **ESLint 10** (flat config) + **Prettier** — linting & format konsisten

## Menjalankan Proyek

Butuh Node.js `>=22.12.0`.

```bash
npm install       # instal dependencies
npm run dev       # jalankan dev server di localhost:4321
npm run build     # type-check (astro check) lalu build ke ./dist
npm run preview   # preview hasil build secara lokal
npm run lint      # ESLint untuk .astro/.ts/.js
npm run format    # format semua file dengan Prettier
```

## Struktur Proyek

```
src/
├── components/       # Komponen .astro yang dapat dipakai ulang (flat, ~18 komponen)
├── layouts/
│   └── BaseLayout.astro   # Layout utama: SEO, Open Graph, JSON-LD, font, dark mode, ClientRouter
├── pages/             # Setiap file/folder = satu rute
│   └── berita/
│       ├── index.astro    # Daftar berita
│       └── [id].astro     # Detail berita (dinamis, dari content collection)
├── content/
│   └── news/          # Artikel berita (Markdown)
├── content.config.ts   # Skema content collection "news" (Content Layer API)
├── utils/
│   ├── site.ts         # Konstanta situs: nama, kontak, nav, footer
│   └── data.ts          # Data terstruktur: program, fasilitas, guru, prestasi, PPDB, donasi, dll.
├── styles/
│   └── global.css      # Design tokens Tailwind v4 (@theme), base styles, komponen utilitas
└── assets/images/       # Gambar sumber (dioptimasi otomatis oleh astro:assets saat build)
```

### Menambah berita baru

Tambahkan file Markdown baru di `src/content/news/`, misalnya `src/content/news/nama-artikel.md`:

```md
---
title: 'Judul Berita'
excerpt: 'Ringkasan singkat 1-2 kalimat.'
date: 2026-08-01
category: 'Pengumuman'
image: '../../assets/images/news/news-4.jpg'
author: 'Admin Pesantren'
---

Isi artikel dalam format Markdown di sini.
```

Halaman `/berita` dan `/berita/[id]` akan otomatis mengambilnya — tidak perlu mengubah kode apa pun.

### Mengubah data situs (kontak, program, guru, dll.)

Semua data terstruktur yang non-artikel (program, fasilitas, statistik, guru, prestasi, tahapan PPDB, rekening donasi, FAQ) ada di satu tempat: `src/utils/data.ts`. Konstanta situs (nama, alamat, nomor WhatsApp, tautan sosial media, link Google Maps) ada di `src/utils/site.ts`.

## Deployment (GitHub Pages)

Repositori ini sudah dikonfigurasi untuk custom domain (`robin.ponpes.id` via `public/CNAME`), dengan workflow GitHub Actions di `.github/workflows/deploy.yml` yang otomatis build & deploy setiap push ke branch `main`.

Langkah setup di GitHub (sekali saja):

1. Buka **Settings → Pages** pada repositori.
2. Pada **Source**, pilih **GitHub Actions**.
3. Push ke branch `main` — workflow akan otomatis build dan men-deploy situs.
4. Pastikan DNS domain `ponpes.id` mengarahkan subdomain `robin` (CNAME record) ke `<username-organisasi>.github.io`, sesuai [dokumentasi GitHub tentang custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

> Jika suatu saat situs dipindah dari custom domain ke URL bawaan GitHub Pages (`https://<org>.github.io/robin`), ubah `site` dan tambahkan `base: '/robin'` di `astro.config.mjs`, lalu hapus `public/CNAME`.

## Catatan Implementasi

- **PPDB** (`src/pages/ppdb.astro`): tombol "Daftar Sekarang" mengarah ke URL form eksternal placeholder (`REGISTRATION_FORM_URL`) — ganti dengan link Google Form/SIM PPDB panitia sebelum go-live.
- **Kontak** (`src/pages/kontak.astro`): karena situs ini statis tanpa backend, formulir kontak membuka aplikasi email pengunjung (`mailto:`) sebagai fallback yang jujur dan tanpa dependensi. Untuk pengalaman submit-di-halaman, sambungkan ke layanan seperti Formspree/Web3Forms atau serverless function sebelum go-live.
- **Donasi** (`src/pages/donasi.astro`): nomor rekening pada `DONATION_CHANNELS` (`src/utils/data.ts`) adalah data contoh — perbarui dengan rekening resmi yayasan.

## Lisensi

© Pondok Pesantren Roudhotuttholibin. Seluruh hak cipta dilindungi.
