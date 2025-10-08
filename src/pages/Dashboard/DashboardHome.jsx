import ActiveMatchesOverview from "@/components/DashboardOverview/ActiveMatchesOverview";
import OverviewCards from "@/components/DashboardOverview/OverviewCards";
import WelcomeCard from "@/components/DashboardOverview/WelcomeCard";
import React from "react";

export default function DashboardHome() {
  return (
    <div className="p-8">
      <WelcomeCard />
      <OverviewCards />
      <ActiveMatchesOverview />
    </div>
  );
}
