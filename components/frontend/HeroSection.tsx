"use client";

import { FC } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";

export const HeroSection: FC = () => {
  return (
    <>
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-8">
          <SectionTitle title="Welcome to SchoolPro" />

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
            Your Complete School Management Solution
          </h1>

          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
            From admissions to academics, simplify every aspect of school
            administration with our comprehensive and user-friendly platform.
          </p>

          <div className="flex justify-center flex-wrap gap-4">
            <Button size="lg" className="h-12 px-6 text-base rounded-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline" className="h-12 px-6 text-base">
              View All Features <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
