import GrayWave from "../../waves/GrayWave";
import ContactForm from "./ContactForm";
import Waves from "../../waves/Waves";

interface FooterProps {
  ref: () => void;
}

function Footer({ ref }: FooterProps) {
  return (
    <footer ref={ref} className="relative bg-gray-900 text-white">
      {/* Top Decorative Wave */}
      <Waves color={"#black"} flip={true} />

      {/* Main Footer Content */}
      <div className="bg-gray-900 py-16  flex flex-col items-center gap-8 p-2">
        {/* Logo */}
        <img src="/BartBergLogo.svg" alt="BartBergLogo" className="w-64" />

        {/* Contact Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-3">Get in Touch</h2>
          <p className="text-lg text-gray-400 max-w-[600px]">
            Have a project in mind? Let's connect and build something great
            together!
          </p>
          <div className="w-full max-w-[600px]  mt-5">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <GrayWave />

      <div className="bg-gray-800 py-8 px-2 text-center">
        &copy; {new Date().getFullYear()} Bart van den Berg | Crafted with
        passion & precision.
      </div>
    </footer>
  );
}

export default Footer;
