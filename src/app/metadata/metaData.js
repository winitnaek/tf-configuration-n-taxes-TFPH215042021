import {editCellsRenderer, deleteCellsRenderer} from './cellsrenderer'


export const allBSIPlans =  {
	"pgdef": {
		"pgid": "allBSIPlans",
		"pgtitle": "All BSI Plans",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": false,
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
				"datafield": "payTypeLtr",
				"cellsalign": "center",
				"width": "30%",
				"align": "center",
				"sortable": true,
				"rendererInput":"",
				"rendererStaticInput":""
            },
            {
                "text": "Description",
                "datafield": "usercodeDesc",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Code",
                "datafield": "usercode",
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
                "datafield": "effective",
                "cellsalign": "center",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "payment","type": "string"},
		  {"name": "effective","type": "string"},
		  {"name": "effectiveDbFmt","type": "string"},
		  {"name": "payType","type": "string"},
		  {"name": "payTypeLtr","type": "string"},
		  {"name": "taxability","type": "string"},
		  {"name": "rescind","type": "string"},
		  {"name": "paymentName","type": "string"},
		  {"name": "planClass","type": "string"},
		  {"name": "occurrance","type": "string"},
		  {"name": "aggStatus","type": "string"},
		  {"name": "aggRule1","type": "string"},
		  {"name": "aggRule2","type": "string"},
		  {"name": "eeMax","type": "string"},
		  {"name": "erMax","type": "string"},
		  {"name": "usercode","type": "string"},
		  {"name": "usercodeDesc","type": "string"}
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
				"datafield": "userCode",
				"cellsalign": "left",
				"width": "30%",
				"align": "left",
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
                "datafield": "name",
                "cellsalign": "left",
                "align": "left"
			  },
			  {
                "text": "Payment Type",
                "datafield": "payType",
                "cellsalign": "left",
                "align": "left"
			  },
			  {
                "text": "Taxability",
                "datafield": "taxability",
                "cellsalign": "left",
                "align": "left"
			  },
			  {
                "text": "EE Max",
                "datafield": "eemax",
                "cellsalign": "left",
                "align": "left",
				"width": "10%",
			  },
			  {
                "text": "AggStatus",
                "datafield": "aggstatus",
                "cellsalign": "left",
                "align": "left"
			  }
		],
		"dataFields":[
		  {"name": "userCode","type": "string"},
		  {"name": "name","type": "string"},
		  {"name": "payType","type": "string"},
		  {"name": "taxability","type": "string"},
		  {"name": "eemax","type": "string"},
		  {"name": "aggstatus","type": "string"},
		//   {"name": "edit", "type": "string"}
		]
	},
	"cruddef": {
		"title":"Custom Payments",
		"subtitle":"Note: Required fields are marked with an asterisk (*)",
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
				"datafield": "taxCode",
				"cellsalign": "center",
				"width": "47.5%",
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
				"width": "47.5%",
                "datafield": "name",
                "cellsalign": "center",
                "align": "center"
			  }     
		],
		"dataFields":[
		  {"name": "taxCode","type": "string"},
		  {"name": "name","type": "string"},
		  {"name": "bsiAuth", "type": "string"},
		  {"name": "codeType", "type": "string"},
		  {"name": "locReturn", "type": "string"}
		]
	},
	"cruddef": {
		"title":"Custom Payments",
		"subtitle":"Note: Required fields are marked with an asterisk (*)",
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
		"hasAddNew": false,
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

export const  experienceRates = {
	"pgdef": {
		"pgid": "experienceRates",
		"pgtitle": "Experience Rates",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": false,
		"addNewLabel": "",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/experienceRates",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "ro",
		"filtergrid": true,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
		"recordEdit": false,
        "recordDelete": false,
    	"columns": [
			{
				"text": "Company Code",
				"datafield": "companyCode",
				"cellsalign": "center",
				"align": "center",
				"sortable": true,
				"rendererInput":"",
				"rendererStaticInput":""
            },
            {
                "text": "Tax Code",
                "datafield": "taxCode",
                "cellsalign": "center",
				"align": "center",
				"width": "10%"
              },
            {
                "text": "Tax Type",
                "datafield": "taxType",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Formula No.",
                "datafield": "formulaNumber",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Start Date",
                "datafield": "startDate",
                "cellsalign": "center",
				"align": "center",
				"width": "10%"
              },
            {
                "text": "End Date",
                "datafield": "endDate",
                "cellsalign": "center",
				"align": "center",
				"width": "10%"
              },
            {
                "text": "Account No.",
                "datafield": "accountNumber",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Exp. Rate",
                "datafield": "experienceRate",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Max. Wage",
                "datafield": "maximumWage",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "BSI Wage",
                "datafield": "bsiWage",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Risk Class",
                "datafield": "riskClass",
                "cellsalign": "center",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "companyCode","type": "string"},
		  {"name": "taxCode","type": "string"},
		  {"name": "taxType","type": "string"},
		  {"name": "formulaNumber","type": "string"},
		  {"name": "startDate","type": "string"},
		  {"name": "endDate","type": "string"},
		  {"name": "accountNumber","type": "string"},
		  {"name": "experienceRate","type": "string"},
		  {"name": "maximumWage","type": "string"},
		  {"name": "bsiWage","type": "string"},
		  {"name": "riskClass","type": "string"},
        ]
	},
	"cruddef": ""
}
export const  supplementalMethods = {
	"pgdef": {
		"pgid": "supplementalMethods",
		"pgtitle": "Supplemental Methods",
		"pgsubtitle":"",
		"flowtype": "flowtype1",
		"hasAddNew": false,
		"addNewLabel": "",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/supplementalMethods",
		"parentConfig":""
	},
	"griddef": {
		"gridtype": "ro",
		"filtergrid": true,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
		"recordEdit": false,
        "recordDelete": false,
    	"columns": [
			{
				"text": "Attribute",
				"datafield": "attribute",
				"cellsalign": "left",
				"align": "center",
				"sortable": true,
				"rendererInput":"",
				"rendererStaticInput":""
            },
            {
                "text": "Value",
                "datafield": "value",
                "cellsalign": "right",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "attribute","type": "string"},
		  {"name": "value","type": "string"}
        ]
	},
	"cruddef": ""
}


