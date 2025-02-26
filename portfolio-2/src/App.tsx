import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoIntro from "./components/VideoIntro";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<VideoIntro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
