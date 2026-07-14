"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { AdminAgentChat } from "./admin-agent-chat";

export function AgentSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarHeader>
        <div className="px-2 py-1.5 text-sm font-semibold">
          Vercel Swag Agent
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden p-0">
        <AdminAgentChat />
      </SidebarContent>
    </Sidebar>
  );
}
