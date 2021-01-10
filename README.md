# Car Dealer Microservice In Express

Implementing a RESTful Webservice using MongoDB, Node.js and Express.js stack.

## Dependencies: 
1) You will need `POSTMAN` and `mongoDB` installed for the project to work.
2) Install both and run mongodb service in background using `mongod`
2) Run `npm install` in a shell in the directory to download the node dependencies.

## To Run: 
1) Run `npm start` to launch the app. The default port is 3000.
2) Use POSTMAN to make requests on `localhost:3000/users`

## Routes : 
The following routes have been implemented in the project

### GET
/users/
/users/:userId
/users/:userId:/cars

/cars/

### POST
/users/
/users/:userId/cars

/cars/

### Note:  

PATCH/PUT have also been implemented, and a complete list of routes can be found in `/routes/users.js` and `/routes/cars.js`

## Code Structure Explanation : 

The main dependencies and server are setup in `app.js`
It uses route middleware to direct the requests to respective routes viz. `/routes/users.js` and `/routes/cars.js`
Here, the requests are validated and the respective controller gets invoked to handle the request.



## Packages and Tools: 
Parameter and POST request body validation has also been implemented using `joi`.
MongoDB connection is established using `Mongoose`.
API Security is covered using `helmet`.
Loggins is done using `morgans`.


