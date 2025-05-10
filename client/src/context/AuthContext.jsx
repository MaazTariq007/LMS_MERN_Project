import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AuthState = createContext(null);

const AuthContext = ({ children }) => {
  const navigator = useNavigate();

  const [tabState, setTabState] = useState("login");

  // =========================== Register input logic ======================================

  const [initialRegisterForm, setInitialRegisterForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    role: "student",
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
        "http://localhost:3000/api/v1/lms/register",
        registerForm
      );
      if (response.data.success == "true") {
        toast(response.data.msg);
        setTabState("login");
      } else {
        toast(response.data.msg);
      }
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
        "http://localhost:3000/api/v1/lms/login",
        loginForm
      );

      if (response.data.success == "true") {
        navigator("/home");
        toast(response.data.msg);
      } else {
        toast(response.data.msg);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log(registerForm);
  // });
  // useEffect(() => {
  //   console.log(loginForm);
  // });

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
        tabState
      }}
    >
      {children}
    </AuthState.Provider>
  );
};

export default AuthContext;
