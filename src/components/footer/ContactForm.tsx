import { useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";

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
    initialValues: {
      subject: "",
      textArea: "",
      email: "",
      name: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await fetch(
          "https://email-backend-d5o0.onrender.com/send-email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          setSuccessMessage("Your message has been sent successfully! 🎉");

          setTimeout(() => {
            resetForm();
            setSuccessMessage("");
          }, 2000);
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Error sending email. Try again.");
      }

      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="name">
        {" "}
        Name<span className="text-red-500">* </span>{" "}
      </label>
      <input
        value={values.name}
        id="name"
        type="text"
        onChange={handleChange}
        placeholder="Your name"
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">
        {" "}
        Email<span className="text-red-500">* </span>{" "}
      </label>
      <input
        value={values.email}
        id="email"
        type="text"
        onChange={handleChange}
        placeholder="Your name"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="subject">
        {" "}
        Subject<span className="text-red-500">* </span>{" "}
      </label>
      <input
        value={values.subject}
        id="subject"
        type="text"
        onChange={handleChange}
        placeholder="Subject would be nice"
        onBlur={handleBlur}
        className={errors.subject && touched.subject ? "input-error" : ""}
      />
      {errors.subject && touched.subject && (
        <p className="error">{errors.subject}</p>
      )}

      <label htmlFor="textArea">  Message
        <span className="text-red-500">* </span>{" "}
      </label>
      <textarea
        value={values.textArea}
        id="textArea"
        rows={5}
        onChange={handleChange}
        placeholder="Drop a message"
        onBlur={handleBlur}
        className={errors.textArea && touched.textArea ? "input-error" : ""}
      />
      {errors.textArea && touched.textArea && (
        <p className="error">{errors.textArea}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="relative bg-gray-600 hover:bg-gray-700 self-end text-white font-bold py-2 px-4 rounded transition-all group
              cursor-pointer shadow-md"
      >
        {isSubmitting ? "Submitting..." : "Submit"}

        {/* Hover Underline Animation */}
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
              group-hover:w-full group-hover:transition-all"
        ></span>
      </button>
      {successMessage && (
        <p className="successMessage border-green-500 border bg-green-200 p-2 text-black">
          {successMessage}
        </p>
      )}
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </form>
  );
}

export default ContactForm;
