import type { NavigationConfigType } from "@/types/configTypes";

import {
  Users,
  GraduationCap,
  MessageSquare,
  DollarSign,
  ClipboardList,
  Bus,
  BarChart2,
  BookOpen,
  CalendarDays,
  FileText,
  Bell,
  Shield,
} from "lucide-react";

export const navigationConfig: NavigationConfigType = [
  {
    Icon: Users,
    title: "Student Management",
    description:
      "Comprehensive Student Information System for managing enrollments, profiles and academic records with ease.",
    href: "/features/student-management",
  },
  {
    Icon: GraduationCap,
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading and report card generation in one unified system.",
    href: "/features/academic-management",
  },
  {
    Icon: MessageSquare,
    title: "Communication Hub",
    description:
      "Integrated messaging system with multi-channel notifications for seamless school-wide communication.",
    href: "/features/communication",
  },
  {
    Icon: DollarSign,
    title: "Financial Management",
    description:
      "Complete Fee management system with online payments, invoicing and comprehensive financial reporting.",
    href: "/features/finance",
  },
  {
    Icon: ClipboardList,
    title: "Staff Management",
    description:
      "Efficient tools for managing staff records, attendance, performance evaluation and payroll processing.",
    href: "/features/staff-management",
  },
  {
    Icon: Bus,
    title: "Transport Management",
    description:
      "Real-time transport tracking, route management and automated notifications for safe student transportation.",
    href: "/features/transport",
  },
  {
    Icon: BarChart2,
    title: "Analytics & Reports",
    description:
      "Powerfull analytics tools for data-driven decisions with customizable reporting and insights.",
    href: "/features/analytics",
  },
  {
    Icon: BookOpen,
    title: "Resource Management",
    description:
      "Digital Library System, inventory tracking and facility scheduling in one integrated platform.",
    href: "/features/resources",
  },
  {
    Icon: CalendarDays,
    title: "Attendance System",
    description:
      "Automated attendance tracking for students and staff with instant notification capabilities.",
    href: "/features/attendance",
  },
  {
    Icon: FileText,
    title: "Examination Portal",
    description:
      "Complete examination management system from scheduling to result publication with secure access.",
    href: "/features/examinations",
  },
  {
    Icon: Bell,
    title: "Notice Board",
    description:
      "Digital notice board for announcements, events and important updates with targeted distribution.",
    href: "/features/announcements",
  },
  {
    Icon: Shield,
    title: "Security & Access",
    description:
      "Role based access control with data encryption and secure backups for complete peace of mind.",
    href: "/features/security",
  },
];
