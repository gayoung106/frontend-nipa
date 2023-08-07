//내 서버가 html응답을 날려주는거
const http = require("http");
const fs = require("fs");
//fs 모듈이 추가 file system 파일을 제공하고 싶을 때 사용 !
var morgan = require("morgan");

var logger = morgan("combined");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  logger(req, res, function (err) {
    if (err) return console.log(err);
    //이부분이 바뀜 html파일을 제공해주겠다 !
    //파일을 읽고
    //2번째 매개변수가 clock.html 파일임
    fs.readFile("./public/clock2.html", function (err, data) {
      res.statusCode = 200;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data); //뭔가를 보낸다는 의미
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
