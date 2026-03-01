import { useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";
import { FiSend } from "react-icons/fi";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: { subject: "", textArea: "", email: "", name: "" },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch(
          "https://email-backend-d5o0.onrender.com/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          },
        );
        if (response.ok) {
          setSuccessMessage("Got it — I'll be in touch soon.");
          setTimeout(() => {
            resetForm();
            setSuccessMessage("");
          }, 3000);
        } else {
          throw new Error();
        }
      } catch {
        setErrorMessage("Something went wrong. Try again.");
      }
      setSubmitting(false);
    },
  });

  const field = (hasError: boolean) => `
    w-full bg-white/[0.07] border rounded-xl py-3.5 px-4
    text-white text-[15px] placeholder:text-white/40
    outline-none transition-all duration-200
    ${
      hasError
        ? "border-red-400/70 bg-red-500/[0.06]"
        : "border-white/20 hover:border-white/35 focus:border-brand-accent focus:bg-white/[0.09] focus:shadow-[0_0_0_3px_rgba(255,107,0,0.1)]"
    }
  `;

  // Always renders the error line — invisible when no error, visible when there is one
  const ErrorLine = ({ message }: { message?: string }) => (
    <p
      className={`mt-1.5 text-[12px] text-red-400 h-4 transition-opacity duration-150 ${message ? "opacity-100" : "opacity-0"}`}
    >
      {message ?? "​"}
    </p>
  );

  return (
    <section className="relative px-6 py-24 font-nunito md:px-12 lg:px-16 max-w-4xl mx-auto">
      {/* Ambient glows */}
      <div className="overflow-hidden pointer-events-none absolute -left-20 -top-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.07)_0%,transparent_70%)]" />
      <div className="overflow-hidden pointer-events-none absolute -bottom-24 -right-16 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,180,255,0.04)_0%,transparent_70%)]" />

      <div className="relative w-full bg-brand-card rounded-2xl border border-brand-border p-10">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
            Get in touch
          </p>
          <h2 className="mb-5 text-2xl md:text-5xl font-bold font-nunito leading-[0.95] tracking-wide text-white">
            Let's build something
            <br />
            <span className="text-brand-accent">together.</span>
          </h2>
          <p className="max-w-[440px] text-base leading-relaxed text-brand-muted">
            Drop me a message and I'll get back to you within a day.
          </p>
        </div>

        {/* ── Form ────────────────────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-6"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                value={values.name}
                id="name"
                type="text"
                onChange={handleChange}
                placeholder="Your name"
                onBlur={handleBlur}
                className={field(!!(errors.name && touched.name))}
              />
              <ErrorLine message={touched.name ? errors.name : undefined} />
            </div>
            <div>
              <input
                value={values.email}
                id="email"
                type="text"
                onChange={handleChange}
                placeholder="Your email"
                onBlur={handleBlur}
                className={field(!!(errors.email && touched.email))}
              />
              <ErrorLine message={touched.email ? errors.email : undefined} />
            </div>
          </div>

          {/* Subject */}
          <div>
            <input
              value={values.subject}
              id="subject"
              type="text"
              onChange={handleChange}
              placeholder="Subject"
              onBlur={handleBlur}
              className={field(!!(errors.subject && touched.subject))}
            />
            <ErrorLine message={touched.subject ? errors.subject : undefined} />
          </div>

          {/* Message */}
          <div>
            <textarea
              value={values.textArea}
              id="textArea"
              rows={4}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              onBlur={handleBlur}
              className={`resize-none ${field(!!(errors.textArea && touched.textArea))}`}
            />
            <ErrorLine
              message={touched.textArea ? errors.textArea : undefined}
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-5 flex-wrap">
            <button
              disabled={isSubmitting}
              type="submit"
              className="cursor-pointer group flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-white text-sm font-bold tracking-wide transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,107,0,0.35)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FiSend className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {successMessage && (
              <p className="text-[13px] font-medium text-green-400">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-[13px] font-medium text-red-400">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
