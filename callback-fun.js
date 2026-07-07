const fs=require('fs').promises;



// function callbackFun(name,callback){
//     console.log('hello'+name);
//     callback();
// }
// function call(){
//     console.log('hi this is callback')
// }
// callbackFun('annu',call);




//callback hell
// fs.readFile('index1.txt','utf-8',(err,data1)=>{
//     if(err) return console.error('error 404');
//         fs.readFile('index2.txt','utf-8',(err,data2)=>{
//     if(err) return console.error('error 404');
//         fs.readFile('index3.txt','utf-8',(err,data3)=>{
//     if(err) return console.error('error 404')
//     console.log(data1)
//     console.log(data2)
//     console.log(data3)})
//     })
// })


async  function readData(){
       try{
        let data1=await fs.readFile('index1.txt','utf-8');
        let data2=await fs.readFile('index2.txt','utf-8');
        let data3=await fs.readFile('index3.txt','utf-8');
        console.log(data1);
        console.log(data2);
        console.log(data3);
       }
       catch{
        console.log('error');
       }
    }

    readData();
