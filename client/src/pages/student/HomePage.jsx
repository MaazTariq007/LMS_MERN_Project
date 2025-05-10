import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  const courseCategories = [
    { id: "web-development", label: "Web Development" },
    { id: "backend-development", label: "Backend Development" },
    { id: "data-science", label: "Data Science" },
    { id: "machine-learning", label: "Machine Learning" },
    { id: "artificial-intelligence", label: "Artificial Intelligence" },
    { id: "cloud-computing", label: "Cloud Computing" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "mobile-development", label: "Mobile Development" },
    { id: "game-development", label: "Game Development" },
    { id: "software-engineering", label: "Software Engineering" },
  ];

  return (
    <>
      <div className="w-screen">
        <header className="grid lg:grid-cols-2 md:grid-cols-1 ">
          <div className="flex flex-col justify-center p-10">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Master Modern Web Development
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Join our comprehensive course designed to take you from beginner
              to professional. Learn HTML, CSS, JavaScript, React, and backend
              technologies through hands-on projects and expert guidance.
            </p>
          </div>
          <div>
            <img
              src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
              alt="hero image"
            />
          </div>
        </header>

        <main>
          <section className="px-10 py-6  bg-gray-200 my-6">
            <h2 className="text-2xl font-bold mb-4">Course categories</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
              {courseCategories.map((item) => {
                return (
                  <Button
                    key={item.id}
                    className={
                      "bg-gray-800 text-white flex justify-start cursor-pointer "
                    }
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </section>
          <section className="px-10 py-6 my-6">
            <h2 className="text-2xl font-bold mb-4">Feature Courses</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
                  alt="mern course"
                />
                <div className="p-2">
                  <h3 className="font-bold text-xl">Mern Course</h3>
                  <p className="text-gray-700 font-semibold">David Bekham</p>
                  <p className="font-bold text-xl">$18</p>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
                  alt="mern course"
                />
                <div className="p-2">
                  <h3 className="font-bold text-xl">Mern Course</h3>
                  <p className="text-gray-700 font-semibold">David Bekham</p>
                  <p className="font-bold text-xl">$18</p>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
                  alt="mern course"
                />
                <div className="p-2">
                  <h3 className="font-bold text-xl">Mern Course</h3>
                  <p className="text-gray-700 font-semibold">David Bekham</p>
                  <p className="font-bold text-xl">$18</p>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow">
                <img
                  src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
                  alt="mern course"
                />
                <div className="p-2">
                  <h3 className="font-bold text-xl">Mern Course</h3>
                  <p className="text-gray-700 font-semibold">David Bekham</p>
                  <p className="font-bold text-xl">$18</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
