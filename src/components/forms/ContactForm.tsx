"use client";

import { FormEvent, useMemo, useState } from "react";

import { services } from "@/content/services";
import { getWhatsAppUrl } from "@/content/site";

type Errors = Partial<Record<"name" | "business" | "whatsapp" | "service" | "budget" | "need" | "privacy", string>>;

const budgetOptions = [
  "Rp750.000 - Starter Page",
  "Rp1.800.000 - Business Profile",
  "Mulai Rp3.500.000 - Custom Website",
  "Belum yakin, ingin diarahkan",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  const serviceOptions = useMemo(() => services.map((service) => service.name), []);

  function validate(formData: FormData) {
    const nextErrors: Errors = {};

    if (!String(formData.get("name") ?? "").trim()) nextErrors.name = "Nama wajib diisi.";
    if (!String(formData.get("business") ?? "").trim()) nextErrors.business = "Nama bisnis wajib diisi.";
    if (!String(formData.get("whatsapp") ?? "").trim()) nextErrors.whatsapp = "Nomor WhatsApp wajib diisi.";
    if (!String(formData.get("service") ?? "").trim()) nextErrors.service = "Pilih layanan yang diminati.";
    if (!String(formData.get("budget") ?? "").trim()) nextErrors.budget = "Pilih kisaran anggaran.";
    if (!String(formData.get("need") ?? "").trim()) nextErrors.need = "Ceritakan kebutuhan websitemu secara singkat.";
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
      "",
      `Nama: ${formData.get("name")}`,
      `Nama bisnis: ${formData.get("business")}`,
      `Nomor WhatsApp: ${formData.get("whatsapp")}`,
      `Jenis bisnis: ${formData.get("businessType") || "-"}`,
      `Layanan diminati: ${formData.get("service")}`,
      `Kisaran anggaran: ${formData.get("budget")}`,
      `Target waktu: ${formData.get("timeline") || "-"}`,
      `Referensi: ${formData.get("reference") || "-"}`,
      "",
      `Kebutuhan website: ${formData.get("need")}`,
      "",
      "Saya sudah membaca dan menyetujui Kebijakan Privasi Sector One untuk konsultasi awal.",
    ].join("\n");

    setNotice("WhatsApp akan terbuka dengan ringkasan kebutuhan. Pesan belum dikirim sampai kamu menekan kirim di WhatsApp.");
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-grid">
        <Field label="Nama" name="name" error={errors.name} required />
        <Field label="Nama bisnis" name="business" error={errors.business} required />
        <Field label="Nomor WhatsApp" name="whatsapp" error={errors.whatsapp} required />
        <Field label="Jenis bisnis" name="businessType" />
      </div>

      <div className="field-grid">
        <Select label="Layanan yang diminati" name="service" options={serviceOptions} error={errors.service} required />
        <Select label="Kisaran anggaran" name="budget" options={budgetOptions} error={errors.budget} required />
      </div>

      <Field label="Target waktu" name="timeline" />
      <Field label="Referensi website bila ada" name="reference" />

      <label className="field">
        <span>Kebutuhan website singkat *</span>
        <textarea name="need" rows={6} aria-invalid={Boolean(errors.need)} aria-describedby={errors.need ? "need-error" : undefined} />
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
  required = false,
}: {
  label: string;
  name: string;
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
      <input name={name} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
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
