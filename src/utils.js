import { MENU } from "./constants";

export const getMenuById = (id) => {
  return MENU.find((menu) => menu.id === id);
};
