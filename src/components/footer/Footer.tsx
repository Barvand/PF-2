import ContactForm from "./ContactForm";

import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer
      ref={ref}
      className="relative text-gray-200 bg-brand-bg overflow-hidden"
    >
      {/* Main Footer Content */}
      <div className=" py-16 gap-8 p-2 mx-auto max-w-6xl">
        {/* Logo */}
        <img
          src="/logoBB.png"
          alt="BartBergLogo"
          className="w-64 items-center justify-center mx-auto mb-12 block"
        />

        <ContactForm />
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
