import http from 'http';
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises';

const server = http.createServer(async (req, res) => {
    if(req.url === "/") {
        res.setHeader("content-type", "text/html")
        const data = createReadStream("pages/home.html")
        data.pipe(res)
    } else if(req.url === "/aboutus") {
        res.setHeader("content-type", "text/html")
        const data = createReadStream("pages/about.html")
        data.pipe(res)
    } else if(req.url == "/product") {
        res.setHeader("content-type", "text/html")
        const data = createReadStream("pages/prod.html")
        data.pipe(res)
    } else if(req.url == "/contact") {
        res.setHeader("content-type", "text/html")
        const data = createReadStream("pages/contact.html")
        data.pipe(res)
    }
});

server.listen(3000, () => console.log("Server is running on http://localhost:3000"));