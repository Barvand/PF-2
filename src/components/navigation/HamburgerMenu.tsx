interface HamburgerMenuProps {
  scrollToProjects: () => void;
  scrollToAboutMe: () => void;
  scrollToContact: () => void;
  setOpen: (open: boolean) => void; // Corrected type
}

function HamburgerMenu({
  scrollToProjects,
  scrollToAboutMe,
  scrollToContact,
  setOpen,
}: HamburgerMenuProps) {
  return (
    <div
      className="fixed top-20 left-0 w-full p-4 text-white bg-gray-900 
      z-40 flex flex-col h-screen items-center justify-between border-b"
    >
      <nav className="flex flex-col gap-10 flex-grow justify-center">
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
      </nav>

      {/* Logo at the bottom */}
      <img src="BartBergLogo.svg" alt="BartBergLogo" className="mb-10 w-32" />
    </div>
  );
}

export default HamburgerMenu;
