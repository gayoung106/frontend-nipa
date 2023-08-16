import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 800px;
  max-width: 1280px;
  min-height: 600px;
  min-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Border = styled.div`
  height: 369px;
  width: 20%;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
  margin-right: 10px;
  margin-top: 50px;
`;

export const Card = styled.div`
  height: 379px;
  width: 100%;
  background: black;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: url("${(props) => props.bgImage}") center center no-repeat;
  background-size: 300px;

  &:hover {
    background: url("${(props) => props.hoverBgImage}") left center no-repeat;
    background-size: 450px;

    h2,
    .fa {
      opacity: 1;
    }
  }
`;

export const H2 = styled.h2`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  margin: 20px;
  opacity: 0;
  transition: opacity 1s;
`;
