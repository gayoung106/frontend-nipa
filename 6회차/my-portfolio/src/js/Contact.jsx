import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Container.css";
import { Container, Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Row className="py-5">
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center  px-0">
            <h3 style={{ background: "#445069", margin: 0, padding: 3 }}>
              MAIL
            </h3>
            <p style={{ margin: 0, padding: 10 }}>soongin95@naver.com</p>
          </Col>
          <Col className="text-center  px-0">
            <h3 style={{ background: "#445069", margin: 0, padding: 3 }}>
              PHONE
            </h3>
            <p style={{ margin: 0, padding: 10 }}>010-1234-1346</p>
          </Col>
          <Col className="text-center  px-0">
            <h3 style={{ background: "#445069", margin: 0, padding: 3 }}>
              SNS
            </h3>
            <p style={{ margin: 0, padding: 10 }}>@orezag_</p>
          </Col>
        </Row>
        <Row className="justify-content-center py-5">
          Copyright &copy; gazero. All Right Reserved.
        </Row>
      </Container>
    </>
  );
};

export default Contact;
