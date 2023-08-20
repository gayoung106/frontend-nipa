import React from "react";
import { Title, AppContainer, ButtonText, StButton } from "./StyledComponents";
import { useDispatch } from "react-redux";
import bbang from "./assets/bbang12.png";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <AppContainer>
      <div style={{ top: "10px", textAlign: "center" }}>
        <img src={bbang} alt="/" />
        <Title>
          <h1 style={{ margin: "0" }}>싸움의 고수</h1>
          <h1
            style={{
              margin: "0",
              fontSize: "70px",
              fontFamily: "Hana_handwriting",
            }}
          >
            빵빵이
          </h1>
        </Title>

        <StButton onClick={() => dispatch({ type: "BEGIN" })}>
          <ButtonText>START</ButtonText>
        </StButton>

        <p style={{ fontSize: "16px" }}>MADE BY 가영</p>
        <p style={{ fontSize: "14px" }}>
          이 test는 오로지 코딩연습용으로 만들어졌습니다. 빵빵이의 일상과 아무런
          관련이 없습니다.
        </p>
      </div>
    </AppContainer>
  );
};

export default Home;
