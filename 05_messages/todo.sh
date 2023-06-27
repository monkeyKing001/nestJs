#!/bin/bash
#
### POST ###
## ex)
## curl -s -X POST \
##    'https://jsonplaceholder.typicode.com/posts' \
##    -H 'Content-Type: application/json' \
##    -d '{ "title": "fooBatch", "completed": false, "userId": 1 }' \
# curl -s -X POST \
#    'http://localhost:3000/messages' \
#    -H 'Content-Type: application/json' \
#	-d '{
#	"content": "Test"
#	}' \
#    -d '{ 
#	 "content":"hello my first POST"
#	}' \
#
### GET ###
## ex)
## curl -s -X GET -G \
##    'https://jsonplaceholder.typicode.com/todos' \
##    -d 'userId=1'

### GET 1 ###
#curl -s -X GET -G \
#    'http://localhost:3000/messages' \
#
### GET 2 : get a particular msg ###
curl -s -X GET -G \
    'http://localhost:3000/messages/161' \

### GET 3 : get a msg that doesnt exist ###
curl -s -X GET -G \
    'http://localhost:3000/messages/deosntExist' \
