// Extend the Window interface so TypeScript knows Hotjar will be added
declare global {
  interface Window {
    hj?: (...args: any[]) => void;
    _hjSettings?: {
      hjid: number;
      hjsv: number;
    };
    hotjarLoaded?: boolean;
  }
}

export default function loadHotjar(): void {
  // Prevent re-loading Hotjar
  if (window.hotjarLoaded) return;
  window.hotjarLoaded = true;

  (function (h: Window, o: Document, t: string, j: string) {
    h.hj =
      h.hj ||
      function (...args: any[]) {
        (h.hj!.q = h.hj!.q || []).push(args);
      };

    h._hjSettings = { hjid: 6578324, hjsv: 6 };

    const head = o.getElementsByTagName("head")[0];
    const script = o.createElement("script");

    script.async = true;
    script.src = `${t}${h._hjSettings.hjid}${j}${h._hjSettings.hjsv}`;

    head.appendChild(script);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
}
