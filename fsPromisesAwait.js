const fs=require('fs').promises


//create file
async function writefileByPromise(){
    try{
        await fs.writeFile('file.txt','this is asynh/await')
        console.log('file created')
    }catch(err){
        console.log('error occur:',err)
    }
}
writefileByPromise();