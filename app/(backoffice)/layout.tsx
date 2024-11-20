"use client";

import { FC, ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BackofficeSidebar, Header } from "@/components/backoffice";

const BackofficeLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <BackofficeSidebar />

        <SidebarInset>
          <Header />

          <div className="flex-1 space-y-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default BackofficeLayout;
