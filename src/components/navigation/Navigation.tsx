import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import DesktopNavigation from "./DesktopNavigation";
import HamburgerMenu from "./HamburgerMenu";

interface NavigationProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToContact: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  scrollToProjects,
  scrollToAboutMe,
  scrollToContact,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Prevent scrolling when hamburger is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup function
    };
  }, [open]);

  return (
    <div>
      {/* Fixed Mobile Navbar */}
      <div
        className="fixed top-0 left-0 w-full text-white bg-gray-900 flex md:hidden 
        justify-between items-center px-6 py-4 z-50 shadow-sm shadow-gray-600"
      >
        <img src="BartBergLogo.svg" alt="BartBergLogoBlack" className="w-44" />
        {/* Hamburger Toggle Button */}
        <Hamburger size={32} toggled={open} toggle={setOpen} />
      </div>

      {/* Mobile Navigation Menu (Only visible when open) */}
      {open && (
        <HamburgerMenu
          scrollToProjects={scrollToProjects}
          scrollToAboutMe={scrollToAboutMe}
          scrollToContact={scrollToContact}
          setOpen={setOpen}
        />
      )}

      {/* Desktop Navigation */}
      <DesktopNavigation
        scrollToProjects={scrollToProjects}
        scrollToAboutMe={scrollToAboutMe}
        scrollToContact={scrollToContact}
      />
    </div>
  );
};

export default Navigation;
