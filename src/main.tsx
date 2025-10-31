import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import * as serviceWorker from "./utils/serviceWorker";
import { viewport } from "./utils/viewport";
import { a11y } from "./utils/accessibility";

// Initialize mobile optimizations
if (viewport.isMobile()) {
  viewport.preventZoomOnFocus();
}

// Run accessibility audit in development
if (import.meta.env.DEV) {
  // Run audit after DOM is loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      a11y.logAuditResults();
    }, 1000);
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Register service worker for caching
serviceWorker.register({
  onSuccess: () => {
    console.log("App is cached and ready for offline use");
  },
  onUpdate: () => {
    console.log("New content available, please refresh");
  },
});
