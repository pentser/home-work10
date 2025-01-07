
import fs from "node:fs/promises";
import Excel from "exceljs";




//********************************************** */
                     //   tar 1

async function countWordsInFile() {
try {
    const data= await fs.readFile("./article.txt","utf8");
    const arr=data.split(" ");
    console.log(arr.length);

}
catch(err) {
    console.log(err);

  }

}


countWordsInFile();


//********************************************** */
                     //   tar 2
async function calculateEvgFromExcel() {
try {
  const wb = new Excel.Workbook();
  const fileName = 'students.xlsx';
  await  wb.xlsx.readFile(fileName);
  const ws =  await wb.getWorksheet('FullStack');
          
  let rows=ws.actualRowCount;
  let sum=0;
   for(let i=1; i<=rows;i++) {

     sum +=  ws.getRow(i).getCell(2).value;
   }

 console.log("avg:",sum/rows);

}

catch(err) {
    console.log(err);
}

}

calculateEvgFromExcel();

 
               
                     








