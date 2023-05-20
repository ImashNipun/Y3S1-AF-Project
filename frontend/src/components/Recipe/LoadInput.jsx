import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function LoadInput(props) {

  const [mainIngName,setMainIngName] = useState("");

  return (
    <Container fluid className="position-fixed top-0 start-0 search-container" style={{visibility:`${props.visible}`}}>
      <Row className="search-column">
        <Col className="">
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="mainIngrediant"
                onChange={(e)=>setMainIngName(e.target.value)}
                placeholder="Enter the main ingrediant"
              />
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <Col>
              <Button className="clickBtn" onClick={()=>props.handleFind(mainIngName)}>Find</Button>
            </Col>
            <Col>
              <Button  className="clickBtn" onClick={props.handleClose}>Cancle</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
