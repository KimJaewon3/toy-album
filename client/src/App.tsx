import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useModal } from "./contexts/modalCtx";
import Modal from "./components/Modal";

export default function App() {
  const pathList = ["/"];
  const { modalInfo } = useModal();

  return (
    <BrowserRouter>
      {modalInfo.isOpen && <Modal />}
      <Header pathList={pathList} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
