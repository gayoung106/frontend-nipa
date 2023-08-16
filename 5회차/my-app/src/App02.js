// useMemo
import React, { useState, useMemo } from "react";

const Form = ({ listText, currentText, setListText, setCurrentText }) => {
  console.log("Form is rendered");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setListText([...listText, currentText]);
      }}
    >
      <input
        name="text"
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
      <input type="submit" />
      {/* <Contents listText={listText} /> */}

      {useMemo(() => {
        console.log("Content is rendered");
        return (
          <ul>
            {listText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }, [listText])}
      {/* listText의 상태가 변화할때만 콜백함수를 실행하겠다. 그러니까 다른거 상태가 변하던 말던 그때는 렌더되지 않겠다. */}
      {/* React.memo와 차이점은 useMemo는 직접 상태변화시 렌더될 부분에 useMemo로 감싸줌  */}
    </form>
  );
};

// const Contents = ({ listText }) => {
//   return useMemo(() => {
//     console.log("Content is rendered");
//     return (
//       <ul>
//         {listText.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     );
//   }, [listText]);
// };
const App = () => {
  console.log("App is rendered");
  const [currentText, setCurrentText] = useState("");
  const [listText, setListText] = useState([]);

  return (
    <>
      <Form
        setCurrentText={setCurrentText}
        setListText={setListText}
        currentText={currentText}
        listText={listText}
      />
    </>
  );
};

export default App;
