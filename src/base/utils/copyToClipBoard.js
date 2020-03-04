export function copyToClipboard() {
    let _id = document.querySelector("div[role='grid']").id;
    let value = [];
    
    let rows = $('#' + _id).jqxGrid('getrows');
    let cols = $('#' + _id).jqxGrid('columns');
    $("#" + _id).jqxGrid("selectallrows");

    var colData = "";
    for (var x in cols.records) {
        if(cols.records[x].datafield != "edit" && cols.records[x].datafield != "delete")
         colData += cols.records[x].text + '\t';
    }
    value.push(colData + '\n');
    for (var x in rows) {
        var row = Object.values(rows[x]);
        var rowData = "";

        for( var i=0; i < row.length - 4; i++) {
            rowData += row[i] + '\t';
        }
        value.push(rowData + '\n');
    }
    var dummyInput = document.createElement('textarea');
    $('body').append(dummyInput);
    dummyInput.textContent = value.join('');
    dummyInput.select();
    document.execCommand('copy');
    $(dummyInput).remove();

   

    return value.length;
}
