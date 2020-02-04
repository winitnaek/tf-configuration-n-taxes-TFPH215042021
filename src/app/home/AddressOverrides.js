import React from "react";

let isOpen = false;

const toggleModal = () => {
  
    isOpen = !isOpen;
    console.log(isOpen)
}


const AddressOverrides = () => {
  return (
    <div>
      <h1> Address Overrides</h1>
    </div>
  );
};

export default AddressOverrides;
