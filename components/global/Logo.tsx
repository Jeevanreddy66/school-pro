"use client";

import Link from "next/link";
import { FC } from "react";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export const Logo: FC<{ variant?: string }> = ({ variant = "light" }) => {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <div
          className={cn(
            "rounded-full p-1",
            variant === "light" ? "bg-blue-500" : "bg-white"
          )}
        >
          <span
            className={cn(
              "text-xl font-bold",
              variant === "light" ? "text-white" : "text-blue-800"
            )}
          >
            <GraduationCap />
          </span>
        </div>

        <span className="font-bold text-xl">
          School{" "}
          <span
            className={cn(variant === "light" ? "text-blue-500" : "text-white")}
          >
            Pro
          </span>
        </span>
      </Link>
    </>
  );
};
