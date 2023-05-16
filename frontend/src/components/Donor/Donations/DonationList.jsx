import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DonationList = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <h3>Donations</h3>
            <Col>
              <div class="donation-card mt-3">
                <p>2023.05.02</p>
                <h1>Suger</h1>
                <p class="donated-dry-food">2 Kg</p>
                <p>Exp date: 2025.05.02</p>
                <p>From: Miulesi Kulasekara</p>
                <p>
                  <Button className="request-btn mb-2">Request</Button>
                </p>
              </div>
            </Col>

            <Col>
              <div class="donation-card mt-3">
                <p>2023.05.02</p>
                <h1>Suger</h1>
                <p class="donated-dry-food">2 Kg</p>
                <p>Exp date: 2025.05.02</p>
                <p>From: Miulesi Kulasekara</p>
                <p>
                  <Button className="request-btn mb-2">Request</Button>
                </p>
              </div>
            </Col>

            <Col>
              <div class="donation-card mt-3">
                <p>2023.05.02</p>
                <h1>Suger</h1>
                <p class="donated-dry-food">2 Kg</p>
                <p>Exp date: 2025.05.02</p>
                <p>From: Miulesi Kulasekara</p>
                <p>
                  <Button className="request-btn mb-2">Request</Button>
                </p>
              </div>
            </Col>

            <Col>
              <div class="donation-card mt-3">
                <p>2023.05.02</p>
                <h1>Suger</h1>
                <p class="donated-dry-food">2 Kg</p>
                <p>Exp date: 2025.05.02</p>
                <p>From: Miulesi Kulasekara</p>
                <p>
                  <Button className="request-btn mb-2">Request</Button>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationList;
