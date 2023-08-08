//함수형 컴포넌트에 매개변수를 정의하면, 이는 속성을 받겠다는 의미

// Food 컴포넌트를 App컴포넌트에서 사용
// 속성 값을 넘겨주기 위해 App컴포넌트에서 food속성, color스타일 속성, 함수속성까지 만들어놓고
// Food컴포넌트에서는 매개변수 props를 속성값을 받아오겠다는 표시를 함
// 각각 속성값이 필요한 위치에(속성값은 내맘대로 정해주면 됨)
// {props.속성값}(자바스크립트 언어이므로 중괄호 씀)
// {props.food} {props.color} onClick={() => props.handleClick()} 처럼 작성
// 그럼 하나의 컴포넌트를 사용하더라도 각각 속성을 바꿀 수 있음

function Food(props) {
  return (
    <h1
      onClick={() => props.handleClick(props.food)}
      style={{ color: props.color }}
    >
      {props.food}
    </h1>
  );
}

function App() {
  return (
    <>
      <Food
        food="치킨"
        color="yellow"
        handleClick={(food) => {
          alert(`맛있는 ${food}`);
        }}
      />
      <Food
        food="떡볶이"
        color="red"
        handleClick={(food) => {
          alert(`맛있는 ${food}`);
        }}
      />
      {/* 전달하고자 하는 속성이름은 내맘대로 정해도 됨 */}
      <Food
        food="아이스아메리카노"
        color="black"
        handleClick={(food) => {
          alert(`맛있는 ${food}`);
        }}
      />
      <Food
        food="꽈배기"
        color="brown"
        handleClick={(food) => {
          alert(`맛있는 ${food}`);
        }}
      />
    </>
  );
}

export default App;
