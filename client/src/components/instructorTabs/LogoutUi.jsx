import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const LogoutUi = () => {
  return (
    <>
      <Card className={"bg-white border-0 "}>
        <Button
          className={
            "bg-gray-800 text-white flex justify-start cursor-pointer w-max "
          }
        >
          Logout
        </Button>
      </Card>
    </>
  );
};

export default LogoutUi;
