import React, { useEffect, useState } from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues, contactSchema } from "@/lib/validation.contact";
import { useForm } from "react-hook-form";
import { sendContact } from "@/actions/contact";
import { useMainContext } from "@/app/_contexts/MainContext";
import InputBox from "@/app/_components/InputBox";

const contacts = [
  {
    direction: "Direction Générale",
    tel: "+227 20 72 20 15",
    email: "ventes@gammaniger.com"
  },
  {
    direction: "Direction Etude Logicielle - Formation",
    tel: "+227 90 20 50 07",
    email: "delog@gammaniger.com"
  },
  {
    direction: "Direction Technique",
    tel: "+227 90 20 50 **",
    email: "dt@gammaniger.com"
  }
]

const ContactContent = () => {
  const { setLoading } = useMainContext();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [show, setShow] = useState(isSubmitSuccessful);

  useEffect(() => {
    setShow(isSubmitSuccessful);

    if (isSubmitSuccessful) {
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful]);

  const [toast, setToast] = useState<{ status: "success" | "error" | null; message: string }>({
    status: null,
    message: "",
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(false);
    try {
      await sendContact(data);
      setToast({ status: "success", message: "Votre message a été envoyé avec succès !" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setToast({ status: "error", message: "Une erreur est survenue lors de l'envoi du message." });
    } finally {
      setLoading(true);
    }
  }



  return (
    <div className="px-2 lg:px-[100px] py-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 md:max-w-2xl md:mx-auto md:p-6">
          <h1 className="uppercase text-2xl font-extrabold text-[#024089] pb-4">Formulaire de contact</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Première ligne : Nom & Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputBox
                type="text"
                name="nomPrenom"
                placeholder="Nom & Prénom"
                register={register}
                value={getValues("nomPrenom")}
                setValue={setValue}
                isRequired={true}
                errors={errors}
                errorMsg={errors.nomPrenom ? errors.nomPrenom.message : undefined}
              />
              <InputBox
                type="tel"
                name="phone"
                placeholder="Téléphone"
                register={register}
                value={getValues("phone")}
                setValue={setValue}
                isRequired={true}
                errors={errors}
                errorMsg={errors.phone ? errors.phone.message : undefined}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputBox
                type="email"
                name="email"
                placeholder="E-mail"
                register={register}
                value={getValues("email")}
                setValue={setValue}
                isRequired={true}
                errors={errors}
                errorMsg={errors.email ? errors.email.message : undefined}
              />
              <InputBox
                type="text"
                name="sujet"
                placeholder="Sujet"
                register={register}
                value={getValues("sujet")}
                setValue={setValue}
                isRequired={true}
                errors={errors}
                errorMsg={errors.sujet ? errors.sujet.message : undefined}
              />
            </div>
            <div className="form-group relative mt-4">
              <textarea
                rows={8}
                id="message"
                {...register("message", { required: true })}
                className="block py-2 px-0 w-full text-stone-700 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              ></textarea>
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              <label
                htmlFor="message"
                className="absolute text-gray-700 duration-300 transform -translate-y-6 scale-75 top-2 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-green-600"
              >
                Message...
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-3 py-2 border-2 border-green-600 hover:bg-white rounded-md bg-green-600 hover:text-green-600 hover:border-green-600 text-white font-semibold"
              >
                {isSubmitting ? "Envoi..." : "ENVOYER"}
              </button>
            </div>
          </form>

          {
            show && (
              <div className="fixed top-4 right-4 z-50">
                <div
                  className={`p-4 max-w-sm rounded-lg shadow-lg border ${toast.status === "success"
                    ? "text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-gray-800"
                    : toast.status === "error"
                      ? "text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:border-red-800 dark:bg-gray-800"
                      : ""
                    }`}
                  role="alert"
                >
                  <div className="flex items-center">
                    {toast.status === "success" ? (
                      <svg
                        className="shrink-0 w-5 h-5 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 15l-5-5 1.5-1.5L11 12l4-4 1.5 1.5z" />
                      </svg>
                    ) : (
                      <svg
                        className="shrink-0 w-5 h-5 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 14h-2v-2h2zm0-4h-2V4h2z" />
                      </svg>
                    )}
                    <h3 className="text-lg font-medium">Soumission du formulaire</h3>
                  </div>
                  <div className="mt-2 text-sm">{toast.message}</div>
                </div>
              </div>
            )
          }

        </div>
        <div className="flex-1 md:max-w-2xl md:mx-auto md:p-6">
          <h1 className="uppercase text-2xl font-extrabold text-[#024089] pb-4">Numéros utiles</h1>
          <div className="flex flex-col justify-center gap-10">
            {
              contacts.map(({ direction, tel, email }, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <h3 className="uppercase underline text-[#024089] font-semibold text-xl"> {direction} </h3>
                  <div className="flex gap-2">
                    <Phone className="text-[#024089]" size={24} />
                    <Link href={`tel:${tel.replaceAll(" ", "")}`} >
                      {tel}
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="text-[#024089]" size={24} />
                    <Link href={`mailto:${email}`}>
                      {email}
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent