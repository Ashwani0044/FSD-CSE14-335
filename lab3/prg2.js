import http from 'http'

server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(404, {
        "content-type":"text/plain"
    })
    res.write("<h1>Welcome Again!!")
    res.end()
})

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000")
})