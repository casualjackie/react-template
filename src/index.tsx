import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/styles.module.css";
import "./styles/fonts.module.css";
import ThemeProvider from "@/styles/theme/theme.provider";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./store/store.provider";

const domNode = document.getElementById("root");

if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <StoreProvider>
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </StoreProvider>
  );
}
