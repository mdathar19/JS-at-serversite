import fs from 'fs';
import http from 'http';
import EventEmitter from 'events';

const server = http.createServer();
const event = new EventEmitter;
// server.on("request",(req,res)=>{
//     fs.readFile("readMe.txt" , (err,data)=>{
//     if(err)return console.error(err);
//     else if(data) {
//         res.end(data.toString())
//         }
//     })
   
// })
server.on("request",(req,res)=>{
    // if("/about"){
    //     res.write("Oh its About")
    // }
    const rstream = fs.createReadStream("readMe.html");
    // 2nd way
//     rstream.on("data", (chunkfile)=>{
//         res.write(chunkfile);
//     })
//     rstream.on("end",()=>{
//         res.end();
//     })
//     rstream.on("error",(err)=>{
//         console.log(err)
//         res.end('file not found')
//     })
// })

// 3rd Way

        rstream.pipe(res);  // Pipe method  
})


server.listen(8000)