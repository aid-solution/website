import { /* ChangeEvent, */ useEffect, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMainContext } from "../_contexts/MainContext";
import { ConsultingFormValues, consultingSchema } from "@/lib/validation.consulting";
import InputBox from "./InputBox";
import { requestQuote } from "@/actions/consulting";

const Consulting = () => {

  const serviceList: string[] = ["Logiciels", "Ventes", "Réseaux et Télécoms", "Maintenace", "Formation", "Site Web"];

  const { setLoading } = useMainContext();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ConsultingFormValues>({
    resolver: zodResolver(consultingSchema),
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
  /* const [onFocus, setOnFocus] = useState<boolean>(false) */

  const onSubmit = async (data: ConsultingFormValues) => {
    setLoading(false);
    try {
      await requestQuote(data);
      setToast({ status: "success", message: "Votre demande a été envoyé avec succès !" });
      reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setToast({ status: "error", message: "Une erreur est survenue lors de l'envoi de la demande." });
    } finally {
      setLoading(true);
    }
  }

  /* const handleFocus = () => {
    setOnFocus(true);
  }

  const handleHideDatalist = () => {
    setOnFocus(false);
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (!serviceList.includes(value)) setValue("service", "");
    handleAutoHideDatalist(e);
  };

  const handleAutoHideDatalist = (e: ChangeEvent<HTMLInputElement>) => {
    const body = document.querySelector('body')!;
    const hideDatalist = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const inputElement = e.target as HTMLInputElement;
      if (target.tagName !== 'OPTION' && event.target !== inputElement) {
        handleHideDatalist();
      }
    }
    body.addEventListener('click', (event: MouseEvent) => {
      hideDatalist(event);
      body.removeEventListener("click", (event: MouseEvent) => hideDatalist(event));
    });
  }

  const handleChoice = (name: string, data: string) => {
    const test = data.split("&#10077;")[1];
    const value = test ? test.replace("&#10078;", "") : data;
    setValue(name as keyof ConsultingFormValues, value);
    handleHideDatalist();
  } */

  return (
    <div className="px-2 md:px-[100px] py-[50px]" id="consulting">
      <div className="relative mb-10 mt-20">
        <h1 className="uppercase text-4xl font-extrabold text-center pb-4">OBTENIR UN DEVIS</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[5px] bg-stone-200 rounded-md"></span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="flex-1 relative h-[400px] lg:h-[400px]">
          <Image
            src={"/images/contact.png"}
            alt="Company"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 lg:max-w-2xl lg:mx-auto p-2 lg:p-6">
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
                name="service"
                placeholder="Le service que vous recherchez ?"
                register={register}
                value={getValues("service")}
                setValue={setValue}
                isRequired={true}
                errors={errors}
                errorMsg={errors.email ? errors.email.message : undefined}
                datalist={serviceList}
              />
            </div>
            <div className="form-group relative mt-4">
              <textarea
                rows={4}
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
                Votre Message
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer px-3 py-2 border-2 border-green-600 hover:bg-white rounded-md bg-green-600 hover:text-green-600 hover:border-green-600 text-white font-semibold"
              >
                {isSubmitting ? "Envoi..." : "OBTENIR UN DEVIS"}
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
                    <h3 className="text-lg font-medium">Demande de devis</h3>
                  </div>
                  <div className="mt-2 text-sm">{toast.message}</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Consulting