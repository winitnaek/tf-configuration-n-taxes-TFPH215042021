
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import styles from "./modal.css";
import JqxGrid from '../deps/jqwidgets-react/react_jqxgrid';
import mockData from './mockJson.json'
import { getPayeeDetails } from '../../base/config/actions/payeeActions';
import { connect } from 'react-redux';


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

let source = {}


class JqxGridModal extends React.PureComponent {
    constructor(props) {
        super(props);
        let source = {
            datafields: [
                { name: 'authority', type: 'string' },
                { name: 'taxtype', type: 'string' },
                { name: 'amount', type: 'number' }
            ],
            aysnc: false,
            datatype: 'json',
            localdata: mockData
        };
        this.state = {
            columns: [
                { text: 'Authority', datafield: 'authority' },
                { text: 'Tax Type', datafield: 'taxtype' },
                { text: 'Amount', datafield: 'amount', cellsformat: 'c2', cellsalign: 'right' }
            ],
            source: new window.jqx.dataAdapter(source),
            details: [],
        }

        this.setPropDataToState = (data) => {
            const details = this.props.payeeData[0].details;
            console.log(details)
            this.setState({
                details,
            })
        }
    }


    componentDidMount() {
        setTimeout(
            console.log(this.props.payeeData)
            , 1000);
        let source = {
            datafields: [
                { name: 'authority', type: 'string' },
                { name: 'taxtype', type: 'string' },
                { name: 'amount', type: 'number' }
            ],
            setting: {
                aysnc: false,
            },
            datatype: 'json',
            localdata: this.props.payeeData.details
        };
        this.setState({
            data: this.props.data,
        })
        if (this.props.payeeData) {
            console.log(this.props)
            console.log(this.state)
        }
    }

    render() {

        const {
            buttonLabel,
            className,
            data,
            close,
            payeeData,
            open,
            title,
            toggle,
        } = this.props;



        if (this.props.data && this.props.data.details) {
            this.setPropDataToState(this.props.data)
        }


        return (
            <div>
                <Modal isOpen={open} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} style={headerStyle}> {title}
                    </ModalHeader>
                    <ModalBody>
                        <table>
                            <tr>
                                <td style={style}> Due Date: </td>
                                <td style={style2}> {this.props.data && this.props.data.dueDate} </td>
                            </tr>
                            <tr>
                                <td style={style}> Company: </td>
                                <td style={style2}> {this.props.data && this.props.data.company} </td>
                            </tr>
                            <tr>
                                <td style={style}> Method: </td>
                                <td style={style2}> {this.props.data && this.props.data.method} </td>
                            </tr>
                            <tr>
                                <td style={style}> Payee: </td>
                                <td style={style2}> {this.props.data && this.props.data.payee} </td>
                            </tr>
                            <tr>
                                <td style={style}> Amount: </td>
                                <td style={style2}> ${this.props.data && this.props.data.amount.toFixed(2) | '0.00'} </td>
                            </tr>
                            <br></br>

                        </table>
                        <JqxGrid
                            // @ts-ignore
                            width="100%" source={this.state && this.state.source} columns={this.state && this.state.columns}
                            pageable={true} autoheight={true}
                            localization={this.state && this.state.localization} />
                        <ModalFooter>
                            <Button color="primary" onClick={close()}>Close</Button>
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        payeeData: state.payeeDetails
    };
}

export default connect(
    mapStateToProps,
    null
)(jqxGridModal);