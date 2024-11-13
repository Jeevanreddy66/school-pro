"use client";

import type { SectionTitlePropsType } from "@/types/propsTypes";

import { FC } from "react";

import { Badge } from "@/components/ui/badge";

export const SectionTitle: FC<SectionTitlePropsType> = ({ title }) => {
  return (
    <>
      <Badge
        variant="secondary"
        className="h-8 items-center gap-2 px-4 text-base"
      >
        <span className="text-primary">✨</span> {title}
      </Badge>
    </>
  );
};
