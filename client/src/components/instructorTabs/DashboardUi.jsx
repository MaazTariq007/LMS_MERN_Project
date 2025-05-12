import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DashboardUi = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <Card className={"bg-white border-0 "}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardDescription className={"font-semibold"}>
              MERN STACK DEVELOPMENT
            </CardDescription>
            <Laptop className="text-gray-500 w-4 h-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Ali Raza</p>
          </CardContent>
        </Card>
      </div>
      <Card className={"bg-white border-0 mt-5 p-5"}>
        <Table className={"p-5"}>
          <TableHeader>
            <h1 className="text-lg font-semibold">Student List</h1>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
