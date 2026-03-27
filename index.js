// Imports Express module
// require loads package from node_modules
// Like importing Spring Boot dependency
const express = require('express');

// Loads .env variables into app
// Makes process.env usable
// Like loading config from application.properties
require('dotenv').config();

// Creates server instance
// app handles routes & requests
// Like Spring Boot main application object
const app = express();

// Defines API endpoint
// / = root URL
// Like @GetMapping("/") in Spring
app.get('/', (req, res) => {
//   Sends response to client
//   Ends request-response cycle
//   Like returning response in controller
  res.send('Server running');
});

// Starts server
// Uses env port or default 3000
// Like Tomcat server startup
app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});