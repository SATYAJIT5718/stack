const http= require('http');

const server =http.createServer((request,response)=>{
    response.end(`<h1>hello, Server is running fine on port number-8000</h1>`)
})
server.listen(8000,()=>{console.log('server working fine');
});