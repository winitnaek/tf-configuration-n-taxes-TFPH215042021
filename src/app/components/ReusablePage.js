import React, { Component, Fragment } from "react";
import RenderPage from "../../base/utils/renderPage";

const ReusablePage = props => {
  const { pgid, help } = props;
  return RenderPage(pgid, help);
}
export default ReusablePage;
