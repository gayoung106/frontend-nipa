import styled, { keyframes } from "styled-components";

export const Title = styled.div`
  min-height: 150px;

  margin-bottom: 100px;
`;

export const TitleNum = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: #f7ff93;
  text-shadow: 3px 0 0 gray;
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  font-size: 18px;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: orangered;
  margin: 20px;
  cursor: pointer;
`;

export const fadeIn = keyframes`
  100% {
    transform: scale(1.03);
    opacity: 0;
  }
`;

export const morph = keyframes`
  0%, 100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    opacity: 0.89;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
`;
export const CenteredContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NormalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0d0722;
  color: #fff;
  position: relative;
  overflow: hidden;
  border: none;
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0d0722;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  font-family: "Exo 2";
  font-size: 24px;
  animation: ${fadeIn} 500ms reverse;
`;

export const GooeyDiv = styled.button`
  background-image: linear-gradient(120deg, #cece5a 0%, #ffe17b 100%);
  border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  width: 150px;
  height: 144px;
  animation: ${morph} 3s linear infinite;
  transform-style: preserve-3d;
  outline: 1px solid transparent;
  will-change: border-radius;
  margin-bottom: 100px;
  color: #000;

  &:before,
  &:after {
    content: "";
    font-size: 30px;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px rgba(0, 102, 255, 0.21);
    will-change: border-radius, transform, opacity;
    animation-delay: 200ms;
    background-image: linear-gradient(
      120deg,
      rgb(243, 21, 89) 0%,
      rgb(255, 225, 123) 100%
    );
  }

  &:before {
    animation: ${morph} 3s linear infinite;
    opacity: 0.21;
    animation-duration: 1.5s;
    color: #000;
  }

  &:after {
    animation: ${morph} 3s linear infinite;
    animation-delay: 400ms;
    opacity: 0.89;
    content: "";
    line-height: 120px;
    text-indent: -21px;
    color: #000;
  }
`;

export const ButtonText = styled.span`
  font-family: "Hana_handwriting";
  position: relative;
  z-index: 1;
  font-size: 20px;
`;

export const StButton = styled.button`
  font-family: "Hana_handwriting";
  margin: 10%;
  text-align: center;
  width: 140px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 1px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
  &:hover:focus {
    outline: none;
  }
  &:hover:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 420px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    top: 35%;
  }
`;

// 버튼

export const BtnPerspective = styled.div`
  perspective: 800px;
  display: inline-block;
`;
export const OkButton = styled.button`
  border: none;
  position: relative;
  background: #005555;
  color: #16a085;
  padding: 10px 90px;
  display: inline-block;
  text-transform: uppercase;
  margin: 30px;
  letter-spacing: 2px;
  font-size: 0.9em;
  outline: none;
  transition: all 0.4s;
  cursor: pointer;
  color: #fff;
  display: block;
  outline: 1px solid transparent;
  transform-style: preserve-3d;

  border-radius: 10px;

  span {
    font-size: 20px;
    font-weight: 700;
  }
  &:after {
    width: 20%;
    height: 100%;
    left: -20%;
    top: 0;
    background: #16a085;
    transform-origin: 100% 0%;
    transform: rotateY(-90deg);
  }
  &:hover {
    color: #fff;
    transform: rotateY(25deg);
    background-color: #16a085;
  }
  @media (max-width: 768px) {
    width: 20%;
    height: 25%;
    padding: 10px;
    margin: 50% 0;
    font-size: 15px;
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 230px;
  border-radius: 10px;
  box-shadow: 0 70px 63px -60px #000000;
`;
