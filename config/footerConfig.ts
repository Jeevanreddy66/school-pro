import type { FooterConfigType } from "@/types/configTypes";

import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const footerConfig: FooterConfigType = {
  description:
    "From admissions to academics, simplify every aspect of school administration with our comprehensive and user-friendly platform.",
  mediaLinks: [
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
  ],
  contact: {
    title: "Get in Touch",
    mail: "support@schoolpro.com",
    phone: "+91 987 654 3210",
    address: "61-A, Elm street, Gujarat, India.",
  },
  navLinks: [
    { label: "Home", url: "/" },
    { label: "FAQs", url: "/faq" },
    { label: "Price Plan", url: "/#pricing" },
    { label: "Features", url: "/features" },
  ],
  quickLinks: [
    { label: "Careers", url: "/careers" },
    { label: "About", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "Products", url: "/products" },
  ],
};
