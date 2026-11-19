import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RenderBoundary } from "./components/RenderBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(<RenderBoundary><App /></RenderBoundary>);
