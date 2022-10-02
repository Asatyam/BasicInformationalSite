const http = require('http');
const fs  = require('fs').promises;
const port = 8080;
const host = "localhost"
const requestListener = function(req,res)
{

    res.setHeader('Content-type','text/html');
    let path = ".";
    switch(req.url)
    {
        case "/":
            path+="/index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path+="/about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            path+="/contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path+="/404.html";
            res.statusCode= 404;
            break;
    }
    fs.readFile(path)
        .then((data) => res.write(data))
        .catch((error) => console.log(error));

}



const server = http.createServer(requestListener);

server.listen(port,host,()=>{
    console.log(`Server is running at http://${host}:${port}`);
})