// 요소 선택 및 상수 선언
const todaySpan = document.querySelector("#today");
//css 선택자로 요소를 선택한다: querySelector
const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");
const lottoNumbers = []; //배열임
const colors = ["orange", "skyblue", "red", "purple", "green"];

// 오늘날짜!
const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `;

// paintNumber 함수
function paintNumber(number) {
  const eachNumDiv = document.createElement("div");
  eachNumDiv.classList.add("eachnum");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener("click", function () {
  //1-45 중 6개를 선택
  //배열인 로또넘버스
  while (lottoNumbers.length < 6) {
    //random알고리즘: Math.random 0-1 뽑음 * 45/ Math.floor 소수점 버림 근데 0이 포함이기때문에 1추가
    // 따라서 1은 최소값 // 45는 최대값임
    let ran = Math.floor(Math.random() * 45) + 1;
    //중복되면 안되니까
    if (lottoNumbers.indexOf(ran) === -1) {
      //이미 뽑힌 배열에 있는 숫자에 존재하지 않을경우에만 푸시해라
      lottoNumbers.push(ran);
      paintNumber(ran);
      //추첨된 숫자를 화면에 보여주는 함수
    }
  }
});

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener("click", function () {
  lottoNumbers.splice(0, 6);
  //0인덱스부터 5인덱스까지 지움
  numbersDiv.innerHTML = "";
});
