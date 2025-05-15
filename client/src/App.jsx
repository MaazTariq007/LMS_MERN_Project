import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth_ui from "./pages/Auth_ui";
import InstructorPage from "./pages/instructor/InstructorPage";
import HomePage from "./pages/student/HomePage";
import { Toaster } from "@/components/ui/sonner";
import InstructorCourseCreate from "./pages/instructor/InstructorCourseCreate";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Auth_ui />} /> */}
        <Route path="/" element={<InstructorPage />} />
        <Route
          path="/instructor-couse-create"
          element={<InstructorCourseCreate />}
        />
        {/* <Route path="/home" element={<HomePage />} /> */}
      </Routes>
      <Toaster className="text-white bg-gray-800" />
    </>
  );
};

export default App;
