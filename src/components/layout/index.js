import React from "react";

import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-color4 p-3 shadow-2xl">
        <Image
          src="/assets/brand/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-[50px] w-auto mx-auto invert"
          priority
        />
      </div>
      <section className="container pt-10 pb-4 px-4">{children}</section>
    </>
  );
};

export default Layout;
