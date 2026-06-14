import Image from "next/image";
import Link from "next/link";

import { mainNav, siteConfig, getWhatsAppUrl } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image src="/media/brand/astatengenlogo.svg" width={72} height={72} alt="" />
        <div>
          <p className="eyebrow">Asta Tengen</p>
          <h2>Website yang dibuat dengan batas jelas dan arah yang matang.</h2>
        </div>
      </div>

      <div className="footer-grid">
        <div>
          <h3>Kontak</h3>
          <a href={getWhatsAppUrl()}>{siteConfig.whatsappDisplay}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.hours}</p>
        </div>
        <div>
          <h3>Menu</h3>
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Legal</h3>
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
          <Link href="/syarat-layanan">Syarat Layanan</Link>
          <p>Ikon sosial belum ditampilkan sampai URL resmi tersedia.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Asta Tengen.</span>
        <span>Berbasis di Semarang. Melayani seluruh Indonesia.</span>
      </div>
    </footer>
  );
}
