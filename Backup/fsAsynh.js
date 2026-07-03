const fs=require('fs')


//file creating asynch
// fs.writeFile('sample.txt','this is Asynch',(err)=>{
//     if(err){
//         console.log('error occur:',err);
//     }
//     else{
//         console.log('file created')
//     }
// })


//read file Asynch
// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(data){
//         console.log('data read successfull:',data)
//     }else{
//         console.log('error occur',err)
//     }
// })


//data update
// fs.appendFile('sample.txt','this method to updating the data',()=>{console.log('data update')})


//delete file
fs.unlink('sample.txt',()=>{console.log('delete successfull')})