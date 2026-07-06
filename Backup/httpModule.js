const http=require('http');

let server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.writeHead(200,'Conten-type:text/html');
    res.write('<h1>this is node js server</h1>');
    res.end(' res.end use only once')
    }
    else if(req.url==='/about'){
    res.writeHead(200,'Content-type:text/plain')
    res.write('this is about section')
    res.end('this is end res this is use only one in a page')
    }
    //this method explain how use JSON in http server
    else if(req.url==='/json'){
        res.writeHead(200,'Content-type:text/json')
        res.write(JSON.stringify({name:'Annu', age:'10'}))
        res.end();
    }
    else{
        res.writeHead(404,'content-type:text/plain')
        res.write('page not found')
        res.end()
    }

})

server.listen(3000,()=>{console.log('server line on port http://localhost:3000/')})