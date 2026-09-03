import http from 'http'
import { createReadStream } from 'fs'

const server = http.createServer(async (req, res) => {
    if(req.url === "/" && req.method === "GET") {
        res.end("Hello")
    } 

    else if(req.url === "/products" && req.method === "GET") {
        res.setHeader("content-type", "application/json")
        const data = createReadStream("data/products.json")
        data.pipe(res)
    }
    
    else {
        res.statusCode = 404
        res.end("Not found")
    }
})

server.listen(3000, () => {console.log("server is running on http://localhost:3000")})