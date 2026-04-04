/// <reference types="vite/client" />

interface Window {
  hotjarLoaded?: boolean;
  hj?: (...args: unknown[]) => void;
  _hjSettings?: { hjid: number; hjsv: number };
}
