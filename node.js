//Create server using HTTP module
const http =require('http')
const server= http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("Hello everyone");
    res.end();
})

server.listen(3333,()=>{
    console.log(`Server running on port number 3333`)
})

//Create server using express

const express= require("express") ;
const app= express();
const port=4444

app.get("/",(req,res)=>{
    res.send("Hello Good morning everone....")

    
})
app.get("/home",(req,res)=>{
        res.send("Hello from home page...")
    })

app.listen(port,()=>{
    console.log(`Server running on port number ${port}`)
})

//Read file sync 
const fs =require("fs");
const data=fs.readFileSync('example.txt','utf8')
console.log(data)

//Read file async
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})

//Writefile sync

fs.writeFileSync('example1.txt',("hello good morning everyone...."))

//WriteFile async
fs.writeFile("example1.txt","hhello good afternoon everyone....",(err,data)=>{
    if(err) throw err;
    console.log("Written successfully")
})
//Deletefile async

/*fs.unlink('example2.txt',(err)=>{
    if(err) throw err;
    console.log("Successfully deleted")
})

//Deleltefile sync

try{
    fs.unlink('example2.txt')
    console.log("File deleted successfully...")

}catch(err){
    console.log("Error: ",err)
}*/



//Append file
fs.appendFile('example1.txt',"Hope you are doing well...",(err)=>{
    if(err){
        console.log("Something went wrong: ",err)
    }else{
        console.log("Appended successfully....")
    }
})

//Readfile using stream

const readStream= fs.createReadStream('example.txt',{
    encoding:"utf8"
})
readStream.on("data",(chunk)=>{
    console.log(chunk)
})

//Readstream using pipe

http.createServer((req,res)=>{
    const stream=fs.createReadStream('example.txt');
    stream.pipe(res)
}).listen(3000)
