const fs=require('fs');

//read file 
//async
// fs.readFile('text.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('error accuring',err);
//     }
//     else{
//         console.log('file success',data);
//     }
// })


//sync
// const data =fs.readFileSync('text.txt','utf-8');
// console.log('this data read:', data);


//writeFile
// fs.writeFile('file.txt','this is sample for write file',(err)=>{
//     if(err){
//         console.log('error find',err);
//     }else{
//         console.log('new file')
//     }
// })


//Append file
// fs.appendFile('file.txt','\n this is new line in same file',(err)=>{
//     if(err){
//         console.log('error accur',err)
//     }
//     else{
//         console.log('done')
//     }
// })



//delete file
fs.unlink('text.txt',(err)=>{
     if(err){
         console.log('error find',err);
     }else{
         console.log('deleted ')
        }})