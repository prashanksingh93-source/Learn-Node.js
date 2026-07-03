const fs=require('fs')

//create file
// fs.writeFileSync('file.txt','this is sync fs');
// console.log('file created ')


//read file
//  let data=fs.readFileSync('file.txt','utf-8')
//  console.log('data read:',data)


//updating file
// fs.appendFileSync('file.txt','\n this is updating data')



//delete file
// fs.unlinkSync('file.txt')
// console.log('file delete')


//create folder
// fs.mkdirSync('new folder')
// console.log('folder created')

//remove folder
fs.rmdirSync('new folder')
console.log('folder deleted')
