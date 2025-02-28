import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoIntro from "./components/VideoIntro";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoIntro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
