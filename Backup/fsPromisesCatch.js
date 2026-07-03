const fs=require('fs').promises
//const fs=require('fs/promises')


//file created
// fs.writeFile('text.txt','i learn promises')
// .then(()=>{
//     console.log('file created')
// })
// .catch(
//     (err)=>{console.log('error occur',err)}
// )



fs.readFile('text.txt','utf-8')
.then((data)=>{
    console.log('read file:',data)
})
.catch(
    (err)=>{console.log('error occur',err)}
)