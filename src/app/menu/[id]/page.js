import React from "react";
import PageIntro from "~/components/layout/PageIntro";
import Pricing from "~/components/pricing";

import { getMenuById } from "~/utils";

const page = ({ params }) => {
  const menu = getMenuById(params.id);

  return (
    <>
      <PageIntro heading={menu.name} text={menu.description} />
      <Pricing items={menu.meals} />
    </>
  );
};

export default page;
