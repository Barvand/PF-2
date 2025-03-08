interface HamburgerMenuProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToTechStack: () => void;
  scrollToContact: () => void;
  setOpen: (open: boolean) => void; // Corrected type
}

function HamburgerMenu({
  scrollToProjects,
  scrollToAboutMe,
  scrollToTechStack,
  scrollToContact,
  setOpen,
}: HamburgerMenuProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full p-4 
      text-white bg-gray-900 z-40 flex flex-col h-[600px] items-center 
      justify-center border-b"
    >
      <nav className="flex flex-col gap-10">
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
            group-hover:w-full transition-all duration-300"
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
            group-hover:w-full transition-all duration-300"
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
            group-hover:w-full transition-all duration-300"
          ></span>
        </button>
        <button
          className="text-lg font-bold hover:text-main relative group"
          onClick={() => {
            scrollToContact();
            setOpen(false);
          }}
        >
          Contact
          <span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-main 
            group-hover:w-full transition-all duration-300"
          ></span>
        </button>
        <img src="BartBergLogo.svg" alt="BartBergLogo" />
      </nav>
    </div>
  );
}

export default HamburgerMenu;
