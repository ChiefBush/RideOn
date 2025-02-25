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
```

## `/users/login` Endpoint

### Description
This endpoint logs in an existing user. It accepts a JSON request body containing the user's email and password. On successful login, it returns an authentication token along with user details.

### HTTP Method
**POST**

### Request Body
- **email**: String (Required, must be a valid email address)
- **password**: String (Required, minimum 6 characters)

### Example Response
```json
{
    "email": "john.doe@example.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR...",
}
```

## `/users/profile` Endpoint

### Description
This endpoint retrieves the profile of the authenticated user. It requires a valid authentication token to be sent in the request headers.

### HTTP Method
**GET**

### Request Headers
- **Authorization**: Bearer token (Required)

### Example Response
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": "someSocketId"
}
```

## `/users/logout` Endpoint

### Description
This endpoint logs out the authenticated user. It requires a valid authentication token to be sent in the request headers or cookies. On successful logout, it clears the authentication token and adds it to the blacklist.

### HTTP Method
**GET**

### Request Headers
- **Authorization**: Bearer token (Required, if not sent in cookies)

### Example Response
```json
{
    "message": "Logged Out"
}
```

## `/captains/register` Endpoint

### Description
This endpoint registers a new captain. It accepts a JSON request body containing the captain's full name, email, password, and vehicle details. On successful registration, it returns an authentication token along with captain details.

### HTTP Method
**POST**

### Request Body
- **fullname**: Object  
  - **firstname**: String (Required, minimum 3 characters)  
  - **lastname**: String (Optional, minimum 3 characters if provided)
- **email**: String (Required, must be a valid email address)
- **password**: String (Required, minimum 6 characters)
- **vehicle**: Object
  - **color**: String (Required, minimum 3 characters)
  - **plate**: String (Required, minimum 3 characters)
  - **capacity**: Number (Required, minimum 1)
  - **vehicleType**: String (Required, must be one of 'car', 'motorcycle', 'auto')

### Example Response
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR...",
}
```
