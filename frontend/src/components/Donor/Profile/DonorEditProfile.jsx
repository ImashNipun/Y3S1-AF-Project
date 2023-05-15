import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DonorEditProfile = () => {
  return (
    <Container fluid>
      <Row className="donor-edit-prof-row">
        <Col>
          <Row>
            <h2>Edit profile</h2>
          </Row>

          <br></br>

          <Row>
            <Form>
              {/* form lables */}

              <Row>
                {/* password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value="123213123"
                    required
                  />
                </Form.Group>
              </Row>

              {/* address */}
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value="No: 18/A/1, Rilawala, Polgasowita"
                  required
                />
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value="Piliyandala"
                  required
                />
              </Form.Group>

              {/* phone 1 */}
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneA"
                >
                  <Form.Label>Phone number 1</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223"
                    value="94 77 111 2223"
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                    required
                  />
                </Form.Group>

                {/* phone 2 */}
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneB"
                >
                  <Form.Label>Phone number 2</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223(Optional)"
                    value="94 77 111 2223"
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                  />
                </Form.Group>
              </Row>

              {/* button */}
              <div className="edit-btn">
                <Button type="submit" id="formEditBtn">
                  Update
                </Button>
              </div>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonorEditProfile;
