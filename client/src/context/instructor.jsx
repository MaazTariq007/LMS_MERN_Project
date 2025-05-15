import { courseLandingInitialFormData } from "@/config";
import React, { createContext, useEffect, useState } from "react";

export const InstructorState = createContext(null);

function InstructorContext({ children }) {
  const [cousreLandingFormData, setCousreLandingFormData] = useState(
    courseLandingInitialFormData
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.table(cousreLandingFormData);
  }, [cousreLandingFormData]);

  return (
    <InstructorState.Provider
      value={{ cousreLandingFormData, setCousreLandingFormData, isLoading }}
    >
      {children}
    </InstructorState.Provider>
  );
}

export default InstructorContext;
