import React from "react";
import UserDataQueries from "../../app/components/UserDataQueries";
import Home from "../../app/home/home";

const renderPage = (pgid, help) => {
  let page;
  switch (pgid) {
    case "userDataQueries":
      page = <UserDataQueries help={help} />;
      break;
    default:
      page = <Home />;
      break;
  }
  return page; 
};

export default renderPage;
