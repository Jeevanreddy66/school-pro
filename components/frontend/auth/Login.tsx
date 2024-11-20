"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Lock, LogIn, Mail } from "lucide-react";

import { SubmitButton, TextInput } from "@/components/global";

export const Login: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  const loginUser = async (): Promise<void> => {};

  return (
    <>
      <div className="w-[100%]">
        <div className="text-center mt-4 mb-8">
          <h2 className="font-bold text-xl">Login to your Account</h2>
          <p className="text-gray-600 font-thin text-sm">
            Welcome back! Enter your details to login to schoolpro :
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(loginUser)}>
          <TextInput
            name="email"
            label="Email Address"
            Icon={Mail}
            isRequired={true}
            register={register}
            errors={errors}
          />

          <TextInput
            name="password"
            type="password"
            label="Password"
            Icon={Lock}
            isRequired={true}
            register={register}
            errors={errors}
          />

          <SubmitButton
            title="Sign In"
            isLoading={isLoading}
            loadingTitle="Signing in, please wait.. "
            showIcon
            Icon={LogIn}
          />
        </form>

        {/* <p className="mt-10 text-sm font-light text-gray-500 text-center">
          New to Schoolpro?{" "}
          <Link
            href="#"
            className="font-semibold text-blue-500 hover:underline hover:text-blue-600"
          >
            Sign Up
          </Link>
        </p> */}
      </div>
    </>
  );
};
