"use server";

import { transporter } from "@/lib/mail";

type ContactData = {
  nomPrenom: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export const requestQuote = async (data: ContactData) => {
  const { nomPrenom, phone, email, service, message } = data;

  if (!nomPrenom || !phone || !email || !service || !message) {
    throw new Error("Tous les champs sont obligatoires");
  }

  // 1️⃣ Email envoyé à l’admin
  await transporter.sendMail({
    from: `Demande de devis <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    subject: `Nouvelle demande de devis pour la prestation : ${service}`,
    html: `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom :</strong> ${nomPrenom}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Service demandé :</strong> ${service}</p>
      <p><strong>Message :</strong></p>
      <p>${message}</p>
    `,
  });

  // 2️⃣ Réponse automatique à l’utilisateur
  await transporter.sendMail({
    from: `Support <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Confirmation de réception",
    html: `
      <h2>Bonjour ${nomPrenom},</h2>
      <p>Merci pour votre demande de devis concernant la prestation : <strong>${service}</strong>.</p>
      <p>Nous vous répondrons dans les plus brefs délais.</p>
      <br/>
      <p>Cordialement,<br/>L'équipe support</p>
    `,
  });

  return { success: true };
}
