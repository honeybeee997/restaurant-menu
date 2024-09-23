import React from "react";

const Grid = ({ children }) => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {children}
    </article>
  );
};

export default Grid;
