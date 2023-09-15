import React from "react";
import BasicNavigationBar from "./BasicNavigationBar";

const BasicTemplate = ({ children }) => {
  return (
    <>
      <BasicNavigationBar />
      <main className="container">{children}</main>
    </>
  );
};

export default BasicTemplate;
