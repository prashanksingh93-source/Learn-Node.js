const https=require('https')
const fs=require('fs')


const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};
https.createServer(options,(req,res)=>{
     res.writeHead(200,{'Content-type':'text/html'})
     res.end('<h1>this is https server</h1>')
    }).listen(3000,()=>{console.log('https server at port 3000')})
