import React from "react";
import CustomForm from "../../app/components/CustomForm";

const renderForm = (close, change, pgid, permissions, deleteRow) => {
  let form;
  const formProps = {close, change, permissions, deleteRow, pgid}
      form = <CustomForm formProps={formProps} />
  return  form;
};


export default renderForm;
