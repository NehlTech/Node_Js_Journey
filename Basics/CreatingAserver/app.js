const http = require("http");

/***********************************************
 CREATING A SIMPLE WEB SERVER
 ******************************************** */

//STEP 1: CREATE A SERVER
const server = http.createServer((requrest, response) => {
  console.log("A new requrest received");
});

//STEP 2: START THE SERVER
server.listen(5000, "127.0.0.1", () => {
  console.log("Server has started!");
});
