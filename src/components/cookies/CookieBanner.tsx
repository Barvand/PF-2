import { useEffect, useState } from "react";
import loadHotjar from "../../utils/loadHotjar";
import { IoCloseSharp } from "react-icons/io5";

function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

interface CookieBannerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export { getCookie };

export default function CookieBanner({ forceOpen, onClose }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("hotjar_consent");

    if (!consent) setVisible(true);
    if (consent === "accepted") loadHotjar();
  }, []);

  useEffect(() => {
    if (forceOpen) setVisible(true);
  }, [forceOpen]);

  const close = () => {
    setVisible(false);
    onClose?.();
  };

  const accept = () => {
    setCookie("hotjar_consent", "accepted", 365);
    loadHotjar();
    close();
  };

  const reject = () => {
    setCookie("hotjar_consent", "rejected", 365);
    close();
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
