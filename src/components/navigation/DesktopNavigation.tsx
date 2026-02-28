interface DesktopNavigationProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToContact: () => void;
}

function DesktopNavigation({
  scrollToProjects,
  scrollToAboutMe,
  scrollToContact,
}: DesktopNavigationProps) {
  return (
    <nav className="text-gray-200 hidden md:block fixed top-0 left-0 w-full z-[999] bg-brand-bg shadow-2xl">
      <div className="flex justify-around items-center h-20 px-10">
        <img src="logoBB.png" alt="Bartberglogo" className="w-76" />
        <div className="flex justify-around gap-20">
          <button
            className="text-lg hover:text-gray-400 group relative cursor-pointer"
            onClick={scrollToProjects}
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-main group-hover:w-full group-hover:transition-all"></span>
          </button>
          <button
            className="text-lg hover:text-gray-400 group relative cursor-pointer"
            onClick={scrollToAboutMe}
          >
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-main group-hover:w-full group-hover:transition-all"></span>
          </button>
          <button
            className="text-lg hover:text-gray-400 group relative cursor-pointer"
            onClick={scrollToContact}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-main group-hover:w-full group-hover:transition-all"></span>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
    </nav>
  );
}

export default DesktopNavigation;
