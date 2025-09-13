import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Rotas from "./route";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
    <Toaster position="top-right" richColors/>
  </StrictMode>
);
