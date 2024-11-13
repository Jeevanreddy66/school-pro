"use client";

import { FC, ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/frontend";

const FrontendLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </>
  );
};

export default FrontendLayout;
