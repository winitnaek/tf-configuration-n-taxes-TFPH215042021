import React from "react";
import UserDataQueries from "../../app/components/UserDataQueries";

const renderPage = (pgid, help) => {
    let form;
  switch (pgid) {
    case pgid === "userDataQueries":
      form = <UserDataQueries help={help} />;
      break;
    default:
      break;
  }
  return form;
};

export default renderPage;
