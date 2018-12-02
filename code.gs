var decryptionUrl= "#url_to_request";

var SPREADSHEET_ID = '#your_spreadsheet_id';
var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
var worksheet = spreadsheet.getActiveSheet();
var ui = SpreadsheetApp.getUi();

var lastRow = worksheet.getDataRange().getLastRow();

var rows = worksheet.getRange(1, 1, lastRow)
 .getValues();

function onOpen() {
  ui.createMenu('Checker')
  .addItem('Decryt MSISDN', 'decryptMsisdn')
  .addToUi();
};


function run() {
  var rangeValues = rows;
  for ( i = 1; i < rangeValues.length; i++){
      
    var decrypted = decryptMsisdn(rangeValues[i])
    if(decrypted.status){
      worksheet.getRange(i+1, 13).setValue(decrypted.msg);
    }else{
      worksheet.getRange(i+1, 13).setValue(decrypted.msg);
    }
      
  };
 
};

function decryptMsisdn(msisdn) {
  
  var url= decryptionUrl+ '?encrypted='+msisdn;

  var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  var json = response.getContentText();
  var data = JSON.parse(json);

  return data  
}
