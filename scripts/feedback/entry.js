// Bundle Agentation + React into one ES module for the ?feedback mode.
// Rebuild: cd scripts/feedback && npm install && npm run build
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

export function mount(props) {
  const host = document.createElement("div");
  host.id = "agentation-root";
  document.body.appendChild(host);
  createRoot(host).render(createElement(Agentation, props));
  return host;
}
