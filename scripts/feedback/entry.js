// Bundle Agentation + React into one ES module for the ?feedback mode.
// Rebuild: cd scripts/feedback && npm install && npm run build
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

// mount(props) -> render(props): goi lai render voi `key` moi de Agentation nap lai ghi chu cua trang moi
export function mount(props) {
  const host = document.createElement("div");
  host.id = "agentation-root";
  document.body.appendChild(host);
  const root = createRoot(host);
  const render = (p) => root.render(createElement(Agentation, p));
  render(props);
  return render;
}
