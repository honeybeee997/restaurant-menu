import React from "react";
import PageIntro from "~/components/layout/PageIntro";

import { getMenuById } from "~/utils";

const page = ({ params }) => {
  const menu = getMenuById(params.id);

  return (
    <>
      <PageIntro heading={menu.name} text={menu.description} />
    </>
  );
};

export default page;
