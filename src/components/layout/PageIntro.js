import React from "react";

const PageIntro = ({ heading, text }) => {
  return (
    <>
      <h1 className="text-4xl text-white">{heading}</h1>
      <p className="text-color2 mb-10 mt-6 font-sans text-white">{text}</p>
    </>
  );
};

export default PageIntro;
