import { createBrowserRouter } from "react-router-dom";

// Layouts
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardMatchQueue from "@/pages/Dashboard/DashboardMatchQueue";

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
        element: <h1>Wallet</h1>,
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
    ],
  },
]);

export default Router;
