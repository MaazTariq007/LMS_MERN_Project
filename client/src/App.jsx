import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth_ui from "./pages/Auth_ui";
import InstructorPage from "./pages/instructor/InstructorPage";
import HomePage from "./pages/student/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth_ui />} />
        {/* <Route path="/" element={<InstructorPage />} /> */}
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </>
  );
};

export default App;
