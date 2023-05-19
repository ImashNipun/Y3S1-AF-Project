import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import profile from "../../../img/user.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DonorRequests = () => {
  const id = "6465bcdaf92f0b983050cb4e";

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/requests/byadonor/" + id)
      .then((res) => {
        console.log(res.data);
        setRequests(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row className="request-main-row">
        <Col>
          <h2>Donation Requests</h2>
          <br></br>

          {requests.map((requests, index) => {
            return (
              <Row className="request-row">
                <Col md="2">
                  <img
                    src={profile}
                    alt="profile"
                    className="donor-request-img"
                  />
                </Col>

                <Col className="mt-2">
                  <h3>{requests.organization}</h3>
                  <h5>Requesting for {requests.food} {requests.quantity}{requests.unit}</h5>
                  <p>{requests.time}</p>
                </Col>

                <Col md="2">
                  <Button className="request-btn" variant="primary">
                    Confirm
                  </Button>
                </Col>

                <Col md="2">
                  <Button className="request-btn" variant="danger">
                    Delete
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default DonorRequests;
