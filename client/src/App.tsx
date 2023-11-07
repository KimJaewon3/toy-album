import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useModal } from "./contexts/modalCtx";
import Modal from "./components/Modal";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";
import BaseCamp from "./pages/BaseCamp";
import Profile from "./pages/Profile";
import "./assets/css/reset.css";

export default function App() {
  const pathList = ["/", "/gallery", "/album", "/basecamp", "/profile"];
  const { modalInfo } = useModal();

  return (
    <>
      {modalInfo.isOpen && <Modal />}
      <Header pathList={pathList} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/album" element={<Album />} />
        <Route path="/basecamp" element={<BaseCamp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
