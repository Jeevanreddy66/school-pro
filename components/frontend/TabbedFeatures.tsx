"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { tabFeaturesConfig } from "@/config";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "./SectionHeader";

export const TabbedFeatures: FC = () => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <SectionHeader
            title="Additional Features"
            heading="All-in-One School Management Platform"
            description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
          />
        </div>

        <Tabs defaultValue="Students" className="w-full mt-8 mb-16">
          <TabsList className="w-full h-auto grid grid-cols-4 p-1">
            {tabFeaturesConfig.map(({ Icon, tab }, i: number) => (
              <TabsTrigger
                key={i}
                value={tab}
                className="flex items-center gap-2 py-2"
              >
                <Icon className="w-4 h-4" /> <span>{tab}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabFeaturesConfig.map((tabFeature, i: number) => (
            <TabsContent key={i} value={tabFeature.tab} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{tabFeature.title}</CardTitle>
                  <CardDescription>{tabFeature.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-[65%]">
                      <div className="grid md:grid-cols-2 gap-4">
                        {tabFeature.subFeatures.map(
                          (feature: string, i: number) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 rounded-lg border p-3 text-sm transition-colors hover:bg-muted"
                            >
                              <div className="h-2 w-2 rounded-full bg-primary" />
                              {feature}
                            </div>
                          )
                        )}
                      </div>

                      <Link
                        href={tabFeature.href}
                        className="mt-6 inline-flex justify-center items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        Learn More about {tabFeature.tab}
                      </Link>
                    </div>

                    <div className="flex-1 p-2 rounded-lg border border-gray-200 h-[35vh]">
                      <Image
                        src={tabFeature.image}
                        alt={tabFeature.tab}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};
