import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./styles/styles.module.css";
import "./styles/fonts.module.css";
import ThemeProvider from "@styles/theme/theme.provider";
import { HelmetProvider } from "react-helmet-async";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  );
}
