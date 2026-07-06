const http=require('http')

let userData=[{
    ID:'1',
    Name:'Rishu',
    Age:'9',
    City:'agra'
    }]

let server=http.createServer((req,res)=>{
      res.setHeader('Content-type','application/json');
      res.write(JSON.stringify(userData));// Send the variable, not the string
      res.end();
})
server.listen(3000,()=>{console.log('server listen on port http://localhost:3000/')})