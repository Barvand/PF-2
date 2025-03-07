import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import DesktopNavigation from "./DesktopNavigation";
import HamburgerMenu from "./HamburgerMenu";

interface NavigationProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToTechStack: () => void;
  scrollToContact: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  scrollToProjects,
  scrollToAboutMe,
  scrollToTechStack,
  scrollToContact,
}) => {
  const [open, setOpen] = useState(false);
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
      <div className="flex md:hidden container bg-main justify-between">
        <img
          src="BartBergLogoBlack.svg"
          alt="BartBergLogoBlack"
          className="w-44"
        />
        {/* Hamburger Menu */}
        <Hamburger size={32} toggled={open} toggle={setOpen} />
      </div>
      {/* Mobile Navigation Menu */}
      {open && (
        <HamburgerMenu
          scrollToProjects={scrollToProjects}
          scrollToAboutMe={scrollToAboutMe}
          scrollToTechStack={scrollToTechStack}
          scrollToContact={scrollToContact}
          setOpen={setOpen}
        />
      )}
      <DesktopNavigation
        scrollToProjects={scrollToProjects}
        scrollToAboutMe={scrollToAboutMe}
        scrollToTechStack={scrollToTechStack}
        scrollToContact={scrollToContact}
      />
    </div>
  );
};

export default Navigation;
