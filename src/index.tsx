import "core-js/stable";
import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import "./styles/styles";
import "./styles/fonts";

const domNode: any = document.getElementById("root"); // TODO: any
const root = createRoot(domNode);
root.render(<App />);
