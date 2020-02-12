
import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: true
         }
         this.toggle = () => this.setState({ isOpen : !this.state.isOpen  });
    }
    
    render() { 
        console.log(this.props)
        return ( 
            <div>
      <Button color="primary" onClick={e=> this.props.toggle()}> <div> Open/Close </div> Read Only Modal Type 2</Button>
      <Modal isOpen={this.props.open} toggle={e=> this.props.toggle()} size="lg" style={{width: "1400px"}}>
        <ModalHeader toggle={e=> this.props.toggle()}>{this.props.title} </ModalHeader>
        <ModalBody>
            {this.props.children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={e=> this.props.toggle()}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
 
export default ModalExample;
