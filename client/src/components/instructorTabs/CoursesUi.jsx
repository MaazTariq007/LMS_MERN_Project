import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Delete, Edit, Laptop } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const CoursesUi = () => {

  const navigate = useNavigate();

  return (
    <>
      <Card className={"bg-white border-0 mt-5 p-5"}>
        <CardHeader className={"flex justify-between"}>
          <p className="text-lg font-semibold">Student List</p>
          <Button
          onClick={()=> navigate('/instructor-couse-create') }
            className={
              "bg-gray-800 text-white flex justify-start cursor-pointer "
            }
          >
            Create new course
          </Button>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className={"text-right"}>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">MERN STACK</TableCell>
              <TableCell>Ali Raza</TableCell>
              <TableCell>$90,000</TableCell>
              <TableCell className="flex gap-1 justify-end">
                <Edit className="cursor-pointer" />
                <Delete className="cursor-pointer" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default CoursesUi;
