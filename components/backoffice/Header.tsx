"use client";

import { FC } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserAvatar } from "./UserAvatar";

export const Header: FC = () => {
  return (
    <>
      <div className="h-16 flex items-center gap-4 border-b px-4">
        <SidebarTrigger />

        <div className="flex-1">
          <Input
            placeholder="Search School, Billing, Students etc.,"
            className="max-w-sm outline-none border-none ring-1 ring-gray-200 focus:ring-blue-500"
          />
        </div>

        <Button variant="outline" size="icon">
          <Plus className="h-5 w-5" />
          <span className="sr-only">Add new</span>
        </Button>

        <UserAvatar />
      </div>
    </>
  );
};
