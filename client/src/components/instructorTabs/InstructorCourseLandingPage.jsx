import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { InstructorState } from "@/context/instructor/InstructorContext";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  courseCategories,
  courseLevelOptions,
  languageOptions,
} from "@/config";
import { InstructorState } from "@/context/instructor";

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

function InstructorCourseLandingPage() {
  const { cousreLandingFormData, setCousreLandingFormData, isLoading } =
    useContext(InstructorState);

  return (
    <>
      <Card>
        <CardContent className={""}>
          <form className={"w-full"}>
            <div className="mb-2">
              <Label>Course titles</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    title: e.target.value,
                  })
                }
                placeholder={"Enter Course subtitle"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course Category</Label>
              <Select
                className=""
                value={cousreLandingFormData.category}
                onValueChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    category: e,
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Course Category" />
                </SelectTrigger>
                <SelectContent className={"bg-white"}>
                  {courseCategories.map((item) => {
                    return (
                      <SelectItem
                        key={item.id}
                        value={item.id}
                        className={"hover:bg-gray-100"}
                      >
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-2">
              <Label>Course Level</Label>
              <Select
                className=""
                value={cousreLandingFormData.level}
                onValueChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    level: e,
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Course Level" />
                </SelectTrigger>
                <SelectContent className={"bg-white"}>
                  {courseLevelOptions.map((item) => {
                    return (
                      <SelectItem
                        key={item.id}
                        value={item.id}
                        className={"hover:bg-gray-100"}
                      >
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-2">
              <Label>Course Primary Language</Label>
              <Select
                className=""
                value={cousreLandingFormData.primaryLanguage}
                onValueChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    primaryLanguage: e,
                  })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Course Primary Language" />
                </SelectTrigger>
                <SelectContent className={"bg-white"}>
                  {languageOptions.map((item) => {
                    return (
                      <SelectItem
                        key={item.id}
                        value={item.id}
                        className={"hover:bg-gray-100"}
                      >
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-2">
              <Label>Course subtitle</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    subtitle: e.target.value,
                  })
                }
                placeholder={"Enter Course subtitle"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course description</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    description: e.target.value,
                  })
                }
                placeholder={"Enter Course description"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course pricing</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    pricing: e.target.value,
                  })
                }
                placeholder={"Enter Course pricing"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course objectives</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    objectives: e.target.value,
                  })
                }
                placeholder={"Enter Course objectives"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course welcomeMessage</Label>
              <Input
                value={cousreLandingFormData.userName}
                onChange={(e) =>
                  setCousreLandingFormData({
                    ...cousreLandingFormData,
                    welcomeMessage: e.target.value,
                  })
                }
                placeholder={"Enter Course welcomeMessage"}
                className={"mt-3"}
              />
            </div>
            <div className="mb-2">
              <Label>Course Image</Label>
              <Input
                type={"file"}
                placeholder={"Enter Course welcomeMessage"}
                className={"mt-3"}
              />
            </div>

            <div className="mb-2">
              <Button
                className={`disabled:bg-black/50 w-full mt-2`}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Create"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default InstructorCourseLandingPage;
