import React, { useState } from "react";
import { GraduationCap, BarChart, Book, LogOut, Component } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardUi } from "@/components/instructorTabs/DashboardUi";
import CoursesUi from "@/components/instructorTabs/CoursesUi";
import LogoutUi from "@/components/instructorTabs/LogoutUi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstructorPage = () => {
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <DashboardUi />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <CoursesUi />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "Logout",
      component: <LogoutUi />,
    },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <>
      <div className="flex h-screen w-screen bg-gray-200">
        <aside className="w-[250px] bg-white h-screen shadow-xl p-3">
          <div className="flex gap-1 items-center ">
            <GraduationCap className="w-[30px] h-[30px]" />
            <h2 className="font-bold text-2xl">Instructor</h2>
          </div>
          <nav className="grid gap-2 my-3">
            {menuItems.map((item) => {
              return (
                <Button
                  key={item.value}
                  onClick={() => setActiveTab(item.value)}
                  className={
                    "bg-gray-800 text-white flex justify-start cursor-pointer"
                  }
                >
                  <item.icon />
                  {item.value}
                </Button>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1 py-8 overflow-y-auto">
          <div className="p-5">
            <Tabs
              defaultValue={activeTab}
              value={activeTab}
              onValueChange={setActiveTab}
            >
              {menuItems.map((item) => {
                return (
                  <TabsContent value={item.value} key={item.value}>
                    {item.component}
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default InstructorPage;
