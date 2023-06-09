import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./admin.recipe.style.css";
import axios from "axios";

export default function AddRecipe() {
  const [value, setValue] = useState({
    recipe_name: "",
    recipe_type: "",
    description: "",
  });

  const [mainIng, setMainIng] = useState({
    ingredient_name: "",
    qty: 0,
    type: "",
  });

  const [subIng, setSubIng] = useState({
    ingredient_name: "",
    qty: 0,
    type: "",
  });

  const [mState, mIngDispatch] = useReducer(mIngReducer, []);
  const [sState, sIngDispatch] = useReducer(sIngReducer, []);

  const handleMainIngSave = (e) => {
    e.preventDefault();
    mIngDispatch({ type: "add", payload: mainIng });
  };

  const handleSubIngSave = (e) => {
    e.preventDefault();
    sIngDispatch({ type: "add", payload: subIng });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/recipe/", {
        ...value,
        main_ingredients: [...mState],
        sub_ingredients: [...sState],
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Container>
      <Row>
        <Col className="p-5">
          <Row className="mb-4">
            <Col className="ps-4">
              <h3>
                <Link to="/admin/recipe">Recipe</Link>/Add Recipe
              </h3>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col className="ps-4 pe-4 border-end">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Beef Welington"
                    name="recipe_name"
                    onChange={(e) =>
                      setValue({
                        ...value,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recipe type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dessert"
                    name="recipe_type"
                    onChange={(e) =>
                      setValue({
                        ...value,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Recipe Instruction</Form.Label>
                  {/* <ReactQuill
                    theme="snow"
                    className="text-editor"
                    value={description}
                    onChange={(e) =>
                      setDescription(e.target.value)
                    }
                  /> */}
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    id="descriptionInput"
                    onChange={(e) =>
                      setValue({
                        ...value,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col md={3} className="ps-4 pe-4 border-end">
                <Row className="mb-3">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Main Ingrediants</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the ingrediant"
                        name="ingredient_name"
                        onChange={(e) =>
                          setMainIng({
                            ...mainIng,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col md={5}>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="0"
                          name="qty"
                          onChange={(e) =>
                            setMainIng({
                              ...mainIng,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="type"
                          onChange={(e) =>
                            setMainIng({
                              ...mainIng,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value="">Select type</option>
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="tea spoon">Tea spoon</option>
                          <option value="table spoon">Table spoon</option>
                          <option value="items">items</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button onClick={handleMainIngSave}>Save</Button>
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    {/*  */}
                    {mState.map((mState) => {
                      return (
                        <Row className="border-top mb-1 p-1">
                          <Col>{mState.ingredient_name}</Col>
                          <Col md={4}>
                            {mState.qty} {mState.type}
                          </Col>
                          <Col md={2}>
                            <Button
                              onClick={() =>
                                mIngDispatch({
                                  type: "delete",
                                  payload: mState.ingredient_name,
                                })
                              }
                            >
                              X
                            </Button>
                          </Col>
                        </Row>
                      );
                    })}
                    {/*  */}
                  </Col>
                </Row>
              </Col>
              <Col md={3} className="ps-4 pe-4">
                <Row className="mb-3">
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Sub Ingrediants</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Sub Ingrediant"
                        name="ingredient_name"
                        onChange={(e) =>
                          setSubIng({
                            ...subIng,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Row className="mb-3">
                      <Col>
                        <Form.Label>Qty</Form.Label>
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="0"
                          name="qty"
                          onChange={(e) =>
                            setSubIng({
                              ...subIng,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col>
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="type"
                          onChange={(e) =>
                            setSubIng({
                              ...subIng,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option value="">Select type</option>
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="tea spoon">Tea spoon</option>
                          <option value="table spoon">Table spoon</option>
                          <option value="items">items</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button onClick={handleSubIngSave}>Save</Button>
                  </Col>
                </Row>
                <Row className="p-2">
                  <Col>
                    {sState.map((sState) => {
                      return (
                        <Row className="border-top mb-1 p-1">
                          <Col>{sState.ingredient_name}</Col>
                          <Col md={4}>
                            {sState.qty} {sState.type}
                          </Col>
                          <Col md={2}>
                            <Button
                              onClick={() =>
                                sIngDispatch({
                                  type: "delete",
                                  payload: sState.ingredient_name,
                                })
                              }
                            >
                              X
                            </Button>
                          </Col>
                        </Row>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const mIngReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((state) => state.ingredient_name !== action.payload);

    default:
      return state;
  }
};

const sIngReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((state) => state.ingredient_name !== action.payload);

    default:
      return state;
  }
};
