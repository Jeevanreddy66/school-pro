"use client";

import Link from "next/link";
import { FC } from "react";
import { ChevronRight } from "lucide-react";
import { sidebarConfig } from "@/config";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Logo } from "../global";

export const BackofficeSidebar: FC = () => {
  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarConfig.map((item, i: number) => (
                <Collapsible
                  key={i}
                  defaultOpen={item.isActive}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.Icon && <item.Icon />}
                        <span>{item.title}</span>

                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item, i: number) => (
                          <SidebarMenuSubItem key={i}>
                            <SidebarMenuSubButton asChild>
                              <Link href={item.url}>
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <Button
          size="sm"
          className="w-[95%] mx-auto bg-sidebar-primary text-white text-center text-sm mb-4 cursor-pointer"
        >
          Logout
        </Button>
      </Sidebar>
    </>
  );
};
