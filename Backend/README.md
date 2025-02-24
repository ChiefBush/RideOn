# Backend API Documentation

## `/users/register` Endpoint

### Description
This endpoint registers a new user. It accepts a JSON request body containing the user's full name, email, and password. On successful registration, it returns an authentication token along with user details.

### HTTP Method
**POST** 

### Request Body
- **fullname**: Object  
  - **firstname**: String (Required, minimum 3 characters)  
  - **lastname**: String (Optional, minimum 3 characters if provided)
- **email**: String (Required, must be a valid email address)
- **password**: String (Required, minimum 6 characters)

### Example Response
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "secret123",
    "token":"eyJhbGciOiJIUzI1NiIsInR...",
}