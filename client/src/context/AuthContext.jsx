import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthState = createContext(null);

const AuthContext = ({ children }) => {
  // =========================== Register input logic ======================================

  const [initialRegisterForm, setInitialRegisterForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    role: "",
  });

  const [registerForm, setRegisterForm] = useState(initialRegisterForm);

  // ============================= Login input logic  ====================================

  const [initialLoginForm, setInitialLoginForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [loginForm, setLoginForm] = useState(initialLoginForm);

  //  ================================== Loading state ===================================

  const [loading, setLoading] = useState(false);

  //  ================================== Register API Request ===================================

  const handleOnRegisterForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        registerForm
      );
      console.log("account created..");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  ================================== login API Request ===================================

  const handleOnLoginForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        loginForm
      );
      console.log("successfully login..");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(registerForm);
  });
  useEffect(() => {
    console.log(loginForm);
  });

  return (
    <AuthState.Provider
      value={{
        registerForm,
        loginForm,
        setRegisterForm,
        setLoginForm,
        loading,
        setLoading,
        handleOnRegisterForm,
        handleOnLoginForm,
      }}
    >
      {children}
    </AuthState.Provider>
  );
};

export default AuthContext;
