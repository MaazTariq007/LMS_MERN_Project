import React from "react";
import { GraduationCap, BarChart, Book, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstructorPage = () => {
  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "Logout",
    },
  ];

  return (
    <>
      <div className="h-screen w-screen bg-gray-200">
        <aside className="w-[250px] bg-white h-screen shadow-xl p-3">
          <div className="flex gap-1 items-center ">
            <GraduationCap className="w-[30px] h-[30px]" />
            <h2 className="font-bold text-2xl">Instructor</h2>
          </div>
          <nav className="grid gap-2 my-3">
            {menuItems.map((item) => {
              return (
                <Button key={item.value} className={"bg-gray-800 text-white flex justify-start cursor-pointer"}>
                  <item.icon />
                  {item.value}
                </Button>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default InstructorPage;
