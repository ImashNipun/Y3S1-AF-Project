import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const CreateDonationError = () => {
  const id = "6465bcdaf92f0b983050cb4e";
  return (
    <Container fluid style={{ backgroundColor: "white", height: "100vh" }}>
      <Row>
        <Col md="7">
          <div className="errorText">
            <h1 style={{ color: "red" }}>Oops!</h1>
            <br></br>
            <h3>You can not create this donation....</h3>
            <br></br>

            <h6>
              The time it takes for dry food to expire is quick. The{" "}
              <b>expiry date</b> of the dry food you are ready to donate should
              be <b>at least seven days from the date of donation.</b>
            </h6>
            <br></br>

            <h6>Please try again with another dry food.</h6>
            <br></br>

            <h5>Thank You for your donation!</h5>
            <br></br>

            <div className="btndiv">
              <Button className="btn-left" href={`/create/donations/${id}`}>
                Add another donation
              </Button>
              <Button className="btn-right" href={`/donor/profile/${id}`}>
                Back
              </Button>
            </div>
          </div>
        </Col>

        <Col>
          <div className="errorImg"></div>
        </Col>
      </Row>
    </Container>
  );
};
