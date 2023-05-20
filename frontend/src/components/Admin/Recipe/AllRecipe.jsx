import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecipeRaw from "./RecipeRaw";

export default function AllRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/recipe/").then((response) => {
      console.log(response);
      setRecipes(response.data);
    });
  }, [isDeleted]);

  const handleDelete = (id) => {
    var isDelete = confirm("Are you sure you want to delete");

    if (isDelete) {
      axios
        .delete(`http://localhost:8000/api/recipe/${id}`)
        .then((response) => {
          setIsDeleted(true);
        });
    }
  };

  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col>
              <h3>All Recipe</h3>
            </Col>
            <Col>
              <Link
                to="/admin/recipe/add-recipe"
                className="float-end btn btn-primary"
              >
                Add a Recipe
              </Link>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Control type="search" placeholder="Search..." />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Recipe type</th>
                    <th>Ingrediant Count</th>
                    <th>Main ingrediants</th>
                    <th>Sub ingrediants</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipes) => (
                    <RecipeRaw
                      handleDelete={handleDelete}
                      data={recipes}
                      key={recipes._id}
                    />
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
