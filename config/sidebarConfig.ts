import type { SidebarConfigType } from "@/types/configTypes";

import {
  BarChart2,
  Bus,
  DollarSign,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

export const sidebarConfig: SidebarConfigType = [
  {
    title: "Dashboard",
    url: "/dashboard",
    isActive: true,
    Icon: LayoutDashboard,
    items: [
      {
        title: "Overview",
        url: "/dashboard",
      },
    ],
  },
  {
    title: "Student Management",
    url: "/students",
    Icon: Users,
    items: [
      {
        title: "Student Directory",
        url: "/students/directory",
      },
      {
        title: "Enrollment",
        url: "/students/enrollment",
      },
      {
        title: "Attendance",
        url: "/students/attendance",
      },
      {
        title: "Performance",
        url: "/students/performance",
      },
    ],
  },
  {
    title: "Academics",
    url: "/academics",
    Icon: GraduationCap,
    items: [
      {
        title: "Curriculum",
        url: "/academics/curriculum",
      },
      {
        title: "Timetable",
        url: "/academics/timetable",
      },
      {
        title: "Examinations",
        url: "/academics/examinations",
      },
      {
        title: "Assignments",
        url: "/academics/assignments",
      },
      {
        title: "Report Cards",
        url: "/academics/report-cards",
      },
    ],
  },
  {
    title: "Staff Management",
    url: "/staff",
    Icon: UserCog,
    items: [
      {
        title: "Staff Directory",
        url: "/staff/directory",
      },
      {
        title: "Attendance",
        url: "/staff/attendance",
      },
      {
        title: "Leave Management",
        url: "/staff/leave",
      },
      {
        title: "Performance",
        url: "/staff/performance",
      },
    ],
  },
  {
    title: "Communication",
    url: "/communication",
    Icon: MessageSquare,
    items: [
      {
        title: "Messages",
        url: "/communication/messages",
      },
      {
        title: "Announcements",
        url: "/communication/announcements",
      },
      {
        title: "Notice Board",
        url: "/communication/notice-board",
      },
      {
        title: "Emergency Alerts",
        url: "/communication/alerts",
      },
    ],
  },
  {
    title: "Finance",
    url: "/finance",
    Icon: DollarSign,
    items: [
      {
        title: "Fee Management",
        url: "/finance/fees",
      },
      {
        title: "Payments",
        url: "/finance/payments",
      },
      {
        title: "Scholarships",
        url: "/finance/scholarships",
      },
      {
        title: "Reports",
        url: "/finance/reports",
      },
    ],
  },
  {
    title: "Transport",
    url: "/transport",
    Icon: Bus,
    items: [
      {
        title: "Routes",
        url: "/transport/routes",
      },
      {
        title: "Tracking",
        url: "/transport/tracking",
      },
      {
        title: "Drivers",
        url: "/transport/drivers",
      },
      {
        title: "Maintenance",
        url: "/transport/maintenance",
      },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    Icon: Package,
    items: [
      {
        title: "Library",
        url: "/resources/library",
      },
      {
        title: "Inventory",
        url: "/resources/inventory",
      },
      {
        title: "Facilities",
        url: "/resources/facilities",
      },
      {
        title: "Assets",
        url: "/resources/assets",
      },
    ],
  },
  {
    title: "Reports & Analytics",
    url: "/reports",
    Icon: BarChart2,
    items: [
      {
        title: "Academic Reports",
        url: "/reports/academic",
      },
      {
        title: "Financial Reports",
        url: "/reports/financial",
      },
      {
        title: "Custom Reports",
        url: "/reports/custom",
      },
      {
        title: "Analytics Dashboard",
        url: "/reports/analytics",
      },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    Icon: Settings,
    items: [
      {
        title: "School Profile",
        url: "/settings/profile",
      },
      {
        title: "User Management",
        url: "/settings/users",
      },
      {
        title: "System Settings",
        url: "/settings/system",
      },
      {
        title: "Backup & Security",
        url: "/settings/security",
      },
    ],
  },
];
