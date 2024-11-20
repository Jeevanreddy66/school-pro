"use client";

import { CustomCarousel, Logo } from "@/components/global";
import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
        <div className="relative bg-white shadow-lg rounded-lg max-w-[95%] md:w-[70%] min-h-[70vh] mx-auto p-4 flex items-center gap-8">
          <div className="absolute top-6 left-3">
            <Logo />
          </div>
          {children}

          <div className="hidden md:block md:w-[100%] h-[65vh] border bg-blue-200/25 rounded-lg relative">
            <CustomCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
