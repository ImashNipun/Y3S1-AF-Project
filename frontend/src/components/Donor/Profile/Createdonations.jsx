import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//////////pass current date current date

const CreateDonations = () => {
  return (
    <Container fluid>
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-5">
          <Row className="m-5 bg-white">
            {/* Form column */}
            <Col md="6" className="colA-createdonations p-0">
              <Form className="donation-frm">
                <h2>Create a Donation</h2>

                {/* form lables */}

                {/* food*/}
                <Form.Label>Donate dry food</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicFood">
                  <Form.Control
                    type="text"
                    placeholder="Enter dry food"
                    required
                  />
                </Form.Group>

                <Row>
                  {/*quatity*/}
                  <Col>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                      <Form.Control
                        type="number"
                        placeholder="Enter Quantity"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/*unit*/}
                  <Col>
                    <Form.Label>Unit</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicUnit">
                      <Form.Select aria-label="Default select example">
                        <option value="Kg">Kg</option>
                        <option value="Leters">Leters</option>
                        <option value="Packets">Packets</option>
                        <option value="Botteled">Botteles</option>
                        <option value="Items">Items</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/*expire date*/}
                <Form.Label>Expire date</Form.Label>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  controlId="formBasicExpdate"
                >
                  <Form.Control
                    type="date"
                    placeholder="Expire date"
                    required
                  />
                </Form.Group>

                {/* button */}
                <div className="donation-save-btn">
                  <Button id="donatinSaveBtn">Save</Button>
                </div>
                <br></br>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Description"
                    required
                  />
                </Form.Group>

                {/*current date*/}

                <Form.Group
                  className="mb-3"
                  as={Col}
                  controlId="formBasicCurrentdate"
                >
                  <Form.Control type="hidden" required />
                </Form.Group>

                {/* button */}
                <div className="donation-submit-btn">
                  <Button type="submit" id="donatinSubmitBtn">
                    Create
                  </Button>
                </div>
                <br></br>
              </Form>
            </Col>
            {/* Form column */}

            {/* Donation list column column */}
            <Col className="colB-createdonations ps-5">
              <Row className="card-createdonations">
                <Col>Suger</Col>

                <Col>2 packets</Col>

                <Col>2023.05.02</Col>

                <Col>
                  <Button>Delete</Button>
                </Col>
              </Row>

              <Row className="card-createdonations">
                <Col>Suger</Col>

                <Col>2 packets</Col>

                <Col>2023.05.02</Col>

                <Col>
                  <Button>Delete</Button>
                </Col>
                {/* Donation list column column */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateDonations;
