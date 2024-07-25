import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages";
import ProtectedRoute from "./protected-route";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Message from "@/pages/message";
import Dashboard from "@/pages/dashboard";
import Attendance from "@/pages/attendance";
import LiveAttendance from "@/pages/attendance/live-attendance";
import CreateMessage from "@/pages/message/create";
import Employees from "@/pages/employee";
import DetailAttendance from "@/pages/attendance/detail-attendance";
import SettingAttendance from "@/pages/attendance/setting-attendance";
import AddSchedule from "@/pages/attendance/add-schedule";
import EditSchedule from "@/pages/attendance/edit-schedule";
import CreateEmployee from "@/pages/employee/create";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/message",
          children: [
            {
              index: true,
              element: <Message />,
            },
            {
              path: "create",
              element: <CreateMessage />,
            },
          ],
        },
        {
          path: "/employees",
          children: [
            {
              index: true,
              element: <Employees />,
            },
            {
              path: "create",
              element: <CreateEmployee />,
            },
          ],
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/attendance",
          element: <Attendance />,
        },
        {
          path: "/attendance/live-attendance",
          element: <LiveAttendance />,
        },
        {
          path: "/attendance/:attendance_id",
          element: <DetailAttendance />,
        },
        {
          path: "/attendance/settings",
          element: <SettingAttendance />,
        },
        {
          path: "/attendance/settings/schedule",
          element: <AddSchedule />,
        },
        {
          path: "/attendance/settings/schedule/:attendance_id/edit",
          element: <EditSchedule />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
