import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";

export const Alldonations = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col>
              <Outlet/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
