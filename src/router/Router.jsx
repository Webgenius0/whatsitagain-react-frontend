import { createBrowserRouter } from "react-router-dom";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardWallet from "@/pages/Dashboard/DashboardWallet";
import DashboardMatchQueue from "@/pages/Dashboard/DashboardMatchQueue";
import DashboardCreateMatch from "@/pages/Dashboard/DashboardCreateMatch";
import DashboardMatchLobby from "@/pages/Dashboard/DashboardMatchLobby";
import DashboardBet from "@/pages/Dashboard/DashboardBet";

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
      {
        path: "match-lobby",
        element: <DashboardMatchLobby />,
      },
      {
        path: "bet",
        element: <DashboardBet />,
      },
    ],
  },
]);

export default Router;
