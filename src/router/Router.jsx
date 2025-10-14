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
import DashboardMatchLobby from "@/pages/Dashboard/DashboardMatchLobby";
import DashboardBet from "@/pages/Dashboard/DashboardBet";
import DashboardMatchResult from "@/pages/Dashboard/DashboardMatchResult";
import AllPages from "@/pages/AllPages";
import ForgetPassword from "@/pages/Auth/ForgetPassword";
import ForgetPassWordOtp from "@/pages/Auth/ForgetPassWordOtp";
import ResetPassword from "@/pages/Auth/ResetPassword";
import PasswordChangeSeccessPage from "@/pages/Auth/PasswordChangeSeccessPage";

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

  // Basic Route
  {
    path: "/",
    element: <AllPages />,
  },
  {
    path: "/all-pages",
    element: <AllPages />,
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
      {
        path: "match-lobby",
        element: <DashboardMatchLobby />,
      },
      {
        path: "bet",
        element: <DashboardBet />,
      },
      {
        path: "match-result",
        element: <DashboardMatchResult />,
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
        element: <AuthVerified />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "forget-password-otp",
        element: <ForgetPassWordOtp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "password-change-success",
        element: <PasswordChangeSeccessPage />,
      },
    ],
  },
]);

export default Router;
