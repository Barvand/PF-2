import { useState, useEffect, useRef } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";

/**
 * A floating button that appears when the user scrolls up and allows them to return to the top of the page smoothly.
 * - Disappears when the user scrolls down or after 1 second of inactivity.
 */

function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current && currentScrollY > 600) {
        // User is scrolling up, show button
        setIsVisible(true);
      } else {
        // User is scrolling down, hide button
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set new timeout to hide the button after 3s of no scrolling
      scrollTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="fixed top-20 right-5 p-3 text-main text-3xl rounded-full cursor-pointer transition-opacity duration-500 opacity-100 hover:opacity-80"
          style={{ backgroundColor: "rgba(31, 41, 55, 0.8)" }} // Equivalent to bg-gray-800 with 50% opacity
          onClick={scrollToTop}
        >
          <IoMdArrowRoundUp />
        </button>
      )}
    </div>
  );
}

export default ButtonToTop;
