# GoogleSheetsApi


### How to use it🧐 ?
- First, create a appScript project and copy this [code](https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/appScriptCode.gs) to your editor

Create AppScript Folder:

<img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/5316ac4a-228e-43b0-9830-97218de2299d" width="500">

<br><br>

Copy the code into the editor:

<img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/773df10e-d9af-4437-bf47-c02388f0b9f6" width="500">

<br><br>

Copy and paste your Google sheets url to AppScript editor:

<img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/a0ef21ad-7064-42bd-941d-ee17a141c27b" width="500">


- Then, deploy your app as a web app.


- Next, get your web app url.
- Now, to use the api just use as a url request:

👉 **Append Row:**
> _(add a to **colmun 1**, b to **column 2** and c to **column 3**)_

`WebAppURL?action=append&data=a,b,c&wkname=worksheetname` 


👉 **Delete Row:**
> _(delete **row** 1)_

`WebAppURL?action=delete&data=1&wkname=worksheetname` 


👉 **Delete All Data:**
> _(delete **all** rows)_

`WebAppURL?action=deleteall&wkname=worksheetname`


👉 **Get Data:**
> _(get all data as jsonFile)_

`WebAppURL?action=getdata&wkname=worksheetname` 


### 🤝 Exemples:
- javaScript Module: https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/googleSheetDataBase.js
- How to use my javaScript module: https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/databaseExemple.js
