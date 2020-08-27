# API Documentation

## Adding or Updating User Style

The format of the survey results object should be the following:

`surveyObject = '[{"classy":5,"artsy":2,"punk":7,"sporty":6,"nature":3}]'`

where 'classy', 'artsy', 'punk', 'sporty', and 'nature' are the style options and the numbers are the number of times the user selected that option.

### Post Request


`POST '/'`

#### REQUIRED HEADERS:

key: 'Authorization'  
value: 'Bearer ${token}' where token is the user's authorization token


#### REQUIRED BODY:

`mutation { addStyleToUser(surveyResults: ${JSON.stringify(surveyObject)}) { id name email style } }`

### Response
```
{  
  "data": {  
     "addStyleToUser": {  
        "id": 6,  
        "name": "test",  
        "email": "test@test.com",  
     "style": "classy"  
      }  
   }  
}
```
