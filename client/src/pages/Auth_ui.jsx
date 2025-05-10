import React, { useContext } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthState } from "@/context/AuthContext";

const Auth_ui = () => {
  const {
    registerForm,
    loginForm,
    setRegisterForm,
    setLoginForm,
    loading,
    setLoading,
    handleOnRegisterForm,
    handleOnLoginForm,
    tabState,
  } = useContext(AuthState);

  return (
    <div className="h-screen w-screen grid place-items-center">
      <Tabs
        defaultValue={tabState}
        className="w-[400px] shadow-2xl p-3 rounded"
      >
        <TabsList className={"w-full"}>
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className={"grid gap-3"}>
          <form onSubmit={handleOnRegisterForm}>
            <div>
              <Label htmlFor="email" className={"my-1"}>
                Your Username
              </Label>
              <Input
                value={registerForm.userName}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    userName: e.target.value,
                  })
                }
                placeholder={"Enter user name..."}
              />
            </div>
            <div>
              <Label htmlFor="email" className={"my-1"}>
                Your Email address
              </Label>
              <Input
                value={registerForm.userEmail}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    userEmail: e.target.value,
                  })
                }
                placeholder={"Enter user email..."}
              />
            </div>
            <div>
              <Label htmlFor="email" className={"my-1"}>
                Your Password
              </Label>
              <Input
                type={"password"}
                value={registerForm.userPassword}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    userPassword: e.target.value,
                  })
                }
                placeholder={"Enter user password..."}
              />
            </div>
            <div className="grid my-2">
              <Button className={"bg-gray-700 text-white cursor-pointer"}>
                Register
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="login" className={"grid gap-3"}>
          <form onSubmit={handleOnLoginForm}>
            <div>
              <Label htmlFor="email" className={"my-1"}>
                Your Email address
              </Label>
              <Input
                value={loginForm.userEmail}
                onChange={(e) => {
                  setLoginForm({ ...loginForm, userEmail: e.target.value });
                }}
                placeholder={"Enter user email..."}
              />
            </div>
            <div>
              <Label htmlFor="email" className={"my-1"}>
                Your Password
              </Label>
              <Input
                type={"password"}
                onChange={(e) => {
                  setLoginForm({ ...loginForm, userPassword: e.target.value });
                }}
                value={loginForm.userPassword}
                placeholder={"Enter user password..."}
              />
            </div>
            <div className="grid my-2">
              <Button className={"bg-gray-700 text-white cursor-pointer"}>
                Login
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth_ui;
