import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function RecipeItem(props) {

  console.log(props);
  
  return (
    <Row className="ps-2 pe-2 pb-2">
      <Col>
        <Row className="p-2 text-dark border-bottom" >
          <Col className="">
            <Row>
              <Col className="mb-4">
                {props.recipe.recipe_name}
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">Ingrediant Count - {props.recipe.main_ingredients.length + props.recipe.sub_ingredients.length}</Col>
              <Col className="mb-2">Recipe type - {props.recipe.recipe_type}</Col>
            </Row>
          </Col>

          <Col md={2}>
            <Button className="mb-2" >View Recipe</Button>
            <Button className="border border-primary text-dark" style={{backgroundColor:"transparent"}}>
              Add to Favourit
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
