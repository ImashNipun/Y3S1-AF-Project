import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./AllRecipes.style.css";
import RecipeItem from "./RecipeItem";
import LoadInput from "./LoadInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AllRecipes() {
  const navigation = useNavigate();

  const [recipe, setRecipe] = useState([]);
  const [visible, SetVisible] = useState("visible");

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:8000/api/recipe/`).then((response) => {
        setRecipe(response.data);
      });
    };
    fetchData();
    SetVisible("hidden");
    console.log(recipe);
  }, []);

  const handleClose = () => {
    navigation(-1);
  };

  return (
    <Container fluid>
      {/* <LoadInput handleClose={handleClose}  handleFind={handleFind} visible={visible}/> */}
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
            <Col
              md={2}
              className="filter-sec"
              style={{ backgroundColor: "rgb(216, 234, 255)" }}
            >
              Filter sec
            </Col>

            <Col className="recipe-list overflow-auto">
              {recipe
                ? recipe.map((recipe) => (
                    <RecipeItem key={recipe._id} recipe={recipe} />
                  ))
                : null}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
