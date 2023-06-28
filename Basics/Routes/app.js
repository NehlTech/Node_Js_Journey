const http = require("http");

/***********************************************
 CREATING A SIMPLE WEB SERVER USING ROUTES
 ******************************************** */

//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
  let path = request.url;

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end("You are in the home page");
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end("You are in the about page");
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end("You are in the contact page");
  }
});

//STEP 2: START THE SERVER
server.listen(5000, "127.0.0.1", () => {
  console.log("Server has started!");
});
