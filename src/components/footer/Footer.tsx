import ContactForm from "./ContactForm";
import { forwardRef, useState } from "react";
import CookieBanner from "../cookies/CookieBanner";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const [cookieOpen, setCookieOpen] = useState(false);

  return (
    <footer
      ref={ref}
      className="relative text-gray-200 bg-brand-bg overflow-hidden"
    >
      {cookieOpen && (
        <CookieBanner forceOpen onClose={() => setCookieOpen(false)} />
      )}

      {/* Main Footer Content */}
      <div className="py-10 sm:py-14 mx-auto max-w-6xl">
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
        <span className="mx-3 text-gray-600">|</span>
        <button
          onClick={() => setCookieOpen(true)}
          className="text-gray-400 hover:text-white text-sm underline-offset-2 hover:underline transition-colors cursor-pointer"
        >
          Cookie Preferences
        </button>
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gray-900 via-gray-500 to-gray-950" />
      </div>
    </footer>
  );
});

export default Footer;
