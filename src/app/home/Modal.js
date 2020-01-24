import { PortalWithState } from "react-portal";
import { Col } from "reactstrap";
import Grid from '../components/JqxGridModal';

const Style = {
  marginLeft: '400px',
  top: '0',
  position: 'absolute',
  color: 'rgba(255, 255, 255, 0.5)',
  backgroundColor: '#343A40',
  border: 'none',
  padding: '0.5rem 1rem',
  marginTop: "10px"
}


const Modal = props => {
  const { buttonLabel, className } = props;
   
  console.log(props)
  return (
     <PortalWithState closeOnOutsideClick closeOnEsc style={{margin: '0 auto', width: '50%'}}>
          {({ openPortal, closePortal, isOpen, portal }) => (
            <React.Fragment>
                <button onClick={openPortal} style={Style}>
                
              </button>
              {portal(
                <Col >
                <p style={{margin: '0 auto', marginTop: '-400px', width: '65%' }}>
                
                <Grid open={true} data={props.data}  /> 
                  
                </p>
                </Col>
              )}
            </React.Fragment>
          )}
        </PortalWithState>
  );
};

export default Modal;
