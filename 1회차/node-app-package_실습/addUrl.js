/**
 * 노드 기반의 자바스크립트 프로젝트를 어떻게 운용하는지?
 * 서버(데이터를 제공하는 컴퓨터 또는 프로그램) 만들기 하는중임
 * 지금까지 만들어온 서버는 문서(텍스트), html문서를 전달 (어제까지 함 addHTML)
 *
 * 서버를 통해서 HTML문서(웹문서)를 제공할 때, 주의할 점
 * 정적파일 형태로 만들어서 html전달하면 적용이 가능했음
 * 서버를 통한다면? 서버가 주체가 됨!
 * 서버가 문서들을 읽어서 가져다 주는 형태
 * html파일에 있던 스타일과 스크립트를 각각 파일로 모듈화하면? 서버가 정적파일을 정상적으로 제공하게 하는방법을 오늘 수업에 알려줌
 *
 */

const http = require("http");
const fs = require("fs");
//새롭게 등장 ! url : 서버가 문서의 주소를 해석해서 문서를 제공할거니깐 노드의 기본모듈임
const url = require("url");
var morgan = require("morgan");

//기록을 줄임
var logger = morgan("tiny");

const hostname = "127.0.0.1"; //로컬호스트
const port = 3000;

const server = http.createServer(function (req, res) {
  //서버 앰 내에서 접근할 경로를 해석한다
  //등장 ! 서버를 구동하면 웹브라우저에다가 로컬호스트+포트 주소로 들어가면 나옴
  const pageURL = req.url; // 요청주소를 읽고
  const pathname = url.parse(pageURL, true).pathname; //해석하기위한 parse메소드 사용 주소를 읽어서 해석, 경로를 파악함

  //기능구현준비 완료!
  logger(req, res, function (err) {
    if (err) return console.log(err);
    //로컬호스트 3000에서 별로 경로를 지정안한 상태 /
    if (pathname === "/") {
      //lotto.html을 제공하는 서버다 (기본 /))
      fs.readFile("./public/lotto.html", function (err, data) {
        res.statusCode = 200;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data); //전달하면서 끝낸다
      });
      //해당 경로가 제시되면? 이것을 읽겠다.
    } else if (pathname === "/style.css") {
      fs.readFile("./public/style.css", "utf8", function (err, data) {
        res.writeHead(200);
        res.write(data); //작성만하는거
        res.end();
      });
      //해당 경로가 제시되면? 이것을 읽겠다.
    } else if (pathname === "/script.js") {
      fs.readFile("./public/script.js", "utf8", function (err, data) {
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * 이해되지 않았던 부분. 
 * 애초에 html 파일을 읽으면 if첫 조건문에서 끝나는데 나머지 css와 js파일을 어떻게 읽히는거지?
 * 각각에 파일을 하나씩 조건문 돌리는거지
 * 그리고 그 파일이 3개 각각 나와서 화면에는 합쳐져서 읽히겠지?
 * 
 * 제공한 코드 스니펫에서, 서버는 URL 경로와 일치하는 조건문을 기반으로 HTML, CSS 및 JavaScript 파일을 읽고 제공합니다. 코드는 파일을 순차적으로 읽으며, 이들 내용은 결합되어 클라이언트 화면에 표시됩니다.

단계별로 작동하는 방법은 다음과 같습니다:

URL 경로가 "/"와 일치하는 경우, 서버는 lotto.html 파일의 내용을 읽어 제공합니다.
URL 경로가 "/style.css"와 일치하는 경우, 서버는 style.css 파일의 내용을 읽어 제공합니다.
URL 경로가 "/script.js"와 일치하는 경우, 서버는 script.js 파일의 내용을 읽어 제공합니다.
브라우저가 받은 HTML, CSS 및 JavaScript 파일을 처리하면, 이들을 결합하여 화면에 내용을 표시합니다. 이로써 HTML 구조로 구성된 웹페이지를 CSS로 스타일링하고 JavaScript 기능을 추가하여 완전한 웹페이지를 표시할 수 있습니다.

따라서 여러분의 이해가 맞습니다: 서버는 조건문을 기반으로 파일을 읽은 후 이들의 내용을 결합하여 클라이언트 화면에 표시합니다.
 */

/**
 * req와 res는 익명의 콜백 함수에 매개변수로 전달되어 들어오는 요청에 접근하고 클라이언트에게 응답을 보낼 수 있도록 하는 것
 */

/**
 * 제공한 코드의 logger 함수와 같은 미들웨어 함수는 종종 req (요청) 및 res (응답) 객체를 매개변수로 받습니다. 실제로 두 객체를 직접 사용하지 않더라도 이렇게 설계하는 이유는 코드베이스의 유연성을 확보하고 미래에 확장 가능한 구조를 갖출 수 있도록 하는 것입니다
 */

/**
 * logger 함수가 req 객체를 직접 사용하지 않을 수 있습니다. 그러나 내부적으로 로깅 목적이나 다른 미들웨어 관련 작업을 처리할 때 사용할 수 있습니다. 또한, 미래에 logger 함수를 수정하거나 확장하여 req 객체가 필요한 작업을 포함할 때 함수의 매개변수 목록을 수정하거나 함수를 사용하는 모든 위치를 업데이트할 필요가 없습니다.
 */
