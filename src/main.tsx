import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PortfolioLanding } from "./PortfolioLanding";
import "./shaders/threeui.css";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="shader-frame">
      <PortfolioLanding />
    </div>
  </StrictMode>,
);
