import Link from "next/link";
import React from "react";
import PageIntro from "~/components/layout/PageIntro";
import Pricing from "~/components/pricing";
import Button from "~/components/ui/button";

import { MENU } from "~/constants";
import { getMenuById } from "~/utils";

const page = ({ params }) => {
  const menu = getMenuById(params.id);

  if (!menu) {
    return (
      <div className="container flex flex-col items-center">
        <h1 className="text-6xl text-center font-[circular]">404 !</h1>
        <h4 className="text-xl text-center my-10 underline underline-offset-4">
          لم يتم العثور عليه{" "}
        </h4>
        <Button className="!mt-0">
          <Link href="/">العودة إلى القائمة</Link>
        </Button>
      </div>
    );
  }

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
