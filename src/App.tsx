import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./features/scrollToTop";
import CookieBanner from "./components/cookies/CookieBanner";

function App() {
  return (
    <BrowserRouter>
      <CookieBanner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
