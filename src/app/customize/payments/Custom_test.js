import React from 'react';
import { Alert, Tooltip, Button } from 'reactstrap';

import JqxGrid from '../../../deps/jqwidgets-react/react_jqxgrid'



class EEW2Records extends React.Component {
    constructor(props) {
        super(props);
       
     
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'tranName', type: 'string' },
                    { name: 'tranFein', type: 'string' },
                    { name: 'compName', type: 'string' },
                    { name: 'compFein', type: 'string' },
                    { name: 'empId', type: 'string' },
                    { name: 'empFname', type: 'string' },
                    { name: 'empLname', type: 'string' },
                    { name: 'reportId', type: 'string' },
                    { name: 'isPublished', type: 'boolean' },
                    { name: 'isPrinted', type: 'boolean' },
                    { name: 'requestno', type: 'int' },
                    { name: 'generatedDateTime', type: 'date' },
                    { name: 'empkey', type: 'string' },
                    { name: 'last4digits', type: 'string' },
                    { name: 'year', type: 'int' },
                    { name: 'correction', type: 'boolean' },
                    { name: 'traceid', type: 'int' }
                ],
                aysnc: false,
  datatype: "json",
  localdata: ""
                }
            
            
        this.state = {
            source: source,
            
        };
    }
  
    render() {
        var source = this.state.source;
        let dataAdapter = new $.jqx.dataAdapter(source)
        let columns =
            [
                { text: 'Company Name', datafield: 'compName',  cellsalign: 'center',width: 'auto', align: 'center', cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<a href="#" title="${'View '+rowdata.compName+' artifacts'}"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onloadCompData('${ndex}')}>${rowdata.compName}</button></div></a>`;
                   },filtertype: 'input'},
                { text: 'Run Date/Time', datafield: 'generatedDateTime', width: 'auto',  cellsalign: 'center',align: 'center',  cellsformat: 'MM-dd-yyyy hh:mm:00 tt', filtertype: 'range' },
                { text: 'First Name', cellclassname:"gridcelltxt", datafield: 'empFname', cellsalign: 'center', align: 'center',width: 'auto',filtertype: 'input' },
                   { text: 'Last Name', datafield: 'empLname', cellsalign: 'center', align: 'center',width: 'auto',cellsrenderer: function (ndex, datafield, value, defaultvalue, column, rowdata) {
                    return `<a href="#" title="View W2 PDF"><div style="text-align:center;" class="align-self-center align-middle"><button type="button" style="padding-top:0.1rem;" class="btn btn-link align-self-center" onClick={onloadPdfData('${ndex}')}>${rowdata.empLname}</button></div></a>`;
                   },filtertype: 'input'},
                { text: '  SSN  ', datafield: 'last4digits', cellsalign: 'center', align: 'center', width: 'auto', filterable: false, sortable: false },
                { text: 'Published', datafield: 'isPublished',cellsalign: 'center', align: 'center',   width: 'auto',filtertype: 'bool' },
                { text: 'Printed', datafield: 'isPrinted', cellsalign: 'center', align: 'center', width: 'auto', filtertype: 'bool' },
                { text: 'Corrected', datafield: 'correction', cellsalign: 'center', align: 'center',  width: 'auto', filtertype: 'bool' }
            ];
        return (
            <div>
                <h3 class="text-bsi">Manage W2 Records (<small> test</small>)
                    &nbsp;<a href="#" onClick="" id="filterDataId"><i class="fas fa-filter fa-xs" title=""></i></a>
                   
                </h3>
                
                <JqxGrid ref='eew2Grid'
                    width={'100%'} source={dataAdapter} pageable={true}
                    pagesizeoptions={['10', '25', '50']} 
                    sortable={true} altrows={false} enabletooltips={false}
                    autoheight={true} editable={false} columns={columns}
                    filterable={true} showfilterrow={true} virtualmode={true}
                    rendergridrows={function(obj){return obj.data;}}
                    selectionmode={'multiplerows'} cache={false}/>
                
            
               
                                                            
            </div>
        );
    }
}
export default EEW2Records;