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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col">
        <div className="bg-gray-700 h-10 w-full border text-[#DDCFCF]">
          <button
            onClick={reject}
            className="px-4 py-2 rounded-md hover:bg-gray-700 text-white cursor-pointer float-right align-middle"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div className="bg-black text-[#DDCFCF] p-6 max-w-sm border border-t-0">
          <h2 className="text-lg font-semibold mb-3">Cookies</h2>

          <p className="text-sm mb-6 border-t border-b border-gray-400 py-4">
            We use cookies to track visitors behavior using Hotjar, a third
            party analytical tool. That gives us insights on how to improve our
            website.
          </p>
          <div className="flex justify-between gap-3">
            <button
              onClick={reject}
              className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-700 text-white cursor-pointer"
            >
              Reject
            </button>

            <button
              onClick={accept}
              className="px-4 py-2 rounded-md bg-[#FF6700] hover:bg-orange-600 text-white cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
