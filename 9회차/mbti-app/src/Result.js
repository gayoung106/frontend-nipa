import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Title,
  StButton,
  CenteredContent,
  NormalContainer,
  TitleNum,
  Image,
} from "./StyledComponents";
import { resultcontent } from "./utilities/resultcontents";
import KakaoShareButton from "./utilities/KaKaoShareButton";

const Result = () => {
  const dispatch = useDispatch();
  const ePoint = useSelector((state) => state.ePoint);
  const sPoint = useSelector((state) => state.sPoint);
  const tPoint = useSelector((state) => state.tPoint);
  const jPoint = useSelector((state) => state.jPoint);

  const [resultCharacter, setCharacter] = useState({});

  useEffect(() => {
    let result = "";
    result += ePoint > 0 ? "E" : "I";
    result += sPoint > 0 ? "S" : "N";
    result += tPoint > 0 ? "T" : "F";
    result += jPoint > 0 ? "J" : "P";

    const finalResult = resultcontent.filter((content) => {
      return content.type === result;
    });
    setCharacter(...finalResult);
  }, []);

  return (
    <CenteredContent>
      <div style={{ height: "17%", background: "#0d0722" }}></div>
      <NormalContainer>
        <Title>
          <TitleNum>{resultCharacter.type}</TitleNum>
          <h1>{resultCharacter.keyword}</h1>
          <h3>{resultCharacter.description}</h3>
          <Image src={resultCharacter.imgSrc} alt={resultCharacter.type} />
        </Title>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <StButton onClick={() => dispatch({ type: "RESET" })}>RETRY</StButton>
          <KakaoShareButton />
        </div>
      </NormalContainer>
    </CenteredContent>
  );
};

export default Result;
