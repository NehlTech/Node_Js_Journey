const http = require("http");
const fs = require("fs");

/***********************************************
 CREATING A SIMPLE WEB SERVER USING ROUTES
 ******************************************** */

const html = fs.readFileSync("../Template/index.html", "utf-8");
//STEP 1: CREATE A SERVER
const server = http.createServer((request, response) => {
  let path = request.url;

  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end(html.replace("{content}", "You are in Home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end(html.replace("{content}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end(html.replace("{content}", "You are in Contact page"));
  } else {
    response.end(html.replace("{content}", "Error 404: Page not found!"));
  }
});

//STEP 2: START THE SERVER
server.listen(5000, "127.0.0.1", () => {
  console.log("Server has started!");
});
