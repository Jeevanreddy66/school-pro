"use client";

import type { SubmitButtonPropsType } from "@/types/propsTypes";

import { FC } from "react";
import { Loader, Plus } from "lucide-react";

export const SubmitButton: FC<SubmitButtonPropsType> = ({
  title,
  isLoading,
  LoaderIcon = Loader,
  loadingTitle = "Saving, Please wait...",
  showIcon = false,
  Icon = Plus,
}) => {
  return (
    <>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full text-center py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <LoaderIcon className="w-4 h-4 animate-spin mr-2" /> {loadingTitle}
          </>
        ) : (
          <>
            {showIcon && <Icon className="w-4 h-4 mr-2" />}
            {title}
          </>
        )}
      </button>
    </>
  );
};
