import React from "react";
import MatchLobbyBanner from "@/components/DashboardOverview/MatchLobbyBanner";
import MatchLobbyTeamSlot from "@/components/DashboardOverview/MatchLobbyTeamSlot";

export default function DashboardMatchLobby() {
  return (
    <div className="p-8">
      <MatchLobbyBanner />
      <MatchLobbyTeamSlot />
    </div>
  );
}
