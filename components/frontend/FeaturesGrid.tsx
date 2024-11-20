"use client";

import Image from "next/image";
import { FC } from "react";
import { featuresConfig } from "@/config";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

export const FeaturesGrid: FC = () => {
  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
        <div className="container">
          <SectionHeader
            title="Features"
            heading="All-in-One School Management Platform"
            description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-4 md:gap-6 mt-8">
            {featuresConfig.map((feature, i) => (
              <Card
                key={i}
                className={cn(
                  "overflow-hidden",
                  i === 0 && "md:col-span-4",
                  i === 1 && "md:col-span-2",
                  i === 2 && "md:col-span-2 md:row-span-2",
                  (i === 3 || 4) && "md:col-span-4",
                  (i === 5 || 6) && "md:col-span-3"
                )}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>

                <CardContent className="h-[35vh]">
                  <Image
                    src={feature.image}
                    width={300}
                    height={300}
                    className="rounded w-full h-full object-cover"
                    alt={feature.title}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
