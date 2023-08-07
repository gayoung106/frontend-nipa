//npm
// 노드 기반의 자바스크립트 프로그램을 등록할 수 있는 공개 커뮤니티임
// 코드를 내려받아 자신의 코드에 반영 가능
// package.json이라는 파일이 생성됨 : 설치된 모듈을 비롯한 프로젝트 관련 사항들을 관리하기 위해 노드 프로젝트 폴더 안에서 생성
// npm init = 나는 지금부터 이 폴더를 노드 프로젝트 폴더로서 운영하겠다 !
// 필요충족하는 것들이 알아서 생성
// npm init -y = 빠르게 생성하겠다
//package.json 파일 생성
// npm install 모듈이름 = npm i 모듈이름
// npm morgan = 내가 만든걸 가져간 사람이 기록되는거

//node 기반의 서버를 생성하자 !
//http 기반의 데이터 송수신을 진행하는 서버 생성

const http = require("http"); //http모듈은 node의 기본모듈이라서 제공됨

const hostname = "127.0.0.1"; //서버주소 로컬호스트(나 자신)
const port = 3000; //데이터가 송수신 되어지는 통로

//http가 제공하는 createServer 사용
//화살표함수? 간결하게 바꾼 방법
//function 지우고, 매개변수 뒤 소괄호 지우고 화살표 => 를 넣음
// const server = http.createServer(
//   function (req, res) {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

//2개의 인수를 전달
//req: 요청(수신), res: 응답(송신)
//createServer 가 전달받음

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //상태코드 200번에
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Gayoung!");
  //이거를 전달
});

//listen: 서버가 구동 중인 상태에서
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //터미널: Server running at http://127.0.0.1:3000/
});
