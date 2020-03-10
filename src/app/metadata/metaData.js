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
		"hasRecentUsage":true
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
		"hasRecentUsage":true
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
                "datafield": "stName",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Record Count",
                "datafield": "count",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Bulletin",
                "datafield": "bulltn",
                "cellsalign": "center",
                "align": "center"
              }
		],
		"dataFields":[
		  {"name": "state","type": "string"},
		  {"name": "stName","type": "string"},
		  {"name": "count","type": "string"},
          {"name": "bulltn","type": "string"}	
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
                "datafield": "formula",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Start Date",
                "datafield": "startDateDspl",
                "cellsalign": "center",
				"align": "center",
				"width": "10%"
              },
            {
                "text": "End Date",
                "datafield": "rescindDateDspl",
                "cellsalign": "center",
				"align": "center",
				"width": "10%"
              },
            {
                "text": "Account No.",
                "datafield": "acctNumber",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Exp. Rate",
                "datafield": "exprateDspl",
                "cellsalign": "center",
                "align": "center"
              },
            {
                "text": "Max. Wage",
                "datafield": "maxwageDspl",
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
		  {"name": "formula","type": "string"},
		  {"name": "startDateDspl","type": "string"},
		  {"name": "rescindDateDspl","type": "string"},
		  {"name": "acctNumber","type": "string"},
		  {"name": "exprateDspl","type": "string"},
		  {"name": "maxwageDspl","type": "string"},
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

export const customFormulas = {
	"pgdef": {
		"pgid": "customFormulas",
		"pgtitle": "Custom Formulas",
		"pgsubtitle":"",
		"flowtype": "flowtype2",
		"hasAddNew": true,
		"addNewLabel": "Click here to add new Custom Tax Code.",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/customFormulas",
		"parentConfig":"",
		"childConfig": {
			"childpgid": "customFormulasChild",
		},
	},
	 "griddef": customTaxCodes.griddef,
	
}

export const customFormulasChild = {
	"pgdef": {
		"pgid": "customFormulasChild",
		"pgtitle": "Custom Formulas",
		"pgsubtitle":"",
		"flowtype": "flowtype2",
		"hasAddNew": true,
		"addNewLabel": "Click here to add new Custom Tax Code.",
		"actiondel": false,
		"helpAvailable":true,
		"helpLblTxt":"Click here for more info!",
		"helpLink":"/customTaxCodes",
		"parentConfig":"customFormulas"
	},
	"griddef": {
		"gridtype": "type1",
		"filtergrid": true,
		"datatype": "json",
		"contenttype": "application/json",
		"noResultsFoundTxt": "No Data Found",
        "recordEdit": true,
        "recordDelete": true,
		"columns": [
			{
				"text": "Custom Tax Code Name",
				"datafield": "name",
				"cellsalign": "center",
				"align": "center",
				"sortable": true, 
				"width": "15%"
			},
			{
				"text": "Method",
                "datafield": "method",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			  },     
			{
				"text": "Tax Rate",
                "datafield": "taxRate",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			  },     
			{
				"text": "Rounding",
                "datafield": "rounding",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			  },     
			{
				"text": "Min Wage",
                "datafield": "minWage",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			
			  },     
			{
				"text": "Max Wage",
                "datafield": "maxWage",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			
			  },     
			{
				"text": "Max Tax",
                "datafield": "maxTax",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
				
			  },     
			{
				"text": "Flat Amount",
                "datafield": "flatAmount",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			
			  },     
			{
				"text": "Start Date",
                "datafield": "startDate",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
				
				
			  },     
			{
				"text": "End Date",
                "datafield": "endDate",
                "cellsalign": "center",
				"align": "center",
				"width": "8.8889%"
			  }     
		],
		"dataFields":[
		  {"name": "name","type": "string"},
		  {"name": "method","type": "string"},
		  {"name": "taxRate", "type": "string"},
		  {"name": "rounding", "type": "string"},
		  {"name": "minWage", "type": "string"},
		  {"name": "maxWage", "type": "string"},
		  {"name": "maxTax", "type": "string"},
		  {"name": "flatAmount", "type": "string"},
		  {"name": "startDate", "type": "string"},
		  {"name": "endDate", "type": "string"},
		]
	},
	"cruddef": {
		"title":"Formulas",
		"subtitle":"Note: Required fields are marked with an asterisk (*)",
		"hasSave":true,
		"hasDelete":false,
		"hasSaveAs":false,
		"hasDelete":false,
		"hasViewPDF":false,
		"hasExit":true,
		"hasRecentUsage":"false"
	}
}
