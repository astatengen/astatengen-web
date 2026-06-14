import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <p className="eyebrow">Tidak ditemukan</p>
      <h1>Halaman yang kamu cari tidak tersedia.</h1>
      <p>Periksa kembali tautan atau kembali ke beranda Asta Tengen.</p>
      <Link className="button button-dark" href="/">
        Kembali ke beranda
      </Link>
    </section>
  );
}
