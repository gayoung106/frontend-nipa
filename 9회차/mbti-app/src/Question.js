import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Title,
  TitleNum,
  NormalContainer,
  CenteredContent,
  OkButton,
  GooeyDiv,
  BtnContainer,
} from "./StyledComponents";
import { questioncontent } from "./utilities/questioncontents";

const Question = (props) => {
  const questionCount = useSelector((state) => state.questionCount);
  const dispatch = useDispatch();
  return (
    <CenteredContent>
      <div
        style={{ border: "none", height: "20%", background: "#0d0722" }}
      ></div>
      <NormalContainer>
        <GooeyDiv />
        <Title>
          <TitleNum>{questioncontent[questionCount].number}</TitleNum>
          <h1>{questioncontent[questionCount].question}</h1>
        </Title>
        <BtnContainer>
          <OkButton
            onClick={() =>
              dispatch({
                type: "INCREASE",
                quizType: questioncontent[questionCount].type,
              })
            }
          >
            <span> {questioncontent[questionCount].answer1} </span>
          </OkButton>
          <br />
          <OkButton
            onClick={() =>
              dispatch({
                type: "DECREASE",
                quizType: questioncontent[questionCount].type,
              })
            }
          >
            <span> {questioncontent[questionCount].answer2}</span>
          </OkButton>
        </BtnContainer>
      </NormalContainer>
    </CenteredContent>
  );
};

export default Question;
