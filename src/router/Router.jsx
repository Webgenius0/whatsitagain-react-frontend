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
import DashboardBetLedger from "@/pages/Dashboard/DashboardBetLedger";
import DashboardReferralProgram from "@/pages/Dashboard/DashboardReferralProgram";
import DashboardLeaderboard from "@/pages/Dashboard/DashboardLeaderboard";
import DashboardSettings from "@/pages/Dashboard/DashboardSettings";
import DashboardSettingsEditProfile from "@/components/DashboardSettingsPages/DashboardSettingsEditProfile";
import DashboardSettingsChangePassword from "@/components/DashboardSettingsPages/DashboardSettingsChangePassword";
import DashboardSettingsLinkedProfile from "@/components/DashboardSettingsPages/DashboardSettingsLinkedProfile";
import DashboardSettingsContactSupport from "@/components/DashboardSettingsPages/DashboardSettingsContactSupport";
import DashboardSettingsTerms from "@/components/DashboardSettingsPages/DashboardSettingsTerms";

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
        element: <DashboardBetLedger/>,
      },
      {
        path: "referral",
        element: <DashboardReferralProgram/>,
      },
      {
        path: "leaderboard",
        element: <DashboardLeaderboard/>,
      },
      {
        path: "settings",
        element: <DashboardSettings/>,
      },
      {
        path: 'settings/edit-profile',
        element: <DashboardSettingsEditProfile/>
      },
      {
        path: 'settings/password-change',
        element: <DashboardSettingsChangePassword/>
      },
      {
        path: 'settings/linked-profile',
        element: <DashboardSettingsLinkedProfile/>
      },
      {
        path: 'settings/contact-support',
        element: <DashboardSettingsContactSupport/>
      },
      {
        path: 'settings/terms-conditions',
        element: <DashboardSettingsTerms/>
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

  // AUTH Pages
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
