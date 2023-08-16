import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Container.css";
import { Container, Col, Row, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container id="about">
        <Row className="py-5">
          <Col>
            <h2 className="heading">ABOUT GAYOUNG</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto">
          <Col className="text-end">
            <Image
              src="./danbi.jpeg"
              alt="프로필 사진"
              style={{ width: 220, marginTop: 90 }}
              roundedCircle
            />
          </Col>
          <Col>
            <h3 className="about__category"># GAZERO</h3>
            <p>
              <br />
              <br />
              경찰대학 치안대학원 행정학 석사학위취득 <br />
              빅데이터 협회장상 수상
              <br />
              멀티캠퍼스 풀스택과정 수료
              <br />
              NIPA 유데미 AI과정 진행중
              <br />
              <br />
              # 장점 <br />
              빠른 판단력 <br />
              성실한 태도 <br />
              <br />
              # 단점 WEAKNESS <br />
              무대 공포증 <br />
              여린 심성 <br />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
