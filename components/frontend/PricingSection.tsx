"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

export const PricingSection: FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  // Pricing per student per month/year
  const monthlyPrice = 4;
  const annualPrice = 40; // ~17% savings annually

  const features = [
    "Complete Student Management System",
    "Academic & Examination Tools",
    "Parent-Teacher Communication Platform",
    "Basic Financial Management",
    "Attendance Tracking System",
    "Real-time Notifications",
    "24/7 Customer Support",
    "Regular System Updates",
  ];

  return (
    <>
      <div className="container bg-white my-8 sm:my-12">
        <SectionHeader
          title="Pricing"
          heading="Transparent, Per-Student Pricing"
          description="Simple, predictable pricing that grows with your institution. All
            features included, no hidden fees. Special discounts available for
            large institutions."
        />

        <div className="mx-auto mt-8 flex justify-center gap-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </Button>
        </div>

        <div className="mt-4 rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {isAnnual ? "Annual" : "Monthly"} Subscription
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our software offers all the tools you need to run a successful
              school. With our {isAnnual ? "annual" : "monthly"} plan, get
              access to exclusive features to enhance productivity and foster
              better communication within your institution.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">
                Features included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature, i: number) => (
                <li key={i} className="flex gap-x-3">
                  <Check className="w-5 h-5 text-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-2 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual
                    ? "Save with an annual plan"
                    : "Flexible monthly plan"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <Link
                  href="#"
                  className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy school
                  reimbursements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
