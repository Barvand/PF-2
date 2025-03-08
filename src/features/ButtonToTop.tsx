import { useState, useEffect } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

/**
 * A floating button that appears when the user scrolls down and allows them to return to the top of the page smoothly.
 *
 * @component
 * @description
 * - Listens for the scroll event to determine when to show the button.
 * - When clicked, scrolls the page back to the top with a smooth animation.
 * - Uses `IoMdArrowRoundUp` as an icon for the button.
 *
 * @returns {JSX.Element} A button that appears when the user scrolls down and scrolls the page to the top when clicked.
 *
 * @example
 * ```tsx
 * <ButtonToTop />
 * ```
 */

function ButtonToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed top-25 right-0 p-2 sm:right-5 text-main text-2xl sm:text-3xl lg:text-4xl bg-gray-800 border-1 border-gray-200
          rounded-full sm:p-3 transition-transform duration-300 group-hover:animate-bounce"
          onClick={scrollToTop}
        >
          <IoMdArrowRoundUp />
        </button>
      )}
    </div>
  );
}

export default ButtonToTop;
