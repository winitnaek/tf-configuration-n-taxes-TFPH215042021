export default {
	pgdef: {
		pgid: "customTaxPaymentOverrides",
		pgtitle: "Custom Tax Payment Overrides",
		pgsubtitle:"",
		flowtype: "flowtype1",
		hasAddNew: true,
		addNewLabel: "Click here to add new Custom Payment. Or click on existing Custom Payment to edit.",
		actiondel: false,
		helpAvailable:true,
		helpLblTxt:"Click here for more info!",
		helpLink:"/customTaxPaymentOverrides",
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
				  text: "Custom Tax Code",
				  datafield: "customTaxCode",
				  cellsalign: "center",
                  align: "center",
                  width: "40%",
				  sortable: true,
				  rendererInput: [
					{
					  customTaxCode: "test",
					  customTaxName: "PAYME",
					  
					}
				  ],
				  rendererStaticInput: [{ name: "", value: "" }]
				},
				
			  {
				  text: "Custom Tax Name",
                  datafield: "customTaxName",
                  width: "40%",
				  cellsalign: "center",
				  align: "center"
				},
				{
				  text: "Edit",
				  datafield: "edit",
                  align: "center",
                  width: "10%",
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
            width: "10%",
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
		  {name: "customTaxCode",type: "string"},
		  {name: "customTaxName",type: "string"},
		 
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