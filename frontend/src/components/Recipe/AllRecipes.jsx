import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./AllRecipes.style.css";
import RecipeItem from "./RecipeItem";

export default function AllRecipes() {




  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <h4 className="mb-4">Recipe Suggestion</h4>
          <Row className="mb-4">
            <Col>
              <Form.Control
                type="search"
                placeholder="Enter the main ingrediant"
              />
            </Col>
          </Row>
          <Row>
            <Col md={2} className="bg-primary filter-sec">
              Filter sec
            </Col>
            <Col className="recipe-list overflow-scroll">
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
              <RecipeItem />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
