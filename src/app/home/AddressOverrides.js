import React from "react";
import Grid from '../components/ModalGrid';

let isOpen = false;

const toggleModal = () => {
  
    isOpen = !isOpen;
    console.log(isOpen)
}


const AddressOverrides = () => {
  return (
    <div>
      <h1> Address Overrides</h1>
      <Grid open={isOpen} close={toggleModal}>
        <h1>  Title passed as a prop</h1>


        <p> More info passed as a prop</p>

      </Grid>
    </div>
  );
};

export default AddressOverrides;
