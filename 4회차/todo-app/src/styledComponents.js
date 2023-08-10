import styled from "styled-components";

//파일에서 자바스크립트 객체 여러개를 내보내고 싶은 경우 익스포트 문
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin-top: 15%;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 4mm;
  color: #696d7d;
  transition: all 1s;

  &:hover {
    letter-spacing: 8mm;
    transition: all 1s;
  }
`;

export const Form = styled.form`
  /* margin-top: 45%; */
  width: 33%;
  min-width: 375px;
  display: flex;
`;
export const TextInput = styled.input`
  width: 80%;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem 0 0 0.2rem;
  background-color: #bdc0e0;
  font-size: 1.2rem;
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
    transition: all 0.3s;
  }
  &::placeholder {
    text-align: center;
  }
`;
export const SubmitInput = styled.input`
  width: 20%;
  height: 3.08rem;
  border: none;
  border-radius: 0 0.2rem 0.2rem 0;
  font-weight: 700;
  color: #ffffff;
  background-color: #15253c;
  font-size: 1.2rem;
  transition: all 0.3s;

  &:hover {
    background-color: #192b44;
    transition: all 0.3s;
  }
`;

export const UnorderdList = styled.ul`
  width: 33%;
  min-width: 375px;
  height: 10rem;
  padding: 0;

  list-style-type: none;
`;
export const ListItem = styled.li`
  padding: 0.375rem;
  margin-bottom: 0.8rem;
  border-radius: 0.2rem;
  background-color: transparent;
  display: flex;
  position: relative;
  height: 40px;

  &:hover {
    background-color: #2a2c41;
    transition: all 0.3s;
  }
`;

export const TodoText = styled.span`
  display: inline-block;
  width: 90%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #bdc0e0;
  font-weight: 600;
`;

export const TodoDelete = styled.button`
  width: 10%;
  height: 1.5rem;
  border: none;
  border-radius: 0.5rem;

  background-color: transparent;
  font-weight: 400;

  position: absolute;
  right: 0;
  color: #6d6875;
`;
