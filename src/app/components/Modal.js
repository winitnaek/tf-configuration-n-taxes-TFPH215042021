
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
        return ( 
            <div>
      <Button color="danger" onClick={this.toggle}> Open/Close Read Only Modal Type 2</Button>
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} size="lg" style={{width: "1400px"}}>
        <ModalHeader toggle={this.toggle}>{this.props.title} </ModalHeader>
        <ModalBody>
            {this.props.children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
         );
    }
}
 
export default ModalExample;
