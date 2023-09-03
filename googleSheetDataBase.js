class gsheetsDataBase{

    constructor(gsheeturl,worksheetname){
        this.gsheeturl = gsheeturl
        this.worksheetname = worksheetname
    }

    getData() {
        return fetch(this.gsheeturl+"?action=getdata"+"&wkname="+this.worksheetname)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro na solicitação: ' + response.status);
            }
            return response.json(); // Retorna o JSON da resposta
          });
      }

    appendData(data){
        fetch(this.gsheeturl+"?action=append&data="+data.join(",") + "&wkname="+this.worksheetname)
    }

    deleteDataRow(row){
        fetch(this.gsheeturl+"?action=delete&data="+String(row)+"]&wkname="+this.worksheetname)
    }
}

export default gsheetsDataBase

