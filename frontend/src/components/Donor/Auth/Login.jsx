import "./style.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import loginImg from "../../../img/5.jpg";

const Login = () => {
  return (
    <Container
      fluid
    >
      <Row className="m-auto text-center" style={{width:"30%"}}>
        <Col className="fs-2 pt-5 pb-5" style={{fontWeight:"700"}}>PlatePal</Col>
      </Row>
      <Row>
        <Col>
          <Row className="login-row bg-white m-auto">
            <Col
              className="login-colA"
              md="5"
              style={{ backgroundImage: `url(${loginImg})` }}
            ></Col>

            <Col className="login-colB d-flex m-auto" md="6">
              <Form className="login-frm">
                <h2>Sign in</h2>

                {/* form lables */}

                {/* email */}
                <Form.Group
                  className="mb-3"
                  as={Col}
                  lmd="6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
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

                {/* button */}
                <div className="login-btn">
                  <Button type="submit" id="formLoginBtn">
                    Sign in
                  </Button>
                </div>

                <div className="login-text">
                  <small>
                    Don't have an account? <a href="/signup/donor">Sing up</a>
                  </small>
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
