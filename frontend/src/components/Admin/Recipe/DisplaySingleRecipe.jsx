import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DisplaySingleRecipe() {
  const [aRecipe, setARecipe] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/api/recipe/${params.rid}`)
        .then((response) => {
          //console.log(response);
          setARecipe(response.data);
        });
    };
    fetchData();
  }, []);

  console.log(aRecipe);

  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col>
              <h3>Recipe / {aRecipe.recipe_name}</h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fs-4">How to make?</p>
              <p>{aRecipe.description}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fs-4">Ingrediants</p>
              <ul>
                {aRecipe.main_ingredients ? aRecipe.main_ingredients.map((ing) => {
                  return <li>{ing.ingredient_name} - {ing.qty}{ing.type}</li>;
                }):<li>There is no Main Ingrediants</li>}
                {aRecipe.sub_ingredients ? aRecipe.sub_ingredients.map((ing) => {
                  return <li>{ing.ingredient_name} - {ing.qty}{ing.type}</li>;
                }):<li>There is no Main Ingrediants</li>}
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
