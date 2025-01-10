//*********************************************** */
//  exesice 1
import { readFile, writeFile, mkdir,rename ,readdir,watch,stat,open} from "node:fs/promises";
import {createReadStream,existsSync ,unlink} from "node:fs";
import readline from "node:readline/promises"

export async function exes1() {
    
    try {
        const data=await readFile("./twentyexesices/input-1.txt","utf8");
        console.log(data);
        
    }
    catch (err) {
        console.log("exes1: " + err.message)
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
        
        console.log("exes2: " +err.message);
        
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
        console.log("exes3: " + err.message)

    }
    }



//*********************************************** */
//  exesice 4
export async function exes4() {


    try{

        await readFile('./twentyexesices/log-33.txt','utf8');
    }
    catch(err) {
        console.log("exes4: " + err.message)

    }
 }


 //*********************************************** */
//  exesice 5
export async function exes5() {


    try{

        await mkdir('./twentyexesices/testDir');
    }
    catch(err) {
        console.log("exes5: " + err.message)

    }
    }

 //*********************************************** */
//  exesice 6
export async function exes6() {


    try {

        if(!existsSync('./twentyexesices/testDir')) {
            await mkdir('./twentyexesices/testDir');
        }

     }
    
    catch(err) {
        console.log("exes6: " + err.message)

    }
    }
 //*********************************************** */
//  exesice 7
 export function exes7() {

     //? add precondition 
    
     unlink('./twentyexesices/temp-7.txt',(err=>{
        if(err) console.log(err);
        else {
            console.log("Deleted File")
        }  
     }));

    
  
    }

 //*********************************************** */
//  exesice 8
//? precondition 
export async function exes8() {


    try {

        await rename('./twentyexesices/oldFile-8.txt','./twentyexesices/newFile-8.txt');
        

     }
    
    catch(err) {
        console.log("exes8: " + err.message)

    }
    }


//*********************************************** */
//  exesice 9
export async function exes9() {


    try {

        const files=await readdir('./twentyexesices');
        await files.forEach(function (file) {
            console.log(file); 
        });
        
     }

    catch(err) {
        console.log("exes9: " + err.message)

    }
    }


 //*********************************************** */
//  exesice 10
export async function exes10() {


    try {

        const fileStream = await createReadStream('./twentyexesices/lines-10.txt');
        const rl =  readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
          });
        
          for await (const line of rl) {
            console.log(`Line: ${line}`);
          }
        }
        
    
    catch(err) {
        console.log("exes10: " + err.message)

    }
    }

//*********************************************** */
//  exesice 11

export async function exes11() {

    try{

        const data= 
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
            }
            }

        await writeFile("./twentyexesices/data.json",JSON.stringify(data));
    }
    catch(err) {
        console.log("exes11: " + err.message)

    }
    }


//*********************************************** */
//  exesice 12
export async function exes12() {


    try{

        const data =await readFile('./twentyexesices/data.json','utf8');
        console.log(JSON.parse(data));
    }
    catch(err) {
        console.log("exes12: " + err.message)

    }
 }



//*********************************************** */
//  exesice 13
 export async function exes13() {
    
    try {
        const data=await readFile("./twentyexesices/source.txt","utf8");
        await writeFile("./twentyexesices/destination.txt", JSON.stringify(data));
       
    }
    catch (err) {
        console.log("exes13: " + err.message)
    }
    
}


 //*********************************************** */
//  exesice 14
export async function exes14() {
    //? precondition 

    try {

        await rename('./twentyexesices/testDir/fileA.txt','./twentyexesices/backup/fileA.txt');
        

     }
    
    catch(err) {
        console.log("exes14: " + err.message)

    }
}




//*********************************************** */
//  exesice 15
export async function exes15() {


    try {

        const files=await readdir('./twentyexesices/testDir');
        await files.forEach(function (file) {
            if(file.includes("tempFiles")) {              
                /***************************************** */

                unlink("./twentyexesices/testDir/" + file,(err=>{
                    if(err) console.log(err);
                    else {
                        console.log("Deleted File")
                    }  
                 }));

                /*************************************** */
            }
        }) 
     }

    catch(err) {
        console.log("exes15: " + err.message)

    }
    }

    
 //*********************************************** */
//  exesice 16
export async function exes16() {

    try {

           const monitor= await watch('./twentyexesices/');

           //******************** */
           //monitor 5000 ms......
           setTimeout(()=>{
            exes2();
           },5000)
           //******************** */
          

           
           console.log("changes:" + monitor.next().then(res=>{
            console.log(res)
           }))
        
     }
    
    catch(err) {
        console.log("exes16: " + err.message)

    }
    }



    //*********************************************** */
//  exesice 17
 export async function exes17() {
    
    try {
        const stats = await stat("./twentyexesices/bigFile-17.txt")  
        console.log("file size:(MB): " +(stats.size /(1024*1024)).toFixed(3));
    }
    catch (err) {
        console.log("exes17: " + err.message)
    }
    
}

//*********************************************** */
//  exesice 18
export async function exes18() {
    
    try {
     
        await open("./twentyexesices/multipleFiles/file1.txt","w");
        await open("./twentyexesices/multipleFiles/file2.txt","w");
        await open("./twentyexesices/multipleFiles/file3.txt","w");
        
    }
    catch(err) {
        
        console.log("exes18: " +err.message);
        
    }
}

//*********************************************** */
//  exesice 19
export async function exes19() {


    try {

        const files=await readdir('./twentyexesices/multipleFiles/');
        let count=0;
        await files.forEach(function (file,i) {
           // console.log(file,i); 
            count++;
        });

        console.log("files counts: " + count)
        
     }

    catch(err) {
        console.log("exes19: " + err.message)

    }
    }

    //*********************************************** */
//  exesice 20
export async function exes20() {
    
    try {
       
        const data1 = await readFile("./twentyexesices/data-20-1.txt","utf-8");
        const data2 = await readFile("./twentyexesices/data-20-2.txt","utf-8");
        await writeFile("./twentyexesices/data-20-3.txt",JSON.stringify(data1 + data2));
    } 
    
    catch(err) {
        
        console.log("exes20: " +err.message);
        
    }
}






























