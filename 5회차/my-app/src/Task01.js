import React, { useState } from "react";
import axios from "axios";

const Task01 = () => {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState([]);

  // const countImages = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://dog.ceo/api/breeds/image/random/${count}`
  //     );

  //     setImages(response.data.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        onClick={async () => {
          try {
            const response = await axios.get(
              `https://dog.ceo/api/breeds/image/random/${count}`
            );

            setImages(response.data.message);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        강아지
      </button>
      <div>
        <br />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`강아지 랜덤 ${index}`}
            width="300"
            height="300"
          />
        ))}
      </div>
    </div>
  );
};

export default Task01;
