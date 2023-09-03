# GoogleSheetsApi


### How to use it🧐 ?
- First, create a appScript project and copy this [code](https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/appScriptCode.gs) to your editor
- Then, deploy your app as a web app.
- Next, get your web app url.
- Now, to use the api just use as a url request:

**Append Row:**
> _(add a to **colmun 1**, b to **column 2** and c to **column 3**)_

`WebAppURL?action=append&data=a,b,c&wkname=worksheetname` 


----

**Delete Row:**
> _(delete **row** 1)_

`WebAppURL?action=delete&data=1&wkname=worksheetname` 

---

**Get Data:**
> _(get all data as jsonFile)_

`WebAppURL?action=getdata&wkname=worksheetname` 


### Exemples:
- javaScript Module: https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/googleSheetDataBase.js
- How to use my javaScript module: https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/databaseExemple.js
