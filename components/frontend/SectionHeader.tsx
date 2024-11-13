"use client";

import type { SectionHeaderPropsType } from "@/types/propsTypes";

import { FC } from "react";

import { SectionTitle } from "./SectionTitle";

export const SectionHeader: FC<SectionHeaderPropsType> = ({
  title,
  heading,
  description,
}) => {
  return (
    <>
      <div className="text-center space-y-4">
        <SectionTitle title={title} />

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">
          {heading}
        </h2>

        <p className="max-w-[900px] mx-auto text-muted-foreground text-lg sm:text-xl">
          {description}
        </p>
      </div>
    </>
  );
};
