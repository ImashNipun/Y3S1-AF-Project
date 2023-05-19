import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import signupImg from "../../../img/1.jpg";
import { Link } from "react-router-dom";

const Donorsignup = () => {
  return (
    <Container
      fluid
      className="d-flex-col align-items-center "
      style={{ height: "100vh" }}
    >
      <Row className="m-auto text-center" style={{ width: "30%" }}>
        <Col className="fs-2 pt-5 pb-4" style={{ fontWeight: "700" }}>
          <Link className="text-decoration-none text-dark" to="/">PlatePal</Link>
        </Col>
      </Row>
      <Row
        className="signup-row m-auto bg-white"
        style={{ borderRadius: "15px" }}
      >
        <Col
          className="signup-colA"
          md="6"
          style={{
            backgroundImage: `url(${signupImg})`,
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        ></Col>

        <Col className="signup-colB" md="6">
          <Form className="signup-frm">
            <h2>Sign up - Donor</h2>

            {/* form lables */}

            {/* name */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>

            {/* email */}
            <Row>
              <Form.Group
                className="mb-3"
                as={Col}
                lmd="6"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              {/* password */}
              <Form.Group
                className="mb-3"
                as={Col}
                lmd="6"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </Form.Group>
            </Row>

            {/* address */}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" required />
            </Form.Group>

            {/* Location */}
            <Form.Group className="mb-3" controlId="formBasicLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" required />
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
                  pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                />
              </Form.Group>
            </Row>

            {/* button */}
            <div className="signup-btn">
              <Button type="submit" id="formSignupBtn">
                Sign up
              </Button>
            </div>

            <div className="signup-text">
              <small>
                Already have an account? <a href="/login">Sing in</a>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Donorsignup;
