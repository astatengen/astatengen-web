"use client";

import { FormEvent, useState } from "react";
import { getWhatsAppUrl } from "@/content/site";

type Errors = Partial<Record<
  "name" | "business" | "businessType" | "whatsapp" | "location" | "service" | "need" | "privacy",
  string
>>;

const packageOptions = [
  "One Page Starter — Rp199.000",
  "Business Profile — Rp699.000",
  "Business Plus — Rp1.499.000",
  "Custom Website — mulai Rp2.500.000",
  "Belum yakin, ingin diarahkan",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  function validate(formData: FormData) {
    const nextErrors: Errors = {};

    if (!String(formData.get("name") ?? "").trim()) nextErrors.name = "Nama wajib diisi.";
    if (!String(formData.get("business") ?? "").trim()) nextErrors.business = "Nama bisnis wajib diisi.";
    if (!String(formData.get("businessType") ?? "").trim()) nextErrors.businessType = "Jenis usaha wajib diisi.";
    if (!String(formData.get("whatsapp") ?? "").trim()) nextErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    if (!String(formData.get("location") ?? "").trim()) nextErrors.location = "Lokasi wajib diisi.";
    if (!String(formData.get("service") ?? "").trim()) nextErrors.service = "Pilih paket yang diminati.";
    if (!String(formData.get("need") ?? "").trim()) nextErrors.need = "Ceritakan kebutuhan singkat website Anda.";
    if (formData.get("privacy") !== "on") {
      nextErrors.privacy = "Persetujuan Kebijakan Privasi wajib dicentang.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);

    setErrors(nextErrors);
    setNotice("");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const message = [
      "Halo Sector One, saya ingin konsultasi website.",
      `Nama bisnis: ${formData.get("business")}`,
      `Jenis usaha: ${formData.get("businessType")}`,
      `Lokasi: ${formData.get("location")}`,
      `Paket yang diminati: ${formData.get("service")}`,
      `Materi yang sudah tersedia: ${formData.get("materials") || "-"}`,
      `Target pengerjaan: ${formData.get("timeline") || "-"}`,
      "",
      `Kebutuhan singkat: ${formData.get("need")}`,
    ].join("\n");

    setNotice("WhatsApp akan terbuka dengan ringkasan kebutuhan. Pesan belum terkirim sampai Anda menekan kirim di WhatsApp.");
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-grid">
        <Field label="Nama Lengkap" name="name" error={errors.name} required />
        <Field label="Nama Bisnis" name="business" error={errors.business} required />
        <Field label="Jenis Usaha" name="businessType" error={errors.businessType} required />
        <Field label="Nomor WhatsApp" name="whatsapp" error={errors.whatsapp} placeholder="contoh: 08123456789" required />
      </div>

      <div className="field-grid">
        <Field label="Lokasi Bisnis (Kota)" name="location" error={errors.location} placeholder="contoh: Semarang" required />
        <Select label="Paket yang diminati" name="service" options={packageOptions} error={errors.service} required />
      </div>

      <div className="field-grid">
        <Field label="Materi yang sudah tersedia (contoh: logo, foto produk, daftar harga, dll)" name="materials" placeholder="contoh: logo & daftar harga sudah ada" />
        <Field label="Target pengerjaan" name="timeline" placeholder="contoh: 1 minggu" />
      </div>

      <label className="field">
        <span>Kebutuhan singkat *</span>
        <textarea name="need" rows={4} aria-invalid={Boolean(errors.need)} aria-describedby={errors.need ? "need-error" : undefined} placeholder="Jelaskan secara singkat apa saja yang ingin ditampilkan di website Anda..." />
        {errors.need ? <small id="need-error">{errors.need}</small> : null}
      </label>

      <label className="privacy-check">
        <input name="privacy" type="checkbox" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} />
        <span>
          Saya sudah membaca dan menyetujui <a href="/kebijakan-privasi">Kebijakan Privasi</a> untuk konsultasi awal.
        </span>
      </label>
      {errors.privacy ? <small id="privacy-error" className="form-error">{errors.privacy}</small> : null}

      {notice ? <p className="form-notice">{notice}</p> : null}

      <button className="button button-primary" type="submit">
        Buka WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="field">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <input name={name} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
      {error ? <small id={errorId}>{error}</small> : null}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  error,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="field">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      <select name={name} defaultValue="" aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined}>
        <option value="" disabled>
          Pilih salah satu
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <small id={errorId}>{error}</small> : null}
    </label>
  );
}
