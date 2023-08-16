import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState([]);

  return (
    <>
      <button
        onClick={async () => {
          const response = await axios.get(
            "https://dog.ceo/api/breeds/image/random/3"
          );
          setImage(response.data.message);
        }}
      >
        이미지 가져오기
      </button>
      {image ? (
        <Carousel className="w-50">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image[1]}
              alt="First slide"
              width="80px"
              height="90px"
            />
            <Carousel.Caption>
              <h3>첫 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image[2]} alt="Second slide" />

            <Carousel.Caption>
              <h3>두 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image[3]} alt="Third slide" />

            <Carousel.Caption>
              <h3>세 번째 슬라이드</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ) : (
        ""
      )}
    </>
  );
}
