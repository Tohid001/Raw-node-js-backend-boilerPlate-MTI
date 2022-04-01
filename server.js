/*
 * Title: Nodes JS backend boilerPlate
 * Description: A boilerPlate for building RESTFul API using raw Node JS
 * Author: Mohammad Tohidul Islam
 * Date: 03/01/2022
 *
 */
// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
