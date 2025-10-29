// lib/validation.ts
import { z } from "zod";

export const contactSchema = z.object({
  nomPrenom: z.string().min(3, "Le nom complet est obligatoire"),
  phone: z.string().regex(/^[0-9+ ]{6,20}$/, "Numéro invalide"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(2, "Sujet obligatoire"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
