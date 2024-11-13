"use client";

import Image from "next/image";
import { FC } from "react";
import { logoCloudConfig } from "@/config";

export const LogoCloud: FC = () => {
  return (
    <>
      <div className="bg-white py-12 sm:py-18">
        <div className="container px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by Leading Educational Institutions Worldwide
          </h2>

          <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {logoCloudConfig.map(({ name, src }, i: number) => (
              <Image
                key={i}
                alt={name}
                src={src}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
