import "./style.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import loginImg from "../../../img/5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [userDetails,setUserDetails] = useState({
    email:"",
    password:""
  });


  const handleSubmit = async(e) =>{

    e.preventDefault();
    axios.post("http://localhost:8000/api/auth/",userDetails).then((response) => {
      console.log(response);
      
      document.cookie = `userAuth = ${response.data.email}`;
      document.cookie = `token = ${response.accesstoken}`;




    });


  }

  return (
    <Container fluid>
      <Row className="m-auto text-center" style={{ width: "30%" }}>
        <Col className="fs-2 pt-5 pb-5" style={{ fontWeight: "700" }}>
          <Link className="text-decoration-none text-dark" to="/">
            PlatePal
          </Link>
        </Col>
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
              <Form className="login-frm" onSubmit={handleSubmit}>
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
                    name ="email"
                    onChange={(e)=>setUserDetails({...userDetails,[e.target.name]:e.target.value})}
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
                    name="password"
                    onChange={(e)=>setUserDetails({...userDetails,[e.target.name]:e.target.value})}
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
