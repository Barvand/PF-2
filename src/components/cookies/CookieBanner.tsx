import { useEffect, useState } from "react";
import loadHotjar from "../../utils/loadHotjar";
import { IoCloseSharp } from "react-icons/io5";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hotjar_consent");

    if (!consent) setVisible(true);
    if (consent === "accepted") loadHotjar();
  }, []);

  const accept = () => {
    localStorage.setItem("hotjar_consent", "accepted");
    loadHotjar();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("hotjar_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-end z-50 w-full">
      <div className="flex flex-col">
        <div className="bg-white text-black p-6 border border-t-0 w-full max-w-xl">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-md text-red-500 cursor-pointer text-2xl float-right align-middle"
          >
            <IoCloseSharp />
          </button>
          <h2 className="text-lg font-semibold">Cookies</h2>
          <div className="flex flex-col justify-evenly gap-5">
            <p className="text-sm py-4">
              This website uses cookies to enhance your experience and to
              analyze traffic to improve our service. Cookies are not required
              for our users to use our website.
            </p>
            <div className="flex gap-10 items-center justify-center">
              <button
                onClick={reject}
                className="items px-4 py-2 bg-black hover:bg-gray-700 text-white cursor-pointer align-center"
              >
                Reject
              </button>

              <button
                onClick={accept}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
