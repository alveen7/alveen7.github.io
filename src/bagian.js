// Daftar bagian website. `tampil: false` berarti bagian itu belum tayang di website publik:
// hilang dari menu dan halamannya tidak ikut dibangun.
// Di pratinjau lokal (npm run dev) semua bagian selalu terlihat, supaya bisa dikerjakan dulu.
const daftar = [
  // `sementara: true` berarti bagian itu belum punya halaman sendiri dan memakai halaman sementara.
  // Untuk Beranda: website publik menampilkan "Segera hadir" sampai tiket 09 menghapus tanda ini.
  { slug: '', nama: 'Beranda', tampil: true, sementara: true },
  { slug: 'tentang', nama: 'Tentang', tampil: false, sementara: true },
  { slug: 'tulisan', nama: 'Tulisan', tampil: false },
  { slug: 'karya', nama: 'Karya', tampil: false, sementara: true },
  { slug: 'investasi', nama: 'Investasi', tampil: false, sementara: true },
];

export const bagian = daftar.map((b) => ({ ...b, tampil: b.tampil || import.meta.env.DEV }));

export const tampil = (slug) => bagian.some((b) => b.slug === slug && b.tampil);

// Tautan sosmed. Isi `href` dengan alamat profil. Selama kosong, tombolnya tidak tayang di
// website publik; di pratinjau lokal tombol tetap terlihat supaya tampilan bisa dinilai.
export const ikuti = [
  { nama: 'Threads', href: 'https://www.threads.com/@alveen7' },
  { nama: 'Instagram', href: 'https://www.instagram.com/alveen7/' },
]
  .filter((s) => s.href || import.meta.env.DEV)
  .map((s) => ({ ...s, href: s.href || '#' }));
