//*********************************************** */
//  exesice 1
import { readFile, writeFile } from "node:fs/promises";


export async function exes1() {
    
    try {
        const data=await readFile("./twentyexesices/input-1.txt");
        console.log(data);
        
    }
    catch (err) {
        console.log(err.message)
    }
    
}




//*********************************************** */
//  exesice 2
export async function exes2() {
    
    try {
        const data= "ng Node.js is fun!";
        await writeFile("./twentyexesices/output-2.txt", JSON.stringify(data));
       
        
        
    }
    catch(err) {
        
        console.log(err);
        
    }
}


//*********************************************** */
//  exesice 3

export async function exes3() {

    try{

        const currentTimeStemp= new Date().getTime();
        await writeFile("./twentyexesices/log-3.txt",JSON.stringify(currentTimeStemp));
    }
    catch(err) {
        console.log(err)

    }
    }





