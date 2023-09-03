const databaseUrl = "your google sheet url"

const worksheet = "your worksheet name"

const tableSheet = SpreadsheetApp.openByUrl(databaseUrl)
const folderData = tableSheet.getSheetByName(worksheet)


function doGet(e){
  const action = String(e.parameter['action']).split(",")
  
  if(action == "append"){
    addRow(e)
  }
  else if(action == "delete"){
    deleteRow(e)
  }
  else if(action == "getdata"){
    return getData()
  }

  return ContentService.createTextOutput("GsheetApi")
}

function addRow(e){
  const URLdata = String(e.parameter['data']).split(",")
  folderData.appendRow(URLdata)
}

function deleteRow(e){
  const URLdata = String(e.parameter['data']).split(",")
  folderData.deleteRow(parseInt(URLdata))
}

function getData(){
  const dataRange = folderData.getDataRange(); // Obtém a faixa de dados da planilha
  const data = dataRange.getValues();
  const jsonData =  JSON.stringify(data)
  return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
}
