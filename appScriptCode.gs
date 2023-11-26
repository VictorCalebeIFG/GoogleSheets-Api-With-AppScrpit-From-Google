const databaseUrl = "https://docs.google.com/spreadsheets/d/1qx5-PQ-o8RpWvha6gEnx2ttn4yt4UBm-5plCqgYjYvQ/edit#gid=0"

const tableSheet = SpreadsheetApp.openByUrl(databaseUrl)
var schemaData = null

function doGet(e){
  const action = String(e.parameter['action']).split(",")
  const wkname = String(e.parameter['wkname']).split(",")

  schemaData = tableSheet.getSheetByName(wkname)
  
  if(action == "append"){
    addRow(e, schemaData)
  }
  else if(action == "delete"){
    deleteRow(e)
  }
  else if(action == "getdata"){
    return getData()
  }
  else if(action == "deleteall"){
    deleteAll(wkname)
  }

  return ContentService.createTextOutput("GsheetApi")
}

function addRow(e, sheet){
  const URLdata = String(e.parameter['data']).split(",")
  sheet.appendRow(URLdata)
}

function deleteRow(e){
  const URLdata = String(e.parameter['data']).split(",")
  schemaData.deleteRow(parseInt(URLdata))
}

function getData(){
  const dataRange = schemaData.getDataRange(); // Obtém a faixa de dados da planilha
  const data = dataRange.getValues();
  const jsonData =  JSON.stringify(data)
  return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
}

function deleteAll(wkname) {
  const tb = tableSheet.getSheetByName(wkname)
  var dados = tb.getDataRange();
  dados.clear();
}
