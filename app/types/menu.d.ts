export type Menu = {
  id: number;
  title: string;
  href?: string;
  newTab: boolean;
  submenu?: Menu[];
};
