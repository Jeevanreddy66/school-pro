import type { TabFeaturesConfigType } from "@/types/configTypes";

import { BarChart2, DollarSign, GraduationCap, Users } from "lucide-react";

export const tabFeaturesConfig: TabFeaturesConfigType = [
  {
    Icon: Users,
    tab: "Students",
    title: "Student Management",
    description:
      "Comprehensive Student Information System for managing enrollments, profiles and academic records with ease.",
    href: "/features/student-management",
    image: "/placeholder.svg",
    subFeatures: [
      "Digital Student Profiles & Records",
      "Online Admission & Registration",
      "Parent Portal Access",
      "Student Performance Tracking",
      "Behavioral Records Management",
      "Document Management System",
      "Student Health Records",
      "Alumni Database Management",
    ],
  },
  {
    Icon: GraduationCap,
    tab: "Academics",
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading and report card generation in one unified system.",
    href: "/features/academic-management",
    image: "/placeholder.svg",
    subFeatures: [
      "Course & Curriculum Planning",
      "Class Scheduling & Timetables",
      "Assignment Management",
      "Online Examination System",
      "Grade Book Management",
      "Report Card Generation",
      "Learning Resource Library",
      "Academic Calendar Planning",
    ],
  },
  {
    Icon: DollarSign,
    tab: "Finance",
    title: "Financial Management",
    description:
      "Complete Fee management system with online payments, invoicing and comprehensive financial reporting.",
    href: "/features/finance",
    image: "/placeholder.svg",
    subFeatures: [
      "Fee Structure Management",
      "Online Payment Gateway",
      "Invoice Generation",
      "Payment Tracking & Reminders",
      "Expense Management",
      "Financial Reporting & Analytics",
      "Scholarship Management",
      "Budget Planning Tools",
    ],
  },
  {
    Icon: BarChart2,
    tab: "Analytics",
    title: "Analytics & Reports",
    description:
      "Powerful analytics tools for data-driven decisions with customizable reporting and insights.",
    href: "/features/analytics",
    image: "/placeholder.svg",
    subFeatures: [
      "Performance Analytics Dashboard",
      "Attendance Analytics",
      "Financial Reports & Insights",
      "Student Progress Tracking",
      "Staff Performance Metrics",
      "Custom Report Generation",
      "Data Visualization Tools",
      "Trend Analysis & Forecasting",
    ],
  },
];
