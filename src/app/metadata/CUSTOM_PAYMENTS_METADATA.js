export default {
	pgdef: {
		pgid: "customPayments",
		pgtitle: "Custom Payments",
		pgsubtitle:"",
		flowtype: "flowtype1",
		hasAddNew: true,
		addNewLabel: "Click here to add new Custom Payment. Or click on existing Custom Payment to edit.",
		actiondel: false,
		helpAvailable:true,
		helpLblTxt:"Click here for more info!",
		helpLink:"/customPayments",
		parentConfig:""
	},
	griddef: {
		gridtype: "type1",
		filtergrid: false,
		datatype: "json",
		contenttype: "application/json",
		noResultsFoundTxt: "No Data Found",
        recordDelete:"false",
    
		columns: [

			
				{
				  text: "Custom Payment Code",
				  datafield: "customPaymentCode",
				  cellsalign: "center",
				  width: "30%",
				  align: "center",
				  sortable: true,
				  rendererInput: [
					{
					  payName: "test",
					  payCode: "PAYME",
					  editMode: "2",
					  payType: "E",
					  taxability: "Taxable",
					  eeMax: "0.00",
					  erMax: "-",
					  aggStatus: "N/A"
					}
				  ],
				  rendererStaticInput: [{ name: "", value: "" }]
				},
				
			  {
			   
		  
		  
				  text: "Custom Payment Name",
				  datafield: "customPaymentName",
				  cellsalign: "center",
				  align: "center"
				},
				{
				  text: "Payment Type",
				  datafield: "paymentType",
				  cellsalign: "center",
				  align: "center"
				},
				{
				  text: "Taxability",
				  datafield: "taxability",
				  cellsalign: "center",
				  align: "center"
				},
				{
				  text: "EE Max",
				  datafield: "eeMax",
				  align: "right",
				  cellsalign: "right"
				},
				{
				  text: "Agg. Status",
				  datafield: "aggStatus",
				  align: "right",
				  cellsalign: "right"
				},
				{
				  text: "Edit",
				  datafield: "edit",
				  align: "center",
				  cellsrenderer: function(
					ndex,
					datafield,
					value,
					defaultvalue,
					column,
					rowdata
				  ) {
					return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
				  },
				},
		  {
			text: "Delete",
			datafield: "delete",
			align: "center",
			cellsrenderer: function(
				ndex,
				datafield,
				value,
				defaultvalue,
				column,
				rowdata
			  ) {
				return ` <div id='del-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-calendar-minus  fa-1x" color="primary"/> </div>`;
			  },
			},
			
			  ],
		dataFields:[
		  {name: "customPaymentCode",type: "string"},
		  {name: "customPaymentName",type: "string"},
		  {name: "paymentType",type: "string"},
		  {name: "taxability",type: "string"},
		  {name: "eeMax",type: "string"},
		  {name: "aggStatus",type: "string"},
		  {name: "edit", type: "string"},
		  {name: "delete", type: "string"}
		]
	},
	cruddef: {
		title:"Custom Payments",
		sbutitle:"Note: Required fields are marked with an asterisk (*)",
		hasSave:true,
		hasDelete:false,
		hasSaveAs:false,
		hasDelete:false,
		hasViewPDF:false,
		hasExit:true,
		hasRecentUsage:"false"
	}
}