import "core-js/stable";
import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import "./styles/styles";
import "./styles/fonts";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
