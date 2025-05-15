import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import InstructorContext from "./context/instructor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <InstructorContext>
          <App />
        </InstructorContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
);
