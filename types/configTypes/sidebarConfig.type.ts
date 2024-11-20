import type { LucideIcon } from "lucide-react";

export type SidebarConfigType = {
  title: string;
  url: string;
  isActive?: boolean;
  Icon: LucideIcon;
  items: { title: string; url: string }[];
}[];
