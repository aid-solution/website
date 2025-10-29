"use server";

import { transporter } from "@/lib/mail";

type ContactData = {
  nomPrenom: string;
  phone: string;
  email: string;
  sujet: string;
  message: string;
};

export const sendContact = async (data: ContactData) => {
  const { nomPrenom, phone, email, sujet, message } = data;

  if (!nomPrenom || !phone || !email || !sujet || !message) {
    throw new Error("Tous les champs sont obligatoires");
  }

  // 1️⃣ Email envoyé à l’admin
  await transporter.sendMail({
    from: `Formulaire Contact <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    subject: `📩 Nouveau message : ${sujet}`,
    html: `
      <h2>Nouveau message reçu</h2>
      <p><strong>Nom :</strong> ${nomPrenom}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${sujet}</p>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `,
  });

  // 2️⃣ Réponse automatique à l’utilisateur
  await transporter.sendMail({
    from: `Support <${process.env.SMTP_USER}>`,
    to: email,
    subject: "✅ Confirmation de réception",
    html: `
      <h2>Bonjour ${nomPrenom},</h2>
      <p>Merci pour votre message concernant <strong>${sujet}</strong>.</p>
      <p>Nous vous répondrons dans les plus brefs délais.</p>
      <br/>
      <p>Cordialement,<br/>L'équipe support</p>
    `,
  });

  return { success: true };
}
