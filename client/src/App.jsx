import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth_ui from "./pages/Auth_ui";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth_ui />} />
      </Routes>
    </>
  );
};

export default App;
