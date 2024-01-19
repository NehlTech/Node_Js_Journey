"use strict";

const fs = require("fs"); // fs => fileSystem
/****** creating a server ***** */
const http = require("http");

/************************************************* 
  READING AND WRITING FILES SYNCHRONOUSLY 
**************************************************/

// const textIn = fs.readFileSync("./Files/input.txt", "utf-8"); //read the file using the fs and store it in textIn
// console.log(textIn);

// const fileContent = `Data read from input.txt: ${textIn}. \n Data created ${new Date()}`;
// fs.writeFileSync("./Files/output.txt", fileContent);

/************************************************* 
  READING AND WRITING TO FILES ASYNCHRONOUSLY 
**************************************************/
/*
fs.readFile("./Files/start.txt", "utf-8", function (error1, data1) {
  console.log(data1);
  fs.readFile(`./Files/${data1}.txt`, "utf-8", (error2, data2) => {
    console.log(data2);
    fs.readFile("./Files/append.txt", "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile(
        "./Files/output.txt",
        `${data2}\n\n${data3}\n\n Date created ${new Date()}`,
        () => {
          console.log("File written successfully");
        }
      );
    });
  });
});
*/

/***********************************************
 CREATING A SIMPLE WEB SERVER
 ******************************************** */

const html = fs.readFileSync("./Template/index.html", "utf-8");

// Create the server
const server = http.createServer((req, res) => {
  res.end(html);
  console.log("A new request received");
});

// Start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started");
});
