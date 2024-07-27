import MainLayout from "@/components/layouts/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, DownloadIcon, Ellipsis, SearchIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { DatePicker } from "@/components/date-picker";
import { Filter } from "@/components/filter";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Payroll = () => {
  const [date, setDate] = useState<Date>();
  return (
    <MainLayout title="Empower HR - Payroll" description="Empower HR - Payroll">
      <div className="flex justify-between">
        <h5 className="text-xl text-gray-500 font-semibold">Payroll</h5>
        <div className="flex gap-2">
          <Link
            to="/employees/create"
            className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Settings
          </Link>
          <Dialog>
            <DialogTrigger asChild className="w-full justify-start">
              <Button>Payroll report</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] p-6 flex flex-col gap-4">
              <AlertDialogHeader>
                <DialogTitle className="items-start">
                  Print payroll report
                </DialogTitle>
                <DialogDescription>
                  Please selectdate to print payroll report
                </DialogDescription>
              </AlertDialogHeader>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="space-y-2">
                  <Label htmlFor="name">Strat date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">End date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="flex justify-end gap-5">
                <Button variant={"outline"}>Cancel</Button>
                <Button className="pl-4 pr-4">Submit</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="pt-8">
        <div className="py-6  px-6 border border-[#D5D5D5] bg-white rounded-md">
          <div className="flex md:flex-col xl:flex-row flex-col gap-8">
            <div className="flex  flex-col">
              <text className="text-gray-500 text-sm">salary report for</text>
              <text className="text-2xl font-bold">August 2024</text>
            </div>
            <div className="grid w-full xl:container xl:grid-cols-3 lg::grid-cols-3 grid-cols-2 gap-4 ">
              <div className="flex gap-6">
                <Separator orientation="vertical" />
                <div className="flex flex-col  h-full justify-center">
                  <text className="text-gray-500">Employees</text>
                  <text className="text-xl font-bold text-blue-400">100</text>
                </div>
              </div>
              <div className="flex gap-6">
                <Separator orientation="vertical" />
                <div className="flex flex-col h-full justify-center">
                  <text className="text-gray-500">Paid</text>
                  <text className="text-xl font-bold text-blue-400">0</text>
                </div>
              </div>
              <div className="flex gap-6">
                <Separator orientation="vertical" />
                <div className="flex flex-col  h-full justify-center">
                  <text className="text-gray-500">Unpaid</text>
                  <text className="text-xl font-bold text-blue-400">40</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="flex xl:flex-row  flex-col justify-between">
          <div className="flex gap-5">
            <DatePicker />
            <Filter />
          </div>
          <div className="flex gap-5 mt-5 xl:mt-0">
            <div className="relative">
              <SearchIcon
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search"
                className="pl-9 pr-4 focus:ring-primary focus:ring-offset-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-sm text-gray-600 border-b border-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Emplyee name
              </th>
              <th scope="col" className="px-6 py-3">
                Emp ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Payslip
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-500 whitespace-nowrap"
              >
                Empower employee
              </th>
              <td className="px-6 py-4">A-1</td>
              <td className="px-6 py-4">Jan 2010</td>
              <td className="px-6 py-4">Software engineer</td>
              <td className="px-6 py-4">
                <Button variant="outline">
                  <DownloadIcon className=" h-5 w-5" />
                </Button>
              </td>
              <td className="flex items-center px-6 py-4">
                <Ellipsis />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                <Button variant="outline">1</Button>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </MainLayout>
  );
};

export default Payroll;
