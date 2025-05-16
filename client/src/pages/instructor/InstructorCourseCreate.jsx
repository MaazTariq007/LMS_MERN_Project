import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import InstructorCourseCurriculum from "@/components/instructorTabs/InstructorCourseCurriculum";
import InstructorCourseLandingPage from "@/components/instructorTabs/InstructorCourseLandingPage";
import InstructorCourseSettings from "@/components/instructorTabs/InstructorCourseSettings";

const InstructorCourseCreate = () => {
  return (
    <>
      <Card className={"bg-white border-0  w-[90%] mx-auto my-[50px]"}>
        <Tabs defaultValue="curriculum">
          <TabsList className={"w-full"}>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="CourseLandingPage">
              Course Landing Page
            </TabsTrigger>
            <TabsTrigger value="settings">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="curriculum">
            <InstructorCourseCurriculum />
          </TabsContent>
          <TabsContent value="CourseLandingPage">
            <InstructorCourseLandingPage />
          </TabsContent>
          <TabsContent value="settings">
            <InstructorCourseSettings />
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default InstructorCourseCreate;
