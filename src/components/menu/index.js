import React from "react";

import MenuItem from "./MenuItem";

import { MENU } from "~/constants";

const Menu = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {MENU.map((dish) => (
        <MenuItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Menu;
