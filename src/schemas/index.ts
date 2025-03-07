import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .required("Name is required"),

  email: yup
    .string()
    .matches(
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),

  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters long")
    .max(100, "Subject must be at most 100 characters long")
    .required("Subject is required"),

  textArea: yup
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Message is required"),
});
