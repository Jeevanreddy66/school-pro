import type { LucideIcon } from "lucide-react";

export type TabFeaturesConfigType = {
  Icon: LucideIcon;
  tab: string;
  title: string;
  description: string;
  href: string;
  image: string;
  subFeatures: string[];
}[];
