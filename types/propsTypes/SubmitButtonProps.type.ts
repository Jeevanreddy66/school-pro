import type { LucideIcon } from "lucide-react";

export type SubmitButtonPropsType = {
  title: string;
  isLoading: boolean;
  LoaderIcon?: LucideIcon;
  loadingTitle?: string;
  showIcon?: boolean;
  Icon?: LucideIcon;
};
