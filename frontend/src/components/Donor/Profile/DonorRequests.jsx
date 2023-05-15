import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import profile from "../../../img/user.png";

const DonorRequests = () => {
  return (
    <Container fluid>
      <Row className="request-main-row">
        <Col>
          <h2>Donation Requests</h2>
          <br></br>

          {/* request */}
          <Row className="request-row">
            <Col md="2">
              <img src={profile} alt="profile" className="donor-request-img" />
            </Col>

            <Col className="mt-2">
              <h3>Rainbow Elder Care Home</h3>
              <h5>Requesting for Dhal 10Kg</h5>
              <p>just now</p>
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
          {/* request */}

          {/* request */}
          <Row className="request-row">
            <Col md="2">
              <img src={profile} alt="profile" className="donor-request-img" />
            </Col>

            <Col className="mt-2">
              <h3>Rainbow Elder Care Home</h3>
              <h5>Requesting for Dhal 10Kg</h5>
              <p>just now</p>
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
          {/* request */}

          {/* request */}
          <Row className="request-row">
            <Col md="2">
              <img src={profile} alt="profile" className="donor-request-img" />
            </Col>

            <Col className="mt-2">
              <h3>Rainbow Elder Care Home</h3>
              <h5>Requesting for Dhal 10Kg</h5>
              <p>just now</p>
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
          {/* request */}
        </Col>
      </Row>
    </Container>
  );
};

export default DonorRequests;
