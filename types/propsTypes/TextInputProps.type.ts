import type { LucideIcon } from "lucide-react";

export type TextInputPropsType = {
  name: string;
  label: string;
  type?: string;
  Icon: LucideIcon;
  isRequired?: boolean;
  register: any;
  errors: any;
};
