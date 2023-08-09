import { useState, useEffect } from "react";
import "./App02.css";

function App() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(function () {
    setInterval(function () {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      month = month < 10 ? `0${month}` : month;
      date = date < 10 ? `0${date}` : date;
      hour = hour < 10 ? `0${hour}` : hour;
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;

      setDate(`${year}년 ${month}월 ${date}일`);
      setTime(`${hour}:${minute}:${second}`);
    }, 1000);
  }, []);
  //컴포넌트가 만들어진 최초에 1회 setInterval한다.
  //setInterval로 1초마다 시간표시를 하겠다
  //의존성 배열에 별다른 상태를 포함하지 않고, 최초 1회 콜백함수를 실행시키면 setInterval함수 때문에 시간은 계속 변함

  return (
    <div className="clock">
      <div className="today">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default App;
