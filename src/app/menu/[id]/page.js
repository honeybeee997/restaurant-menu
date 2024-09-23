import React from "react";
import PageIntro from "~/components/layout/PageIntro";
import Pricing from "~/components/pricing";

import { MENU } from "~/constants";
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

export async function generateStaticParams() {
  return MENU.map((item) => ({
    slug: item.id,
  }));
}

export default page;
