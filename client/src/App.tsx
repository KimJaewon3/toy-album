import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import Menu from "./components/Menu";

export default function App() {
  const pathList = ["/", "/sign"];

  return (
    <BrowserRouter>
      <Menu pathList={pathList} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}
