const http = require("http");
const morgan = require("morgan");

const logger = morgan("combined");
//combined방식의 모건을 저장

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  logger(req, res, function (err) {
    if (err) return console.log(err);

    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("hello, Gayoung!");
  });
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
