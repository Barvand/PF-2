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
    <nav className="text-white hidden md:block fixed top-0 left-0 w-full z-[999] bg-gray-900 border-b-2 border-gray-700 shadow-2xl">
      <div className="container flex justify-around items-center h-20">
        <img src="BartBergLogo.svg" alt="Logo" />
        <button
          className="text-lg font-bold hover:text-main group relative cursor-pointer"
          onClick={() => {
            scrollToProjects();
          }}
        >
          Projects
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
        <button
          className="text-lg font-bold text-white hover:text-main group relative cursor-pointer"
          onClick={() => {
            scrollToAboutMe();
          }}
        >
          About Me
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
        <button
          className="text-lg font-bold text-white hover:text-main relative group cursor-pointer"
          onClick={() => {
            scrollToContact();
          }}
        >
          Contact
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default DesktopNavigation;
