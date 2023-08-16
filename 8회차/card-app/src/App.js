import React from "react";
import { Container, Border, Card, H2, VideoBackground, Video } from "./styles";
import card01 from "./assets/아이언맨.jpeg";
import card001 from "./assets/아이언맨2.jpeg";
import card02 from "./assets/닥터스트레인지.jpeg";
import card002 from "./assets/닥터스트레인지상세.jpeg";
import card03 from "./assets/토르.jpeg";
import card003 from "./assets/토르상세.png";
import card04 from "./assets/캡틴아메리카.jpeg";
import card004 from "./assets/캡틴아메리카상세.png";
import card05 from "./assets/로키.jpeg";
import card005 from "./assets/로키상세.jpeg";
import card06 from "./assets/그루트.jpeg";
import card006 from "./assets/그루트상세.jpeg";
import spaceVideo from "./assets/space.mp4";

const cardData = [
  {
    bgImage: card01,
    hoverBgImage: card001,
    name: "아이언맨",
  },
  {
    bgImage: card02,
    hoverBgImage: card002,
    name: "닥터스트레인지",
  },
  {
    bgImage: card03,
    hoverBgImage: card003,
    name: "토르",
  },
  {
    bgImage: card04,
    hoverBgImage: card004,
    name: "캡틴아메리카",
  },
  {
    bgImage: card05,
    hoverBgImage: card005,
    name: "로키",
  },
  {
    bgImage: card06,
    hoverBgImage: card006,
    name: "그루트",
  },
  {
    bgImage: card01,
    hoverBgImage: card001,
    name: "아이언맨",
  },
  {
    bgImage: card02,
    hoverBgImage: card002,
    name: "닥터스트레인지",
  },
  {
    bgImage: card03,
    hoverBgImage: card003,
    name: "토르",
  },
  {
    bgImage: card04,
    hoverBgImage: card004,
    name: "캡틴아메리카",
  },
  {
    bgImage: card05,
    hoverBgImage: card005,
    name: "로키",
  },
  {
    bgImage: card06,
    hoverBgImage: card006,
    name: "그루트",
  },
];

// Use the components within your app
const App = () => {
  return (
    <Container>
      <VideoBackground>
        <Video className="space" autoPlay muted loop playsInline>
          <source src={spaceVideo} />
        </Video>
      </VideoBackground>

      {cardData.map((card, index) => (
        <Border key={index}>
          <Card bgImage={card.bgImage} hoverBgImage={card.hoverBgImage}>
            <H2>{card.name}</H2>
          </Card>
        </Border>
      ))}
    </Container>
  );
};

export default App;
