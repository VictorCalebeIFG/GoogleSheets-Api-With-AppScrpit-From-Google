import gsheetsDataBase from './googleSheetsDataBase.js'

const url = "https://script.google.com/macros/s/AKfycbwgEa8EfcuPaQvyrxcMmI8slFBBdDcmu3D5_wh9BFWMSoaGTupoykVqk7XjT9KszPXxow/exec"
const sheetName = "folderdata"

const dataBase = new gsheetsDataBase(url,sheetName)

dataBase.getData().then(data => {
    //console.log(data);
  })

dataBase.appendData([1,2,3])

database.deleteDataRow(1)
