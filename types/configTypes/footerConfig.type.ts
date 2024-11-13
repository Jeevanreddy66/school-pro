import type { LucideIcon } from "lucide-react";

export type FooterConfigType = {
  description: string;
  mediaLinks: { Icon: LucideIcon; href: string }[];
  contact: { title: string; mail: string; phone: string; address: string };
  navLinks: { label: string; url: string }[];
  quickLinks: { label: string; url: string }[];
};
