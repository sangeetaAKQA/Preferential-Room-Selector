import React from "react";
import Filters from "./roomFilters";
export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <Filters />
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
