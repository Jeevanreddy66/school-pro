"use client";

import type { TextInputPropsType } from "@/types/propsTypes";

import Link from "next/link";
import { FC, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export const TextInput: FC<TextInputPropsType> = ({
  name,
  type = "text",
  label,
  Icon,
  isRequired = false,
  register,
  errors,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleToggleShowPassword = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-between flex-nowrap mr-1">
          <label
            htmlFor={name}
            className="block font-medium text-sm/6 text-gray-900"
          >
            {label}
          </label>

          {type === "password" && (
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-blue-500 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          )}
        </div>
        <div className="relative">
          <input
            type={isPasswordVisible ? "text" : type}
            id={name}
            name={name}
            {...register(`${name}`, { required: isRequired })}
            className={cn(
              "block w-full rounded-md border-0 mt-1 px-8 py-2 shadow-sm text-gray-900 ring-1 placeholder:text-gray-400 sm:text-sm/6",
              errors[`${name}`] && "ring-red-500 focus:ring-red-500"
            )}
            placeholder={`Enter ${label}`}
          />
          <Icon className="absolute left-2 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

          {type === "password" && (
            <button
              type="button"
              className="border-none outline-none absolute right-3 top-3"
              onClick={handleToggleShowPassword}
            >
              {isPasswordVisible ? (
                <EyeOff className="w-4 h-4 text-gray-400" />
              ) : (
                <Eye className="w-4 h-4 text-gray-400" />
              )}
            </button>
          )}
        </div>

        {errors[`${name}`] && (
          <span className="text-xs text-red-500">{label} is required</span>
        )}
      </div>
    </>
  );
};
