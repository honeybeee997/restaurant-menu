import React from "react";

import MenuItem from "./MenuItem";
import Grid from "../layout/Grid";

import { MENU } from "~/constants";

const Menu = () => {
  return (
    <Grid>
      {MENU.map((dish) => (
        <MenuItem key={dish.id} dish={dish} />
      ))}
    </Grid>
  );
};

export default Menu;
