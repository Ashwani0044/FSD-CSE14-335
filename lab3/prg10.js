import http from 'http'
import { createReadStream } from 'fs'

const server = http.createServer(async(req, res) => {
    if(req.url === "/") {
        res.setHeader("content-type", "text/html")
        const data = createReadStream("pages/airtag.html")
        data.pipe(res)
    }
    else if(req.url === "/mobile") {
        res.setHeader("content-type", "text/html")
        const data =  createReadStream("pages/mobile.html")
        data.pipe(res)
    }
    else if(req.url === "/mobiledetail") {
        res.setHeader("content-type", "application/json")
        const data = createReadStream("data/products.json")
        data.pipe(res)
    }
    else if(req.url === "/manual") {
        res.setHeader("content-type", "text/plain")
        const data = createReadStream("data/gemini.txt")
        data.pipe(res)
    }
})

server.listen(3000, () => {console.log("prg10 is running on http://localhost:3000")})