import { createBrowserRouter } from "react-router-dom";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardWallet from "@/pages/Dashboard/DashboardWallet";
import DashboardMatchQueue from "@/pages/Dashboard/DashboardMatchQueue";
import DashboardCreateMatch from "@/pages/Dashboard/DashboardCreateMatch";
import AuthLayout from "@/layouts/AuthLayout";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import AuthPassword from "@/pages/Auth/AuthPassword";
import VerifyAccountOtp from "@/pages/Auth/VerifyAccountOtp";
import AuthVerified from "@/pages/Auth/AuthVerified";

const Router = createBrowserRouter([
  // Error Route
  {
    path: "*",
    element: (
      <h1 className="w-full h-screen flex justify-center items-center text-7xl font-bold italic animate-pulse">
        404 Not Found
      </h1>
    ),
  },

  // Auth Route
  {
    path: "/",
    element: <>Hello World</>,
  },

  // Dashboard Layout Route
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "wallet",
        element: <DashboardWallet />,
      },
      {
        path: "bet-ledger",
        element: <h1>Bet Ledger</h1>,
      },
      {
        path: "referral",
        element: <h1>Referral</h1>,
      },
      {
        path: "leaderboard",
        element: <h1>Leaderboard</h1>,
      },
      {
        path: "settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "match-queue",
        element: <DashboardMatchQueue />,
      },
      {
        path: "create-match",
        element: <DashboardCreateMatch />,
      },
    ],
  },
  // AUTH
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "set-password",
        element: <AuthPassword />,
      },
      {
        path: "verify-account",
        element: <VerifyAccountOtp />,
      },
      {
        path: "verified-success",
        element:<AuthVerified/>,
      },
    ],
  },
]);

export default Router;
