import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonationItem from "./DonorDonations";
import DonorProfileSideBar from "./DonorProfileSideBar";
import { Outlet } from "react-router-dom";

const DonorProfile = () => {
  return (
    <Container fluid>
      {/* main row */}
      <Row className="ps-5 pe-5 pt-3">
        <Col className="service-sec p-4">
          <Row className="donor-prof-row">
            {/* Side bar */}
            <Col md={2} className="donor-prof-sidebar">
              <DonorProfileSideBar />
            </Col>

            {/* content */}
            <Col className="donor-prof-content">
              <Row className="ps-5 pe-5">
                <Outlet />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default DonorProfile;
