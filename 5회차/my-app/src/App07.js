import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState(undefined);

  // 처음부터 강아지가 표시되게끔 하고 싶다면 이렇게
  useEffect(() => {
    // axios를 이용해서 get 요청을 하겠다, 이게 promise가 됨
    // 그 안에는 비동기적으로 처리된 결과가 들어있음
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((result) => setImage(result.data.message))
      // 비동기처리 고전적 방식 then(요청이 정상처릳 ㅙㅆ을때)-그래서 보통 result에 data속성에 강아지 사진이 들어있는 것임
      //, catch(실패했을때)
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <button
        onClick={() => {
          axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((result) => setImage(result.data.message))
            .catch((error) => console.log(error));
        }}
      >
        강아지 사진 변경하기
      </button>{" "}
      <br />
      {/* async는 비동기 할꺼라는 선전포고*/}
      <button
        onClick={async () => {
          try {
            // await을 기다렸다가 강아지 주소 주기를..
            //axios가 get방식으로 주소에 요청할거야 혼자하고 있는중
            // 결과가 받아지면 response에 넣고
            const response = await axios.get(
              "https://dog.ceo/api/breeds/image/random"
            );
            //  응답(response)은 promise 객체임
            //응답이 포함된 promise객체인데 그 안에는 data객체를 포함하고 있고
            // 내가 보고 싶은건 message이기 때문에 그 부분을 받아오면 됨
            // 상태를 변화시기기 위해 받아온걸 setImage에 넣음
            setImage(response.data.message);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        강아지 사진 변경하기
      </button>{" "}
      <br />
      <img src={image} alt="랜덤 강아지 이미지" width="640" />
    </>
  );
};

export default App;
