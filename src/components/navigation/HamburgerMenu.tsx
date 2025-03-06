interface HamburgerMenuProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToTechStack: () => void;
  setOpen: (open: boolean) => void; // Corrected type
}

function HamburgerMenu({
  scrollToProjects,
  scrollToAboutMe,
  scrollToTechStack,
  setOpen,
}: HamburgerMenuProps) {
  return (
    <div
      className="absolute z-4 top-20 left-0 w-full h-screen p-4 
        text-white bg-black"
    >
      <nav className="flex flex-col gap-10 mt-6">
        <button
          className="text-lg font-bold hover:text-main relative group"
          onClick={() => {
            scrollToProjects();
            setOpen(false);
          }}
        >
          Projects
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
        <button
          className="text-lg font-bold hover:text-main relative group"
          onClick={() => {
            scrollToAboutMe();
            setOpen(false);
          }}
        >
          About Me
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
        <button
          className="text-lg font-bold hover:text-main relative group"
          onClick={() => {
            scrollToTechStack();
            setOpen(false);
          }}
        >
          Tech Stack
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full group-hover:transition-all"
          ></span>
        </button>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
