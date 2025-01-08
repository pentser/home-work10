//*********************************************** */
//  exesice 1
import { readFile, writeFile } from "node:fs";
import fs from "node:fs/promises";

async function exes1() {
    
    try {
        const data=await readFile("./input-1.txt","utf8");
        console.log(JSON.parse(data))
        
    }
    catch (err) {
        console.log(err.message)
    }
    
}
exes1();

//*********************************************** */
//  exesice 2
async function exes2() {
    
    try {
        const data= "ng Node.js is fun!";
        await writeFile("./output-2.txt", JSON.stringify(data));
        
        
        
    }
    catch(err) {
        
        console.log(err);
        
    }
    
}
exes2();
//*********************************************** */
//  exesice 3

async function exes3() {

    const currentTimeStemp= new Date().now();
    await writeFile("./log-3.txt",JSON.stringify(currentTimeStemp));
}

exes3();
