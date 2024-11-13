"use client";

import Image from "next/image";
import { FC } from "react";
import { featuresConfig } from "@/config";

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

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-8">
            {featuresConfig.map((feature, i: number) => (
              <Card key={i} className="relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="relative bg-muted rounded-lg p-2 h-[40vh]">
                    <Image
                      src={feature.image}
                      width={600}
                      height={400}
                      className="rounded h-full"
                      alt={feature.title}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
