const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    fs.readFile("file.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-type": "text/plain" });
        return res.end("page not found");
      } else if (req.url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
      }else if(req.url==='/submit'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>SUBMIT SUCCESSFULLY</h1>')
      }
      res.end();
    });
  }).listen(3000, () => {
    console.log("server listen on port 3000");
  });
