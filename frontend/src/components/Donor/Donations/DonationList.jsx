import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donations")
      .then((res) => {
        console.log(res.data);
        return setDonations(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <h3>Donations</h3>

            <Col>

            <Row md={4}>
            {donations.map((donations) => {
              return (
                <Col>
                  <div class="donation-card mt-3">
                    <p>{donations.currentdate}</p>
                    <h1>{donations.food}</h1>
                    <p class="donated-dry-food">
                      {donations.quantity}
                      {donations.unit}
                    </p>
                    <p>Exp date: {donations.expiredate}</p>
                    <p>From: {donations.donorname}</p>
                    <p>
                      <Button className="request-btn mb-2">Request</Button>
                    </p>
                  </div>
                </Col>
              );
            })}
            </Row>
            
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationList;
