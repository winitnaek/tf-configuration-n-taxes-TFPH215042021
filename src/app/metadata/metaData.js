import {editCellsRenderer, deleteCellsRenderer} from './cellsrenderer'


export const allBSIPlans =  {
	"pgdef": {
		"pgid": "allBSIPlans",
		"pgtitle": "All BSI Plans",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": true,
		"addNewLabel": "",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/allBSIPlans",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "ro",
		"filtergrid": false,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
        "recordEdit": false,
        "recordDelete": false,
		"columns": [
			{
				"text": "Type",
				"datafield": "type",
				"cellsalign": "center",
				"width": "30%",
				"align": "center",
				"sortable": true,
				"rendererInput":"",
				"rendererStaticInput":""
            },
            {
                "text": "Description",
                "datafield": "description",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Code",
                "datafield": "code",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Plan Class",
                "datafield": "planClass",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Start Date",
                "datafield": "startDate",
                "cellsalign": "center",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "type","type": "string"},
		  {"name": "description","type": "string"},
		  {"name": "code","type": "string"},
		  {"name": "planClass","type": "string"},
		  {"name": "startDate","type": "string"}
		]
	},
	"cruddef": ""
};
export const customPayments = {
	"pgdef": {
		"pgid": "customPayments",
		"pgtitle": "Custom Payments",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": true,
		"addNewLabel": "Click here to add new Custom Payment.",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/customPayments",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "type1",
		"filtergrid": false,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
		"recordEdit": true,
        "recordDelete": false,
    	"columns": [
			{
				"text": "Custom Payment Code",
				"datafield": "customPaymentCode",
				"cellsalign": "center",
				"width": "30%",
				"align": "center",
				"sortable": true,
				"rendererInput": [
					{
						"payName": "test",
						"payCode": "PAYME",
						"editMode": "2",
						"payType": "E",
						"taxability": "Taxable",
						"eeMax": "0.00",
						"erMax": "-",
						"aggStatus": "N/A"
					}
				],
				"rendererStaticInput": [{"name": "","value": ""}]
			},
			{
                "text": "Custom Payment Name",
                "datafield": "customPaymentName",
                "cellsalign": "center",
                "align": "center"
			  },
			  {
                "text": "Payment Type",
                "datafield": "paymentType",
                "cellsalign": "center",
                "align": "center"
			  },
			  {
                "text": "Taxability",
                "datafield": "taxability",
                "cellsalign": "center",
                "align": "center"
			  },
			  {
                "text": "EE Max",
                "datafield": "eeMax",
                "cellsalign": "right",
				"align": "center",
				"width": "10%",
			  },
			  {
                "text": "AggStatus",
                "datafield": "aggStatus",
                "cellsalign": "center",
                "align": "center"
			  },
			  {
				"text": "Edit",
				"datafield": "edit",
				"align": "center",
				"width": "10%",
				"cellsrenderer": editCellsRenderer
			  },
			  {
				"text": "Delete",
				"datafield": "delete",
				"align": "center",
				"width": "10%",
				"cellsrenderer": deleteCellsRenderer
			  },  
		],
		"dataFields":[
		  {"name": "customPaymentCode","type": "string"},
		  {"name": "customPaymentName","type": "string"},
		  {"name": "paymentType","type": "string"},
		  {"name": "taxability","type": "string"},
		  {"name": "eeMax","type": "string"},
		  {"name": "aggStatus","type": "string"},
		  {"name": "edit", "type": "string"},
		  {"name": "delete", "type": "string"}
		]
	},
	"cruddef": {
		"title":"Custom Payments",
		"sbutitle":"Note: Required fields are marked with an asterisk (*)",
		"hasSave":true,
		"hasDelete":false,
		"hasSaveAs":false,
		"hasDelete":false,
		"hasViewPDF":false,
		"hasExit":true,
		"hasRecentUsage":"false"
	}
};
export const customTaxCodes = {
	"pgdef": {
		"pgid": "customTaxCodes",
		"pgtitle": "Custom Tax Codes",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": true,
		"addNewLabel": "Click here to add new Custom Tax Code.",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/customTaxCodes",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "type1",
		"filtergrid": false,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
        "recordEdit": true,
        "recordDelete": true,
		"columns": [
			{
				"text": "Custom Tax Code",
				"datafield": "customTaxCode",
				"cellsalign": "center",
				"width": "30%",
				"align": "center",
				"sortable": true,
				"rendererInput": [
					{
						"customTaxCode": "test",
						"customPaymentName": "PAYME",
					}
				],
				"rendererStaticInput": [{"name": "","value": ""}]
			},
			{
                "text": "Custom Tax Name",
                "datafield": "customTaxName",
                "cellsalign": "center",
                "align": "center"
			  },
			  {
				"text": "Edit",
				"datafield": "edit",
				"align": "center",
				"width": "10%",
				"cellsrenderer": editCellsRenderer
			  },
			  {
				"text": "Delete",
				"datafield": "delete",
				"align": "center",
				"width": "10%",
				"cellsrenderer": deleteCellsRenderer
			  },
			  
             
		],
		"dataFields":[
		  {"name": "customTaxCode","type": "string"},
		  {"name": "customTaxName","type": "string"},
		  {"name": "edit", "type": "string"},
		  {"name": "delete", "type": "string"}
		]
	},
	"cruddef": {
		"title":"Custom Payments",
		"sbutitle":"Note: Required fields are marked with an asterisk (*)",
		"hasSave":true,
		"hasDelete":false,
		"hasSaveAs":false,
		"hasDelete":false,
		"hasViewPDF":false,
		"hasExit":true,
		"hasRecentUsage":"false"
	}
};
export const  populateV3States = {
	"pgdef": {
		"pgid": "populateV3States",
		"pgtitle": "Populate V3 States",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": true,
		"addNewLabel": "",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/populateV3States",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "ro",
		"filtergrid": false,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
		"recordEdit": false,
        "recordDelete": false,
    	"columns": [
			{
				"text": "State",
				"datafield": "state",
				"cellsalign": "center",
				"width": "30%",
				"align": "center",
				"sortable": true,
				"rendererInput":"",
				"rendererStaticInput":""
            },
            {
                "text": "State Name",
                "datafield": "stateName",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Record Count",
                "datafield": "recordCount",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Bulletin",
                "datafield": "bulletin",
                "cellsalign": "center",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "state","type": "string"},
		  {"name": "stateName","type": "string"},
		  {"name": "recordCount","type": "string"},
          {"name": "bulletin","type": "string"}	
        ]
	},
	"cruddef": ""
}

