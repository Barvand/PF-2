import ContactForm from "./ContactForm";

import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative bg-gray-900 text-gray-200">
      {/* Main Footer Content */}
      <div className="bg-gray-900 py-16 flex flex-col items-center gap-8 p-2">
        {/* Logo */}
        <img src="/BartBergLogo.svg" alt="BartBergLogo" className="w-64" />

        {/* Contact Section */}
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-gray-200">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            Have a project in mind? Let's connect and build something great
            together!
          </p>
          <div className="w-full mt-5">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="relative bg-gray-950 py-8 px-2 text-center">
        &copy; {new Date().getFullYear()} Bart van den Berg
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-950" />
      </div>
    </footer>
  );
});

export default Footer;
