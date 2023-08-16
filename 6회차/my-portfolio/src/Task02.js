import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Carousel } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

const Task02 = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/3"
      );

      setImages(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={fetchImages}>이미지 불러오기 </Button>
      <Carousel className="w-50">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 "
              src={image}
              alt={`강아지 랜덤 ${index}`}
            />
            <Carousel.Caption>
              <h3> {index + 1}번째 슬라이드다 !</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Task02;
