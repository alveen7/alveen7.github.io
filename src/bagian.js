// Daftar bagian website. `tampil: false` berarti bagian itu belum tayang di website publik:
// hilang dari menu dan halamannya tidak ikut dibangun.
// Di pratinjau lokal (npm run dev) semua bagian selalu terlihat, supaya bisa dikerjakan dulu.
const daftar = [
  { slug: '', nama: 'Beranda', tampil: true },
  { slug: 'tentang', nama: 'Tentang', tampil: false },
  { slug: 'tulisan', nama: 'Tulisan', tampil: false },
  { slug: 'karya', nama: 'Karya', tampil: false },
  { slug: 'investasi', nama: 'Investasi', tampil: false },
];

export const bagian = daftar.map((b) => ({ ...b, tampil: b.tampil || import.meta.env.DEV }));

export const tampil = (slug) => bagian.some((b) => b.slug === slug && b.tampil);
