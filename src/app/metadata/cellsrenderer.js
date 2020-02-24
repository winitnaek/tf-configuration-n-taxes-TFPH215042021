import ReusableGrid from '../components/ReusableGrid'

 export function editCellsRenderer(
	ndex,
	datafield,
	value,
	defaultvalue,
	column,
	rowdata
  ) {
	  
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
	  console.log(ReusableGrid.openHelp)
	return ` <div id='delete-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log(${ndex})}> <i class="fas fa-calendar-minus  fa-1x" color="primary"/> </div>`;
  }