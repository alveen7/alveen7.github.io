// Daftar bagian website. Ubah `tampil` menjadi false untuk menyembunyikan satu bagian:
// bagian itu hilang dari menu dan halamannya tidak ikut dibangun.
export const bagian = [
  { slug: '', nama: 'Beranda', tampil: true },
  { slug: 'tentang', nama: 'Tentang', tampil: true },
  { slug: 'tulisan', nama: 'Tulisan', tampil: true },
  { slug: 'karya', nama: 'Karya', tampil: true },
  { slug: 'investasi', nama: 'Investasi', tampil: true },
];

export const tampil = (slug) => bagian.some((b) => b.slug === slug && b.tampil);
