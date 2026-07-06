const http=require('http')

let server=http.createServer((req,res)=>{
     res.writeHead(200,'Content-type:text/html')
     res.write(`  <!DOCTYPE html>
                 <html lang="eng">
                 <head>
                   <title>http page</title>
                 </head>
                 <body>
                 <h1>this is heading</h1>
                 <h2>${new Date().toLocaleString()}</h2>
                 <p>bwfihgwrikhcbkq.ehwckhwgeicouhwelvbwkgvwigv</p>
                 </body>
                 </html>
         `)
         res.end()
})
server.listen(3000,()=>{console.log('server listen on port 3000')})