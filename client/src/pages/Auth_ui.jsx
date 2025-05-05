import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth_ui = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <Tabs defaultValue="account" className="w-[400px] shadow-2xl p-3 rounded">
        <TabsList className={"w-full"}>
          <TabsTrigger value="account">Register</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className={"grid gap-3"}>
          <div>
            <Label htmlFor="email" className={"my-1"}>
              Your Username
            </Label>
            <Input placeholder={"Enter user name..."} />
          </div>
          <div>
            <Label htmlFor="email" className={"my-1"}>
              Your Email address
            </Label>
            <Input placeholder={"Enter user email..."} />
          </div>
          <div>
            <Label htmlFor="email" className={"my-1"}>
              Your Password
            </Label>
            <Input placeholder={"Enter user password..."} />
          </div>
          <div className="grid my-2">
            <Button className={"bg-gray-700 text-white cursor-pointer"}>
              Register
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="password" className={"grid gap-3"}>
          <div>
            <Label htmlFor="email" className={"my-1"}>
              Your Email address
            </Label>
            <Input placeholder={"Enter user email..."} />
          </div>
          <div>
            <Label htmlFor="email" className={"my-1"}>
              Your Password
            </Label>
            <Input placeholder={"Enter user password..."} />
          </div>
          <div className="grid my-2">
            <Button className={"bg-gray-700 text-white cursor-pointer"}>
              Login
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth_ui;
