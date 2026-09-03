# http module

hyper text transfer protocol
html -> hyper text markup languange
css -> cascading style sheet
npm -> node package manager

# Methods 
    GET, POST, PUT, PATCH, DELETE

# HTTP STATUS CODE
    200 -> ok
    201 -> created
    400 -> Bad request
    401 -> unauthorized
    403 -> Forbidden
    404 -> Not found

# API

Any API can be of 4 types:
    -GET(READ)
    -POST(CREATE)
    -PUT/PATCH(UPDATE)
    -DELETE(DELETE)

API can be respond by server with status code and json data
API generally start with API/version(eg. /api/v1/products/2)
By default browser can check only GET request, to check other three request types like post, put/patch and delete we require frontend or third party api tester like postman, thunder client, eco api


# content-type

1. text/js
2. text/css
3. text/html
4. text/plain
5. application/json

#http module 

hyper text transfer protocol 
html - hyper text markup language 
css - cascade style sheet


npm - Node Package Management




## status Codes
200-> OK
201-> Created
202-> Accepted
204-> No Content
400-> Bad Request 
401-> Unauthorized 
403-> Forbidden 
404-> Not Found
500 -> Internal Server Error
503 -> Service Unavailable 


# Server can send dat- 
1. html content
2. html files 
3. json data
4. plain text
5. css 
6. jss 
7. file 

 ## server can set Header to send Data
 1. Res.writeHeader()
 2. Res.setHeader

 ## Server can set status code 
 1. res.statusCode()
 2. res.writeHeader()

 ## request methods 
 1. get 
 2. post 
 3. put/patch 
 4. delete