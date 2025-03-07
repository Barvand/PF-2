interface DesktopNavigationProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToTechStack: () => void;
}

function DesktopNavigation({
  scrollToProjects,
  scrollToAboutMe,
  scrollToTechStack,
}: DesktopNavigationProps) {
  return (
    <nav className=" border-main text-white hidden md:block m-1">
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
            scrollToTechStack();
          }}
        >
          Tech Stack
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
