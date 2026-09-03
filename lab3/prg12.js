import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if(req.url === '/' && req.method === 'GET') {
    res.end('Home page!');
  }
  else if (req.url === '/products' && req.method === 'GET') {

    const products = [{
      id: 1,
      name: 'Mobile',
      price: 100
    }, {
      id: 2,
      name: 'Laptop',
      price: 200
    }];

    res.end(JSON.stringify(products));

  }
  else if (req.url === '/products' && req.method === 'POST') 
    {
        req.on("data", (chunk) => {
            const product = JSON.parse(chunk);
            console.log(product);
        });
        req.on("end", () => {
            res.end(JSON.stringify({ message: "Product added successfully" }))  ;
        }); 
    }
    else if (req.url === '/products' && req.method === 'PUT') {
      res.end('Update a Product');
    }
    else if (req.url === '/products' && req.method === 'DELETE') {
      res.end('remove the  Product');
    }
    else {
      res.statusCode=404;
      res.end('Not Found');
    }
});

server.listen(3000, () => {
  console.log('prg12 is running');
});