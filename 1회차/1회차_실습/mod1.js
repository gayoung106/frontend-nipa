//모듈화
//코드를 기능 혹은 규모에 따라 분할하는 것을 의미
//모듈내보내기, 불러오기를 위해 두가지 기능 사용
//require 가져온다
//module.exports 내보낸다

const helloWorld = function () {
  console.log("Hello World!");
};

module.exports = helloWorld;
//내보냄
