import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import "./styles/styles";
import "./styles/fonts";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
