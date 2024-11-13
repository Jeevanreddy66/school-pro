import type { FeaturesConfigType } from "@/types/configTypes";

import {
  BookOpen,
  Bus,
  ClipboardList,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Users,
} from "lucide-react";

export const featuresConfig: FeaturesConfigType = [
  {
    title: "Student Information System",
    description:
      "Centralized student data management with digital enrolment, profile tracking and academic records in one secure location.",
    Icon: Users,
    image: "/placeholder.svg",
  },
  {
    title: "Academic Excellence Suite",
    description:
      "Comprehensive tools for curriculum planning, examination management and automated grading with detailed performance analytics.",
    Icon: GraduationCap,
    image: "/placeholder.svg",
  },
  {
    title: "Smart Communication Hub",
    description:
      "Multi-channel messaging platform connecting teachers, parents and students with real-time notifications and updates.",
    Icon: MessageSquare,
    image: "/placeholder.svg",
  },
  {
    title: "Financial Management Center",
    description:
      "Streamlined fee collection, automated billing and comprehensive financial reporting with secure payment processing.",
    Icon: DollarSign,
    image: "/placeholder.svg",
  },
  {
    title: "Staff & HR Management",
    description:
      "Complete staff administration with attendance tracking, performance management and automated payroll processing.",
    Icon: ClipboardList,
    image: "/placeholder.svg",
  },
  {
    title: "Transport and Safety Control",
    description:
      "Real-time fleet tracking, route optimization and automated parent notifications for secure student transportation.",
    Icon: Bus,
    image: "/placeholder.svg",
  },
  {
    title: "Resource & Facility Manager",
    description:
      "Digital Library System, inventory tracking and smart scheduling tools for optimal resource utilization.",
    Icon: BookOpen,
    image: "/placeholder.svg",
  },
];
