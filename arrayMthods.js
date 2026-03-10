const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Welcome to Home page")
    }else if(req.url==="/about"){
        res.end("Welcome from About page")
    }else if(req.url==="/contact"){
        res.end("Welcome from contact page...")
    }else{
        res.end("Page not found")
    }
})
server.listen(3333)