# API Documentation

## Adding or Updating User Style

### Post Request


`POST '/'`

#### REQUIRED HEADERS:

key: 'Authorization'  
value: 'Bearer ${token}' where token is the user's authorization token


#### REQUIRED BODY:

Where "Punk" is the style to be updated.

`mutation { addStyleToUser(surveyResults: "Punk"}) { id name email style } }`

### Response
```
{  
  "data": {  
     "addStyleToUser": {  
        "id": 6,  
        "name": "test",  
        "email": "test@test.com",  
        "style": "Punk"  
      }  
   }  
}
```
### Error Response (invalid authToken)
```
{
  errors: [  
      {  
        message: 'Please login to update your style.',  
          locations: [Array],  
          path: [Array]  
        }  
      ],  
      data: { addStyleToUser: null }  
}  
```
