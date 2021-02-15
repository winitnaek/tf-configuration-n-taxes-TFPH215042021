import React from 'react'; 
let row = null;

export function deductionBenefitPlanCodeRenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	//D (D002) - BSID002
	return rowdata.paytype +' ('+rowdata.paycode+')'+' - '+rowdata.remncd;
}
export function gwPriorityRenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	//0 - Time of Writ
	return rowdata.gwPriority+' - '+rowdata.gwPriorityString;
}
export function authCodeauthNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.authorityCode && rowdata.authorityName){
		return rowdata.authorityCode +'-' + rowdata.authorityName;
	}else if(rowdata.authTaxCode && rowdata.authName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.authTaxCode + '-' + rowdata.authName}</div>`;
	}else if(rowdata.taxCode && rowdata.authName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.taxCode + '-' + rowdata.authName}</div>`;
	}
}
export function planIdNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.authTaxCode && rowdata.authName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.planId + '-' + rowdata.planName}</div>`;
	}
}
export function payTypeNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.payType==='E'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Earning'}</div>`;
	}else if(rowdata.payType==='C'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Credit'}</div>`;
	}else if(rowdata.payType==='P'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Benefit Plan'}</div>`;
	}
}
export function aggStatusNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.aggStatus==='Y' && rowdata.payType==='C'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Aggregate to Highest Maximum'}</div>`;
	}else if(rowdata.aggStatus==='L' && rowdata.payType==='C'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Credit'}</div>`;
	}else if(rowdata.aggStatus==='N' && rowdata.payType==='C'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Do Not Aggregate Plans'}</div>`;
	}else if(rowdata.aggStatus==='X' && rowdata.payType==='C'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'Use Authority Default Aggregation Rule'}</div>`;
	}else{
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${'N/A'}</div>`;
	}
}
export function formulaNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.formula +'-' + rowdata.formulaTitle}</div>`
}
export function baiAuthAuthNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.bsiAuth +'-' + rowdata.authName}</div>`;
}
export function taxTypeCodeNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.taxType && rowdata.taxTypeName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.taxType + '-' + rowdata.taxTypeName}</div>`;
	}else if(rowdata.taxType && rowdata.taxName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.taxType + '-' + rowdata.taxName}</div>`;
	}
}
export function courtesyRenderer(
  ndex,
  datafield,
  value,
  defaultvalue,
  column,
  rowdata
) {
  if (rowdata.courtesy) {
	return '<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">On</div>';
  } else {
    return "";
  }
}
export function liveworkRenderer(
	ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
  ) {
	if (rowdata.liveWork == '0') {
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">Live</div>`;
	}else if(rowdata.liveWork == '1'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">Work</div>`;
	}else if(rowdata.liveWork == '4'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">Resident on 1/1</div>`;
	}else if(rowdata.liveWork == '5'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">Work on 1/1</div>`;
	}else if(rowdata.liveWork == '7'){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">Remote Employee</div>`;
	}
  }
export function editCellsRenderer(
	ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
  ) {
	  row = ndex
	return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log(${ndex})}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
  }


  export function deleteCellsRenderer(
	ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
  ) {
	row = ndex
	return ` <div id='delete-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log(${ndex})}> <i class="fas fa-calendar-minus  fa-1x" color="primary"/> </div>`;
  }

export const getRowIndex = () => {
	return row;
}
export function addressOverrideStreetNameRenderer(ndex, datafield, value, defaultvalue, column,rowdata) {
	//N 100 PEACHTREE ROAD AVE N
	return rowdata.fpre+' '+rowdata.fname+' '+rowdata.ftype+' '+rowdata.fpost;
}
export function parityNameRenderer(ndex, datafield, value, defaultvalue, column,rowdata) {
	if(rowdata.parity==='B'){
		return 'BOTH'
	}else if(rowdata.parity==='O'){
		return 'ODD'
	}else if(rowdata.parity==='E'){
		return 'EVEN'
	}
}
export function placeCodeNameRenderer(ndex, datafield, value, defaultvalue, column,rowdata) {
	return rowdata.classCode+' - '+rowdata.placeName;
}
export function schoolDistrictNameRenderer(ndex, datafield, value, defaultvalue, column,rowdata) {
	return rowdata.sdCounty+'| '+rowdata.sdName;
}
export function garnishTypeNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.garnishType && rowdata.garnishName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.garnishType + '-' + rowdata.garnishName}</div>`;
	}
}
export function paymentCodeNamerenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.paymentCode && rowdata.paymentName){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.paymentCode + '-' + rowdata.paymentName}</div>`;
	}
}
export function startDateEndDaterenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.startDate && rowdata.endDate){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.startDate + '-' + rowdata.endDate}</div>`;
	}
}
export function minMaxPctrenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.minPercent && rowdata.minPercent >=0 && rowdata.maxPercent && rowdata.maxPercent >=0){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.minPercent + '-' + rowdata.maxPercent}</div>`;
	}
}
export function minMaxAmtrenderer(ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
) {
	if(rowdata.minAmount && rowdata.maxAmount){
		return `<div style="text-align:left;padding-top:5px;padding-left:3px" class="align-self-center align-middle">${rowdata.minAmount + '-' + rowdata.maxAmount}</div>`;
	}
}