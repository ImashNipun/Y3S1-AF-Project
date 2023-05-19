import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function LoadInput() {
  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <Form.Control type="text" name="mainIngrediant" placeholder="Enter the main ingrediant" />

          <Button>Find</Button>
          <Button>Cancle</Button>
        </Col>
      </Row>
    </Container>
  );
}
