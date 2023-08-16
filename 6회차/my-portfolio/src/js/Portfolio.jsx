import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Container.css";
import { Container, Col, Row, Carousel } from "react-bootstrap";

const portfolios = [
  {
    id: 1,
    domain: "https://netflix-gozero.web.app/",
    img: "./netflix.png",
    alt: "First slide",
  },
  {
    id: 2,
    domain: "https://gazero-cart.web.app/",
    img: "./markm.png",
    alt: "Second slide",
  },
  {
    id: 3,
    domain: "https://weather-app-tau-tan.vercel.app/",
    img: "./weatherapi.png",
    alt: "Second slide",
  },
];

const Portfolio = () => {
  return (
    <>
      <Container id="portfolio">
        <Row className="py-5">
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Carousel className="w-50 m-auto">
            {portfolios.map((portfolio, index) => (
              <Carousel.Item key={index}>
                <a href={portfolio.domain}>
                  <img
                    className="d-block w-100"
                    style={{ height: "350px" }}
                    src={portfolio.img}
                    alt={portfolio.alt}
                  />
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
