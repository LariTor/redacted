import { Suspense, lazy } from "preact/compat";
import { WindowCreation } from "./window-creation.jsx";
const WindowControlsNav = lazy(() =>
  import("./window-controls.jsx").then((exports) => exports.WindowControlsNav)
);

import "./app.css";

export function App() {
  return (
    <>
      <Suspense fallback={null}>
        <WindowControlsNav />
      </Suspense>
      <nav class="navbar">
    <div class="navbar-logo">HEARTSENSE</div>
    <div class="navbar-menu">
      <a href="#" class="navbar-menu-item">Estado del Holter</a>
      <a href="#" class="navbar-menu-item">Borrar SD</a>
      <a href="#" class="navbar-menu-item">Iniciar Holter</a>
      <a href="#" class="navbar-menu-item">Analizar Datos</a>
      <i class="fas fa-question-circle help-icon" id="helpIcon"></i>
    </div>
  </nav>
      <WindowCreation />
      <footer data-tauri-drag-region />
    </>
  );
}
