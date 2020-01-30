import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

import JqxGrid, { jqx } from '../../deps/jqwidgets-react/react_jqxgrid'
import Data from './mockdata.json'




const style = {
    fontWeight: "bold",
    fontSize: '14px',
    display: 'block',
    textAlign: 'left',
}

const style2 = {
    fontWeight: "normal",
    marginLeft: "10px",
    textDecoration: 'none',
    width: "100%"
}

const headerStyle = {
    backgroundColor: "lightblue",
    fontWeight: "bold",
    padding: '10px',
}
const headerStyle2 = {
    backgroundColor: "lightblue",
    fontWeight: "bold",
    textAlign: "left",

    width: "33%",
    marginTop: "15px",
}
const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        data,
        close,
        open,
        title,
        toggle,
    } = props;



    const source =
    {
        datafields: [
            { name: 'authority', type: 'string' },
            { name: 'taxtype', type: 'string' },
            { name: 'amount', type: 'number' },
            
        ],
        datatype: 'array',
        localdata: Data    //data && data.details
    };
    this.state = {
        columns: [
            { text: 'Authority', datafield: 'firstname', width: 120, cellsrenderer: cellsRenderer },
            { text: 'Tax Type', datafield: 'lastname', width: 120 },
            { text: 'Amount', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
            { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
        ],
        source: new jqx.dataAdapter(source)
    }
    
    console.log(props.data)

    const href = 'http://localhost:6060'

   
  const cellsRenderer = (row, columnfield, value, defaulthtml, columnproperties) => {
      console.log(value)

  }

    const displayLineItems = props.data && props.data.details.map(item => {
        return (
            <tr>
                <td> {item.authority}</td>
                <td> {item.taxType}</td>
                <td style={{ textAlign: 'right' }}>
                    <a href={href}>  ${item.amount.toFixed(2)}</a>
                </td>
            </tr>
        )
    })
    return (
        
        <div>
            <Modal isOpen={open} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} style={headerStyle}> {title}
                </ModalHeader>
                <ModalBody>
                    <table>
                        <tr>
                            <td style={style}> Due Date: </td>
                              <td style={style2}> {props.data && props.data.dueDate} </td>
                        </tr>
                        <tr>
                            <td style={style}> Company: </td>
                             <td style={style2}> {props.data && props.data.company} </td>
                        </tr>
                        <tr>
                            <td style={style}> Method: </td> 
                             <td style={style2}> { props.data && props.data.method} </td>
                        </tr>
                        <tr>
                            <td style={style}> Payee: </td> 
                             <td style={style2}> {props.data && props.data.payee} </td>
                        </tr>
                        <tr>
                            <td style={style}> Amount: </td> 
                             <td style={style2}> ${props.data && props.data.amount.toFixed(2) | '0.00'} </td>
                        </tr>
                        <br></br>
                        <tr style={headerStyle2}>
                            <th style={headerStyle2}> Authority </th>
                            <th style={headerStyle2}> Tax Type </th>
                            <th style={headerStyle2}> Amount </th>
                        </tr>

                        {props.data &&  displayLineItems}
                        <tr>
                            <td></td>
                            <td style={{textAlign: 'right', fontWeight: 'bold'}}> Total:</td>
                            <td style={{textAlign: 'right', fontWeight: 'bold'}}> ${props.data && props.data.amount.toFixed(2)}</td>
                        </tr>

                    </table>
                    <JqxGrid  width={getWidth('grid')} source={this.state.source} columns={this.state.columns} columnsresize={true} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={close()}>Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;