# Google Sheets API

## How to Use It 🧐?
⭐ **First, create an Apps Script project and copy this [code](https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/appScriptCode.gs) to your editor.**

<div align="center">
  <img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/5316ac4a-228e-43b0-9830-97218de2299d" alt="Create Apps Script Folder" width="400"><br>
  <font color="grey">Create an Apps Script Project (don't forget to install the Apps Script extension in your Google Drive).</font>
</div>
<br><br>
<div align="center">
  <img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/773df10e-d9af-4437-bf47-c02388f0b9f6" alt="Copy Code into Editor" width="400"><br>
  <font color="grey">Copy the code into the editor.</font>
</div>
<br><br>
<div align="center">
  <img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/a0ef21ad-7064-42bd-941d-ee17a141c27b" alt="Copy Google Sheets URL" width="400"><br>
  <font color="grey">Copy and paste your Google Sheets URL into the Apps Script editor.</font>
</div>
<br><br>
<div align="center">
  <img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/ab9b7549-af45-48db-94a5-02428dd49204" alt="Change Project Title" width="400"><br>
  <font color="grey">Change the project title .</font>
</div>
<br><br>

**⭐ Then, deploy your app as a web app.**

<div align="center">
  <img src="https://github.com/VictorCalebeIFG/GoogleSheetsApi/assets/84258178/994ff7fb-4c55-4d17-9efc-51b359f9ede0" alt="Copy Google Sheets URL" width="400"><br>
  <font color="grey">(don't forget to saher with anyone)</font>
</div>

**⭐ Next, get your web app URL.**

**⭐ Now, to use the API, just make a URL request:**

----
   👉 Append Row:
   > _(Add "a" to **column 1**, "b" to **column 2**, and "c" to **column 3**.)_

   `WebAppURL?action=append&data=a,b,c&wkname=worksheetname`

   👉 Delete Row:
   > _(Delete **row 1**.)_

   `WebAppURL?action=delete&data=1&wkname=worksheetname`

   👉 Delete All Data:
   > _(Delete **all** rows.)_

   `WebAppURL?action=deleteall&wkname=worksheetname`

   👉 Get Data:
   > _(Get all data as a JSON file.)_

   `WebAppURL?action=getdata&wkname=worksheetname`

## 🤝 Examples:
- JavaScript Module: [Link](https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/googleSheetDataBase.js)
- How to Use My JavaScript Module: [Link](https://github.com/VictorCalebeIFG/GoogleSheetsApi/blob/main/databaseExample.js)
