"use client";

import { FC } from "react";

import {
  DashboardPreview,
  FeaturesGrid,
  HeroSection,
  LogoCloud,
  PricingSection,
  TabbedFeatures,
} from "@/components/frontend";

const HomePage: FC = () => {
  return (
    <>
      <main>
        <HeroSection />

        <LogoCloud />

        <DashboardPreview />

        <FeaturesGrid />

        <TabbedFeatures />

        <PricingSection />
      </main>
    </>
  );
};

export default HomePage;
