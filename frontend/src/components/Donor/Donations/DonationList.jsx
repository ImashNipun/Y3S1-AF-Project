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

  const createRequest = (value) => {
    axios
      .post("http://localhost:8000/api/requests", {
        organization: "Mallika elder house",
        donor: value.donorid,
        donation: value._id,
        food: value.food,
        quantity: value.quantity,
        unit: value.unit,
        time: new Date(),
      })
      .then((res) => {
        console.log(res.data);
        alert("Request is sended succsessfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = async (value) => {
    await axios
      .patch("http://localhost:8000/api/donations/" + value._id, {
        status: "Requested",
      })
      .then((res) => {
        console.log(res.data);
        createRequest(value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <h3>Donations</h3>

            <Col>
              <Row md={4}>
                {donations.map((donations) => {
                  if (donations.status == "Accepted") {
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
                            <Button
                              onClick={() => handleUpdate(donations)}
                              className="request-btn mb-2"
                            >
                              Request
                            </Button>
                          </p>
                        </div>
                      </Col>
                    );
                  }
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
