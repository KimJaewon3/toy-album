import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalProvider } from "./contexts/modalCtx.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
