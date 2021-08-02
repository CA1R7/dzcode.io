export interface SidebarTreeItem {
  id: string;
  content: string;
  link?: string;
  children?: SidebarTreeItem[];
}

export type LanguageCode = "en" | "fr" | "ar";
