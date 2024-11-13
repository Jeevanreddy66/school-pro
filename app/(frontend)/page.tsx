"use client";

import { FC } from "react";

import {
  DashboardPreview,
  FeaturesGrid,
  HeroSection,
  LogoCloud,
  PricingSection,
} from "@/components/frontend";

const HomePage: FC = () => {
  return (
    <>
      <main>
        <HeroSection />

        <LogoCloud />

        <DashboardPreview />

        <FeaturesGrid />

        <PricingSection />
      </main>
    </>
  );
};

export default HomePage;
