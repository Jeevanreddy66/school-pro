"use client";

import Image from "next/image";
import { FC } from "react";

import { Card, CardContent } from "@/components/ui/card";

export const DashboardPreview: FC = () => {
  return (
    <>
      <div className="container">
        <Card className="w-full">
          <CardContent className="h-[85vh] p-3">
            <Image
              src="/images/dashboard_sample.jpg"
              width={2016}
              height={1210}
              className="w-full h-full rounded-lg"
              alt="dashboard-preview"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
